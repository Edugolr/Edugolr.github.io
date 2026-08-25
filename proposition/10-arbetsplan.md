# Nästa arbetspaket

Arbetet går nu från idéutveckling till **remissförberedande stresstest**. Målet är inte att fylla dokumentationen utan att passera grindarna i `00-remissstatus.md`.

## P0 – semester och anställningens faktiska längd

Detta är högsta prioritet eftersom den aktuella övergångsfasen ligger inom Föräldraanställningen medan äldre ekonomiunderlag fortfarande bygger på 25 semesterdagar efter omsorgsåret.

Utred:

- vilka semesterrättigheter en sådan statlig visstidsanställning faktiskt genererar,
- om semesterersättning vid avslut kan vara huvudlösning utan att skapa ytterligare frånvaro efter övergångsfasen,
- om särskild lagreglering krävs,
- hur semesterkostnaden ska skiljas från kostnaden för övergångstjänsten,
- hur Föräldraanställningens juridiska längd ska beskrivas när omsorgsåret är 12 månader men anställningen även omfattar övergångsfasen.

**Leverans:** juridiskt beslutsunderlag + korrigerad ekonomisk baseline.

## P0 – övergångsklockans trigger

Pröva om cirka 28 kalenderdagar ska börja vid:

1. ettårsbrytpunkten,
2. faktisk planerad introduktionsstart,
3. en samordnad regel där förskoleplats och introduktion måste ligga inom ett definierat fönster kring omsorgsårets slut.

Stresstesta särskilt helger, jul/sommarstängning, sen kommunal placering och barn som inte går vidare till vanlig förskola.

**Leverans:** en enkel normalregel som inte förbrukar barnets övergång innan någon faktisk övergång sker.

## P0 – sjuk omsorgsarbetare och reservomsorg

Definiera en operativ fallback-kedja som inte förutsätter partner eller släkt.

Pröva:

- annan behörig omsorgsperson,
- frivillig godkänd närstående,
- offentlig reservkapacitet,
- maximal acceptabel svarstid,
- hur barnets kontinuitet skyddas,
- vilket system som betalar den sjuke respektive ersättningsomsorgen.

**Leverans:** normalflöde + eskaleringsflöde för akut och längre sjukdom.

## Barnets forskningsgrundade omsorgsperiod

Kartlägg forskning för ungefär 9–24 månaders ålder och separera effekter av barnets utvecklingsbehov från effekter av förskolans kvalitet, gruppstorlek, personaltäthet, inskolning och familjebakgrund. Målet är inte att bevisa 12 månader utan att identifiera ett rimligt forskningsintervall och vilket system som äger respektive problem.

Inkludera separat stresstest för prematuritet/NICU, adoption och flerbarn. Dessa får motivera särskilda regler om evidensen kräver det men ska inte automatiskt dimensionera normalfallet.

## Ekonomi 3.0

Källsäkra framför allt arbetsmarknadsfinansierad föräldralön/tjänstepension, normalisera statsbudget/offentlig sektor/Sverige totalt och testa modellen utan dynamiska vinster.

Ekonomi 3.0 måste använda den aktuella arkitekturen:

> cirka 12 månader huvudsakligt omsorgsarbete + cirka 28 kalenderdagars övergångsfas inom anställningen.

Den tidigare 25-dagars semesterhypotesen får inte ligga kvar som om den vore aktuell baseline. Semester och övergång ska redovisas som separata juridiska/ekonomiska komponenter tills semesterfrågan är löst.

## Juridisk konstruktion

Utred hur den statliga visstidsanställningen, tjänstledigheten från ordinarie arbetsgivare, EU-rätten, diskrimineringsrätten, arbetsmiljörätten och föräldraledighetslagen ska kopplas ihop.

Behandla statlig visstidsanställning som **huvudkandidat till juridisk bärare**, inte som en orubblig del av den materiella reformen. Om samma materiella rättigheter kräver en särskild offentlig omsorgsstatus ska alternativen jämföras på funktion, rättssäkerhet, administration och kostnad.

## Systemhandoff efter uppdraget

Definiera dag-för-dag-handoff efter övergångsfasen för:

- tidigare anställd,
- egenföretagare,
- studerande,
- arbetslös,
- person med pågående sjukdom eller annan socialförsäkringsstatus.

SGI, a-kassa, Arbetsförmedlingen, studiemedel och ordinarie arbetsgivare ska inte lämna glapp som familjen själv måste upptäcka.

## Edge-case-register

Skapa ett separat register för sällsynta men juridiskt nödvändiga fall. Dessa ska analyseras före lagstiftning men hållas utanför normalresans UI och normalregelns dimensionering.

Exempel:

- nytt biologiskt syskon föds under pågående omsorgsår,
- vårdnadshavare/omsorgsarbetare avlider,
- mycket lång sjukhusvistelse,
- vårdnadsöverflyttning mitt under uppdraget,
- gränsöverskridande flytt mitt under uppdraget.

Ett edge case får lyftas till normalmodellen först om frekvens, konsekvens eller rättslig betydelse visar att det faktiskt behöver påverka huvudregeln.

## Pilot och utvärdering

Definiera utfall, kontrollgrupper/införandestruktur, integritetsskydd och förutbestämda kriterier för att justera eller avbryta reformen om data talar emot modellen.

Primära barnutfall ska skiljas från sekundära utfall för omsorgsarbetaren och tertiära system-/arbetsmarknadsutfall. Pilotdesignen ska kunna visa både oväntade skadeeffekter och om administrativa förenklingar faktiskt realiseras.