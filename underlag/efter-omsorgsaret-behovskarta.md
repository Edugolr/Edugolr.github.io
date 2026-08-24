# Efter omsorgsåret – behovskarta för sena föräldradagar

> Arbetsunderlag. Frågan är inte hur många av dagens sena föräldrapenningdagar som ska kopieras, utan vilka funktioner som faktiskt behöver finnas efter Föräldraanställningens 12 månader + intjänad semester.

## 1. Utgångspunkt

Föräldraanställningen ska lösa huvuduppgiften: barnets första omsorgsår. Den ska inte automatiskt göras ansvarig för alla senare problem som dagens föräldrapenning råkar användas för.

Dagens sena FP-dagar fungerar delvis som en generell familjeledighetsbank. Försäkringskassans analys av barn födda 2014 visar att efter två års ålder tas 25–29 procent av dagarna på helger (37 procent vid tre års ålder) och att 54–70 procent av dagarna i förskoleåldrar tas under sommaren eller kring jul. Detta talar för att funktionen efter småbarnsfasen skiljer sig från den ursprungliga heltidsomsorgen.

Källa: Försäkringskassan, Socialförsäkringsrapport 2024:2, Vägar mot en mer jämställd föräldraledighet.
https://www.forsakringskassan.se/download/18.21e4089719320208e581b5/1733720949676/vagar-mot-en-mer-jamstalld-foraldraledighet-socialforsakringsrapport-2024-2.pdf

## 2. Behov för behov

### A. Inskolning

**Behov:** En förälder behöver ofta vara tillgänglig när barnet börjar förskola.

**Dagens lösning:** Föräldrapenning kan användas under inskolning.

**Reformens preliminära lösning:** Föräldraanställningen ger 25 intjänade betalda semesterdagar efter det fulla omsorgsåret. Om förskolestarten följer direkt därefter finns redan en naturlig övergångsbuffert.

**Bedömning:** 🟢 Ingen separat inskolningsförmån bör införas i grundmodellen innan ett faktiskt glapp visas. Att först skapa 25 dagars betald semester och därefter lägga på särskilda inskolningsdagar riskerar dubbelkompensation.

### B. Sjukt barn

**Behov:** Förälder måste kunna avstå arbete när barnet är sjukt.

**Lösning:** VAB/tillfällig föräldrapenning.

**Bedömning:** 🟢 Helt separat funktion. VAB ska inte bakas in i Föräldraanställningen eller ersättas med sena föräldradagar.

### C. Deltid för småbarnsföräldrar

**Behov:** Familjer kan behöva kortare arbetsdagar under småbarnsåren.

**Dagens lösning:** Föräldraledighetslagen ger rätt att minska normal arbetstid med upp till 25 procent även utan föräldrapenning tills barnet fyllt åtta år eller avslutat första skolåret. Från 1 juli 2028 förlängs den relevanta skolgränsen till efter andra skolåret.

Källa: Föräldraledighetslag (1995:584), 7 §.
https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/foraldraledighetslag-1995584_sfs-1995-584/

**Bedömning:** 🟢 Arbetsrätt, inte skäl att behålla en generell FP-bank. Grundprincipen bör vara att denna rätt kan leva vidare separat om reformen genomförs.

### D. Sommar, jul och annan familjeledighet

**Behov:** Föräldrar vill ha mer gemensam ledighet när förskola/skola har lov eller när familjen vill vara tillsammans.

**Observation:** Försäkringskassans data visar att en stor del av sena FP-dagar koncentreras till sommaren och julperioden.

**Bedömning:** 🟡 Verkligt efterfrågat behov, men svagt argument för att behålla det som rest av spädbarnets inkomstförsäkring. Om Sverige politiskt vill ge barnfamiljer extra betald familjeledighet bör den förmånen beskrivas, finansieras och fördelas öppet som just familjeledighet.

### E. Förskolans/skolans planerings- och stängningsdagar

**Behov:** Omsorg och arbete kan ibland inte synkroniseras.

**Bedömning:** 🟡 Ett strukturellt glapp ska i första hand analyseras i förskole-/skolsystemet och arbetslivet. Föräldraanställningen ska inte automatiskt bli permanent finansieringsmekanism för att andra offentliga system inte matchar föräldrars arbetsdagar.

En framtida separat lösning kan övervägas endast om data visar ett återkommande glapp som inte rimligen kan hanteras med ordinarie semester eller verksamhetens ansvar.

### F. SGI-skydd vid deltidsarbete

**Behov:** Dagens FP används delvis tekniskt för att skydda sjukpenninggrundande inkomst när en förälder går ned i arbetstid.

Budgetpropositionen för 2025 beskriver uttryckligen denna funktion: partiell föräldrapenning kan användas för att fylla ut när en heltidsbaserad SGI annars skulle påverkas.

Källa: Prop. 2024/25:1, utgiftsområde 12.
https://www.riksdagen.se/sv/dokument-och-lagar/dokument/proposition/budgetpropositionen-for-2025-utgiftsomrade-12_hc031d13/html/

**Bedömning:** 🟡 Detta är en systemteknisk funktion, inte ett barnomsorgsbehov. En reform måste därför göra ett uttryckligt SGI-val. Det vore dålig systemdesign att behålla sena FP-dagar enbart för att reparera en bieffekt i SGI-reglerna.

### G. Överlåtelse till andra vuxna

Sedan juli 2024 kan dagar överlåtas till andra än vårdnadshavarna. Försäkringskassans uppföljning 2026 visar dock att bara omkring 1 procent av överlåtna dagar gått till andra än barnets vårdnadshavare under de första 18 månaderna med reglerna.

Källa: Försäkringskassan, 30 januari 2026.
https://www.forsakringskassan.se/nyhetsarkiv/nyheter-press/2026-01-30-fa-anvander-mojligheten-att-ge-bort-foraldradagar

**Bedömning:** 🟡 Funktionen finns och kan vara mycket värdefull för enskilda familjer, men det tidiga utfallet ger inte stöd för att den ensam motiverar en stor generell dagbank. Behov för familjer med annan vårdnads-/omsorgsstruktur måste däremot hanteras explicit i Föräldraanställningens behörighetsregler.

## 3. Minsta-vettiga-efterföljaren

Efter behovsgenomgången finns ännu inget stöd för att återskapa dagens upp till 96 sena dagar som standard.

Preliminär arkitektur:

1. **Föräldraanställning:** 12 hela månader omsorgsarbete.
2. **Intjänad semester:** 25 betalda dagar efter omsorgsuppdraget; kan naturligt bära övergång/inskolning.
3. **VAB:** kvar som separat försäkring.
4. **Deltidsrätt:** arbetsrättslig rätt hålls separat från ersättningssystemet.
5. **SGI:** löses explicit i SGI-reglerna, inte genom att bevara en FP-bank som tekniskt verktyg.
6. **Sen betald familjeledighet:** inget grundförslag ännu. Införs bara om ett återstående behov kan visas efter punkterna ovan.

## 4. Kandidater om ett kvarvarande glapp faktiskt visas

### Kandidat 0 – ingen ny bank

Efter 12 månader + semester gäller ordinarie semester, VAB och arbetsrättslig deltidsrätt.

**Fördel:** renast, billigast och tydligast systemgräns.

**Risk:** kan ta bort en uppskattad flexibilitet för familjer som idag sparar FP till lov och familjetid.

### Kandidat 1 – liten barnledighetsbank

Ett begränsat antal betalda dagar per barn eller familj under vissa åldrar, uttryckligen för barns/familjers ledighetsbehov.

**Fördel:** transparent funktion i stället för kvarvarande spädbarnsförsäkring.

**Risk:** ny förmån och administration; antalet dagar riskerar att bli politiskt godtyckligt om vi inte först kan visa behovet.

### Kandidat 2 – riktade lösningar

Separata regler för specifika verifierade glapp, exempelvis om förskolesystemet lämnar ett återkommande omsorgsglapp.

**Fördel:** träffsäkerhet.

**Risk:** kan återskapa den komplexitet reformen försöker minska.

## 5. Jämställdhetskrav

Sena FP-dagar är relativt jämnare fördelade mellan kvinnor och män än uttaget under barnets första år. Ett borttagande får därför inte beskrivas som jämställdhetsneutralt utan analys.

Samtidigt är reformens grundmodell 50/50 som default med rätt till omfördelning och samma lön för samma omsorgsarbete. Den sena funktionen bör bedömas separat: om en barnledighetsbank införs bör även dess default/fördelning analyseras ur jämställdhetsperspektiv.

## 6. Preliminär slutsats

**Vi har ännu inte hittat ett behov som kräver att dagens sena FP-bank kopieras.**

Det finns verkliga behov efter omsorgsåret, men flera har redan egna eller mer naturliga hem:

- sjukdom → VAB,
- deltid → arbetsrätt,
- inskolning → sannolikt intjänad semester,
- SGI-skydd → SGI-regler,
- strukturella omsorgsglapp → ansvarigt omsorgs-/skolsystem,
- extra familjeledighet → måste motiveras öppet som egen förmån om den ska finnas.

Detta är inte ett beslut att avskaffa alla sena dagar. Det är ett beslut om **bevisbörda**: varje funktion som ska leva vidare efter Föräldraanställningen måste kunna förklara vilket problem den löser och varför befintliga mekanismer inte räcker.

## 7. Nästa evidensfråga

För att kunna välja mellan Kandidat 0–2 behöver vi framför allt kvantifiera:

- hur mycket av sena FP-uttag som faktiskt ersätter arbetsdagar snarare än helgdagar,
- hur mycket som används som sammanhängande extra semester,
- hur stor del som används för SGI-fyllnad/deltid,
- hur mycket faktisk arbetsfrånvaro sena dagar skapar,
- vilka hushåll som använder dem och fördelning efter kön/inkomst,
- hur stor ekonomisk och fördelningsmässig effekt ett avskaffande skulle ha.

Först därefter prissätts en eventuell efterföljare i Ekonomi 3.0.
