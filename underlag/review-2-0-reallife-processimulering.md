# Review 2.0 – real-life processimulering

## Frågan

Är den föreslagna modellen faktiskt enklare och mer förutsägbar i verkliga familjeflöden, eller ser den bara renare ut på whiteboard?

Detta pass jämför därför **händelser, beslut, dataflöden och omplanering** i dagens svenska föräldraförsäkring med reformens nuvarande arkitektur.

Det är inte en tidsstudie och ger ännu ingen monetär administrationsbesparing. Målet är att hitta var komplexiteten faktiskt ligger och vilka delar som kan automatiseras.

## Gemensamma fakta i nuläget

Dagens föräldrapenning är en dagbank på 480 dagar. Uttag kan göras på olika omfattningar, föräldrar kan överföra dagar med vissa begränsningar och en ändrad plan kräver normalt en ny ansökan. Ersättningen påverkas av SGI. Företagare har särskilda SGI-frågor beroende på bolagsform och inkomst. Föräldrar kan dessutom vara helt lediga från ordinarie arbete till barnet är 18 månader utan att ta föräldrapenning.

Det betyder att **betald dag, faktisk ledighet och omsorg inte är samma variabel**. För barn födda 2016 var föräldrar i genomsnitt obetalt lediga 39 procent av tiden före ettårsdagen.

Reformens jämförelseobjekt är därför inte "en enkel försäkring mot en ny anställning". Det är två kompletta processer för hur ett barns första omsorgsperiod faktiskt produceras.

---

# Familj A – två vanliga lönearbetare

## Scenario

- två vårdnadshavare,
- båda anställda,
- olika löner,
- ett barn,
- inga medicinska specialfall,
- båda vill dela omsorgen,
- barnet ska börja förskola vid standardbrytpunkten.

## Dagens system

### Före/kring födsel

Familjen behöver förstå:

1. vem som har vilka föräldrapenningdagar,
2. vilka dagar som är reserverade,
3. respektive SGI och ersättningsnivå,
4. hur många dagar per vecka som behöver tas ut för önskad månadsinkomst,
5. hur obetald ledighet påverkar ekonomin och senare SGI-skydd,
6. hur dubbeldagar ska användas,
7. hur planerad ledighet ska meddelas arbetsgivarna.

### Under första året

Varje förändring i uttagsplanen kan innebära ny ansökan. Ändrad inkomst kan behöva rapporteras eftersom den kan påverka SGI.

Familjen kan medvetet använda obetalda dagar för att sträcka ledigheten. Därmed skiljer sig:

- kalenderledighet,
- antal förbrukade föräldrapenningdagar,
- utbetald ersättning,
- faktisk omsorgstid.

Om föräldrarna byter vid exempelvis månad 7 måste arbetsgivarna och Försäkringskassan hantera den nya fördelningen. Om de senare vill ändra igen förändras processen igen.

### Sjukdom

Om den föräldraledige blir sjuk måste personen sjukanmäla sig, ändra föräldrapenningansökan och söka sjukpenning. Någon annan måste faktiskt ta hand om barnet för att sjukpenning ska kunna betalas.

### Mot förskola

Familjen måste själv initiera önskemål om förskoleplats. Kommunen ska i dagens system erbjuda plats inom fyra månader efter anmälan.

## Reformen

### Vid födsel

Barnet skapar en standardiserad omsorgspost:

- `barn_id`,
- brytdatum,
- 1,0 FTE normal omsorgskapacitet,
- defaultfördelning mellan behöriga vårdnadshavare,
- planerat datum då kommunen ska kunna erbjuda förskola.

Familjen behöver inte optimera en dagbank eller SGI för att bestämma hur mycket ersättning en omsorgsdag är värd.

### Under året

Om familjen vill byta innehavare från A till B registreras **vem som bär barnets FTE från datum X**. Barnets totala kapacitet ändras inte.

Ersättningen är densamma per FTE oavsett vem som bär den.

Ordinarie arbetsgivare behöver framför allt veta:

- från vilket datum arbetstagaren lämnar,
- eventuell FTE under delad period,
- planerat återgångsdatum,
- senare registrerad förändring.

### Sjukdom

Den vuxnes sjukdom och barnets omsorgskapacitet separeras. Den sjuke följer sjukprocessen. Barnets saknade FTE måste samtidigt flyttas till annan behörig person eller reservlösning.

### Mot förskola

Kommunen har redan barnets standardiserade behovsdatum som prognos. Plats erbjuds som default. Familjen kan opt-outa om den väljer fortsatt egen omsorg inom annan ledighetsrätt.

Efter omsorgsperioden finns 25 betalda övergångsdagar som kan användas för inskolning, återhämtning och återgång.

## Processdom A

**Dagens rörliga dimensioner:** SGI, dagtyp, antal uttagsdagar, uttagsgrad, obetalda dagar, reserverade dagar, dubbeldagar, ändringsansökningar, arbetsgivarledighet och förskoleansökan.

**Reformens centrala rörliga dimensioner:** FTE-innehavare, FTE-grad, frånvaro/sjukdom och opt-out från förskoleplats.

För normalfamiljen är reformen processmässigt klart enklare **om** FTE-registrering och statlig omsorgsanställning kan skapas maskinellt.

---

# Familj B – ensam vårdnadshavare utan privat reservnätverk

## Scenario

- ensam vårdnadshavare,
- anställd före födseln,
- inget tillgängligt privat nätverk,
- blir sjuk fem dagar när barnet är sex månader.

Detta är ett viktigt stresstest eftersom en modell som bara fungerar när mor-/farföräldrar räddar systemet inte är universell.

## Dagens system

Föräldern disponerar hela dagbanken. Den ekonomiska planeringen är enklare än i tvåföräldersfallet men SGI, uttagsgrad, betalda/obetalda dagar och framtida dagbank finns kvar.

Vid sjukdom måste föräldrapenningen pausas och sjukpenning sökas. För sjukpenning krävs att någon annan faktiskt tar hand om barnet.

Det praktiska problemet är därmed inte bara ersättningen: **vem producerar omsorgen?**

Dagens system har ingen generell automatisk offentlig spädbarnsreserv som aktiveras bara därför att en ensam föräldraledig person blir tillfälligt sjuk.

## Reformen

Barnet har 1,0 FTE oavsett den vuxnes sjukdom.

När innehavaren blir arbetsoförmögen uppstår två separata händelser:

1. vuxenens sjukfrånvaro,
2. barnets vakanta omsorgskapacitet.

Om ingen privat behörig reserv finns måste den offentliga sista-linjen kunna lösa den andra händelsen.

## Processdom B

Här blir reformen **inte administrativt färdig bara för att FTE-modellen är elegant**.

Den avslöjar däremot problemet explicit i stället för att gömma det i familjens privata nätverk.

**🟢** rättighets-/datamodellen är renare.

**🟡** faktisk offentlig akut reservomsorg är fortfarande en operativ designfråga.

Detta är en viktig skillnad mellan administrativ enkelhet och faktisk tjänsteproduktion.

---

# Familj C – företagare + lönearbetare + mormor som kort reserv

## Scenario

- förälder A driver eget aktiebolag,
- förälder B är lönearbetare,
- de delar året,
- A behöver arbeta 20 procent under en intensiv företagsperiod,
- mormor tar en kort del av omsorgen,
- planen ändras två gånger.

Detta är avsiktligt ett svårt men realistiskt fall.

## Dagens system

Företagaren kan kombinera arbete och föräldrapenning på delar av dagar eller veckor. Ersättningen beror på SGI; för aktiebolagsägaren beräknas den utifrån uttagen lön.

Familjen behöver samordna:

- A:s SGI,
- A:s faktiska arbete,
- A:s uttagsgrad,
- B:s dagar/uttag,
- överföring av dagar,
- mormors överförda dagar,
- mormors egen ansökan,
- eventuella nya ansökningar när planen ändras.

Dagens regler tillåter redan överföring till exempelvis mor-/farförälder, men mottagaren måste själv ansöka och får inte arbeta under den tid ersättningen avser.

## Reformen

Barnets 1,0 FTE kan exempelvis registreras:

- A: 0,8,
- B eller mormor: 0,2,

under den definierade perioden.

När företagsbehovet upphör ändras innehavet tillbaka. Ersättningen per FTE är inte beroende av A:s tidigare uttagna lön ur bolaget.

Det svåra är i stället kontrollen av **dubbel aktivitet**: om A registrerats på 0,8 omsorg ska modellen kunna hantera att A faktiskt arbetar högst den återstående kompatibla omfattningen.

För mormors mycket korta 0,2/1,0-perioder uppstår den tidigare identifierade frågan om full statlig anställning är proportionerlig eller om en juridiskt likvärdig kort uppdragsform behövs.

## Processdom C

Detta är reformens hårdaste administrativa normalfall.

Den tar bort SGI- och dagbanksoptimering men skapar ett behov av robust FTE-redovisning och kontroll mot faktisk annan aktivitet.

Det är ännu inte visat att nettoadministrationen blir lägre för detta hushåll.

**🟡** företagare är därför fortsatt ett explicit pilot-/processfall.

---

# Touchpoint-kartan

Förutsägbarheten ska inte bara bedömas ur familjens perspektiv.

## Barnet

**Dagens system:** omsorgens finansierade längd beror på hur vuxna disponerar dagar och obetald ledighet.

**Reformen:** en känd omsorgsperiod och känd nästa systempunkt.

## Familjen

**Dagens system:** många val ger flexibilitet men också optimerings- och informationsbörda.

**Reformen:** färre ekonomiska parametrar; huvudsakligt val är vem som utför omsorgen och när.

## Ordinarie arbetsgivare

**Dagens system:** arbetstagaren har rätt till hel ledighet till 18 månader och kan senare använda kvarvarande föräldrapenning; ledigheten kan delas i perioder. Arbetsgivaren får alltså viss framförhållning men familjens dagbank fortsätter att skapa senare frånvaromöjligheter.

**Reformen:** större del av den intensiva omsorgsfrånvaron koncentreras till ett förutsägbart fönster med planerad återgång. Hypotesen är lägre planeringsosäkerhet, inte noll frånvaro.

## Kommun/förskola

**Dagens system:** behov initieras genom familjens önskemål; kommunen ska därefter erbjuda plats inom fyra månader.

**Reformen:** födelse + standardbrytpunkt skapar ett tidigt prognosdatum. Default-erbjudande med opt-out har dessutom en svensk administrativ kusin: kommuner använder redan särskilda erbjudanden där plats erbjuds utan vanlig ansökan för vissa äldre barn.

## Staten/administratören

**Dagens system:** behöver hantera dagbank, SGI, olika ersättningsnivåer, omfattning, överföringar och ändringsansökningar.

**Reformen:** behöver hantera barnets kapacitet, behöriga innehavare, FTE-perioder, lön, sjukdom och avvikelser.

Om A vinner som juridisk bärare tillkommer normal löneadministration, arbetsgivardeklaration, pension och arbetsgivarprocesser. Sverige har redan månadsvis arbetsgivardeklaration på individnivå, inklusive uppgifter om viss föräldrafrånvaro, vilket är en möjlig befintlig datakusin snarare än en helt ny rapporteringsvärld.

## Förskolans huvudman

Får bättre efterfrågeprognos men också ett tydligare leveranskrav vid standarddatumet. Förutsägbarheten är alltså både en förmån och en skärpt ansvarslinje.

---

# Besluts-/händelseräkning – första approximation

Det går ännu inte att ge ett hederligt exakt antal myndighetsärenden eftersom både dagens och reformens digitala implementation påverkar antalet. Men vi kan räkna **beslutstyper som familjen måste optimera eller initiera**.

| Dimension | Dagens system | Reformens baseline |
|---|---|---|
| Ersättningsgrund | SGI/grund-/lägstanivå | fast omsorgslön per FTE |
| Dagbank | ja | nej under kärnperioden |
| Val av dagar/vecka | ja | nej |
| Del av dag | ja | FTE endast när faktisk fördelning kräver det |
| Obetald dag för att sträcka systemet | vanlig | inte del av kärnmodellen |
| Reserverade dagar | ja | nej |
| Dubbeldagar | särskild dagtyp | startperiod/flerkapacitet modelleras direkt |
| Ändrad plan | ny FP-ansökan | ändra FTE-innehav/period |
| Ändrad inkomst | kan påverka SGI | påverkar inte omsorgslönen |
| Överföring till annan | dagöverföring + mottagarens ansökan | FTE-registrering + behörighet |
| Sjuk omsorgsperson | pausa FP + sök sjukpenning + lös omsorg | sjukprocess + separat FTE-reserv |
| Förskolestart | familjen initierar | standarddatum + erbjudande/opt-out |
| Inskolning | familjen löser med ledighet/dagar | 25 betalda övergångsdagar |

Tabellen visar en verklig **dimensionsreduktion**, men inte ännu en bevisad kostnadsreduktion.

---

# Var reformen kan bli ett administrativt monster

Fyra risker återstår:

1. **För många FTE-byten.** Om familjer uppmuntras att finfördela omsorgen dag för dag har vi bara byggt en ny dagbank med decimaler.
2. **Full anställningsapparat för mikrouppdrag.** Två dagars reservomsorg får inte kräva en oproportionerlig HR-process.
3. **Företagarkontroll.** FTE måste kunna stämmas av mot faktisk annan aktivitet utan invasiv kontroll.
4. **Myndighetsfragmentering.** Om familjen måste prata separat med fem myndigheter trots en enkel konceptuell modell har vi misslyckats.

## Designkrav som följer

### 1. Perioder, inte timmar

Normal UI/regel bör uttrycka FTE som stabila perioder: exempelvis 1,0 från datum A till B eller 0,5/0,5 under en period. Tim- eller dagmikrostyrning ska vara undantag, inte default.

### 2. En familjeyta

Familjen ska se **ett barns omsorgskapacitet** på ett ställe. Underliggande myndigheter får samordna data utan att familjen behöver förstå organisationskartan.

### 3. Event-driven administration

Normalfallet bör skapas av redan kända livshändelser och registerdata. Familjen ska främst behöva agera när den vill avvika från default.

### 4. Default före ansökan

Barnets grundrätt ska inte kräva att nyblivna föräldrar först känner till och optimerar ett regelverk för att få den.

### 5. Kontrollera avvikelsen

Kontrollresurser bör koncentreras på konflikter mellan registrerad FTE och annan aktivitet, ovanliga bytesmönster eller andra riskindikatorer – inte på normal familjeomsorg.

---

# Reviewdom

**🟢 Förutsägbarhet stärks ytterligare som bärande systemegenskap.** Den ska mätas för samtliga touchpoints, inte bara familjen.

**🟢 Normalfamiljen visar tydlig dimensionsreduktion.** SGI, dagbank, dagtyper och ekonomisk uttagsoptimering ersätts i kärnan av FTE-innehav och period.

**🟢 Kommunens planeringshorisont är strukturellt bättre om standardbrytpunkten är känd från födseln.**

**🟢 Arbetsgivarens frånvarofönster kan bli mer förutsägbart, men detta ska testas empiriskt och får inte beskrivas som bevisad kostnadsbesparing.**

**🟡 Ensamstående utan nätverk visar att reservomsorg fortfarande är en tjänsteproduktionsfråga, inte bara en administrativ fråga.**

**🟡 Företagare + mikrouppdrag är den administrativa stresstesten.**

**🟡 Nettoadministrationskostnaden är fortfarande obevisad.**

**🔴 Ingen ny systemblocker hittades i de tre real-life-flödena.**

## Ny explicit falsifieringsregel

Påståendet att reformen är administrativt enklare ska överges om en processkartläggning/pilot visar att antalet manuella händelser, handläggningstid, fel eller administrationskostnad per barn inte minskar – eller om minskningen för familjen bara flyttar större komplexitet till arbetsgivare, kommuner eller staten.

Förutsägbarhet kan fortfarande vara en separat vinst, men den får då inte användas som synonym för administrativ besparing.

## Nästa mätbara steg

En pilot eller detaljerad processmodell bör logga per barn:

- antal familjeinitierade ändringar,
- antal myndighetsbeslut,
- antal manuella handläggningar,
- antal datakällor som behöver kompletteras manuellt,
- handläggningstid,
- fel/återkrav,
- arbetsgivarens antal planändringar,
- kommunens prognosfel för förskolebehov,
- antal dagar mellan planerad och faktisk förskolestart,
- familjens upplevda administrativa belastning.

Det gör "enklare och mer förutsägbart" falsifierbart.