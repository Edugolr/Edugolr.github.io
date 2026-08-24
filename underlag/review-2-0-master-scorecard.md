# Review 2.0 – master-scorecard och gate

## Syfte

Detta är en fryst helhetsrevision av Föräldraanställningen efter den omfattande underlagsfasen. Under själva reviewen ska modellen inte försvaras eller lappas lokalt. Först identifieras motsägelser, osäkerheter och falsifieringsrisker. Därefter löses träffarna en i taget.

Målet är att avgöra om modellen är mogen för Proposition 0.2.

## Bedömningsskala

- 🟢 **Stabil:** principen eller komponenten har överlevt nuvarande stresstest. Det betyder inte evig sanning; ny evidens kan ändra den.
- 🟡 **Öppen:** lovande baseline finns men en materiell empirisk, juridisk, ekonomisk eller administrativ fråga återstår.
- 🔴 **Gate blocker:** frågan kan ändra modellens bärande arkitektur eller göra nuvarande proposition missvisande. Ska lösas före Proposition 0.2.

## Master-scorecard

| Komponent | Nuvarande baseline | Status | Huvudrisk / falsifiering | Nästa gate |
|---|---|---:|---|---|
| Normativ kärna | Barnets behov och samhällsburen individuell omsorg | 🟢 | Om individuell omsorg inte ger relevant barnnytta under föreslagen period | Evidenssyntes för brytpunkt |
| Evidensprincip | Bästa evidens + aktivt evidensskapande | 🟢 | Dålig pilotdesign eller politisk selektion av utfall | Förregistrerade utfall |
| Systemgräns | Problem löses i systemet där de uppstår | 🟢 | Kan användas för att avfärda verkliga följdeffekter | Kräv explicit ansvarskarta |
| Omsorgsperiod | 12 månader som arbetspunkt | 🟡 | Optimal generell brytpunkt kan vara kortare/längre | Full evidenssyntes 10/12/13/15+ månader |
| Startperiod | Extra samtidig kapacitet kring födseln | 🟡 | Exakt längd/FTE och kostnad | Evidens + kostnadsmodell |
| Flerbarn | Förstärkt FTE efter barnens faktiska omsorgsbehov | 🟡 | FTE-kurvan kan vara godtycklig | Evidens/pilotparametrar |
| Barnets rätt vs vuxens status | Barnets FTE består även om innehavare byts | 🟢 princip | Propositionen uttrycker inte distinktionen konsekvent | Gör till kärnarkitektur |
| Central bärare | Staten/samhället bär finansiering och ansvar | 🟢 | Oklart vilken myndighet som administrerar | Organisationsdesign senare |
| Juridisk bärare | Statlig omsorgsanställning är ledande kandidat | 🔴 | Propositionen behandlar den som låst trots att A/B-test, EU och avtalsfrågor är öppna | Slutligt A/B-beslut |
| Juridiska kusiner | Återanvänd assistans/anhörigvård/omsorgslösningar | 🟢 metod | Felaktiga analogier kan dölja avgörande skillnader | Funktionsvis verifiering |
| Särskilt omsorgsavtal | Särskilt centralt avtal snarare än standardvillkor | 🟡 | För många undantag kan visa att anställning är fel bärare | Full avtalsinventering |
| Tillsättning | Rättighetsbaserad, inte konkurrensbaserad | 🟡 | RF/LOA/LAS och statlig saklighet | Kvalificerad stats-/arbetsrätt |
| Arbetsledning | Endast uppdragets ram, inte familjens vardag | 🟡 | Anställningsbegrepp och faktisk arbetsledningsrätt | Juridisk minsta-A |
| Arbetsmiljö | Proportionerligt ansvar utan generell heminspektion | 🟡 | Arbetsgivaransvar kan kräva mer än modellen accepterar | Jämför assistans/hemarbete |
| Arbetsskada/personskada | Befintligt skydd återanvänds så långt möjligt | 🟡 | Gränsen arbete/privatliv i eget hem | Praxisanalys |
| Lön | Samma omsorgslön för samma FTE | 🟢 princip | Lönens exakta nivå saknar slutlig normering | Lönesättningsmodell |
| Tidigare inkomst | Ingen SGI-/höginkomstkompensation i omsorgslönen | 🟢 | Kan påverka faktisk omsorgsfördelning | Mät beteende, lös inte via lön utan evidens |
| Pension | Tjänstepension/pensionsintjäning ska ingå | 🟢 funktion | Exakt lösning beror på juridisk bärare | Kostnadssynk |
| Semester/övergång | 25 betalda dagar efter omsorgsperioden | 🟡 | Statligt avtal ger andra semesternivåer; juridisk etikett oklar | SAO/B-jämförelse |
| Sjukdom vuxen | Sjuklön/sjukpenning separat från barnets omsorg | 🟢 princip | Exakt bärare beror på A/B | Integrera i huvudtext |
| Reservomsorg | Barnets saknade FTE får explicit reservbärare | 🟢 princip / 🟡 metod | Offentlig sista linje för spädbarn är inte specificerad | Ansvarskedja + pilot |
| Privat nätverk | Frivilligt, aldrig systemkrav | 🟢 | Implementation kan ändå implicit förutsätta nätverk | Ensamstående-test på alla flöden |
| 50/50-default | Symmetrisk disposition, fri omfördelning | 🟢 baseline | Kan ge ojämställd faktisk omsorg pga alternativkostnad | Förregistrerat jämställdhetsutfall |
| En innehavare åt gången | Normalfall en aktiv omsorgsanställning | 🟢 baseline | Kan bli administrativt stel vid delade veckor/dagar | Pilot av bytesfrekvens |
| Minderårig förälder | Barnets rätt kvar, särskild lösning krävs | 🔴 lokal | Vanlig statlig anställning kan vara olämplig/otillåten | Separat juridisk konstruktion |
| Adoption | Separat omsorgsklocka från mottagandet | 🟢 princip / 🟡 längd | Äldre adopterade barns behov skiljer sig | Adoptionsspecifik evidens |
| EU/gränsöverskridande | Försäkringstillhörighet, inte medborgarskap | 🔴 juridisk | Statlig anställning kan ändra klassificering/prioritetsregler | EU-rättsligt utlåtande |
| Efter omsorgsperioden | Förskola + arbetsliv + intjänad semester | 🟢 baseline | 12–24 månader fyller verklig funktion idag | Brytpunktsforskning avgör |
| Sen dagbank | Ingen ny generell betald bank | 🟢 baseline | Konkret omsorgsgap kan visas | Falsifieras av behovsdata |
| 25 % arbetstidsrätt | Behålls separat från ersättning | 🟢 | Följdregler/SGI måste vara kompatibla | Teknisk lagharmonisering |
| Förskolans brister | Löses i barnomsorgssystemet | 🟢 princip | Kräver att faktisk plats/omsorg finns vid brytpunkten | Explicit övergångsgaranti |
| Ekonomi – status quo | Dagens faktiska system ska jämföras bottom-up | 🟢 metod | Historiska dagar ≠ faktisk framtida kostnad | Uppdatera basår |
| Ekonomi – reform | Nuvarande delmodeller finns | 🔴 gate | Senare juridiska/avtalsmässiga beslut är inte fullt återförda till totalmodellen | Ny konsoliderad totalmodell |
| Skatt/avgifter | Lön behandlas som lön i A | 🟡 | Ändras om B vinner | A/B-känslighet |
| Arbetsmarknad | Effekter ska räknas, inte antas | 🟡 | Hög alternativkostnad, arbetsutbud, karriäreffekter | Mikrosimulering/pilot |
| Administration | Central och automatiserad där möjligt | 🟡 | Mycket stora volymer korta anställningar/byten | Processmodell + kostnad |
| LAS/omställning | Vanliga regler får inte skapa absurda följder | 🟡 | Täta barn, företrädesrätt, konvertering | Full LAS-simulering |
| Kontroll/fusk | Faktisk omsorg krävs; piggyback på befintliga beslut | 🟡 | Ny lön kan skapa nya incitament/fuskytor | Fraud/abuse threat model |
| Integritet | Minsta möjliga intrång | 🟢 princip | Arbetsmiljö/kontroll kan kollidera | Gemensam proportionalitetsmodell |
| Implementering | Pilot/stegvis införande | 🟡 | Rättighetsreform kan vara svår att randomisera | Genomförbar utvärderingsdesign |

## Gate blockers före Proposition 0.2

### 🔴 G1 – juridisk bärare

Propositionens kärntext beskriver idag tidsbegränsad statlig anställning som normalformen. Underlagen behandlar samtidigt statlig anställning och särskild offentlig omsorgsstatus som konkurrerande kandidater och har fortfarande öppna frågor om kollektivavtal, arbetsledning, LAS och EU-rätt.

**Reviewbeslut:** statlig omsorgsanställning får beskrivas som *ledande kandidat*, inte låst arkitektur, tills G1 är stängd.

### 🔴 G2 – konsoliderad ekonomi

Ekonomi 3.0 består av en stark uppsättning delanalyser, men modellen har därefter fått tydligare kostnadskomponenter: särskilda anställningsvillkor, reservkapacitet vid sjukdom, arbetsmiljö/försäkring och möjliga administrativa lösningar.

**Reviewbeslut:** ingen ny totalsiffra eller budgetneutralitetsclaim får låsas innan exakt aktuell modell räknats om från grunden mot faktisk status quo.

### 🔴 G3 – EU-rätt

Försäkringstillhörighet är en stabil princip, men en statlig anställning kan klassificeras annorlunda än dagens familjeförmån. Detta kan påverka vilket land som är behörigt, exportabilitet och samordning.

**Reviewbeslut:** måste ha kvalificerad EU-rättslig konstruktion för A och B innan bärare låses.

### 🔴 G4 – minderårig förälder

Barnets omsorgsrätt får inte falla därför att föräldern är minderårig, men normal statlig anställning kan inte bara antas fungera oförändrat.

**Reviewbeslut:** lös med befintlig juridisk kusin eller särskild likvärdig konstruktion; detta är lokal blocker, inte skäl att fälla hela reformen.

## Motsägelser och drift

### M1 – propositionen är mer säker på A än underlagen

`proposition/01-reformens-karna.md` säger att omsorgsuppdraget normalt utförs genom tidsbegränsad statlig anställning. Senare A/B-, minsta-A-, kollektivavtals- och juridiska-kusiner-underlag visar att detta ännu är en kandidat.

**Åtgärd efter review:** synka status, inte nödvändigtvis lösningen.

### M2 – propositionens kapitelstruktur ligger efter underlagsstrukturen

Repo:t har djupa analyser av ekonomi, arbetsmiljö, sjukdom/reservkapacitet, juridisk bärare, startperiod och kollektivavtal som ännu inte har motsvarande huvudkapitel. Det gör propositionen lättare att läsa men också ofullständig som single source of truth.

**Åtgärd efter review:** skapa en propositionsstruktur som absorberar beslut, medan underlagen förblir beviskedja.

### M3 – barnets FTE är starkare i underlagen än i kärntexten

Distinktionen mellan barnets omsorgsrätt/FTE och den vuxnes juridiska status löser sjukdom, byten, flerbarn och reservkapacitet elegant men är ännu inte en uttrycklig kärnarkitektur i propositionen.

**Åtgärd efter review:** överväg att göra `barn → omsorgskapacitet → behörig innehavare → juridisk bärare` till modellens formella lager.

## Attackytor i nästa pass

1. **Barnnytta:** Finns det evidens för att offentligfinansierad individuell omsorg till brytpunkten ger bättre nettoresultat än relevanta alternativ?
2. **Juridik:** Kan A konstrueras utan att så mycket arbetsrätt sätts ur spel att anställningen blir fiktion?
3. **Ekonomi:** Vad är nettokostnaden när *alla* aktuella komponenter räknas och status quo mäts funktionellt?
4. **Jämställdhet:** Kan fri omfördelning i praktiken förstärka könsskillnader trots neutral lön?
5. **Arbetsmarknad:** Vilka effekter uppstår på arbetsutbud, rekrytering, företagande och humankapital?
6. **Administration:** Kan hundratusentals rättighetsbaserade anställnings-/kapacitetsflöden administreras billigare och enklare än dagens dagbank?
7. **Fusk/strategiskt beteende:** Vilka nya incitament skapar fast lön, FTE-överföring och reservpersoner?
8. **Extremfall:** ensamstående utan nätverk, minderårig förälder, adoption, flerbarn, täta födslar, lång sjukdom, barn placerat utanför hemmet, gränspendlare och familj i flera länder.
9. **Övergång:** Vad händer exakt dag N när individuell omsorg upphör men förskoleplats eller praktisk inskolning inte är redo?
10. **Politisk robusthet:** Vilka delar är principer och vilka är parametrar som framtida majoriteter kan ändra utan att modellen förlorar sin funktion?

## Reviewregel framåt

För varje nytt påstått problem:

1. definiera funktionen,
2. kontrollera om problemet redan finns i dagens system,
3. leta efter svensk juridisk/institutionell kusin,
4. återanvänd beprövad lösning där den passar,
5. specialreglera endast den verkliga resten,
6. återför varje ny kostnad och regel till master-scorecard och totalekonomi.

## Gate-status

**Review 2.0: PÅGÅR.**

**Proposition 0.2: BLOCKERAD tills G1–G4 är hanterade och attackpassen är genomförda.**

Detta är avsiktligt. En blockerad proposition betyder inte att reformen bedöms svag; det betyder att modellen nu är tillräckligt utvecklad för att kräva en riktig integrations- och falsifieringsgate innan nästa version låses.