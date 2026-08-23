# Ekonomi 3.0 – kostnadsmodell och revisionslogg

> Arbetsunderlag. Syftet är att bygga en reproducerbar och källsäker kostnadsmodell för Föräldraanställning. Dynamiska vinster får inte användas för att få grundmodellen att gå ihop.

## 1. Den viktigaste korrigeringen från Ekonomi 2.0

Ekonomi 2.0 jämförde i praktiken två tal som inte har samma tidsdimension:

- reformens grundlön beräknades som ett helt omsorgsår för ungefär en aktuell födelsekohort,
- dagens årliga utgift för föräldrapenning innehåller uttag för flera barnkohorter, eftersom föräldrapenning kan användas även efter barnets första levnadsår.

Det betyder att `33,46 mdkr reformlön` inte får ställas direkt mot `33,686 mdkr föräldrapenning 2025` och beskrivas som en äpplen-mot-äpplen-jämförelse.

**Detta är Ekonomi 2.0:s viktigaste metodfel och ska rättas innan slutsatser om reformens nettoeffekt dras.**

## 2. Hårda ankare – 2025/2026

### 2.1 Födelsekohort

SCB redovisar **97 491 levande födda barn 2025**.

Källa: SCB, *Födda i Sverige*, uppdaterad 2026-02-24:
https://www.scb.se/hitta-statistik/sverige-i-siffror/manniskorna-i-sverige/fodda-i-sverige/

SCB:s befolkningsframskrivning anger cirka 96 900 födda 2026. Modellen ska därför redovisa både kostnad per barn och kostnad vid vald kohortstorlek; ett enskilt års låga födelsetal får inte döljas i en permanent reformkostnad.

Källa: SCB, *Sveriges framtida befolkning 2026–2070*:
https://www.scb.se/hitta-statistik/statistik-efter-amne/befolkning-och-levnadsforhallanden/befolkningens-sammansattning-och-utveckling/befolkningsframskrivningar/produktrelaterat/rapporter/sveriges-framtida-befolkning-2026-2070/

### 2.2 Dagens föräldrapenning

Försäkringskassans årsredovisning 2025 anger faktiskt utfall för föräldrapenning till **33 686 mnkr**. Samma årsredovisning redovisar **3 552 mnkr** i statlig ålderspensionsavgift för föräldrapenning.

Det ger ett observerat statligt utgiftsankare på **37,238 mdkr** för föräldrapenning + dess statliga ålderspensionsavgift 2025.

Detta är ett årsflöde över flera barnkohorter – inte kostnaden för 2025 års nyfödda.

Källa: Försäkringskassan, *Årsredovisning 2025*:
https://www.forsakringskassan.se/download/18.6824ccfb19c0e5392cd73/1771574743917/forsakringskassans-arsredovisning-2025.pdf

### 2.3 Kontroll mot 2026 års budget

Budgetpropositionen för 2026 budgeterar:

- föräldrapenning: **35 622,189 mnkr**,
- statlig ålderspensionsavgift för föräldrapenning: **3 203,646 mnkr**.

2026-budgeten används som känslighets-/rimlighetskontroll, inte som ersättning för observerat 2025-utfall.

Källa: Regeringen, *Budgetpropositionen för 2026*, utgiftsområde 12.

### 2.4 Arbetsgivaravgifter

Full arbetsgivaravgift är **31,42 procent** 2026 för de normala åldersgrupper som är relevanta för modellen. För en statlig arbetsgivare ska denna redovisas i arbetsgivarmyndighetens bruttobudget, men den får inte mekaniskt behandlas som en lika stor samhällsekonomisk nettokostnad eftersom delar är interna flöden inom offentlig sektor.

Källa: Skatteverket, arbetsgivaravgifter 2026.

## 3. Reformens hårda kärna – reproducerbar beräkning

Grundmodellens lön är tills vidare **28 600 kr/mån**, kopplad till 2025 års medianlön för kommunala barnskötare enligt tidigare modellbeslut. Lönekällan ska källsäkras separat innan Ekonomi 3.0 låses.

Vid 97 491 barn:

`28 600 × 12 × 97 491 = 33 459 511 200 kr`

Alltså **33,460 mdkr i grundlön** för ett fullt omsorgsår för en kohort av 2025 års storlek.

Per barn är grundlönen **343 200 kr**.

Detta tal är matematiskt korrekt men säger ännu inte reformens nettoeffekt mot dagens system.

## 4. Ekonomi 2.0 – poster som behålls respektive öppnas igen

| Post | Ekonomi 2.0 | Ekonomi 3.0-status |
|---|---:|---|
| 12 mån grundlön | 33,46 mdkr | 🟢 matematiken verifierad; lönekällan ska källsäkras |
| 25 dagar semester + tillägg | 3,56 mdkr | 🟡 beräkningsregel/avtalsantagande ska verifieras |
| statlig tjänstepension | 2,30 mdkr | 🟡 premie och särskild löneskatt ska separeras |
| flerbarn | 0,13 mdkr | 🟡 modellpost; frekvenser och kapacitetsprofil ska verifieras |
| sjuk/reservomsorg | 0,30 mdkr | 🔴 saknar tillräckligt registerstöd |
| ny administration | 0,25 mdkr | 🔴 saknar robust myndighetskalkyl |
| föräldrapenning 2025 | 33,70 mdkr | 🟢 faktiskt utfall 33,686 mdkr |
| statlig ålderspensionsavgift | 3,55 mdkr | 🟢 faktiskt anslagsutfall 3,552 mdkr |
| FK-administration hänförlig till FP | 0,61 mdkr | 🟡 måste källsäkras/allokeras |
| arbetsmarknadsfinansierad föräldralön + pension | 3,40 mdkr | 🔴 får inte ligga i basjämförelsen utan bättre empiriskt stöd |

## 5. Ny jämförelsearkitektur

Ekonomi 3.0 ska redovisa fyra nivåer separat.

### A. Kostnad per barn
Den mest stabila enheten. Alla grundposter räknas först per barn.

### B. Kostnad per födelsekohort
Per-barnskostnaden multipliceras med exempelvis faktisk kohort 2025 och med en normaliserad kohort för känslighetsanalys.

### C. Årligt kassaflöde i ett moget reformsystem
När reformen varit i kraft tillräckligt länge beräknas vilka kohorter och restsystem som faktiskt belastar samma kalenderår. Först här får jämförelse göras med dagens årliga statsbudgetutfall.

### D. Konsoliderad offentlig sektor och Sverige totalt
Skatter, arbetsgivaravgifter, kommunala skatteintäkter, statliga interna flöden och kostnader som idag ligger på arbetsmarknaden hålls isär. Arbetsgivarens avlastning är en relevant fördelningseffekt men får inte automatiskt bokföras som en samhällsekonomisk besparing.

## 6. Basjämförelsen ska vara konservativ

Grundscenariot får **inte** tillgodoräkna reformen högre fertilitet, högre framtida sysselsättning, produktivitetsvinster, lägre sjukskrivning, bättre barns framtida inkomster, jämställdhetsvinster i kronor, lägre personalomsättning hos privata arbetsgivare eller lägre administration utan verifierad kalkyl.

Dessa effekter kan vara sannolika eller värdefulla, men ska redovisas separat som `ej prissatta möjliga effekter` tills kausalt och kvantitativt stöd finns.

Detta är en styrka i modellen: **grundförslaget måste kunna bedömas utan att framtida nyttor används som budgetplugg.**

## 7. Kohorten i dagens system – första riktiga rekonstruktionen

Här finns nu ett mycket bättre kvantitativt ankare.

SCB:s jämställdhetsstatistik, med Försäkringskassan som källa, redovisar genomsnittligt uttag för **barn födda 2017** fram till uppnådd ålder 8 år:

| Uppnådd ålder | Kvinnor | Män | Totalt |
|---:|---:|---:|---:|
| 0 | 7 | 0 | 7 |
| 1 | 202 | 27 | 230 |
| 2 | 52 | 45 | 97 |
| 3 | 13 | 12 | 25 |
| 4 | 19 | 18 | 37 |
| 5 | 4 | 5 | 10 |
| 6 | 3 | 4 | 7 |
| 7 | 3 | 3 | 6 |
| 8 | 3 | 3 | 6 |
| **Totalt** | **306** | **119** | **424** |

Källa: SCB, *På tal om kvinnor och män 2026*, tabellen `Föräldrapenningdagar för barn med födelseår 2017`, källa Försäkringskassan.
https://www.scb.se/hitta-statistik/statistik-efter-amne/befolkning-och-levnadsforhallanden/jamstalldhet/jamstalldhetsstatistik/produktrelaterat/rapporter/kvinnor-och-man-2026

Försäkringskassans *Socialförsäkringen i siffror 2026* bekräftar samma mönster: de flesta dagarna används under första levnadsåret och från tre års ålder tar kvinnor och män i genomsnitt lika många dagar.

### 7.1 Ett viktigt resultat: 480 dagar är rättigheten, inte den genomsnittliga kostnaden

2017-kohorten hade vid åtta års ålder i genomsnitt använt **424 nettodagar**, alltså cirka **88 procent av 480-dagarsramen**. Det är därför fel att prissätta dagens system som om varje barn genererar 480 fullt uttagna dagar.

Reglerna för 2017-kohorten innebär att den återstående möjligheten efter åtta års ålder kan ge ytterligare uttag, eftersom dagens regler tillåter uttag längre. 424 ska därför behandlas som ett starkt empiriskt ankare, inte som ett slutligt livstidsmaximum.

### 7.2 När dagarna tas ut

Av de 424 observerade nettodagarna ligger:

- 237 dagar vid uppnådd ålder 0–1,
- ytterligare 97 dagar vid ålder 2,
- 90 dagar vid ålder 3–8.

Det betyder att ungefär **79 procent** av det observerade uttaget ligger till och med uppnådd ålder 2, medan ungefär **21 procent** ligger senare.

Det bekräftar att reformen inte bara ersätter en ettårig kontantström; den avskaffar eller förändrar även en lång svans av senare uttag.

## 8. Vad kostar 424 dagar i dagens penningvärde? – första scenario, inte slutresultat

Försäkringskassan redovisar för 2025:

- cirka **44 miljoner** nettodagar med föräldrapenning,
- **33,7 mdkr** utbetalt,
- kvinnors genomsnittliga dagbelopp **716 kr**,
- mäns genomsnittliga dagbelopp **900 kr**.

Det observerade kalenderårsgenomsnittet ligger därmed omkring **770 kr per nettodag**. Detta är ett användbart grovt prisankare men inte ett perfekt kohortpris, eftersom ersättningen varierar med förälderns inkomst, kön, barnets ålder och typ av dag.

Om 424 dagar enbart som känslighetsberäkning värderas till cirka 770 kr/dag blir kontant föräldrapenning:

`424 × 770 ≈ 326 500 kr per barn`

Vid 97 491 barn motsvarar detta cirka **31,8 mdkr per kohort**.

Om 2025 års observerade relation mellan statlig ålderspensionsavgift och föräldrapenning används proportionellt (`3,552 / 33,686 ≈ 10,54 %`) blir ett grovt offentligt ankare:

- kontant föräldrapenning: **~326 500 kr/barn**,
- statlig ålderspensionsavgift: **~34 400 kr/barn**,
- tillsammans: **~360 900 kr/barn**,
- motsvarande **~35,2 mdkr** för en kohort om 97 491 barn.

**Detta är scenario A, inte huvudresultatet.** Nästa version ska prissätta dagarna efter barnets ålder och ersättningsnivå i stället för att använda ett enda kalenderårsgenomsnitt.

## 9. Första äpplen-mot-äpplen-signalen

Reformens rena grundlön är **343 200 kr per barn**. Redan den posten ligger alltså ungefär **17 000 kr över** scenario A:s skattade kontanta föräldrapenning på cirka 326 500 kr, men under dagens skattade kontantutbetalning inklusive statlig ålderspensionsavgift (~360 900 kr).

När reformens semester, tjänstepension, flerbarnskapacitet, sjuk/reservomsorg och administration läggs till kommer reformens direkta bruttokostnad därför sannolikt att ligga **över dagens rena statliga föräldrapenning + pensionsavgift**, om scenario A ligger nära verkligheten.

Det är ett viktigt fynd. Ekonomi 3.0 ska inte längre utgå från hypotesen att reformen är direkt budgetneutral.

Samtidigt saknas fortfarande flera poster på dagens sida som måste hållas separata och källsäkras innan nettodomen:

- arbetsmarknadsfinansierad föräldralön,
- arbetsmarknadsfinansierade pensionspremier under ledighet,
- faktisk FK-administration hänförlig till föräldrapenning,
- eventuell förändring av skatteintäkter när en skattepliktig lön ersätter en skattepliktig transferering,
- hur arbetsgivaravgifter ska konsolideras mellan staten och övrig offentlig sektor.

Dessa får inte antas bort, men inte heller fyllas med önsketänkta schabloner.

## 10. Storleksordning – vad måste vi förklara?

Om Ekonomi 2.0:s preliminära reformkostnad runt **40,0 mdkr** skulle överleva detaljrevisionen, medan dagens kohortkostnad för föräldrapenning + statlig ålderspensionsavgift hamnar omkring **35,2 mdkr**, är det preliminära gapet ungefär:

**+4,8 mdkr per årskohort**

eller cirka:

**+49 000 kr per barn.**

Detta är ännu **inte ett resultat** eftersom reformens 40,0 mdkr innehåller flera 🟡/🔴-poster och dagens 35,2 mdkr bygger på scenario A. Men det är nu rätt storleksordning att försöka slå sönder.

Det är också en mer trovärdig arbetsfråga än den gamla `40,0 mot 41,3`-jämförelsen.

## 11. Vad som kan minska eller öka gapet

**Kan minska reformens relativa merkostnad:**

- dagens arbetsmarknadsfinansierade föräldralön och pensionspremier,
- dagens administration,
- högre faktisk dagersättning i de tidiga år som står för majoriteten av uttaget,
- eventuella dagar som 2017-kohorten tar ut efter åtta års ålder.

**Kan öka reformens relativa merkostnad:**

- högre korrekt semesterkostnad än vår nuvarande schablon,
- högre pensionspremie/särskild löneskatt,
- större behov av reservomsorg,
- högre flerbarnskapacitet,
- ny statlig administration.

Dynamiska samhällsvinster ligger medvetet **utanför båda listorna** tills de kan kvantifieras robust.

## 12. Nästa attack

Tre saker har nu högst marginalvärde:

1. **Åldersspecifik prissättning av dagens 424+ dagar.** Ett genomsnitt på 770 kr/dag är för grovt.
2. **Semester + tjänstepension i reformen.** Tillsammans står de preliminärt för nästan 6 mdkr och måste källsäkras hårt.
3. **Arbetsmarknadens nuvarande kostnad.** Den gamla 3,40-mdkrsposten får antingen få empiriskt stöd eller tas bort.

Först därefter är det meningsfullt att lägga till skatt, arbetsgivaravgifter och dynamiska effekter.

## 13. Uppdaterad dom

Ekonomi 2.0:s slutsats att dagens direkta finansiering (~41,3 mdkr) och reformen (~40,0 mdkr) ligger nära varandra är **indragen som resultat**.

Det vi nu vet är:

- reformens rena grundlön för en 97 491-barnskohort är cirka **33,46 mdkr**,
- barn födda 2017 hade i genomsnitt använt **424 nettodagar** till och med åtta års ålder,
- ett grovt 2025-prissatt scenario ger dagens föräldrapenning + statlig ålderspensionsavgift omkring **35,2 mdkr per 97 491 barn**,
- reformen ser därför i nuläget **snarare ut att ha en direkt merkostnad än en direkt besparing**, innan dagens arbetsmarknadsfinansierade kostnader och andra lager räknas in,
- VAB ligger fortsatt utanför reformens ersatta kärna.

**Evidensstatus ekonomi: 6,5/10.**

Vi har nu löst tidsdimensionsfelet och hittat ett starkt empiriskt kohortankare. För att nå 8/10 behöver framför allt åldersspecifik dagersättning samt reformens semester/pension källsäkras.
