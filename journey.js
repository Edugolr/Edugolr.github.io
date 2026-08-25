(()=>{
  const economy=document.getElementById('ekonomi');
  if(!economy||document.getElementById('systemresa')) return;

  const section=document.createElement('section');
  section.className='section journeySection';
  section.id='systemresa';
  section.innerHTML=`<div class="wrap">
    <span class="eyebrow">SYSTEMRESA • QA-VY</span>
    <h2>Välj en resa genom hela modellen</h2>
    <p class="intro">Följ barnet och omsorgsarbetaren genom reformen. Lägg på relevanta händelser för att se vilket system som tar ansvar, var modellen är stabil och var vi fortfarande har riktiga designluckor. Mycket sällsynta edge cases hålls utanför normalvyn.</p>
    <div class="journeyShell">
      <div class="journeyControls">
        <label class="journeyLabel" for="journeyType">Grundresa</label>
        <select id="journeyType" class="journeySelect">
          <option value="couple">Två arbetande föräldrar</option>
          <option value="single">Ensamstående arbetande</option>
          <option value="unemployed">Arbetslös före födseln</option>
          <option value="self">Egenföretagare</option>
          <option value="adoption">Adoption</option>
          <option value="twins">Tvillingar / flerbarn</option>
        </select>
        <fieldset class="journeyEvents">
          <legend>Lägg på händelser</legend>
          <label><input type="checkbox" id="eventSick"> Omsorgsarbetaren blir sjuk</label>
          <label><input type="checkbox" id="eventSlot"> Förskoleplatsen är inte klar</label>
          <label><input type="checkbox" id="eventHoliday"> Ettårsbrytningen träffar jul/stängning</label>
        </fieldset>
      </div>
      <div class="journeySummary">
        <span>Aktuell resa</span>
        <strong id="journeyTitle"></strong>
        <p id="journeyIntro"></p>
        <div id="journeyOutcome" class="journeyOutcome"></div>
      </div>
    </div>
    <div class="journeyMeta">
      <div><span class="journeyDot fixed"></span><b>Fast princip</b></div>
      <div><span class="journeyDot research"></span><b>Under prövning</b></div>
      <div><span class="journeyDot open"></span><b>Öppen lucka</b></div>
      <span id="journeyOpenCount"></span>
    </div>
    <div id="journeyTimeline" class="journeyTimeline" aria-live="polite"></div>
    <div id="journeyDetail" class="journeyDetail"></div>
  </div>`;
  economy.parentNode.insertBefore(section,economy);

  const journeys={
    couple:{name:'Två arbetande föräldrar',intro:'Barnets omsorgsrätt delas 50/50 som administrativt default men kan frivilligt omfördelas. En omsorgsanställning används normalt åt gången.',end:'Dag efter övergångsfasen återgår omsorgsarbetaren till sin ordinarie arbetsgivare.'},
    single:{name:'Ensamstående arbetande',intro:'En behörig vårdnadshavare disponerar hela omsorgsrätten. Modellen får inte anta partner, mor-/farförälder eller privat reservkapacitet.',end:'Dag efter övergångsfasen återgår omsorgsarbetaren till sitt ordinarie arbete.'},
    unemployed:{name:'Arbetslös före födseln',intro:'Barnets rätt och omsorgslönen är samma. Det finns inget tidigare arbete att återgå till och modellen ska inte skapa en artificiell arbetslivsinskolning.',end:'Dag efter övergångsfasen tar det ordinarie arbetsmarknadssystemet över.'},
    self:{name:'Egenföretagare',intro:'Barnets rätt är samma; den vuxnes destination efter uppdraget är den egna verksamheten.',end:'Dag efter övergångsfasen återgår omsorgsarbetaren till verksamheten.'},
    adoption:{name:'Adoption',intro:'Omsorgsklockan ska utgå från när barnet faktiskt tas emot i familjens vård. Exakt längd och åldersregler tillhör ett separat forskningsspår.',end:'Efter den barnstyrda övergången tar relevant barnomsorg samt arbete/studier över.'},
    twins:{name:'Tvillingar / flerbarn',intro:'Barnens samtidiga omsorgsbehov kan kräva mer än 1,0 FTE. Principen om förstärkt kapacitet är etablerad men exakt kurva är fortfarande empirisk.',end:'Efter respektive övergång tar ordinarie barnomsorg och arbetsliv över.'}
  };

  const statusLabel={fixed:'🟢 Fast princip',research:'🟡 Under prövning',open:'🔴 Öppen lucka'};
  const refs={
    core:'Proposition 01 – reformens kärna',
    people:'Proposition 02 – behörighet och personkrets',
    after:'Proposition 06 – efter omsorgsåret',
    research:'Underlag – övergång/förskolestart',
    reserve:'Underlag – reservomsorg och administration'
  };

  function baseSteps(type){
    const j=journeys[type];
    const steps=[
      {title:type==='adoption'?'Barnet tas emot':'Barnet föds',status:'fixed',owner:'Föräldraanställningen / behörighet',text:type==='adoption'?'En separat adoptionsklocka etableras från faktisk vårdstart.':'Behörighet och omsorgsrätt etableras. Försäkringstillhörighet — inte medborgarskap — är grundprincip.',ref:refs.people},
      {title:'Startperiod',status:'research',owner:'Föräldraanställningen',text:'Samtidig extra omsorgskapacitet runt födseln är en separat funktion. Exakt längd och nivå är ännu inte låst.',ref:refs.core},
      {title:'Huvudsakligt omsorgsarbete',status:'research',owner:'Föräldraanställningen',text:type==='adoption'?'Individuell omsorg följer adoptionsspårets forskningsbaserade klocka.':'12 månader är nuvarande arbetspunkt för huvudsaklig individuell omsorg — inte ett politiskt axiom.',ref:refs.core},
      {title:'Förskoleplanering',status:'research',owner:'Familj + barnomsorgssystem',text:'Förskoleplats behöver planeras i god tid så att barnets övergång kan ske utan att ett kommunalt placeringsglapp blir en dold förlängning av omsorgsuppdraget.',ref:refs.after},
      {title:'Övergångsfas / “omsorgsjour”',status:'research',owner:'Föräldraanställningen',text:'Huvudkandidaten är cirka 28 kalenderdagar som avslutande del av omsorgsuppdraget. Omsorgsarbetaren är fullt tillgänglig för barnet men behöver inte skapa låtsasarbete när barnet är på förskolan.',ref:refs.research},
      {title:'Ordinarie system tar över',status:'fixed',owner:'Arbete / studier / arbetsmarknad + barnomsorg',text:j.end,ref:refs.after},
      {title:'Sen familjeflexibilitet',status:'fixed',owner:'VAB + arbetsrätt + barnomsorg',text:'Ingen generell flerårig bank av betalda familjedagar ingår. Sjukt barn → VAB. Arbetstidsförkortning → arbetsrätt. Förskolans brister → barnomsorgssystemet.',ref:refs.after}
    ];
    if(type==='twins'){
      steps.splice(3,0,{title:'Förstärkt flerbarnskapacitet',status:'research',owner:'Föräldraanställningen',text:'Mer samtidig omsorgskapacitet behövs, särskilt tidigt. Exakta FTE-multiplikatorer är fortfarande preliminära och ska valideras empiriskt.',ref:refs.core});
    }
    return steps;
  }

  function eventSteps(){
    const extra=[];
    if(document.getElementById('eventSick').checked){
      extra.push({after:'Huvudsakligt omsorgsarbete',step:{title:'Omsorgsarbetaren blir sjuk',status:'open',owner:'Sjukskydd + reservomsorg',text:'Den vuxnes sjukskydd är konceptuellt separerat från barnets fortsatta omsorg. Den operativa fallback-kedjan och svarstiden för offentlig reservkapacitet är ännu inte låsta.',ref:refs.reserve}});
    }
    if(document.getElementById('eventSlot').checked){
      extra.push({after:'Förskoleplanering',step:{title:'Förskoleplatsen är inte klar',status:'open',owner:'Barnomsorgssystemet',text:'Principen är tydlig: ett kommunalt placeringsproblem ska inte automatiskt skriva om Föräldraanställningens grundregel. Den praktiska bryggan när plats faktiskt saknas behöver dock definieras.',ref:refs.after}});
    }
    if(document.getElementById('eventHoliday').checked){
      extra.push({after:'Förskoleplanering',step:{title:'Brytpunkten träffar jul/stängning',status:'open',owner:'Övergångsklockan',text:'28 dagar från barnets ettårsdag kan förbrukas utan faktisk förskoleövergång. Modellen behöver skilja mellan omsorgsårets brytpunkt och den faktiska introduktionsstart som triggar övergångsfasen.',ref:refs.research}});
    }
    return extra;
  }

  function buildSteps(type){
    const steps=baseSteps(type);
    eventSteps().forEach(({after,step})=>{
      const idx=steps.findIndex(s=>s.title===after);
      steps.splice(idx<0?steps.length:idx+1,0,step);
    });
    return steps;
  }

  function showDetail(step,index){
    const detail=document.getElementById('journeyDetail');
    detail.innerHTML=`<div class="journeyDetailTop"><span>Steg ${index+1}</span><b>${statusLabel[step.status]}</b></div><h3>${step.title}</h3><div class="journeyOwner">Ansvarigt lager: <strong>${step.owner}</strong></div><p>${step.text}</p><small>Koppling: ${step.ref}</small>`;
    document.querySelectorAll('.journeyStep').forEach((el,i)=>el.classList.toggle('active',i===index));
  }

  function render(){
    const type=document.getElementById('journeyType').value;
    const j=journeys[type];
    const steps=buildSteps(type);
    document.getElementById('journeyTitle').textContent=j.name;
    document.getElementById('journeyIntro').textContent=j.intro;
    const open=steps.filter(s=>s.status==='open').length;
    const research=steps.filter(s=>s.status==='research').length;
    document.getElementById('journeyOpenCount').textContent=`${open} öppna luckor • ${research} punkter under prövning`;
    document.getElementById('journeyOutcome').innerHTML=open?`<b>Resan når ${open} verklig${open===1?'':'a'} designluck${open===1?'a':'or'}.</b><span>Det är precis vad den här vyn ska hitta.</span>`:`<b>Ingen vald edge case bryter den nuvarande grundresan.</b><span>Gula steg är fortfarande empiriska eller juridiska hypoteser.</span>`;
    const timeline=document.getElementById('journeyTimeline');
    timeline.innerHTML='';
    steps.forEach((step,index)=>{
      const button=document.createElement('button');
      button.type='button';
      button.className=`journeyStep ${step.status}`;
      button.innerHTML=`<div class="journeyStepHead"><span class="journeyDot ${step.status}"></span><small>Steg ${index+1}</small></div><strong>${step.title}</strong><span>${step.owner}</span>`;
      button.addEventListener('click',()=>showDetail(step,index));
      timeline.appendChild(button);
    });
    showDetail(steps[0],0);
  }

  ['journeyType','eventSick','eventSlot','eventHoliday'].forEach(id=>document.getElementById(id).addEventListener('change',render));
  render();
})();