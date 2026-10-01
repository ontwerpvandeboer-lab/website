ONTWERP VAN DE BOER — V23

Basis: versie 22, met een gerichte finetune-ronde.

Wijzigingen v23:
- De onderste drie projecten staan nu bovenaan: Utopia Eiland, 52 Weken Duurzaam, AOb / Onderwijsblad.
- Movisie, Van Mondriaan tot Dutch Design en Utrecht Natuurlijk staan op de tweede rij.
- Openklappen is stabieler gemaakt bij tablet/tussenbreedtes: geen afzonderlijke tegel meer die omhoog springt.
- Afstand tussen een open project en de volgende projectrij is gelijkmatig 10 px compacter gemaakt.
- Bij een open project in de laatste rij is de ruimte voor 'Dit is Ivo' 30 px kleiner.
- Mobiele projectweergave blijft één project per rij.
- Op mobiel heeft de logocarrousel een witte achtergrond, zodat rasterlogo's met een wit canvas niet als losse witte vlakken zichtbaar zijn.
- Project- en headerbeelden zijn geoptimaliseerd naar WebP. De zichtbare afmetingen/compositie zijn niet gewijzigd.
- Lokale projectbeelden zijn teruggebracht van circa 26 MB naar enkele MB's totaal.
- Metadata uitgebreid: titel, description, canonical, Open Graph en Twitter card.
- Favicon toegevoegd.
- Altteksten van de open-projectheaders zijn inhoudelijker gemaakt.
- Afbeeldingen laden lazy en worden asynchroon gedecodeerd.
- Zichtbare toetsenbordfocus toegevoegd.

Live upload:
Plaats index.html, styles.css, script.js, favicon.svg en de map assets rechtstreeks in /httpdocs.
