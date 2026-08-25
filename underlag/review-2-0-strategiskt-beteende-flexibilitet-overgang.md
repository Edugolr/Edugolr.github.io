# Review 2.0 – strategiskt beteende, flexibilitet och övergång

## Syfte

Attackera modellen utifrån rationellt, lagligt strategiskt beteende och samtidigt skilja verklig flexibilitet från administrativ finfördelning. Detta pass korrigerar också två tidigare risker:

1. produktionsbortfall får inte härledas enbart från hur många betalda dagar som tas under barnets första år; relevant kontrafaktisk är total faktisk frånvaro över relevant tidshorisont,
2. de 25 betalda dagarna efter kärnomsorgsperioden är inte vanlig fri semester utan en avgränsad omställningsperiod i nära anslutning till omsorgsanställningens slut.

## 1. Produktionsbortfall – korrigerad hypotes

Att dagens föräldrar använder en stor andel obetald ledighet under första året visar inte i sig att reformen skapar motsvarande ny total frånvaro. Dagens 480 föräldrapenningdagar kan användas över en mycket längre period och faktisk ledighet måste mätas separat från utbetalda dagar.

Rätt kontrafaktiskt test är därför:

> total faktisk arbetsfrånvaro per barn under relevant flerårsperiod med reformen minus total faktisk arbetsfrånvaro per barn i dagens system.

Timing är en separat dimension. Reformen kan koncentrera mer av frånvaron till första året samtidigt som total frånvaro är oförändrad, lägre eller högre. För arbetsgivare kan koncentration och förutsägbarhet ha effekter även om totalantalet frånvarodagar är lika.

**Status:** 🟡 empirisk fråga. Tidigare formulering om sannolikt nytt produktionsbortfall enbart på grund av bättre finansiering under första året är för stark och ska inte användas som etablerad effekt.

## 2. Flexibilitet måste definieras funktionellt

Dagens system erbjuder mycket finfördelad uttagsflexibilitet. Det betyder inte automatiskt att maximal administrativ granularitet är optimal omsorgsflexibilitet.

Reformen bör fråga vilken flexibilitet barn och familjer faktiskt behöver.

### Hypotes om behovskurva

Det finns stark institutionell signal om att extra samtidig omsorg behövs nära födseln: dagens system har särskilda 10 dagar för den andra föräldern i samband med födseln och har senare byggt ut möjligheten till samtidig ledighet genom dubbeldagar.

En rimlig men ännu inte låst hypotes är:

> behovet av samtidig vuxenkapacitet är högst i början och avtar under första året, medan behovet av minst en stabil primär omsorgsbärare kvarstår.

Detta ska inte kodas från intuition. Vi behöver evidens om postpartum återhämtning, sömn, amning/matning, flerbarnsfamiljer, psykisk och fysisk hälsa, barns omsorgsintensitet samt effekter av samtidig ledighet.

### Designkonsekvens

Vi bör inte utgå från att `1,0 FTE totalt under exakt hela året` eller `samma extra FTE hela året` är naturgivna former. Kapacitetsprofilen kan behöva vara tidsberoende, exempelvis högre total samhällsburen omsorgskapacitet i en tidig fas och därefter avtrappning.

Exakta nivåer och perioder är forskningsparametrar, inte beslut i denna review.

**Status:** 🟡. Extra tidig kapacitet är välmotiverad som forskningsspår; exakt kurva är öppen.

## 3. 25 dagar = betald omställningsperiod, inte vanlig semesterbank

De 25 dagarna kommer historiskt från tanken att en omsorgsanställd också ska ha semesterliknande rättigheter. Men deras funktion i modellen är nu tydligare och bör beskrivas korrekt.

De ska ligga i direkt eller nära anslutning till kärnomsorgsperiodens slut och fungera som en **betald omställningsperiod** mellan två system:

- barnet går från individuell omsorg till förskola,
- omsorgspersonen går från omsorgsarbete tillbaka till ordinarie arbetsliv,
- inskolning kan ske inom perioden,
- praktiska avvikelser i övergången kan absorberas utan en ny separat förmån,
- återstående tid ger arbetstagaren återhämtning/omställning efter omsorgsuppdraget.

Detta är därför inte en fritt placerbar 25-dagars semesterbank över kommande år.

### Strategisk konsekvens

En tidigare attack – att hushåll rationellt skulle kunna spara eller flytta de 25 dagarna långt framåt – bygger på fel modell. Om dagarna är knutna till övergångsfönstret försvinner huvuddelen av den optimeringsytan.

Det återstår att bestämma:

- hur nära anslutning definieras,
- om alla 25 dagar måste tas sammanhängande eller kan fördelas inom ett kort fönster,
- vad som händer om förskolestart sker tidigare/senare,
- hur dagarna fungerar vid opt-out från förskoleplats,
- hur de juridiskt benämns om A respektive B blir bärare.

**Status:** 🟢 funktion, 🟡 juridisk/teknisk form.

## 4. Rationell optimering – attacker

### A. Lägst alternativkostnad tar mest omsorg

Sannolikt. Detta är redan identifierat som en konsekvens av omgivande lönestruktur och privata alternativkostnader. Modellen ska mäta utfallet men inte automatiskt differentiera omsorgslönen efter tidigare lön.

**Arkitekturhot:** nej, så länge reformens egna regler är köns- och personneutrala.

### B. Hushållet flyttar FTE ofta för att maximera privat nytta

Möjligt om systemet tillåter tim- eller dagsgranularitet utan friktion. Det skulle skapa hög administration och göra arbetsgivares planering sämre.

Motdesignen bör dock inte vara godtycklig rigiditet. Empirin ska avgöra vilken faktisk bytesfrekvens familjer behöver. Standard kan vara stabila perioder med möjlighet till dokumenterade korta undantag.

**Status:** 🟡 designparameter.

### C. Företagare kombinerar hög omsorgs-FTE med faktisk verksamhet

Detta är både kontroll- och definitionsfråga. Om 1,0 omsorgs-FTE betyder att personen avstår från motsvarande förvärvsarbete måste kompatibel verksamhet definieras. Passiv ägarinkomst är inte samma sak som aktivt arbete.

**Status:** 🟡 verklig edge case; juridiska kusiner och dagens SGI/FP-kontroller ska studeras före specialregel.

### D. Opt-out från förskola förlänger statligt betald omsorg

Ska inte vara möjligt enligt kärnarkitekturen. Opt-out betyder att familjen väljer bort den erbjudna offentliga förskoleplatsen efter den samhällsfinansierade kärnperioden. Fortsatt hemomsorg därefter använder egen ekonomi och befintlig obetald ledighetsrätt, inte automatisk förlängning av omsorgslönen.

**Status:** 🟢.

### E. Täta barn staplar rättigheter

Detta är inte i sig strategiskt missbruk: två barn skapar två verkliga omsorgsbehov. Men överlapp mellan barns kapacitetsprofiler, 25-dagars omställningsperioder och nya startperioder kan skapa dubbelkompensation eller juridiska kollisioner om modellen är dåligt definierad.

Rätt fråga är fysisk omsorgskapacitet och faktisk arbetsstatus, inte misstanke mot familjen.

**Status:** 🟡 integrationsfall.

### F. Familjen planerar födsel/ledighet efter ekonomiska regler

Alla familjepolitiska system skapar incitament. Reformen ska inte anta att fertilitet eller timing är opåverkad. Detta analyseras separat i fertilitetsspåret. Ett observerat beteendesvar är inte automatiskt ett problem; det måste bedömas mot reformens mål och kostnad.

**Status:** 🟡 forskningsspår.

## 5. Ny distinktion: flexibilitet har minst fyra dimensioner

För att undvika att ordet används som allmän kritik ska framtida review skilja:

1. **omsorgsflexibilitet** – kan barnet få rätt person och kapacitet när behovet finns?
2. **familjeflexibilitet** – kan hushållet rimligt dela och byta omsorgsbärare?
3. **arbetsmarknadsflexibilitet** – kan ordinarie arbetsgivare planera och hantera frånvaron?
4. **administrativ granularitet** – hur små tidsenheter kan registreras och ändras?

Mer av punkt 4 är inte automatiskt mer av punkt 1–3. Reformen bör maximera funktionell flexibilitet och minimera onödig administrativ granularitet.

## 6. Evidensagenda för kapacitetskurvan första året

Före låsning av startperiod och eventuell avtrappning behövs en syntes av:

- effekter av partnerns samtidiga ledighet efter födsel,
- postpartum fysisk återhämtning,
- postpartum psykisk hälsa,
- sömn och nattlig omsorg,
- matning/amning och praktisk belastning,
- första barn kontra senare barn,
- tvillingar/flerbarn,
- ensamstående föräldrar,
- barns omsorgsintensitet över 0–12 månader,
- hur mycket extra vuxenkapacitet familjer faktiskt använder när ekonomiska hinder minskar.

Målet är inte att hitta en perfekt biologisk FTE-tabell utan att avgöra om en enkel stegvis modell kan fånga huvuddelen av behovet bättre än en platt regel.

## Reviewdom

- 🟢 De 25 dagarnas funktion låses som **betald omställningsperiod i nära anslutning till kärnperiodens slut**, inte generell framtida semesterbank.
- 🟢 Opt-out från förskola förlänger inte den betalda kärnomsorgen.
- 🟢 Flexibilitet ska bedömas funktionellt, inte som maximal uttagsgranularitet.
- 🟡 Total arbetsfrånvaro/produktionsbortfall måste mätas över relevant flerårsperiod; första årets betalda/obetalda mix räcker inte.
- 🟡 Extra samtidig kapacitet tidigt är en stark hypotes men exakt nivå och avtrappning kräver evidens.
- 🟡 Företagare, täta barn och bytesfrekvens är riktiga integrations-/designfall.
- 🔴 Ingen ny kärnblocker identifierad i detta pass.

## Nästa attack

Gör den tidiga kapacitetsprofilen till ett separat empiriskt forskningspass. Försök falsifiera både en platt 1,0-FTE-modell och intuitionen att behovet av extra samtidig vuxenkapacitet monotont avtar. Därefter återupptas den bredare strategiska-equilibrium-attacken med en bättre definierad modell.