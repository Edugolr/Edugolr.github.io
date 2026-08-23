# Ekonomi 3.0 – reservomsorg, sjukfrånvaro och administration

> Revisionsunderlag. Syftet är att ersätta tidigare schabloner med observerade ankare och tydligt skilja sjukersättning från den faktiska kostnaden för att säkra barnets omsorg.

## 1. Slutsats i korthet

De tidigare posterna `0,30 mdkr reservomsorg` och `0,25 mdkr administration` ska inte längre användas som punktestimat.

- **Administration:** 0,25 mdkr saknade robust grund. Dagens föräldrapenning kostade Försäkringskassan **613 mnkr i förvaltningskostnad 2025**. Det är ett hårt övre jämförelseankare för den administration reformen i stor utsträckning ersätter, men inte ett automatiskt reformestimat.
- **Reservomsorg/sjukfrånvaro:** 0,30 mdkr är för lågt som generell proxy om den skulle avse hela sjukfrånvaron hos de föräldraanställda. SCB:s observerade sjukfrånvaro och sjukpenningtal visar att sjukdom är materiell. Men hela sjuklönekostnaden är inte en extra samhällskostnad relativt dagens system; den centrala nya resurskostnaden är att **barnets omsorg fortfarande måste utföras när den ordinarie föräldraanställde är sjuk**.

Ekonomi 3.0 ska därför separera tre saker:

1. lön/sjuklön/sjukpenning till den sjuka omsorgsarbetaren,
2. kostnad för ersättande omsorg,
3. administration av frånvaro och ersättare.

## 2. Vad dagens system redan gör när föräldern blir sjuk

Försäkringskassan anger att en föräldraledig kan få sjukpenning om sjukdom gör att personen inte kan ta hand om barnet och någon annan gör det. Arbetsförmågan i omsorgsuppgiften kan vara nedsatt 25, 50, 75 eller 100 procent.

För barn från 8 månaders ålder kan någon annan i flera fall få tillfällig föräldrapenning (vab) när den ordinarie vårdaren är sjuk. För yngre barn används bland annat den andra förälderns föräldrapenning; för ensamstående finns särskilda möjligheter att föra över dagar och i vissa situationer utvidgad tillfällig föräldrapenning.

Källor:
- Försäkringskassan, *Föräldraledig och sjuk*: https://www.forsakringskassan.se/privatperson/sjuk-eller-skadad/ersattning-nar-du-ar-sjuk-eller-skadad-sjukpenning/foraldraledig-och-sjuk
- Försäkringskassan, *Andra än föräldrar kan vabba*: https://www.forsakringskassan.se/privatperson/familj-och-barn/andra-an-foraldrar-kan-vabba

**Konsekvens:** reservomsorg är inte ett helt nytt behov som reformen skapar. Dagens system har redan regler och offentliga utgifter för samma tillstånd. Nettoanalysen måste jämföra systemen, inte bokföra all reformfrånvaro som ny kostnad.

## 3. Observerade ankare för sjukfrånvaro

SCB:s statistik över sjuklöneperioden visar exempelvis i januari 2025:

- totalt: **2,1 % sjukfrånvaro**,
- kvinnor: **2,5 %**,
- män: **1,8 %**,
- staten: **1,7 %**,
- kommuner: **3,2 %**.

Detta avser sjukfrånvaro under sjuklöneperioden och varierar över året. Det ska inte direkt multipliceras med hela årslönen som ett slutligt årsestimat, men visar att en reservpost på endast några tiondels miljarder kan vara otillräcklig om den påstås täcka all frånvaro.

SCB/FK:s sjukpenningtal 2025 visar dessutom längre sjukfrånvaro efter sjuklöneperioden. I typiska föräldraåldrar var sjukpenningtalet:

| Ålder | Kvinnor | Män |
|---|---:|---:|
| 25–29 | 9,66 dagar | 4,36 dagar |
| 30–34 | 15,17 dagar | 7,53 dagar |
| 35–39 | 15,41 dagar | 7,02 dagar |

Detta visar också varför könsfördelningen av omsorgsuppdraget påverkar sjukfrånvarons förväntade kostnad, även om själva omsorgslönen är könsneutral.

Källor:
- SCB, *Anställningar – januari 2025*: https://www.scb.se/hitta-statistik/statistik-efter-amne/arbetsmarknad/efterfragan-pa-arbetskraft/anstallningar/pong/statistiknyhet/anstallningar-anst-januari-2025/
- SCB, *På tal om kvinnor och män 2026*: https://www.scb.se/hitta-statistik/statistik-efter-amne/befolkning-och-levnadsforhallanden/jamstalldhet/jamstalldhetsstatistik/produktrelaterat/rapporter/kvinnor-och-man-2026

## 4. Reservomsorgens verkliga ekonomiska fråga

Föräldraanställningens princip är att barnets rätt till omsorg inte försvinner när arbetstagaren blir sjuk. Därför måste systemet ha kapacitet att ersätta omsorgsarbetaren.

Men det finns flera möjliga ersättare:

- annan föräldraanställd/vårdnadshavare,
- närstående som frivilligt tar ett tidsbegränsat omsorgsuppdrag,
- offentlig reservomsorg,
- annan särskilt godkänd omsorgsperson.

Det är fel att anta att varje sjukdag kräver en ny heltidsanställd offentlig reservperson. Det är lika fel att anta att en partner alltid finns och arbetar gratis.

### Ny kostnadsformel

Låt:

- `D` = antal dagar då ordinarie omsorgsarbetare faktiskt inte kan utföra uppdraget,
- `q` = andel av dessa dagar där ersättaren innebär **ytterligare offentlig resurskostnad** utöver redan existerande ersättningssystem,
- `C` = offentlig marginalkostnad per ersättningsdag.

Då är den nya reservkostnaden:

`reservkostnad = barn × D × q × C`

Ekonomi 3.0 ska inte sätta ett punktvärde på `q` innan vi har empiriskt eller administrativt underlag.

## 5. Känslighetsanalys – inte prognos

För en kohort på 97 491 barn kan vi visa hur känslig kostnaden är utan att låtsas veta `q`.

Om en ersättningsdag grovt prissätts med omsorgslönens arbetsdagsvärde (28 600 × 12 / cirka 260 arbetsdagar ≈ **1 320 kr/dag**, före arbetsgivaravgifter/pension), ger varje **1 extra offentlig ersättningsdag per barn** ungefär:

`97 491 × 1 320 ≈ 129 mnkr` i direkt lön.

Det betyder ungefär:

| Extra offentligt finansierade ersättningsdagar per barn | Direkt lön |
|---:|---:|
| 1 | 0,13 mdkr |
| 2 | 0,26 mdkr |
| 3 | 0,39 mdkr |
| 5 | 0,64 mdkr |
| 10 | 1,29 mdkr |

Arbetsgivaravgifter, pension och eventuell beredskapskostnad tillkommer beroende på organisationsmodell.

**Tolkning:** gamla 0,30 mdkr motsvarar bara drygt två extra fullt offentligt finansierade ersättningsdagar per barn i direkt lön. Det kan visa sig rimligt, men det kan inte längre presenteras som verifierad central uppskattning.

## 6. Administration – nu har vi ett hårt jämförelseankare

Försäkringskassans årsredovisning 2025 redovisar **613 mnkr i förvaltningskostnader för föräldrapenning**, upp från 567 mnkr 2024. Det motsvarar 5,3 procent av myndighetens totala förvaltningskostnader.

Källa: Försäkringskassan, *Årsredovisning 2025*, tabell 9:
https://www.forsakringskassan.se/download/18.6824ccfb19c0e5392cd73/1771574743917/forsakringskassans-arsredovisning-2025.pdf

Detta ger två viktiga slutsatser:

1. Ekonomi 2.0:s tidigare uppskattning av cirka 0,61 mdkr för dagens FP-administration var i sak korrekt och kan nu klassas som **🟢 observerat utfall**.
2. Reformens gamla `0,25 mdkr` kan inte verifieras från detta. Den kan vara lägre än dagens kostnad eftersom modellen eliminerar SGI-beräkningar, 480-dagarskonton, ersättningsnivåer och mycket löpande uttagsadministration; men reformen skapar också arbetsgivaradministration, lön, pension, semester, fördelning mellan omsorgsarbetare, sjukfrånvaro och reservkapacitet.

Därför ska reformadministrationen tills vidare redovisas som **öppen post**, inte 0,25 mdkr.

## 7. Hur administration ska modelleras

Administrationen delas i:

### A. Kärnadministration
- etablera föräldraanställning,
- verifiera relation/vårdnad/behörighet,
- lön och pension,
- 50/50-default och gemensamt godkänd omfördelning,
- start/slut av anställning.

### B. Händelseadministration
- sjukfrånvaro,
- reservomsorg,
- flerbarn,
- dödsfall/särskilda familjesituationer,
- internationella/EU-fall.

### C. Kontroll
- felaktiga utbetalningar,
- dubbel ersättning/arbete,
- identitet och bosättning,
- revision.

Målet är inte `så lite administration som möjligt` utan **lägsta robusta administration som kan garantera rätt lön, barnets omsorg och kontroll av offentliga medel**.

## 8. Konservativ redovisning tills bättre data finns

I nästa sammanställning ska vi visa:

- dagens FP-administration: **0,613 mdkr observerat 2025**,
- reformadministration: **öppen / scenario**, inte påstådd 0,25 mdkr,
- reservomsorg: **scenario per extra offentlig ersättningsdag**, inte påstådd 0,30 mdkr,
- dagens kostnader när ordinarie vårdare är sjuk: ska dras fram separat innan nettoeffekt anges.

Vi får alltså inte räkna `0,613 - 0,250 = 0,363 mdkr besparing` som basresultat.

## 9. Reviderad status

| Post | Tidigare | Ny status |
|---|---:|---|
| Dagens FP-administration | ~0,61 mdkr | 🟢 **0,613 mdkr observerat 2025** |
| Reformadministration | 0,25 mdkr | 🔴 punktestimat indraget; scenario krävs |
| Reservomsorg/sjukfrånvaro | 0,30 mdkr | 🔴 punktestimat indraget; kostnadsfunktion krävs |
| Sjukfrånvaro | implicit | 🟡 observerade nationella ankare finns |
| Dagens ersättning när ordinarie vårdare är sjuk | saknades | 🟡 existerar och måste ingå i kontrafaktiskt netto |

## 10. Metodisk konsekvens

Detta gör kalkylen mindre snygg men mer korrekt.

Vi har nu slutat använda två av Ekonomi 2.0:s svagaste punktestimat. I stället har vi:

- en observerad administrativ kostnad i dagens system,
- observerade sjukfrånvaroankare,
- en transparent reservkostnadsfunktion,
- explicit kontrafaktiskt krav.

Nästa steg är att sammanställa **Ekonomi 3.0 – konservativt nettointervall** där alla gröna poster räknas, gula poster visas som intervall/scenarier och röda poster inte får påverka huvudresultatet utan markeras separat.
