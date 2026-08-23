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

Försäkringskassans årsredovisning 2025 anger faktiskt utfall för föräldrapenning till **33 686 mnkr**.

Samma årsredovisning redovisar **3 552 mnkr** i statlig ålderspensionsavgift för föräldrapenning.

Det ger ett observerat statligt utgiftsankare på **37,238 mdkr** för föräldrapenning + dess statliga ålderspensionsavgift 2025.

Detta är ett årsflöde över flera barnkohorter – inte kostnaden för 2025 års nyfödda.

Källa: Försäkringskassan, *Årsredovisning 2025*:
https://www.forsakringskassan.se/download/18.6824ccfb19c0e5392cd73/1771574743917/forsakringskassans-arsredovisning-2025.pdf

### 2.3 Kontroll mot 2026 års budget

Budgetpropositionen för 2026 budgeterar:

- föräldrapenning: **35 622,189 mnkr**,
- statlig ålderspensionsavgift för föräldrapenning: **3 203,646 mnkr**.

2026-budgeten används som känslighets-/rimlighetskontroll, inte som ersättning för observerat 2025-utfall.

Källa: Regeringen, *Budgetpropositionen för 2026*, utgiftsområde 12:
https://www.regeringen.se/contentassets/3416d1df56ae4fcaacf03ecd8ed81ab1/budgetpropositionen-for-2026-prop.-2025261-hela-dokumentet_.pdf

### 2.4 Arbetsgivaravgifter

Full arbetsgivaravgift är **31,42 procent** 2026 för de normala åldersgrupper som är relevanta för modellen. För en statlig arbetsgivare ska denna redovisas i arbetsgivarmyndighetens bruttobudget, men den får inte mekaniskt behandlas som en lika stor samhällsekonomisk nettokostnad eftersom delar är interna flöden inom offentlig sektor.

Källa: Skatteverket, arbetsgivardeklaration 2026 (SKV 448):
https://skatteverket.se/download/18.1522bf3f19aea8075ba32c5/1765961519362/forenklad-arbetsgivardeklaration-for-privata-tjanster-skv448-utgava31.pdf

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

Grundscenariot får **inte** tillgodoräkna reformen:

- högre fertilitet,
- högre framtida sysselsättning,
- produktivitetsvinster,
- lägre sjukskrivning,
- bättre barns framtida inkomster,
- jämställdhetsvinster i kronor,
- lägre personalomsättning hos privata arbetsgivare,
- lägre administration utan verifierad kalkyl.

Dessa effekter kan vara sannolika eller värdefulla, men ska redovisas separat som `ej prissatta möjliga effekter` tills kausalt och kvantitativt stöd finns.

Detta är en styrka i modellen: **grundförslaget måste kunna bedömas utan att framtida nyttor används som budgetplugg.**

## 7. Nästa beräkning – kohorten i dagens system

Den centrala öppna frågan är nu:

> **Hur stor offentlig kostnad genererar ett genomsnittligt barn under hela den föräldrapenningrätt som vår reform ersätter eller avskaffar?**

För att svara måste vi bygga dagens kostnad per barn/kohort, inte dividera ett kalenderårs föräldrapenningutgift med samma års födda.

Minimikrav:

1. uttagna föräldrapenningdagar per barn över barnets ålder,
2. genomsnittlig ersättning per dag/ersättningsnivå,
3. hur mycket av uttaget som ligger 0–12, 12–24 och >24 månader,
4. statlig ålderspensionsavgift kopplad till dessa utbetalningar,
5. vilka rättigheter reformen faktiskt ersätter respektive lämnar kvar,
6. kohortstorlek och flerbarnsfrekvens.

När detta finns kan `dagens kostnad per barn` jämföras med `reformens kostnad per barn` utan tidsdimensionsfel.

## 8. Första dom efter revision

Ekonomi 2.0:s slutsats att dagens direkta finansiering (~41,3 mdkr) och reformen (~40,0 mdkr) ligger nära varandra är **inte tillräckligt robust för att användas som slutsats**. Den ska betraktas som en tidigare hypotes.

Det vi redan kan säga säkert är:

- reformens rena grundlön för en 97 491-barnskohort är cirka **33,46 mdkr**,
- observerad föräldrapenning 2025 var **33,686 mdkr** och dess statliga ålderspensionsavgift **3,552 mdkr**,
- dessa tal får inte direkt kvittas mot varandra eftersom dagens årsutgift omfattar flera kohorter,
- VAB/tillfällig föräldrapenning ligger utanför reformens ersatta kärna och ska inte bokföras som besparing,
- arbetsmarknadsfinansierade kostnader ska redovisas som egen lagerpost tills de är empiriskt källsäkrade.

**Evidensstatus ekonomi efter denna revision: 6/10.**

Poängen höjs från tidigare ungefär 5/10 eftersom de centrala statsbudgetankarna nu är verifierade och ett metodfel har identifierats. Den höjs inte mer förrän dagens system är omräknat kohortvis och reformens semester/pension/reservomsorg är källsäkrade.
