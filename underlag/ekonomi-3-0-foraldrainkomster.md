# Ekonomi 3.0 – föräldrainkomster och empirisk typfallsviktning

## Syfte

Detta underlag försöker ersätta lösa antaganden om nyblivna föräldrars inkomster med observerade data. Slutsatsen är samtidigt metodologisk: offentlig aggregerad statistik räcker ännu inte för en exakt nationell nettokalkyl. FASIT/registermikrodata är slutmålet för full viktning.

## Hårda datapunkter

### Föräldrapenningens faktiska ersättning 2025

Försäkringskassan redovisar genomsnittligt dagbelopp, oavsett ersättningsnivå, på:

- kvinnor: **716 kr/dag**
- män: **900 kr/dag**

För svenskfödda mottagare var motsvarande 779 respektive 923 kr/dag. Kvinnor har alltså ett klart lägre observerat ersättningsbelopp än män. Detta är bättre kalibrering av dagens system än att anta samma SGI/lön för båda könen.

Källa: Försäkringskassan, *Socialförsäkringen i siffror 2026*.
https://www.forsakringskassan.se/download/18.26f8668819e7ba3adefa4/1780908979932/socialforsakringen-i-siffror-2026.pdf

### Uttagsfördelning

År 2025 stod män för **31 procent av uttagna föräldrapenningdagar**. Det innebär att den högre manliga dagsersättningen appliceras på en betydligt mindre del av dagvolymen.

Källa: Försäkringskassans statistik om föräldrapenning.
https://www.forsakringskassan.se/statistik-och-analys/barn-och-familj/statistik-inom-omradet-barn-och-familj---foraldrapenning

En enkel viktning av 2025 års observerade dagbelopp med 69/31 dagandel ger:

`0,69 × 716 + 0,31 × 900 = 773 kr/dag`

Det verifierar att tidigare grovantagande om cirka 770 kr/dag låg nära det observerade systemgenomsnitt som kan rekonstrueras från könsdata.

### Föräldrar befinner sig i en inkomstmässigt viktig ålder

Förstagångsföräldrar var 2025 i genomsnitt **30,74 år (mödrar)** respektive **32,68 år (fäder)**.

Källa: SCB, *Föräldrars ålder i Sverige*.
https://www.scb.se/hitta-statistik/sverige-i-siffror/manniskorna-i-sverige/foraldrars-alder-i-sverige/

SCB visar samtidigt att bland personer med barn är könsgapet i sammanräknad förvärvsinkomst stort i 30-årsåldern: kvinnors median ligger drygt **140 000 kr/år** under mäns. Detta är inte samma population som nyblivna föräldrar före födseln och får därför inte användas som exakt indata, men det visar att typfall där båda antas ha samma lön är dåligt representativa för den faktiska fördelningen.

Källa: SCB, *På tal om kvinnor och män 2026*.
https://www.scb.se/hitta-statistik/statistik-efter-amne/befolkning-och-levnadsforhallanden/jamstalldhet/jamstalldhetsstatistik/pong/statistiknyhet/pa-tal-om-kvinnor-och-man-2026/

## Viktig implikation för reformen

Föräldraanställningen betalar samma omsorgslön oavsett tidigare inkomst. Dagens system gör inte det: föräldrapenningen följer SGI upp till tak och observerat dagbelopp skiljer sig tydligt mellan kvinnor och män.

Det innebär att reformens ekonomiska effekt är heterogen:

- för låginkomsttagare/grundnivåmottagare kan 28 600 kr/mån innebära en stor förstärkning,
- för personer kring normal arbetsinkomst kan skillnaden vara mindre,
- för höginkomsttagare innebär den fasta omsorgslönen en större privat alternativkostnad än dagens SGI-baserade ersättning + eventuell kollektivavtalad föräldralön.

Detta är avsiktligt i reformdesignen: omsorgsarbetets lön bestäms av arbetet, inte av den anställdes tidigare marknadslön.

## En viktig jämställdhetseffekt

Dagens observerade system kombinerar två skevheter:

1. kvinnor tar majoriteten av dagarna (cirka 69 procent 2025),
2. kvinnor får lägre genomsnittligt belopp per dag (716 mot 900 kr).

Reformens fasta omsorgslön tar bort den andra mekanismen helt: samma omsorgsarbete får samma lön oavsett vilken förälder som utför det.

Den tar däremot **inte automatiskt bort den första mekanismen**. Om familjer fritt kan omfördela en 50/50-rätt till 100/0 kan uttaget fortfarande bli könsskevt. Detta ska redovisas som beteende-/jämställdhetsfråga, inte döljas i ekonomimodellen.

## Vad vi fortfarande inte vet

Offentligt tillgänglig aggregerad statistik ger inte i denna genomgång en tillräckligt ren tabell över **båda föräldrarnas individuella arbetsinkomst/SGI precis före varje barns födelse, korsad med efterföljande uttagsandel**.

Det betyder att vi inte bör skapa falsk precision genom att vikta nationen med konstruerade par som `30k/30k`, `40k/40k`, `70k/30k`.

För en propositions-/SOU-nivåmodell bör detta göras med registerdata eller SCB:s mikrosimuleringsmodell FASIT. SCB använder FASIT för att analysera hur budgetförändringar påverkar olika hushållstyper och disponibla inkomster.

Källa: SCB, FASIT – budgeteffekter 2026.
https://www.scb.se/hitta-statistik/statistik-efter-amne/hushallens-ekonomi/hushallens-inkomster-tillgangar-och-skulder/fordelningsanalytiskt-statistiksystem-for-inkomster-och-transfereringar-fasit/pong/statistiknyhet/effekter-for-hushallens-ekonomi-i-statens-budget-2026/

## Ny standard för typfall

Typfall används från och med nu för **känslighetsanalys**, inte som nationell viktning.

Minst följande ska testas:

- låg/låg,
- medianlik/medianlik,
- låg/hög,
- medianlik/hög,
- hög/hög,
- ensamstående låg,
- ensamstående medianlik,
- ensamstående hög.

För varje typfall jämförs samma hushåll i två världar:

**Dagens system:** undanträngd arbetsinkomst + faktisk/approximerad FP + skatt + kollektivavtalad ersättning där relevant + pensionsskydd.

**Reformen:** undanträngd arbetsinkomst + omsorgslön + skatt + semester + PA16 + övriga reformkostnader.

Ingen typfallsmix får kallas nationellt genomsnitt utan empiriska vikter.

## Nytt hårt ankare för dagens kostnad

Könsviktningen av observerade 2025-belopp ger cirka **773 kr per uttagen nettodag**. Det ligger nära tidigare 770-antagande och stärker därmed den preliminära kohortkalkylen som storleksordning.

Med 424 observerade nettodagar för 2017-kohorten blir en enkel kontroll:

`424 × 773 ≈ 327 752 kr i föräldrapenning per barn`

Detta är fortfarande en hybrid av en historisk uttagskohort och 2025 års ersättningsnivåer och ska därför beskrivas som **prisnivåkalibrerad kontroll**, inte faktisk livstidsutgift för 2017-barnet.

## Evidensstatus

Föräldrainkomst/typfall: **6,5/10**.

Vi har nu observerade könsspecifika dagbelopp, faktisk uttagsandel och relevanta SCB-data om inkomstskillnader. Men en nationellt viktad kontrafaktisk nettokalkyl kräver mikrodata/FASIT eller motsvarande registerkörning.

Ekonomi 3.0 ska därför kunna nå hög robusthet i **direkt kostnadsmodell** utan att låtsas ha exakt hushållsfördelningsprecision som endast mikrodata kan ge.