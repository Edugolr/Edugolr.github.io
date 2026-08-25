# Föräldraanställning – propositionsutkast 0.1

> Arbetsdokument. Propositionen är nu modulär. Huvudtexten ligger i `proposition/` och forsknings-, ekonomi- och stresstestmaterial ligger i `underlag/`.

## Läsordning

0. [`proposition/00-remissstatus.md`](proposition/00-remissstatus.md) – aktuell stabilitetsbedömning, normalfall kontra edge cases och grindarna som måste passeras innan förslaget kan betraktas som remissfärdigt.
1. [`proposition/01-reformens-karna.md`](proposition/01-reformens-karna.md) – reformens syfte, designregler, forskningsstyrd brytpunkt och försörjningsprincip.
2. [`proposition/02-behorighet-och-personkrets.md`](proposition/02-behorighet-och-personkrets.md) – försäkringstillhörighet, behöriga omsorgspersoner, 50/50-default, ensamstående, adoption och gränsöverskridande frågor.
3. [`proposition/06-efter-omsorgsaret.md`](proposition/06-efter-omsorgsaret.md) – dagens flexibilitet, övergångsfasen, sen dagbank, 25 % ledighetsrätt och systemgränsen mot barnomsorgen.
4. [`proposition/10-arbetsplan.md`](proposition/10-arbetsplan.md) – öppna arbetspaket för forskning, ekonomi, juridik och pilot.

## Aktuell modell i en mening

> **Barnets omsorgsrätt → cirka 12 månader huvudsakligt individuellt omsorgsarbete → cirka fyra veckors barnstyrd övergångsfas inom Föräldraanställningen → ordinarie barnomsorg och relevant arbets-/studie-/arbetsmarknadssystem.**

Tidsangivelserna är aktuella designhypoteser och ska ändras om evidensen kräver det.

## Strukturprincip

- `proposition/` innehåller **modellens aktuella beslut, argument, avgränsningar och öppna frågor**.
- `underlag/` innehåller **källgräv, beräkningar, stresstester och fördjupningar**.
- En slutsats flyttas från underlag till proposition när den är tillräckligt väl underbyggd eller uttryckligen markerad som ett öppet modellantagande.
- Huvudtexten ska inte duplicera hela underlagen. Den ska sammanfatta det som behövs för att förstå och granska reformen.
- Normalregler ska dimensioneras för den stora majoriteten. Mycket sällsynta edge cases dokumenteras och löses separat i stället för att automatiskt skriva om huvudregeln.

## Planerad modulstruktur

Nuvarande migration bevarar innehållet från den tidigare monolitiska propositionsfilen. När nya huvudkapitel stabiliseras används följande struktur:

- `00-remissstatus.md`
- `01-reformens-karna.md`
- `02-behorighet-och-personkrets.md`
- `03-omsorgsanstallningen.md`
- `04-lon-semester-pension.md`
- `05-sjukdom-reservomsorg.md`
- `06-efter-omsorgsaret.md`
- `07-jamstalldhet-och-fordelning.md`
- `08-ekonomi.md`
- `09-rattsliga-foljdandringar.md`
- `10-arbetsplan.md`

Tomma kapitel skapas inte enbart för strukturens skull. De skapas när propositionsmaterial faktiskt finns att flytta in.

## Versionsprincip

`proposition-0.1.md` är propositionens stabila ingång och innehållsförteckning. Ändringar ska normalt göras i respektive modul i stället för genom att återbygga en monolitisk huvudfil.

Detta minskar risken för oavsiktliga överskrivningar, ger mindre och granskningsbara diffar och gör det möjligt att utveckla exempelvis ekonomi eller juridik utan att samtidigt röra reformens övriga delar.