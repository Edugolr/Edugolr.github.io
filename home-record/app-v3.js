const HOME_RECORD_BUILD = "2026-09-27.3";
const STORAGE_KEY = "home-record-v2";
const BASE = "https://kartportalen.boras.se/server/rest/services";

const ENDPOINTS = {
  addressGeocoder: `${BASE}/adresser_fb_geofir/GeocodeServer/findAddressCandidates`,
  address: `${BASE}/Adresser/MapServer/0/query`,
  property: `${BASE}/Fastighetsytor_extern/MapServer/9/query`,
  building: `${BASE}/Grundinformation/MapServer/378/query`,
};

const initialState = () => ({
  address: "",
  collectedAt: null,
  publicClaims: [],
  ownerClaims: [],
  sources: [],
  primaryBoarea: null,
  raw: {},
});

let state = loadState();
let conflictSelection = null;

const $ = (id) => document.getElementById(id);
const els = {
  form: $("collectForm"), address: $("addressInput"), btn: $("collectBtn"), status: $("collectorStatus"),
  headline: $("collectorHeadline"), detail: $("collectorDetail"), steps: $("collectorSteps"), summary: $("summary"),
  tabs: $("tabs"), views: $("views"), empty: $("emptyState"), foundCount: $("foundCount"), ownerCount: $("ownerCount"),
  unknownCount: $("unknownCount"), resolveList: $("resolveList"), recordGrid: $("recordGrid"), historyList: $("historyList"),
  sourceList: $("sourceList"), recordTitle: $("recordTitle"), nextTitle: $("nextActionTitle"), nextText: $("nextActionText"),
  ownerForm: $("ownerClaimForm"), claimType: $("claimType"), claimValue: $("claimValue"), reset: $("resetBtn"),
  conflictDialog: $("conflictDialog"), conflictOptions: $("conflictOptions"), saveConflict: $("saveConflictBtn"),
};

function loadState() {
  try { return { ...initialState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") }; }
  catch { return initialState(); }
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); render(); }
function escapeHtml(value="") { return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c])); }
function sqlEscape(value="") { return String(value).replace(/'/g, "''"); }
function shortAddress(value="") { return value.split(",")[0].trim(); }
function addressVariants(value="") {
  const raw = String(value).trim();
  const variants = [raw];
  const beforeComma = raw.split(",")[0].trim();
  if (beforeComma && beforeComma !== raw) variants.push(beforeComma);
  const streetMatch = raw.match(/^(.+?\s+\d+[A-Za-z]?)\b/u);
  if (streetMatch?.[1]) variants.push(streetMatch[1].trim());
  return [...new Set(variants.filter(Boolean))];
}
function nowLabel() { return new Intl.DateTimeFormat("sv-SE", { dateStyle:"medium", timeStyle:"short" }).format(new Date()); }
function formatArea(value) { return Number.isFinite(Number(value)) ? `${Math.round(Number(value)).toLocaleString("sv-SE")} m²` : "—"; }

function jsonp(url, params, timeout=12000) {
  return new Promise((resolve, reject) => {
    const callback = `__hr_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const timer = setTimeout(() => cleanup(new Error("Källan svarade inte i tid.")), timeout);
    const cleanup = (error, data) => {
      clearTimeout(timer); script.remove();
      try { delete window[callback]; } catch {}
      error ? reject(error) : resolve(data);
    };
    window[callback] = data => {
      if (data?.error) cleanup(new Error(data.error.message || "ArcGIS-fel"));
      else cleanup(null, data);
    };
    const qs = new URLSearchParams({ ...params, f:"json", callback });
    script.src = `${url}?${qs}`;
    script.onerror = () => cleanup(new Error("Kunde inte nå Borås stads GIS-tjänst."));
    document.head.appendChild(script);
  });
}

function setStep(name, mode) {
  const node = els.steps.querySelector(`[data-step="${name}"]`);
  node.classList.remove("active","done","error");
  if (mode) node.classList.add(mode);
}
function resetSteps(){ ["address","property","building"].forEach(s => setStep(s, null)); }
function setCollector(mode, headline, detail) {
  els.status.className = `collector-status is-${mode}`;
  els.headline.textContent = headline; els.detail.textContent = detail;
}
function setLoading(value) { els.btn.disabled = value; els.btn.classList.toggle("is-loading", value); }

async function collect(address) {
  resetSteps(); setLoading(true); state.address = address; state.publicClaims=[]; state.sources=[]; state.raw={};
  try {
    setStep("address","active"); setCollector("running","Steg 1 av 3 — hittar adressen",shortAddress(address));
    const needles = addressVariants(address);
    let addressData = null;
    let addressCandidate = null;

    for (const needle of needles) {
      const candidateData = await jsonp(ENDPOINTS.addressGeocoder, {
        SingleLine: needle,
        outFields: "*",
        outSR: "3008",
        maxLocations: "8",
      });

      const candidate = (candidateData.candidates || [])
        .filter(item => Number.isFinite(Number(item?.location?.x)) && Number.isFinite(Number(item?.location?.y)))
        .sort((a,b) => (Number(b.score)||0) - (Number(a.score)||0))[0];

      if (candidate) {
        addressData = candidateData;
        addressCandidate = candidate;
        break;
      }
    }

    if (!addressCandidate) {
      for (const needle of needles) {
        const fallbackData = await jsonp(ENDPOINTS.address, {
          where:`BELADRESS2='${sqlEscape(needle)}'`,
          outFields:"ADRESSPLATS_ID,BELADRESS2",
          returnGeometry:"true",
          outSR:"3008"
        });
        const fallbackFeature = (fallbackData.features || []).find(feature =>
          Number.isFinite(Number(feature?.geometry?.x)) && Number.isFinite(Number(feature?.geometry?.y))
        );
        if (fallbackFeature) {
          addressCandidate = {
            address: fallbackFeature.attributes?.BELADRESS2 || needle,
            location: fallbackFeature.geometry,
            score: 100,
          };
          addressData = fallbackData;
          break;
        }
      }
    }

    if (!addressCandidate) throw new Error(`Ingen användbar kartposition hittades för “${address}”. Prova bara gatuadress och nummer.`);

    const point = {
      x: Number(addressCandidate.location.x),
      y: Number(addressCandidate.location.y),
    };
    state.raw.address = addressData; setStep("address","done");
    state.publicClaims.push(claim("address","Adress",addressCandidate.address || needle,"FACT","Borås stad · Adressgeokodare"));
    state.sources.push(source("address","Borås stad · Adressgeokodare",ENDPOINTS.addressGeocoder,"Publik adressökning med koordinat",{
      features: [addressCandidate]
    }));

    setStep("property","active"); setCollector("running","Steg 2 av 3 — identifierar fastigheten","Slår adresspunkten mot fastighetsytorna.");
    const propertyData = await jsonp(ENDPOINTS.property, {
      geometry:`${point.x},${point.y}`, geometryType:"esriGeometryPoint", inSR:"3008", spatialRel:"esriSpatialRelIntersects",
      outFields:"area,fastighetsbeteckning,rk_fastighet,rk_omrade", returnGeometry:"false"
    });
    state.raw.property = propertyData;
    if (propertyData.features?.length) {
      const a = propertyData.features[0].attributes;
      const designation = a.fastighetsbeteckning || a.rk_fastighet || "Okänd beteckning";
      state.publicClaims.push(claim("property","Fastighet",designation,"FACT","Borås stad · Fastighetsytor"));
      if (a.area != null) state.publicClaims.push(claim("plotArea","Fastighetsyta",formatArea(a.area),"FACT","Borås stad · Fastighetsytor",Number(a.area)));
    }
    state.sources.push(source("property","Borås stad · Fastighetsytor",ENDPOINTS.property,"Dagligen uppdaterat fastighetslager",propertyData));
    setStep("property","done");

    setStep("building","active"); setCollector("running","Steg 3 av 3 — läser byggnadsregistret","Letar byggnad nära adresspunkten.");
    const buildingData = await jsonp(ENDPOINTS.building, {
      geometry:`${point.x},${point.y}`, geometryType:"esriGeometryPoint", inSR:"3008", spatialRel:"esriSpatialRelIntersects", distance:"35", units:"esriSRUnit_Meter",
      outFields:"KOM_BID,BYGGTYPTXT,TYPBEBYGGTXT,AR_NYBYGG,AR_OMBYGG,TOTBOARREA,TOTLOKAREA,Byggnadsrapport", returnGeometry:"false"
    });
    state.raw.building = buildingData;
    if (buildingData.features?.length) {
      const candidates = buildingData.features.map(f=>f.attributes).filter(Boolean);
      candidates.sort((a,b)=>(Number(b.TOTBOARREA)||0)-(Number(a.TOTBOARREA)||0));
      const b = candidates[0];
      if (b.AR_NYBYGG) state.publicClaims.push(claim("year","Nybyggnadsår",String(b.AR_NYBYGG),"FACT","Borås stad · Byggnader LM",Number(b.AR_NYBYGG)));
      if (b.BYGGTYPTXT || b.TYPBEBYGGTXT) state.publicClaims.push(claim("buildingType","Byggnadstyp",b.BYGGTYPTXT || b.TYPBEBYGGTXT,"FACT","Borås stad · Byggnader LM"));
      if (b.TOTBOARREA) state.publicClaims.push(claim("boarea","Boarea",`${b.TOTBOARREA} m²`,"FACT","Borås stad · Byggnader LM",Number(b.TOTBOARREA)));
      if (b.AR_OMBYGG) state.publicClaims.push(claim("remodelYear","Ombyggnadsår",String(b.AR_OMBYGG),"FACT","Borås stad · Byggnader LM",Number(b.AR_OMBYGG)));
      if (b.TOTLOKAREA) state.publicClaims.push(claim("localArea","Lokalarea",`${b.TOTLOKAREA} m²`,"FACT","Borås stad · Byggnader LM",Number(b.TOTLOKAREA)));
    }
    state.sources.push(source("building","Borås stad · Byggnader LM",ENDPOINTS.building,"Kommunens byggnadsregister",buildingData));
    setStep("building","done"); state.collectedAt = new Date().toISOString();
    saveState();
    const facts = state.publicClaims.length;
    setCollector("success",`Klart — ${facts} registerfynd`,`Insamlingen avslutades ${nowLabel()}. Inga värden doldes eller sammanfattades bort.`);
  } catch (error) {
    const active = els.steps.querySelector(".active"); if (active) { active.classList.remove("active"); active.classList.add("error"); }
    setCollector("error","Insamlingen stannade",`${error.message || String(error)} · build ${HOME_RECORD_BUILD}`);
    render();
  } finally { setLoading(false); }
}

function claim(key,label,value,kind,sourceName,numeric=null){ return {id:crypto.randomUUID?.()||`${Date.now()}-${Math.random()}`,key,label,value,kind,source:sourceName,numeric,createdAt:new Date().toISOString()}; }
function source(id,name,url,description,raw){ return {id,name,url,description,featureCount:raw?.features?.length??0,checkedAt:new Date().toISOString()}; }
function ownerLabel(type){ return ({boarea:"Boarea",roof:"Tak",drainage:"Dränering",windows:"Fönster",heating:"Värmesystem",other:"Annat"})[type]||type; }
function ownerKey(type){ return type === "boarea" ? "boarea" : `owner:${type}`; }
function parseBoarea(text){ const n=String(text).replace(",",".").match(/\d+(?:\.\d+)?/); return n?Number(n[0]):null; }

function issues() {
  const out=[];
  const pubArea = state.publicClaims.find(c=>c.key==="boarea" && Number.isFinite(c.numeric));
  const ownerArea = [...state.ownerClaims].reverse().find(c=>c.key==="boarea" && Number.isFinite(c.numeric));
  if (pubArea && ownerArea && Math.abs(pubArea.numeric-ownerArea.numeric)>=1) out.push({id:"boarea-conflict",title:"Boarean skiljer sig",text:`Registret säger ${pubArea.value}, medan din uppgift är ${ownerArea.value}. Båda ligger kvar tills konflikten är styrkt.`,action:"Hantera konflikt",type:"conflict"});
  if (!state.publicClaims.some(c=>c.key==="year")) out.push({id:"year",title:"Byggår saknas",text:"Vi hittade inget nybyggnadsår i byggnadsregistret för den valda adressen.",type:"unknown"});
  if (!state.ownerClaims.some(c=>c.key==="owner:roof")) out.push({id:"roof",title:"Takets historik saknas",text:"Lägg till när taket senast lades om och koppla evidens senare.",type:"unknown"});
  if (!state.ownerClaims.some(c=>c.key==="owner:drainage")) out.push({id:"drainage",title:"Dränering är okänd",text:"En viktig uppgift vid framtida försäljning. Ägaruppgift är bättre än tomt fält — men markeras som påstående.",type:"unknown"});
  if (!state.publicClaims.some(c=>c.key==="property")) out.push({id:"property",title:"Fastigheten kunde inte matchas",text:"Adresspunkten gav ingen träff i fastighetslagret.",type:"unknown"});
  return out;
}

function render(){
  if (state.address && !els.address.value) els.address.value=state.address;
  const hasData = state.publicClaims.length || state.ownerClaims.length;
  els.summary.hidden=!hasData; els.tabs.hidden=!hasData; els.views.hidden=!hasData; els.empty.hidden=hasData;
  if (!hasData) return;
  const currentIssues=issues(); els.foundCount.textContent=state.publicClaims.length; els.ownerCount.textContent=state.ownerClaims.length; els.unknownCount.textContent=currentIssues.length;
  els.recordTitle.textContent=state.address||"Bostad";
  renderResolve(currentIssues); renderRecord(); renderHistory(); renderSources();
}
function renderResolve(items){
  if (!items.length){ els.resolveList.innerHTML=`<article class="issue-card"><div><span class="badge fact">KLART JUST NU</span><h3>Inga kända konflikter</h3><p>Det betyder inte att bostaden är fullständigt dokumenterad — bara att vi inte har identifierat en konkret konflikt ännu.</p></div></article>`; els.nextTitle.textContent="Fördjupa evidensen"; els.nextText.textContent="Nästa steg är att styrka de viktigaste ägaruppgifterna med dokument eller tredjepartskällor."; return; }
  els.nextTitle.textContent=items[0].title; els.nextText.textContent=items[0].text;
  els.resolveList.innerHTML=items.map(i=>`<article class="issue-card"><div><span class="badge ${i.type==='conflict'?'claim':'unknown'}">${i.type==='conflict'?'KONFLIKT':'UNKNOWN'}</span><h3>${escapeHtml(i.title)}</h3><p>${escapeHtml(i.text)}</p></div>${i.type==='conflict'?`<button class="button ghost" data-action="boarea-conflict">${i.action}</button>`:""}</article>`).join("");
}
function renderRecord(){
  const all=[...state.publicClaims,...state.ownerClaims];
  els.recordGrid.innerHTML=all.length?all.map(c=>`<article class="record-card"><div class="label">${escapeHtml(c.label)}</div><div class="value">${escapeHtml(c.value)}</div><div><span class="badge ${c.kind.toLowerCase()}">${c.kind}</span></div><div class="provenance">Källa: ${escapeHtml(c.source)}${c.key==='boarea'&&state.primaryBoarea===c.id?' · Primär tills vidare':''}</div></article>`).join(""):`<p class="muted">Inga uppgifter ännu.</p>`;
}
function renderHistory(){
  const items=[];
  state.publicClaims.filter(c=>["year","remodelYear"].includes(c.key)).forEach(c=>items.push({sort:c.numeric||0,year:c.value,title:c.label,text:c.source,kind:"FACT"}));
  state.ownerClaims.forEach(c=>{ const match=c.value.match(/(?:19|20)\d{2}/); items.push({sort:match?Number(match[0]):9998,year:match?match[0]:"Ägaruppgift",title:c.label,text:c.value,kind:"CLAIM"}); });
  items.sort((a,b)=>a.sort-b.sort);
  els.historyList.innerHTML=items.length?items.map(i=>`<div class="timeline-item"><div class="year">${escapeHtml(i.year)}</div><h3>${escapeHtml(i.title)} <span class="badge ${i.kind.toLowerCase()}">${i.kind}</span></h3><p>${escapeHtml(i.text)}</p></div>`).join(""):`<p class="muted">Historiken växer när registerfynd och ägaruppgifter läggs till.</p>`;
}
function renderSources(){
  els.sourceList.innerHTML=state.sources.length?state.sources.map(s=>`<article class="source-card"><span class="badge fact">PUBLIK KÄLLA</span><h3>${escapeHtml(s.name)}</h3><p>${escapeHtml(s.description)} · ${s.featureCount} träff${s.featureCount===1?'':'ar'}.</p><div class="raw">${escapeHtml(s.url)}</div></article>`).join(""):`<p class="muted">Källorna dyker upp efter insamling.</p>`;
}
function showConflict(){
  const pub=state.publicClaims.find(c=>c.key==="boarea"&&Number.isFinite(c.numeric)); const owner=[...state.ownerClaims].reverse().find(c=>c.key==="boarea"&&Number.isFinite(c.numeric));
  if(!pub||!owner)return;
  els.conflictOptions.innerHTML=`<label class="choice"><input type="radio" name="areaChoice" value="${pub.id}" ${state.primaryBoarea===pub.id?'checked':''}><div><strong>${escapeHtml(pub.value)}</strong><div class="muted">${escapeHtml(pub.source)} · FACT</div></div></label><label class="choice"><input type="radio" name="areaChoice" value="${owner.id}" ${state.primaryBoarea===owner.id?'checked':''}><div><strong>${escapeHtml(owner.value)}</strong><div class="muted">${escapeHtml(owner.source)} · CLAIM</div></div></label><label class="choice"><input type="radio" name="areaChoice" value="unresolved" ${!state.primaryBoarea?'checked':''}><div><strong>Låt konflikten vara olöst</strong><div class="muted">Bäst om ingen källa ännu är tillräckligt stark.</div></div></label>`;
  conflictSelection=state.primaryBoarea||"unresolved"; els.conflictDialog.showModal();
}

els.form.addEventListener("submit",e=>{e.preventDefault(); const value=els.address.value.trim(); if(value) collect(value);});
els.ownerForm.addEventListener("submit",e=>{e.preventDefault(); const type=els.claimType.value; const value=els.claimValue.value.trim(); if(!value)return; const numeric=type==="boarea"?parseBoarea(value):null; state.ownerClaims.push(claim(ownerKey(type),ownerLabel(type),value,"CLAIM","Ägare",numeric)); els.claimValue.value=""; saveState();});
els.reset.addEventListener("click",()=>{if(!confirm("Rensa Home Record-data som sparats lokalt i den här webbläsaren?"))return; localStorage.removeItem(STORAGE_KEY); state=initialState(); els.address.value=""; resetSteps(); setCollector("idle","Redo att samla","Vi frågar endast publika GIS-lager från Borås stad."); render();});
els.tabs.addEventListener("click",e=>{const btn=e.target.closest(".tab");if(!btn)return; document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x===btn)); document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.dataset.view===btn.dataset.tab));});
els.resolveList.addEventListener("click",e=>{if(e.target.closest('[data-action="boarea-conflict"]'))showConflict();});
els.conflictOptions.addEventListener("change",e=>{if(e.target.name==="areaChoice") conflictSelection=e.target.value;});
els.conflictDialog.addEventListener("close",()=>{if(els.conflictDialog.returnValue==="default"){state.primaryBoarea=conflictSelection==="unresolved"?null:conflictSelection;saveState();}});

const queryAddress=new URLSearchParams(location.search).get("address"); if(queryAddress&&!state.address){els.address.value=queryAddress;}
render();
