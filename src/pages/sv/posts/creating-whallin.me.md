---
layout: "../../../layouts/BlogPost.astro"
language: "sv"
title: "Processen att skapa whallin.me"
seoTitle: "Processen att skapa whallin.me - Blog"
description: "Varje gång är en första gång. Det har alltid varit en utmaning att titta på webbutveckling, men nu är det dags att äntligen ta sig an en ny utmaning. Detta är processen om whallin.me."
pubDate: "October 11, 2022"
coverImage: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&q=85&w=1152&h=384&fit=crop"
---

## Början på det hela

Okej. Den beskrivningen var lite överdriven.

Jag har aldrig haft problem med att läsa kod. Jag menar, visst, lägg assembly på bordet och du kan mycket väl skrämma mig - men bortsett från det har det inte varit något problem att läsa kod för mig. Och ärligt talat är det där hela den här resan och historien börjar för mig.

Jag har alltid sagt till mig själv: "Tänk om jag kunde X?*" där **X** bara är något programmeringsspråk. Men vad var det som slutligen fick stenen att rulla för att jag skulle försöka lära mig programmering? Och särskilt att röra mina händer på front-end webbutveckling?

Jag tycker själv att det var ganska överraskande.

### Minecraft väcker passion

![Steve från spelet Minecraft](https://images.unsplash.com/photo-1524685794168-52985e79c1f8?auto=format&q=85&w=1152&h=384&fit=crop)

<u>Jag har länge velat lära mig Java.</u>

Det har nästan varit en av mina barndomsdrömmar eftersom jag ville skapa egna mods och plugins för Minecraft, som jag och mina vänner sen kunde leka med. Den här delen har inte börjat ännu, tyvärr. 😔 

Jag har varit i scenen för användargränssnittsdesign ett tag och det slog mig, tänk om jag kunde designa gränssnittet och även utveckla det själv?

Den tanken slog mig ungefär två veckor innan jag skrev det här inlägget. 🙂

Så det var där den här resan började. Jag vill kunna designa och skissa mina UI-designs och omvandla dem till användbar och publicerbar kod så att produkten kan användas av den som vill.

## Okej, men hur började du?

Bra fråga! Och jag har ett lamt svar till dig! 🤭

<u>Jag sa till mig själv att börja arbeta.</u>

Jag vet. Det är ett väldigt allmänt svar. Vad ska du göra åt det? 🙂

Nej, men allvarligt talat, om vi kartlägger processen kan vi få lite mer detaljer. För att göra det lite enklare kan vi dela upp det i några delar. Jag gör detta främst för att du som läsare inte ska bli *så* uttråkad som du förmodligen skulle ha blivit annars.

### Del 1: Gör vad jag kan

![Figma igång på en computer](https://images.unsplash.com/photo-1621111848501-8d3634f82336?auto=format&q=85&w=1152&h=384&fit=crop)

En av utmaningarna jag ställde mig upp för med det här projektet var att mina kunskaper inom utveckling inte skulle stoppa min kreativitet när jag gjorde webbplatsen i Figma. Om mina tankar ville ha det på ett visst sätt, så var det vad jag skulle skapa. Kunde jag göra utvecklingsdelen av det? Vem vet, det är ett problem för mig senare.

Jag var beredd att ta mig an en brant inlärningskurva om det innebar att det skulle ge mig en bättre känsla för hur man gör front-end webbutveckling.

<u>*Spoiler alert: Det kändes som en brant inlärningskurva.*</u>

### Del 2: Helvetet.

Herregud, var ska jag börja? Den första utmaningen var att få in mitt huvud i alla de olika kombinationerna av "stacks". 😕

Jag hade viss förkunskap om vilka tekniker som fanns tidigare, så detta tog inte så lång tid som jag först hade räknat med. En av de saker som jag visste från början var att kolla efter en statisk webbplatsgenerator och inte något som riktar sig mot dynamiskt innehåll, som till exempel SvelteKit.

Det tog inte alltför lång tid innan jag stod mellan två alternativ, **Hugo och Astro**. Båda riktar sig främst till statiska webbplatser, medan Astro fortfarande bär på visst stöd för server-side rendering. Skulle jag nu komma att behöva servera mycket eller något dynamiskt innehåll alls?

Jag vet fortfarande inte. Men det var en av anledningarna till att jag sist valde Astro. Vad händer om jag vill implementera fler dynamiska funktioner? Vad händer om jag behöver ytterligare funktioner och integration? 🤔

Inte bara det, utan Astro har ett ton med [officiellt stödda integrationer](https://astro.build/integrations/official/) för att möjliggöra användning av komponenter från frameworks som React eller Vue. 

<u>Så det blir Astro.</u> 🚀 🚀

### Del 3: Helvetet, men mindre helvete.

![Dörr som leder in i ett rött ljus](https://images.unsplash.com/photo-1662204505164-36d52bb7b333?auto=format&q=85&w=1152&h=384&fit=crop)

Nu när vi har fått det ur vägen så satte jag upp mitt första Astro-projekt och kände mig redo att börja, så det gjorde jag.

Det första målet var att få designen från Figma till kod, åtminstone, vilket gick förvånansvärt snabbt. Att ha tillgång till att använda TailwindCSS gjorde hela processen mycket effektivare. 💙

Visst, jag kunde redan ett absolut minimum av CSS i förväg, men Tailwind kom in i greppet för att låta mig snabbt omvandla idéer till kod(?). Men självklart skulle den här delen inte ha sitt namn om inte något tog mig en fruktansvärd tid att få igång.

Det finns en funktion på hemsidan som visar vad jag lyssnar på på Spotify, men den visar min senast spelade låt i stället för en liveöversikt.

<u>Jag är ledsen. Du måste vara förkrossad över detta.</u> 🙏.

Tillbaka till ämnet. Den här funktionen var en absolut smärta att få att fungera. Varför? Därför att jag hade 0 kunskap om hur man skriver kod som skulle uppfylla detta syfte. Och för alla som känner till front-end webbutveckling sen tidigare - att hämta data är inte något man gör i HTML och CSS. Detta innebar att jag fick sätta mig in i ännu ett språk.

*Fungerar funktionen?* Ja.

*Fungerar funktionen korrekt?* Ja, igen.

*Kan du JavaScript nu?* Nej, det kan jag inte.

Eller, jag kan tillräckligt för att få den lilla funktionen på webbplatsen att fungera. Jag visste redan att detta inte skulle vara det första hindret. Den här bloggen du läser nu skulle kräva lite JavaScript för att fungera som jag ville.

Tack och lov hade Astro en mall för bloggprojektet som läste av till största delen för att förstå hur de gjorde saker och ting och sedan ta saken i egna händer. 😌

### Del 4: Att inse att helvetet inte var så illa

![Papper utanför en sopkorg](https://images.unsplash.com/photo-1517917822086-6988b4ca9b31?auto=format&q=85&w=1152&h=384&fit=crop)

Nu kanske du frågar dig själv. William, varför finns det en bild på en soptunna där? 🤔

<u>Och jag är glad att du frågade!</u>

För det här var delen där jag kastade alla mina framsteg för att starta om projektet, och visst, det kan låta som en dum sak att göra - men tro mig när jag säger att det inte var det.

Det jag hade gjort genom att skrota mina framsteg för att börja om från början igen, med den kunskap jag hade byggt upp genom att skapa en nästan färdig webbplats, var tillräckligt för att effektivt ta mig igenom front-end-utvecklingen på bara några dagar.

**Det kändes perfekt att kunna skriva kod flytande och bygga komponenter som fungerade och var responsiva utan att behöva tvivla på mig själv.**

Visst behöll jag koden för min "now-playing" Spotify funktion eftersom den fungerade och inte var alltför uppblåst. Jag var kort sagt nöjd med vad jag hade skrivit för den. Det kan mycket väl finnas utrymme för förbättringar, och det kan mycket väl sluta med att jag förbättrar den senare.

## Vad händer härnäst?

*Ja, vad kommer härnäst?* 🤔

Vi är här nu, och tack vare denna utmaning som jag ställde upp för mig själv kan du läsa den här bloggen i exakt den här layouten.

Mina planer härnäst är att skapa några fler hemsidor i front-end och sedan börja smutsa ner händerna på mer back-end-aspekter av saker och ting. Jag har några produktidéer med öppen källkod som jag gärna skulle vilja arbeta med och som skulle kräva en egen unik uppsättning funktioner och eventuellt även API:er.

<u>Tror jag att jag kommer att hålla mig till webbapplikationer och tjänster?</u>

Om jag ska vara ärlig med dig, förmodligen. Hur gärna jag än skulle vilja lära mig Java och till och med Rust för den delen, tror jag inte att det kommer att vara runt hörnet inom en snar framtid. Jag skulle gärna vilja vara så flytande som möjligt i front-end-utveckling och fortsätta utforska JavaScript och TypeScript.

Java och Rust kan vänta ett tag. 🙄

## Outro

Tack för att du tog dig tid att läsa det här blogginlägget. Det betyder mycket för mig. ❤️

Jag hoppas att du tyckte min resa var lika intressant som jag gjorde, och jag hoppas att du stannar kvar för att höra mer från mig och mina resor. Jag föreslår att du tittar in då och då om det finns några nya inlägg tillgängliga att läsa. Jag försöker också meddela om nya inlägg på mina sociala medier, som jag har länkat nedan för att underlätta åtkomst.

- [Twitter (twitter.com/w_hallin)](https://twitter.com/w_hallin)
- [LinkedIn (linkedin.com/in/williamhallin/)](https://linkedin.com/in/williamhallin/)
- [Polywork (polywork.com/whallin)](https://polywork.com/whallin)
- [Instagram (instagram.com/w_hallinig/)](https://instagram.com/w_hallinig/)

För dem som är intresserade finns det också ett RSS-flöde för min blogg på [https://whallin.me/rss.xml](https://whallin.me/rss.xml). Men i skrivande stund finns RSS-flödet endast tillgängligt på engelska. Förhoppningsvis orsakar det inte alltför mycket problem.

Vi ses nästa gång. 👋

## Citat

> Sann kunskap är att veta att man inte vet någonting.