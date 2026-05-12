const stages = [
  "Mastercard Stage",
  "Rock for People Stage",
  "E2 Stage",
  "Petr Svoboda Stage",
  "CT art Stage",
  "Reflex Stage",
  "EcoFlow Stage",
  "Karaoke Stage"
];

const defaultFriends = ["Binus", "Zuzka", "Martin", "Kateřina", "Kropi", "Štěpánka"];
const renamedFriends = { Kropy: "Kropi" };

const brewerySites = {
  "Clock": "pivovarclock.cz",
  "Klenot": "",
  "Permon": "",
  "MadCat": "",
  "Černokostelecký pivovar": "",
  "Budvar & Mikkeller": "budvar.cz",
  "Hákův Parní Pivovar": "",
  "Plzeňský Prazdroj": "prazdroj.cz",
  "Nachmelená Opice": "nachmelenaopice.cz",
  "Elektrárna": "",
  "Cider Tátův sad": "tatuvsad.cz",
  "Heineken": "heineken.com",
  "Chotěboř": "pivovarchotebor.cz",
  "Rampušák": "pivovarrampusak.cz",
  "Strongbow": "strongbow.com",
  "Dolní Počernice": "",
  "Národní pivovar Budějovický Budvar": "budvar.cz",
  "Únětický Pivovar": "unetickypivovar.cz",
  "Desperados": "desperados.com",
  "Amity Drinks": "amitydrinks.cz",
  "Pivovary Staropramen": "staropramen.cz",
  "Bernard": "bernard.cz",
  "Budvar craft beer stage": "budvar.cz",
  "Clock & Friends": "pivovarclock.cz"
};

const breweryBadges = {
  "Klenot": "K",
  "Permon": "PER",
  "MadCat": "MC",
  "Černokostelecký pivovar": "ČK",
  "Hákův Parní Pivovar": "HÁK",
  "Elektrárna": "EL",
  "Dolní Počernice": "DP"
};

const beerLineup = [
  brewery("Clock", ["10° Hektor", "10° Jackpot (tangerine NEIPA)", "11° Vošta", "Krystus Nealko IPA"]),
  brewery("Klenot", ["Polotmavé 11° festivalová", "12° nefiltr", "Festivalový Hazy ALE 11°", "Kyseláč mango&broskev 10°", "IPA 15°", "Pšeničné", "Nealko grep", "Komix cider", "Sezonní speciál"]),
  brewery("Permon", ["Těhotná Dvanáctka", "Sokolovská Desítka", "PAPA", "Sherpa IPA", "Summer ALE", "Permon Tropical Fruit Sour"]),
  brewery("MadCat", ["Summer ALE Jiskra", "Fruit Sour Mango-Piña-Coco", "Ležák", "Session NEIPA Juicy Cat", "Nealko Madcat"]),
  brewery("Černokostelecký pivovar", ["Dešťovka 10°", "Vycpaná Vydra 12°", "Rock Svině Summer ALE 9°", "West Coast IPA 12°", "Černá Svině 13°", "Kyselátko Grep Limeta 12°", "Tropival Yuzu Nealko"]),
  brewery("Budvar & Mikkeller", ["Twogether Forever Summer ALE"]),
  brewery("Hákův Parní Pivovar", ["Hák 10°", "Hák 11°", "POETA Hák Černá 13°", "ASTRONAUT Galaxy IPA 15°", "AMÍK APA 13°", "BEACH BOY Summer Ale 8°", "CELEBRITA Neipa 14°", "ZAHRADNICE Pampeliška ALE 10°", "Session ALE 9° Ovocný", "ROŠŤÁK MangoSour 11°", "CHULIGÁN Black Currant Sour Shake 10°", "White APA 12°", "GENTLEMAN RedAle 11°", "Řezané"]),
  brewery("Plzeňský Prazdroj", ["Pilsner Urquell", "Radegast Rázná", "Birell Pomelo&Grep", "Birell Nealko", "Radegast Rezist"]),
  brewery("Nachmelená Opice", ["Ležák 11°", "SUN APA 12°", "Nealko IPA Free", "15° Pastry Kyseláč rybíz", "15° Pastry Kyseláč rybíz, vanilka, malina", "13° Nectaron Hazy Pale Ale"]),
  brewery("Elektrárna", ["Trooper Saturn"]),
  brewery("Cider Tátův sad", ["Craft Cider Tátův sad suchý", "Craft Cider Tátův sad Veselá višeň"]),
  brewery("Heineken", ["Heineken", "Heineken 0,0"]),
  brewery("Chotěboř", ["Chotěboř Prémium 12%", "Chotěboř Plus 11%", "Chotěboř Polo 11%", "Chotěboř Patron Nealkoholický", "Chotěboř Radler nealko", "Chotěboř Radler", "Chotěboř Bezinka Limo"]),
  brewery("Rampušák", ["Dobrušská nefiltr 11°", "Rampušák nefiltr 12°", "Summer ALE 9°", "Rock'n'ALE 11°", "Sour ALE Mango-Maracuja 11°", "Rampušák DryHop Nealkoholický", "Rampušák Blood Orange Nealkoholický"]),
  brewery("Strongbow", ["Strongbow Gold Apple Cider"]),
  brewery("Dolní Počernice", ["Počernická 12°", "Kopřivový Speciál 12°", "Barborka Černá 13°", "Summer ALE 11°", "Počernický Radler Meruňka", "Limonáda Broňa"]),
  brewery("Národní pivovar Budějovický Budvar", ["Budvar 33", "Budvar Original", "Budvar Redix"]),
  brewery("Únětický Pivovar", ["Letní Speciál Únětická 8°", "Únětická 10,7° filtrovaná", "Skippy XPA", "Únulka IPA Nealko"]),
  brewery("Desperados", ["Desperados Original"]),
  brewery("Amity Drinks", ["Cider Jablko-Hruška", "Cider Polosuchý"]),
  brewery("Pivovary Staropramen", ["Mustang 12° Hořký", "Černá Barbora 13°", "Cool Nealko 0,0 Grep"]),
  brewery("Bernard", ["Bernard Jedenáctka", "Bernard Grep", "Bernard Švestka", "Bernard Mix"]),
  brewery("Budvar craft beer stage", ["Rotující pípa s 25 druhy piv"]),
  brewery("Clock & Friends", ["Rotující pípa s 15 druhy piv"])
];

const foodLineup = [
  food("Algida", "Zmrzlina, kopečková zmrzlina, ledová tříšť"),
  food("Altai Mongolské občerstvení", "Mongolská kuchyně"),
  food("Altai Korean Food", "Korejská kuchyně"),
  food("Aperitivo", "Víno, prosecco"),
  food("ARCHIE'S HOTDOGS", "Hot dogy"),
  food("Arslan Buuz", "Asie - knedlíčky"),
  food("Barevný bufet - Šťastná Koza", "100% vegan, vegetarián"),
  food("BB FoodTrailer - Bageterie Boulevard", "Sendviče"),
  food("Bejzment - Americký bufet", "Americký bufet"),
  food("Bejzment - burgrána", "Burgery"),
  food("Berserkr - Jerky", "Jerky"),
  food("Beskyd Fričovice", "Víno, vinné nápoje"),
  food("Bubák", "24h snídaňová zóna"),
  food("Burger & Hotdog U Roba", "Grill/BBQ"),
  food("Burgery a steaky od farmáře ze dvora", "Burgery"),
  food("BX street food, Ola Kala Van", "Asie - bez lepku"),
  food("Cafe MOHAJI", "Káva, čaj, čokoláda"),
  food("Čajovna na větrném kopci", "Shisha"),
  food("Capo di Párek & Klobása", "Hot dogy"),
  food("Capo di Pizza", "Pizza"),
  food("Capo di Pizza - Pinsa", "Pinsa"),
  food("Čerstvé Vafle & Čerstvé ovocné saláty", "Sladké a slané pirohy"),
  food("CHEESE CROQUETTES - SÝROVÉ KOULE", "Sýrové koule"),
  food("Chilli Lips", "Asie, Thajsko"),
  food("ChilliTáta", "Grill/BBQ - maso, žebra"),
  food("Choosy burger bistro", "Burgery"),
  food("Churros & Donut's", "Churros, koblížky"),
  food("Cibulové bistro", "Polévky, pasta"),
  food("Cibulové - originální Blooming Onion", "100% vegan, vegetarián"),
  food("CREPINO - Palačinky & Zmrzlina", "Bezlepkové palačinky"),
  food("Do1ruky - Jižní Amerika", "Jižní Amerika"),
  food("Do1ruky - Mexiko", "Mexické wrapy"),
  food("Easy Rolls", "Rolovaná zmrzlina"),
  food("Easy Rolls - shisha", "Shisha"),
  food("Fabulous bar & shisha", "Shisha"),
  food("Fries Gang", "Bramborové spirály, hranolky"),
  food("Grill Bill", "Grill/BBQ"),
  food("GULE FOOD TRUCK", "Mini koblížky"),
  food("Hell Smoke BBQ", "Grill/BBQ"),
  food("Holly Pasta", "Domácí těstoviny"),
  food("Hot Dog - Luka", "Hot dogy"),
  food("Inspiral Burger", "Burgery"),
  food("Jídelna Klenot", "Česká kuchyně, snídaně, obědy, večeře"),
  food("Kaiser Franz", "Burgery, bezlepkové burgery"),
  food("Kavárna Fidla", "Zákusky, dortíky"),
  food("Kebab Factory", "Tradiční kebab"),
  food("Kornee's", "Hot dogy"),
  food("Královský chleba", "Česká kuchyně"),
  food("KUGYFOOD food trailer", "Grill/BBQ"),
  food("La takeria y delicias", "Kolumbie"),
  food("LA TERRAZA", "Španělská kuchyně"),
  food("La Vie", "Grill/BBQ"),
  food("Langoše.cz", "Langoše"),
  food("Laziz Indian Street Food", "Indická kuchyně"),
  food("Laziz Indian Street Food - vegan", "Indická kuchyně, vegan"),
  food("Los Churros", "Churros"),
  food("Majstri haluškári", "Halušky"),
  food("Maso Klouda", "Grill/BBQ"),
  food("Meat Vandals", "Grill/BBQ"),
  food("MK's Barbeque truck", "Grill/BBQ"),
  food("Modern Catering", "Hranolky"),
  food("Modrokuk", "24h zóna, snídaně, obědy, večeře"),
  food("Na kopečku kopeček", "Zmrzlina"),
  food("Neko Onigirazu", "Japonské onigirazu, sushi"),
  food("Nico - wafle", "Bublinkové wafle"),
  food("Palačinky u Toma", "Palačinky"),
  food("Pan Hranolka", "Hranolky"),
  food("Patyzón food truck", "Burgery"),
  food("Pit stop grill & bar", "Sendviče, hot dogy"),
  food("Pizza Bombastica", "Burgery"),
  food("Pizza Buona", "Pizza"),
  food("Pub Na Plech", "Sendviče"),
  food("Punk StrEATfood", "Sendviče"),
  food("Roburrito foodtruck", "Jižní Amerika"),
  food("Šabatovo zmrzlinářství", "Řemeslná zmrzlina"),
  food("Sauce Rebels", "České hotovky"),
  food("Sláva a je po hladu", "Česká kuchyně"),
  food("SOTO food truck", "Víno"),
  food("Sweet catering", "Palačinky, sorbet, churros"),
  food("Sýrožrouti", "Sýrové speciality, sendviče, 100% vege"),
  food("Take Eat EZ Foodtruck", "Sendviče"),
  food("Teriyaky Grill", "Teriyaki grill"),
  food("Torme Uzeniny Farmář", "Prasečinky od farmáře"),
  food("Trdelník", "Tradiční trdelník"),
  food("U Vandírků", "Jižní Amerika"),
  food("Vegan catering Špák", "100% vegan, vegetarián"),
  food("Vege, vegan - Salori", "100% vegan, vegetarián"),
  food("Via Vini", "Víno"),
  food("Vietnam Street Food - Surimex", "Vietnamská kuchyně"),
  food("Vinařství Klučov", "Víno"),
  food("Wine & Prosecco Bar U mě", "Vinné nápoje, prosecco, aperol"),
  food("Yuzu sushi", "Sushi, 100% vegan, vegetarián"),
  food("Zakynthos - Originální řecký street food", "Gyros"),
  food("Zapečenky", "Zapečenky"),
  food("Žebírkov", "Grill/BBQ žebra")
];

const days = [
  {
    id: "wed",
    label: "Středa",
    date: "10. 6.",
    events: [
      e("Special Guest by Mastercard", "Karaoke Stage", "10:10", "10:50"),
      e("Special Guest by Mastercard", "E2 Stage", "11:30", "12:15"),
      e("Karaoke", "Karaoke Stage", "11:30", "12:15", true),
      e("Planetrox 2026", "Reflex Stage", "12:05", "12:50"),
      e("Byt cislo 4", "Petr Svoboda Stage", "12:20", "13:00"),
      e("Circus Brothers", "CT art Stage", "12:45", "13:30"),
      e("Bazzookas", "EcoFlow Stage", "12:45", "13:25"),
      e("Karaoke", "Karaoke Stage", "12:45", "13:30", true),
      e("We Came As Romans", "Rock for People Stage", "12:50", "13:35"),
      e("Kublai Khan TX", "E2 Stage", "13:05", "13:50"),
      e("Magnolia Park", "Mastercard Stage", "13:40", "14:25"),
      e("Planetrox 2026", "Reflex Stage", "13:45", "14:30"),
      e("Mouth Culture", "Petr Svoboda Stage", "13:55", "14:40"),
      e("Tolstoys", "CT art Stage", "14:15", "15:00"),
      e("Bloodywood", "Rock for People Stage", "14:30", "15:30"),
      e("Cherryholt", "EcoFlow Stage", "14:40", "15:20"),
      e("Karaoke", "Karaoke Stage", "14:40", "15:25", true),
      e("VOILA", "E2 Stage", "14:45", "15:30"),
      e("The Wombats", "Mastercard Stage", "15:35", "16:35"),
      e("Nevertel", "Petr Svoboda Stage", "15:35", "16:20"),
      e("Ecca Vandal", "CT art Stage", "15:45", "16:30"),
      e("Planetrox 2026", "Reflex Stage", "15:55", "16:40"),
      e("Lenka Dusilova: LD_50 a host David Koller", "E2 Stage", "16:25", "17:10"),
      e("Megadeth", "Rock for People Stage", "16:40", "17:55"),
      e("Kasparek v rohliku", "EcoFlow Stage", "17:10", "17:55"),
      e("Gurriers", "Petr Svoboda Stage", "17:15", "18:00"),
      e("As It Is", "CT art Stage", "17:15", "18:00"),
      e("Static-X", "E2 Stage", "18:05", "18:50"),
      e("The Pretty Reckless", "Mastercard Stage", "18:10", "19:25"),
      e("TX2", "CT art Stage", "18:45", "19:30"),
      e("Planetrox 2026", "Reflex Stage", "18:45", "19:30"),
      e("Water From Your Eyes", "Petr Svoboda Stage", "18:55", "19:40"),
      e("Nestor Alvarez & Original Gravity Allstars", "EcoFlow Stage", "19:30", "20:10"),
      e("Electric Callboy", "Rock for People Stage", "19:40", "21:10"),
      e("Die Spitz", "E2 Stage", "20:00", "21:00"),
      e("Genesis Owusu", "CT art Stage", "20:10", "20:55"),
      e("supermodel*", "EcoFlow Stage", "20:40", "21:20"),
      e("Monodream", "Reflex Stage", "21:15", "22:00"),
      e("Gorillaz", "Mastercard Stage", "21:30", "23:00"),
      e("Boundaries", "CT art Stage", "21:35", "22:20"),
      e("Tchert", "Petr Svoboda Stage", "21:45", "22:30"),
      e("Trivium", "E2 Stage", "23:00", "00:00"),
      e("thrown", "CT art Stage", "23:00", "00:00"),
      e("Pendl", "EcoFlow Stage", "23:15", "00:45"),
      e("Zuzane Navarove do nebes", "Reflex Stage", "00:00", "01:30"),
      e("Joey Valence & Brae", "E2 Stage", "00:30", "02:00"),
      e("Alyx Holcombe", "CT art Stage", "00:30", "01:30")
    ]
  },
  {
    id: "thu",
    label: "Čtvrtek",
    date: "11. 6.",
    events: [
      e("Thornhill", "Rock for People Stage", "11:25", "12:10"),
      e("MC Gey & Live Band", "E2 Stage", "11:25", "12:10"),
      e("God Save The Drama Queen", "EcoFlow Stage", "11:30", "12:10", true),
      e("Karaoke", "Karaoke Stage", "11:30", "12:15", true),
      e("Set It Off", "Mastercard Stage", "12:15", "13:00"),
      e("Banks Arcade", "Petr Svoboda Stage", "12:15", "13:00"),
      e("AI, mozek a rock'n'roll", "Reflex Stage", "12:15", "13:15", true),
      e("CT: Devadesatkova hitparada bizáru", "CT art Stage", "12:40", "13:25", true),
      e("Wohnout", "Rock for People Stage", "13:05", "13:50"),
      e("letlive.", "E2 Stage", "13:05", "13:50"),
      e("Lomnicke Chave", "EcoFlow Stage", "13:05", "13:55", true),
      e("Karaoke", "Karaoke Stage", "13:00", "13:45", true),
      e("Headliner: Hudebni masakry", "Reflex Stage", "13:50", "14:50", true),
      e("The Plot In You", "Mastercard Stage", "13:55", "14:40"),
      e("The Pretty Wild", "Petr Svoboda Stage", "13:55", "14:40"),
      e("Orchestr Jezkovy stopy", "CT art Stage", "14:10", "14:55", true),
      e("Social Distortion", "Rock for People Stage", "14:45", "15:45"),
      e("Catch Your Breath", "E2 Stage", "14:45", "15:30"),
      e("Karaoke", "Karaoke Stage", "14:40", "15:25", true),
      e("Indoor Foxes", "EcoFlow Stage", "14:55", "15:35"),
      e("Radio Free Alice", "Petr Svoboda Stage", "15:35", "16:20"),
      e("CT: Na dosah s Danielem Stachem", "CT art Stage", "15:40", "16:35", true),
      e("Breaking Benjamin", "Mastercard Stage", "15:50", "16:50"),
      e("Reflex: Poprask", "Reflex Stage", "15:50", "16:50", true),
      e("Blood Incantation", "E2 Stage", "16:25", "17:10"),
      e("All Time Low", "Rock for People Stage", "16:55", "17:55"),
      e("Last Train", "Petr Svoboda Stage", "17:15", "18:00"),
      e("Woda a Dekorace", "EcoFlow Stage", "17:15", "17:55"),
      e("Quicksand", "CT art Stage", "17:20", "18:05"),
      e("Destroy Boys", "E2 Stage", "18:05", "18:50"),
      e("BABYMETAL", "Mastercard Stage", "18:10", "19:25"),
      e("James Cole & Idea", "CT art Stage", "18:45", "19:30"),
      e("Frankie & The Deadbeats", "Reflex Stage", "18:45", "19:30"),
      e("Barns Courtney", "Petr Svoboda Stage", "18:55", "19:40"),
      e("Wyfe", "EcoFlow Stage", "19:30", "20:10"),
      e("Papa Roach", "Rock for People Stage", "19:40", "21:10"),
      e("Yard Act", "E2 Stage", "19:50", "20:50"),
      e("Etta Marcus", "CT art Stage", "20:10", "20:55"),
      e("Deki Alem", "Petr Svoboda Stage", "20:50", "21:35"),
      e("The Fialky", "Reflex Stage", "21:20", "22:05"),
      e("Limp Bizkit", "Mastercard Stage", "21:30", "23:00"),
      e("Vltava", "CT art Stage", "21:35", "22:20"),
      e("Dizzlove", "Petr Svoboda Stage", "22:15", "23:00"),
      e("The All-American Rejects", "E2 Stage", "23:00", "00:00"),
      e("Melrose Avenue", "CT art Stage", "23:00", "00:00"),
      e("DeSade X Denoi", "Reflex Stage", "23:00", "00:00"),
      e("Special Guest by Mastercard", "EcoFlow Stage", "23:15", "00:00"),
      e("Klubovna Afterparty", "Reflex Stage", "00:30", "01:30"),
      e("The Prague Burlesque Show: Velvet Hammer", "CT art Stage", "00:30", "01:30", true),
      e("Gleb", "E2 Stage", "00:30", "01:30")
    ]
  },
  {
    id: "fri",
    label: "Pátek",
    date: "12. 6.",
    events: [
      e("Special Guest by Mastercard", "Karaoke Stage", "10:10", "10:50"),
      e("30 Ro(c)ku for People", "CT art Stage", "11:20", "12:20", true),
      e("CT: Dulezitost verejnopravniho vysilani", "Reflex Stage", "11:30", "12:20", true),
      e("Karaoke", "Karaoke Stage", "11:30", "12:15", true),
      e("Ego Kill Talent", "E2 Stage", "12:00", "12:45"),
      e("South Arcade", "Rock for People Stage", "12:30", "13:15"),
      e("Underground Comedy Club", "EcoFlow Stage", "12:30", "13:10", true),
      e("The Clause", "Petr Svoboda Stage", "12:50", "13:35"),
      e("Kuchynske porno", "CT art Stage", "13:05", "14:05", true),
      e("Reflex: Prostor X", "Reflex Stage", "13:15", "14:00", true),
      e("Basement", "Mastercard Stage", "13:20", "14:05"),
      e("Trash Boat", "E2 Stage", "13:40", "14:25"),
      e("Gatecreeper", "Rock for People Stage", "14:10", "14:55"),
      e("Sestry Chalupovy", "EcoFlow Stage", "14:10", "14:50", true),
      e("Karaoke", "Karaoke Stage", "14:10", "14:55", true),
      e("Ankor", "Petr Svoboda Stage", "14:30", "15:15"),
      e("AZ-kviz", "CT art Stage", "14:50", "15:35", true),
      e("Culture for Future: Muze hudba menit svet?", "Reflex Stage", "14:55", "15:40", true),
      e("Ben Cristovao", "Mastercard Stage", "15:00", "15:45"),
      e("Dying Wish", "E2 Stage", "15:20", "16:05"),
      e("Dinosaur Pile-Up", "Rock for People Stage", "15:50", "16:35"),
      e("Any Young Mechanic", "EcoFlow Stage", "15:50", "16:30"),
      e("Karaoke", "Karaoke Stage", "15:50", "16:35", true),
      e("Dave Lofts", "Petr Svoboda Stage", "16:10", "16:55"),
      e("Bozejaci", "CT art Stage", "16:20", "17:05", true),
      e("The Studio 32 (Musical) Comedy Show!", "Reflex Stage", "16:35", "17:20", true),
      e("Tom Morello", "Mastercard Stage", "16:40", "17:40"),
      e("Jiri Pavlica & Hradistan", "E2 Stage", "17:00", "17:45"),
      e("UE", "EcoFlow Stage", "17:40", "18:25"),
      e("Bilmuri", "Rock for People Stage", "17:45", "18:45"),
      e("Stand-up Comedy: Tatty Macleod", "CT art Stage", "17:50", "18:35", true),
      e("Private School", "Petr Svoboda Stage", "17:50", "18:35"),
      e("ivri", "E2 Stage", "18:40", "19:25"),
      e("Startér: teige", "Reflex Stage", "18:45", "19:30"),
      e("A Day To Remember", "Mastercard Stage", "19:00", "20:15"),
      e("Lottery Winners", "CT art Stage", "19:20", "20:05"),
      e("unpeople", "Petr Svoboda Stage", "19:45", "20:30"),
      e("High Vis", "E2 Stage", "20:30", "21:30"),
      e("Wolf Alice", "Rock for People Stage", "20:30", "21:30"),
      e("FVCK_KVLT", "EcoFlow Stage", "20:30", "21:15"),
      e("Zero 9:36", "CT art Stage", "20:45", "21:30"),
      e("Kvietah", "Petr Svoboda Stage", "21:30", "22:15"),
      e("Bring Me The Horizon", "Mastercard Stage", "21:45", "23:15"),
      e("FVLCRVM", "CT art Stage", "22:10", "22:55"),
      e("Marie April", "Reflex Stage", "22:45", "23:30"),
      e("VOWER", "Petr Svoboda Stage", "23:15", "00:00"),
      e("Three Days Grace", "Rock for People Stage", "23:30", "01:00"),
      e("Noisy Pots", "EcoFlow Stage", "23:30", "00:30"),
      e("Gaerea", "CT art Stage", "23:35", "00:20"),
      e("Tata Bojs", "E2 Stage", "00:00", "01:10"),
      e("Madface", "Reflex Stage", "00:30", "01:30"),
      e("Ventolin", "CT art Stage", "01:00", "02:00"),
      e("Glare", "Petr Svoboda Stage", "01:10", "01:55"),
      e("Leduy + Bea", "Reflex Stage", "01:30", "03:00"),
      e("SVDDEN DEATH", "E2 Stage", "01:55", "03:00")
    ]
  },
  {
    id: "sat",
    label: "Sobota",
    date: "13. 6.",
    events: [
      e("Special Guest by Mastercard", "Karaoke Stage", "10:10", "10:50"),
      e("Svatba Jiriho Kary (Remastered)", "CT art Stage", "11:15", "12:00", true),
      e("Cimbalova muzika Friska", "EcoFlow Stage", "11:25", "12:10", true),
      e("F-Talk Diky, ze muzem: Ma byt kultura (a)politicka?", "Reflex Stage", "11:30", "12:15", true),
      e("Karaoke", "Karaoke Stage", "11:30", "12:15", true),
      e("CT: Tanecni skola StarDance", "CT art Stage", "12:20", "13:05", true),
      e("Prague Pride v roce 2026: Co slavime a za co jeste bojujeme?", "Reflex Stage", "12:30", "13:15", true),
      e("Calva Louise", "E2 Stage", "12:30", "13:15"),
      e("Police Symphony Orchestra", "Rock for People Stage", "13:10", "13:55"),
      e("Slam Poetry: Slamateri", "EcoFlow Stage", "13:10", "13:50", true),
      e("Karaoke", "Karaoke Stage", "13:15", "14:00", true),
      e("Grade 2", "Petr Svoboda Stage", "13:20", "14:05"),
      e("AZ-kviz", "CT art Stage", "13:50", "14:45", true),
      e("Nevypust dusi: Emoce jako spojenec", "Reflex Stage", "13:55", "14:40", true),
      e("Kid Kapichi", "Mastercard Stage", "14:00", "14:45"),
      e("Berlin Manson", "E2 Stage", "14:10", "14:55"),
      e("Bury Tomorrow", "Rock for People Stage", "14:50", "15:35"),
      e("Karaoke", "Karaoke Stage", "14:50", "15:35", true),
      e("Westside Cowboy", "Petr Svoboda Stage", "15:00", "15:45"),
      e("Na stojaka", "CT art Stage", "15:30", "16:30", true),
      e("Headliner: Puda", "Reflex Stage", "15:35", "16:20", true),
      e("Alessi Rose", "Mastercard Stage", "15:40", "16:25"),
      e("I Killed The Prom Queen", "E2 Stage", "15:50", "16:35"),
      e("Sofian Medjmedj", "Rock for People Stage", "16:30", "17:15"),
      e("Acid Row", "EcoFlow Stage", "16:30", "17:10"),
      e("overpass", "Petr Svoboda Stage", "16:40", "17:25"),
      e("PINKBUS: Hezky cesky", "CT art Stage", "17:15", "18:15", true),
      e("Reflex: Padni komu padni", "Reflex Stage", "17:15", "18:00", true),
      e("Don Broco", "Mastercard Stage", "17:20", "18:20"),
      e("Malevolence", "E2 Stage", "17:30", "18:15"),
      e("Keo", "Petr Svoboda Stage", "18:20", "19:05"),
      e("Simon Opp", "EcoFlow Stage", "18:20", "19:05"),
      e("Yonaka", "Rock for People Stage", "18:25", "19:25"),
      e("VENUS GRRRLS", "CT art Stage", "19:00", "19:45"),
      e("PRESIDENT", "E2 Stage", "19:10", "19:55"),
      e("Overgrown", "Reflex Stage", "19:25", "20:10"),
      e("Nothing But Thieves", "Mastercard Stage", "19:30", "20:45"),
      e("spill tab", "Petr Svoboda Stage", "20:00", "20:45"),
      e("SNAYX", "CT art Stage", "20:30", "21:15"),
      e("blackbear", "Rock for People Stage", "20:50", "21:50"),
      e("Silent Planet", "E2 Stage", "20:50", "21:50"),
      e("Elektrick Mann", "EcoFlow Stage", "21:25", "22:10"),
      e("Hopes", "Reflex Stage", "21:50", "22:35"),
      e("The 900: Tony Hawk's Pro Skater Cover Band", "CT art Stage", "21:55", "22:40"),
      e("Halsey", "Mastercard Stage", "22:10", "23:40"),
      e("REZN", "Petr Svoboda Stage", "23:15", "00:00"),
      e("Holywatr", "CT art Stage", "23:20", "00:20"),
      e("post-hudba", "Reflex Stage", "23:30", "00:15"),
      e("Within Temptation", "Rock for People Stage", "23:45", "01:00"),
      e("Babyshambles", "E2 Stage", "00:00", "01:00"),
      e("ALT BLK ERA", "Petr Svoboda Stage", "01:00", "01:45"),
      e("The Funeral Portrait", "CT art Stage", "01:00", "02:00"),
      e("Delta Heavy", "E2 Stage", "01:45", "03:00"),
      e("SatySVleckou", "Reflex Stage", "02:05", "03:00")
    ]
  }
];

const ratingMeta = {
  must: { label: "great", score: 2 },
  good: { label: "good", score: 1 },
  neutral: { label: "neutral", score: 0 },
  trash: { label: "trash", score: -1 }
};

const artistInfo = {
  "Gorillaz": ["UK", "alternative rock, trip hop, virtual band"],
  "Electric Callboy": ["Germany", "electronicore, metalcore"],
  "Megadeth": ["USA", "thrash metal"],
  "The Pretty Reckless": ["USA", "hard rock, alternative rock"],
  "The Wombats": ["UK", "indie rock"],
  "Trivium": ["USA", "metalcore, heavy metal"],
  "Static-X": ["USA", "industrial metal"],
  "We Came As Romans": ["USA", "metalcore"],
  "Bloodywood": ["India", "folk metal, nu metal"],
  "Joey Valence & Brae": ["USA", "hip hop, rap rock"],
  "Kublai Khan TX": ["USA", "hardcore, metalcore"],
  "As It Is": ["UK", "pop punk, emo"],
  "Genesis Owusu": ["Ghana / Australia", "alternative hip hop, funk"],
  "Tolstoys": ["Slovakia", "dream pop, indie pop"],
  "Byt cislo 4": ["Czech Republic", "indie rock"],
  "Water From Your Eyes": ["USA", "experimental rock, art pop"],
  "Gurriers": ["Ireland", "post-punk"],
  "Planetrox 2026": ["International", "band contest showcase"],
  "Limp Bizkit": ["USA", "nu metal, rap rock"],
  "BABYMETAL": ["Japan", "kawaii metal, J-metal"],
  "Papa Roach": ["USA", "nu metal, alternative rock"],
  "Breaking Benjamin": ["USA", "post-grunge, alternative metal"],
  "All Time Low": ["USA", "pop punk"],
  "Social Distortion": ["USA", "punk rock"],
  "Set It Off": ["USA", "pop rock, alternative"],
  "The All-American Rejects": ["USA", "pop rock, emo pop"],
  "The Plot In You": ["USA", "metalcore"],
  "Thornhill": ["Australia", "metalcore, alternative metal"],
  "Wohnout": ["Czech Republic", "rock"],
  "Yard Act": ["UK", "post-punk"],
  "Blood Incantation": ["USA", "death metal"],
  "Barns Courtney": ["UK", "indie rock, blues rock"],
  "Quicksand": ["USA", "post-hardcore"],
  "Vltava": ["Czech Republic", "alternative rock"],
  "Gleb": ["Slovakia", "rap, grime"],
  "The Fialky": ["Czech Republic", "punk rock"],
  "Bring Me The Horizon": ["UK", "metalcore, alternative rock"],
  "A Day To Remember": ["USA", "pop punk, metalcore"],
  "Three Days Grace": ["Canada", "post-grunge, hard rock"],
  "Tom Morello": ["USA", "rock, rap rock"],
  "Wolf Alice": ["UK", "alternative rock, indie rock"],
  "Bilmuri": ["USA", "post-hardcore, pop rock"],
  "Ben Cristovao": ["Czech Republic", "pop, R&B"],
  "Basement": ["UK", "emo, alternative rock"],
  "Gatecreeper": ["USA", "death metal"],
  "Dinosaur Pile-Up": ["UK", "alternative rock, grunge"],
  "Tata Bojs": ["Czech Republic", "alternative rock, pop"],
  "Trash Boat": ["UK", "pop punk, post-hardcore"],
  "SVDDEN DEATH": ["USA", "dubstep, bass music"],
  "High Vis": ["UK", "post-punk, hardcore"],
  "Gaerea": ["Portugal", "black metal"],
  "Ventolin": ["Czech Republic", "electronic, synth pop"],
  "Zero 9:36": ["USA", "rap rock, alternative"],
  "Ankor": ["Spain", "alternative metal"],
  "Halsey": ["USA", "pop, alternative pop"],
  "Nothing But Thieves": ["UK", "alternative rock"],
  "Within Temptation": ["Netherlands", "symphonic metal"],
  "Don Broco": ["UK", "alternative rock, post-hardcore"],
  "blackbear": ["USA", "pop rap, R&B"],
  "Bury Tomorrow": ["UK", "metalcore"],
  "Yonaka": ["UK", "alternative rock"],
  "Sofian Medjmedj": ["Czech Republic", "pop, R&B"],
  "Babyshambles": ["UK", "indie rock"],
  "Delta Heavy": ["UK", "drum and bass"],
  "I Killed The Prom Queen": ["Australia", "metalcore"],
  "PRESIDENT": ["UK", "alternative metal"],
  "Silent Planet": ["USA", "metalcore"],
  "ALT BLK ERA": ["UK", "alternative, nu metal"],
  "The 900": ["Italy", "punk rock covers"],
  "VENUS GRRRLS": ["UK", "alternative rock"],
  "Police Symphony Orchestra": ["Czech Republic", "orchestral crossover"],
  "Alessi Rose": ["UK", "indie pop"],
  "Iron Maiden": ["UK", "heavy metal"],
  "Alter Bridge": ["USA", "hard rock, alternative metal"],
  "Knocked Loose": ["USA", "hardcore, metalcore"],
  "Saxon": ["UK", "heavy metal"],
  "Alexisonfire": ["Canada", "post-hardcore"],
  "God Is An Astronaut": ["Ireland", "post-rock"],
  "Queensryche": ["USA", "progressive metal"],
  "BLACKGOLD": ["UK", "nu metal, rap rock"],
  "Scene Queen": ["USA", "metalcore, pop"],
  "Rain City Drive": ["USA", "post-hardcore"],
  "The Molotovs": ["UK", "mod rock, punk"],
  "Sleep Theory": ["USA", "alternative metal, R&B rock"],
  "Militarie Gun": ["USA", "hardcore, alternative rock"],
  "Alice & Dan Barta": ["Czech Republic", "pop, jazz, alternative"],
  "N.O.H.A.": ["International / Czech Republic", "drum and bass, world music"],
  "The Atavists": ["Czech Republic", "blues rock, garage rock"],
  "Midrift": ["USA", "shoegaze, alternative rock"],
  "Florence Black": ["UK", "hard rock"],
  "Magnolia Park": ["USA", "pop punk"],
  "VOILA": ["USA", "pop rock"],
  "Nestor Alvarez & Original Gravity Allstars": ["Czech Republic / International", "ska, reggae"],
  "Die Spitz": ["USA", "punk rock"],
  "Boundaries": ["USA", "metalcore"],
  "thrown": ["Sweden", "metalcore"],
  "Alyx Holcombe": ["UK", "DJ set, alternative"],
  "MC Gey & Live Band": ["Czech Republic", "rap"],
  "letlive.": ["USA", "post-hardcore"],
  "Catch Your Breath": ["USA", "metalcore, alternative metal"],
  "Destroy Boys": ["USA", "punk rock"],
  "James Cole & Idea": ["Czech Republic", "rap"],
  "Deki Alem": ["Sweden", "alternative hip hop"],
  "Melrose Avenue": ["Australia", "metalcore"],
  "Ego Kill Talent": ["Brazil", "alternative rock"],
  "South Arcade": ["UK", "alternative rock"],
  "Dying Wish": ["USA", "metalcore"],
  "Jiri Pavlica & Hradistan": ["Czech Republic", "folk, world music"],
  "Lottery Winners": ["UK", "indie pop"],
  "unpeople": ["UK", "alternative rock"],
  "FVLCRVM": ["Slovakia", "electronic, pop"],
  "VOWER": ["UK", "post-hardcore"],
  "Glare": ["USA", "shoegaze"],
  "Calva Louise": ["UK", "alternative rock"],
  "Kid Kapichi": ["UK", "punk rock, indie rock"],
  "Berlin Manson": ["Slovakia", "post-punk, rap"],
  "Malevolence": ["UK", "metalcore, hardcore"],
  "spill tab": ["France / USA", "indie pop"],
  "SNAYX": ["UK", "punk rock"],
  "Elektrick Mann": ["Czech Republic", "punk rap"],
  "REZN": ["USA", "doom metal, psychedelic rock"],
  "Holywatr": ["USA", "alternative rock"],
  "post-hudba": ["Czech Republic", "indie electronic"],
  "The Funeral Portrait": ["USA", "emo rock, post-hardcore"],
  "Hollow Suns": ["Japan", "alternative rock"],
  "Excide": ["USA", "hardcore"],
  "Loathe": ["UK", "metalcore, shoegaze"],
  "Man With A Mission": ["Japan", "alternative rock"],
  "Gridiron": ["USA", "hardcore"],
  "The Lilacs": ["UK", "indie rock"],
  "vianova": ["Germany", "metalcore"],
  "White Fruit Honey": ["Czech Republic", "indie rock"],
  "Reflections of Karma": ["Czech Republic", "rock"],
  "Circus Brothers": ["Czech Republic", "brass, balkan, disco"],
  "Bazzookas": ["Netherlands", "ska, brass party"],
  "Mouth Culture": ["UK", "alternative rock"],
  "Cherryholt": ["Czech Republic", "indie rock"],
  "Nevertel": ["USA", "alternative rock, rap rock"],
  "Ecca Vandal": ["Australia", "punk, hip hop, soul"],
  "Lenka Dusilova: LD_50 a host David Koller": ["Czech Republic", "alternative rock"],
  "Kasparek v rohliku": ["Czech Republic", "kids punk, rock"],
  "TX2": ["USA", "emo rap, alternative rock"],
  "supermodel*": ["UK", "alternative rock"],
  "Monodream": ["Czech Republic", "indie rock"],
  "Tchert": ["Czech Republic", "metal"],
  "Pendl": ["Czech Republic", "DJ set"],
  "Zuzane Navarove do nebes": ["Czech Republic", "tribute, folk"],
  "Banks Arcade": ["New Zealand", "alternative metal"],
  "The Pretty Wild": ["USA", "metalcore, alternative metal"],
  "Indoor Foxes": ["UK", "indie rock"],
  "Radio Free Alice": ["Australia", "post-punk"],
  "Last Train": ["France", "rock"],
  "Woda a Dekorace": ["Czech Republic", "alternative rock"],
  "Frankie & The Deadbeats": ["Czech Republic", "rock'n'roll"],
  "Wyfe": ["Czech Republic", "indie rock"],
  "Etta Marcus": ["UK", "indie pop"],
  "Dizzlove": ["Czech Republic", "rap"],
  "DeSade X Denoi": ["Czech Republic", "DJ set"],
  "Klubovna Afterparty": ["Czech Republic", "DJ set, afterparty"],
  "The Clause": ["UK", "indie rock"],
  "Any Young Mechanic": ["Czech Republic", "indie rock"],
  "Dave Lofts": ["UK", "singer-songwriter, rock"],
  "UE": ["Czech Republic", "alternative rock"],
  "Private School": ["USA", "punk rock"],
  "ivri": ["USA", "alternative pop"],
  "Startér: teige": ["Czech Republic", "new music showcase"],
  "FVCK_KVLT": ["Slovakia", "rap, punk"],
  "Kvietah": ["Czech Republic", "indie pop, folk"],
  "Marie April": ["Czech Republic", "DJ set"],
  "Noisy Pots": ["Czech Republic", "electronic"],
  "Madface": ["Czech Republic", "drum and bass"],
  "Leduy + Bea": ["Czech Republic", "DJ set"],
  "Grade 2": ["UK", "punk rock"],
  "Westside Cowboy": ["UK", "indie rock"],
  "Acid Row": ["Czech Republic", "stoner rock, punk"],
  "overpass": ["UK", "indie rock"],
  "Keo": ["UK", "alternative rock"],
  "Simon Opp": ["Czech Republic", "indie pop"],
  "Overgrown": ["Czech Republic", "hardcore"],
  "Hopes": ["Czech Republic", "hardcore"],
  "The 900: Tony Hawk's Pro Skater Cover Band": ["Italy", "punk rock covers"],
  "SatySVleckou": ["Czech Republic", "DJ set"],
  "Frozen Poppyhead": ["Czech Republic", "indie rock"],
  "CHRPY": ["Czech Republic", "indie pop"],
  "Lunarsea": ["Italy", "melodic death metal"],
  "Cold Meat Party": ["Czech Republic", "punk rock"],
  "Linka Moja": ["Czech Republic", "alternative pop"]
};

const storageKey = "rfp-crew-planner-v5";
const activeFriendKey = "rfp-active-friend-v1";
const supabaseUrl = "https://xxsszhvdlstxtkphyvem.supabase.co";
const supabaseKey = "sb_publishable_Fs5LeSBeBBH1LPYUzyReFw_Kcd8Rgbj";
const db = window.supabase?.createClient(supabaseUrl, supabaseKey);
let state = defaultState();
let activeDay = days[0].id;
let activeView = "program";
let activeEventId = null;
let searchTargetId = null;
let searchTimer = null;
let openBeerId = null;
let openFoodId = null;
let openDishId = null;

const els = {
  activeFriend: document.querySelector("#activeFriend"),
  addFriendBtn: document.querySelector("#addFriendBtn"),
  addFriendPanelBtn: document.querySelector("#addFriendPanelBtn"),
  friendList: document.querySelector("#friendList"),
  stageFilter: document.querySelector("#stageFilter"),
  searchInput: document.querySelector("#searchInput"),
  eventSuggestions: document.querySelector("#eventSuggestions"),
  onlyMine: document.querySelector("#onlyMine"),
  moduleButtons: document.querySelectorAll("[data-view]"),
  programOnly: document.querySelectorAll(".program-only"),
  dayTabs: document.querySelector("#dayTabs"),
  mobileStageStrip: document.querySelector("#mobileStageStrip"),
  mobileStageTrack: document.querySelector("#mobileStageTrack"),
  schedule: document.querySelector("#schedule"),
  ratingPanel: document.querySelector("#ratingPanel"),
  timeAxis: document.querySelector("#timeAxis"),
  stageGrid: document.querySelector("#stageGrid"),
  eventDialog: document.querySelector("#eventDialog"),
  closeDialog: document.querySelector("#closeDialog")
};

function e(name, stage, start, end, program = false) {
  return { name, stage, start, end, program };
}

function brewery(name, beers) {
  const domain = brewerySites[name];
  return {
    name,
    beers,
    domain,
    logo: domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=96` : "",
    rotating: beers.some((beer) => beer.toLowerCase().includes("rotující pípa"))
  };
}

function food(name, description) {
  return { name, description };
}

function loadState() {
  const fallback = defaultState();
  const raw = localStorage.getItem(storageKey);
  const activeFriend = renameFriend(localStorage.getItem(activeFriendKey) || "");
  if (!raw) return { ...fallback, activeFriend };
  try {
    const loaded = normalizeState({ ...fallback, ...JSON.parse(raw) });
    loaded.activeFriend = activeFriend && loaded.friends.includes(activeFriend) ? activeFriend : "";
    return loaded;
  } catch {
    return { ...fallback, activeFriend };
  }
}

function defaultState() {
  return {
    friends: [...defaultFriends],
    activeFriend: "",
    votes: {},
    comments: {},
    ratings: { beer: {}, food: {} },
    foodReviews: {},
    customBeers: {}
  };
}

function normalizeState(loaded) {
  loaded.ratings = { beer: {}, food: {}, ...(loaded.ratings || {}) };
  loaded.foodReviews = loaded.foodReviews || {};
  loaded.customBeers = loaded.customBeers || {};
  const placeholders = new Set(["Bina", "Kamos 1", "Kamos 2"]);
  const friends = (loaded.friends || []).map(renameFriend).filter((friend) => !placeholders.has(friend));
  loaded.friends = [...new Set([...defaultFriends, ...friends])];
  loaded.votes = loaded.votes || {};
  loaded.comments = loaded.comments || {};
  Object.values(loaded.votes).forEach(renameFriendKeys);
  Object.values(loaded.votes).forEach((votes) => {
    placeholders.forEach((friend) => delete votes[friend]);
  });
  Object.keys(loaded.votes).forEach((id) => {
    if (!Object.keys(loaded.votes[id]).length) delete loaded.votes[id];
  });
  Object.keys(loaded.comments).forEach((id) => {
    loaded.comments[id].forEach((comment) => {
      comment.friend = renameFriend(comment.friend);
    });
    loaded.comments[id] = loaded.comments[id].filter((comment) => !placeholders.has(comment.friend));
    if (!loaded.comments[id].length) delete loaded.comments[id];
  });
  ["beer", "food"].forEach((type) => {
    Object.values(loaded.ratings[type] || {}).forEach((ratings) => {
      renameFriendKeys(ratings);
      placeholders.forEach((friend) => delete ratings[friend]);
    });
  });
  Object.keys(loaded.foodReviews).forEach((id) => {
    loaded.foodReviews[id].forEach((review) => {
      review.friend = renameFriend(review.friend);
    });
    loaded.foodReviews[id] = loaded.foodReviews[id].filter((review) => !placeholders.has(review.friend));
    if (!loaded.foodReviews[id].length) delete loaded.foodReviews[id];
  });
  return loaded;
}

function renameFriend(name) {
  return renamedFriends[name] || name;
}

function renameFriendKeys(record) {
  Object.entries(renamedFriends).forEach(([oldName, newName]) => {
    if (Object.prototype.hasOwnProperty.call(record, oldName)) {
      record[newName] = record[newName] || record[oldName];
      delete record[oldName];
    }
  });
}

function saveState() {
  localStorage.setItem(activeFriendKey, state.activeFriend || "");
  localStorage.setItem(storageKey, JSON.stringify(sharedState()));
  queueCloudSave();
}

function sharedState() {
  const { activeFriend, ...shared } = state;
  return shared;
}

let cloudSaveTimer = null;
let applyingRemote = false;

function queueCloudSave() {
  if (!db || applyingRemote) return;
  clearTimeout(cloudSaveTimer);
  cloudSaveTimer = setTimeout(saveCloudState, 350);
}

async function saveCloudState() {
  if (!db) return;
  const { error } = await db
    .from("app_state")
    .upsert({ id: "main", data: sharedState(), updated_at: new Date().toISOString() });
  if (error) console.warn("Supabase save failed:", error.message);
}

async function loadCloudState() {
  if (!db) return;
  const { data, error } = await db.from("app_state").select("data").eq("id", "main").single();
  if (error) {
    console.warn("Supabase load failed:", error.message);
    return;
  }
  const activeFriend = renameFriend(state.activeFriend);
  state = normalizeState({ ...defaultState(), ...(data?.data || {}) });
  state.activeFriend = activeFriend && state.friends.includes(activeFriend) ? activeFriend : "";
  localStorage.setItem(storageKey, JSON.stringify(sharedState()));
  if (JSON.stringify(data?.data || {}) !== JSON.stringify(sharedState())) queueCloudSave();
}

function subscribeCloudState() {
  if (!db) return;
  db.channel("app-state")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "app_state", filter: "id=eq.main" },
      (payload) => {
        if (!payload.new?.data) return;
        applyingRemote = true;
        const activeFriend = renameFriend(state.activeFriend);
        state = normalizeState({ ...defaultState(), ...payload.new.data });
        state.activeFriend = activeFriend && state.friends.includes(activeFriend) ? activeFriend : "";
        localStorage.setItem(storageKey, JSON.stringify(sharedState()));
        render();
        applyingRemote = false;
      }
    )
    .subscribe();
}

function slug(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function searchable(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function eventId(dayId, event) {
  return slug(`${dayId}-${event.name}-${event.stage}-${event.start}`);
}

function getCurrentDay() {
  return days.find((day) => day.id === activeDay);
}

function minutes(time) {
  const [hours, mins] = time.split(":").map(Number);
  return (hours < 5 ? hours + 24 : hours) * 60 + mins;
}

function displayStage(stage) {
  return stage === "Mastercard Stage" ? "KB / Mastercard Stage" : stage;
}

function getEventScore(id) {
  return Object.values(state.votes[id] || {}).reduce((total, rating) => total + ratingMeta[rating].score, 0);
}

function allProgramEvents() {
  return days.flatMap((day) => day.events.map((event) => ({ day, event, id: eventId(day.id, event) })));
}

function eventSearchText(day, event) {
  const [origin, style] = eventInfo(event);
  return searchable(`${event.name} ${displayStage(event.stage)} ${day.label} ${day.date} ${countryCode(origin)} ${style}`);
}

function eventSuggestionLabel(day, event) {
  return event.name;
}

function findProgramMatches(query) {
  const needle = searchable(query.trim());
  if (!needle) return [];
  return allProgramEvents()
    .filter(({ day, event }) => eventSearchText(day, event).includes(needle))
    .sort((a, b) => {
      const exactA = searchable(a.event.name) === needle ? 0 : 1;
      const exactB = searchable(b.event.name) === needle ? 0 : 1;
      if (exactA !== exactB) return exactA - exactB;
      return days.indexOf(a.day) - days.indexOf(b.day) || minutes(a.event.start) - minutes(b.event.start);
    });
}

function getVisibleEvents() {
  const stage = els.stageFilter.value;
  const onlyMine = els.onlyMine.checked;

  return getCurrentDay().events.filter((event) => {
    const id = eventId(activeDay, event);
    const matchesStage = stage === "all" || event.stage === stage;
    const matchesMine = !onlyMine || Boolean(state.votes[id]?.[state.activeFriend]);
    return matchesStage && matchesMine;
  });
}

function renderFriends() {
  els.activeFriend.innerHTML = "";
  if (!state.friends.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Přidat člověka";
    els.activeFriend.append(option);
  }
  state.friends.forEach((friend) => {
    const option = document.createElement("option");
    option.value = friend;
    option.textContent = friend;
    els.activeFriend.append(option);
  });
  els.activeFriend.value = state.activeFriend;

  els.friendList.innerHTML = "";
  state.friends.forEach((friend) => {
    const voted = Object.values(state.votes).filter((eventVotes) => eventVotes[friend]).length;
    const chip = document.createElement("div");
    chip.className = "friend-chip";
    const name = document.createElement("span");
    const count = document.createElement("span");
    name.textContent = friend;
    count.textContent = `${voted} hlasu`;
    chip.append(name, count);
    els.friendList.append(chip);
  });
}

function renderStages() {
  const current = els.stageFilter.value || "all";
  els.stageFilter.innerHTML = '<option value="all">Všechny stage</option>';
  stages.forEach((stage) => {
    const option = document.createElement("option");
    option.value = stage;
    option.textContent = displayStage(stage);
    els.stageFilter.append(option);
  });
  els.stageFilter.value = stages.includes(current) ? current : "all";
}

function renderEventSuggestions() {
  if (!els.eventSuggestions) return;
  const query = els.searchInput.value.trim();
  const matches = findProgramMatches(query).slice(0, 12);
  els.eventSuggestions.innerHTML = "";
  matches.forEach(({ day, event }) => {
    const option = document.createElement("option");
    option.value = eventSuggestionLabel(day, event);
    els.eventSuggestions.append(option);
  });
}

function renderTabs() {
  els.dayTabs.innerHTML = "";
  days.forEach((day) => {
    const button = document.createElement("button");
    button.className = `day-tab ${day.id === activeDay ? "active" : ""}`;
    button.type = "button";
    button.textContent = `${day.label} ${day.date}`;
    button.addEventListener("click", () => {
      activeDay = day.id;
      activeEventId = null;
      searchTargetId = null;
      render();
    });
    els.dayTabs.append(button);
  });
}

function renderSchedule() {
  const events = getVisibleEvents();
  const visibleStages = stages.filter((stage) => els.stageFilter.value === "all" || els.stageFilter.value === stage);
  const dayStart = Math.min(...getCurrentDay().events.map((event) => minutes(event.start)), 10 * 60);
  const dayEnd = Math.max(...getCurrentDay().events.map((event) => minutes(event.end)), 26 * 60 + 30);
  const start = Math.floor(dayStart / 30) * 30;
  const end = Math.ceil(dayEnd / 30) * 30;
  const rowCount = (end - start) / 5;
  const pxPerFive = window.matchMedia("(max-width: 760px)").matches ? 14 : 20;

  els.schedule.style.setProperty("--rows", rowCount);
  els.schedule.style.setProperty("--row-height", `${pxPerFive}px`);
  els.schedule.style.setProperty("--stage-count", visibleStages.length);

  els.timeAxis.innerHTML = "";
  for (let mark = start; mark <= end; mark += 30) {
    const time = document.createElement("div");
    time.className = "time-mark";
    time.style.gridRow = `${(mark - start) / 5 + 2} / span 6`;
    time.textContent = formatMinute(mark);
    els.timeAxis.append(time);
  }

  els.stageGrid.innerHTML = "";
  els.mobileStageTrack.innerHTML = "";
  els.mobileStageStrip.style.setProperty("--stage-count", visibleStages.length);
  visibleStages.forEach((stage, index) => {
    const header = document.createElement("div");
    header.className = "stage-header";
    header.style.gridColumn = index + 1;
    header.textContent = displayStage(stage);
    els.stageGrid.append(header);

    const mobileHeader = document.createElement("div");
    mobileHeader.className = "mobile-stage-header";
    mobileHeader.textContent = displayStage(stage);
    els.mobileStageTrack.append(mobileHeader);
  });

  events.forEach((event) => {
    if (!visibleStages.includes(event.stage)) return;
    const id = eventId(activeDay, event);
    const score = getEventScore(id);
    const startRow = (minutes(event.start) - start) / 5 + 2;
    const span = Math.max((minutes(event.end) - minutes(event.start)) / 5, 6);
    const column = visibleStages.indexOf(event.stage) + 1;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `event-card ${event.program ? "program-event" : ""} ${scoreClass(score)} ${id === searchTargetId ? "search-target" : ""}`;
    button.style.gridColumn = column;
    button.style.gridRow = `${startRow} / span ${span}`;
    button.dataset.id = id;
    const [origin, style] = eventInfo(event);
    button.innerHTML = `
      <span class="event-time">${event.start} - ${event.end}</span>
      <strong>${event.name}</strong>
      <span class="event-info">${event.program || isSecretEvent(event) ? style : `${countryCode(origin)} · ${style}`}</span>
      <span class="event-meta">${formatScore(score)}</span>
    `;
    button.addEventListener("click", () => openEvent(id, button));
    els.stageGrid.append(button);
  });
  updateMobileStageTrack();
  scrollToSearchTarget();
}

function scrollToSearchTarget() {
  if (!searchTargetId || activeView !== "program") return;
  requestAnimationFrame(() => {
    const target = els.stageGrid.querySelector(`[data-id="${searchTargetId}"]`);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    updateMobileStageTrack();
  });
}

function updateMobileStageTrack() {
  els.mobileStageTrack.style.transform = `translateX(${-els.schedule.scrollLeft}px)`;
}

function formatMinute(total) {
  const hours = Math.floor(total / 60) % 24;
  const mins = total % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}

function voteSummary(id) {
  const votes = Object.values(state.votes[id] || {});
  if (!votes.length) return "bez hlasů";
  const must = votes.filter((vote) => vote === "must").length;
  const trash = votes.filter((vote) => vote === "trash").length;
  return `${getEventScore(id)} bodů · ${must} must · ${trash} trash`;
}

function formatScore(score) {
  return score > 0 ? `+${score}` : String(score);
}

function countryCode(origin) {
  const map = {
    "Australia": "AU",
    "Brazil": "BR",
    "Canada": "CA",
    "Czech Republic": "CZ",
    "Czech Republic / International": "CZ/INT",
    "France": "FR",
    "France / USA": "FR/US",
    "Germany": "DE",
    "Ghana / Australia": "GH/AU",
    "India": "IN",
    "International": "INT",
    "International / Czech Republic": "INT/CZ",
    "Ireland": "IE",
    "Italy": "IT",
    "Japan": "JP",
    "Netherlands": "NL",
    "New Zealand": "NZ",
    "Portugal": "PT",
    "Slovakia": "SK",
    "Spain": "ES",
    "Sweden": "SE",
    "UK": "UK",
    "USA": "US"
  };
  return map[origin] || origin;
}

function voteBreakdown(id) {
  const votes = Object.values(state.votes[id] || {});
  return Object.entries(ratingMeta)
    .map(([key, meta]) => `${meta.label}: ${votes.filter((vote) => vote === key).length}`)
    .join(" · ");
}

function artistLinks(event) {
  if (event.program || isSecretEvent(event)) return "";
  const query = encodeURIComponent(event.name);
  return `
    <div class="artist-links">
      <a class="youtube-link" href="https://www.youtube.com/results?search_query=${query}" target="_blank" rel="noreferrer"><span class="brand-icon youtube-icon"></span>YouTube</a>
      <a class="spotify-link" href="https://open.spotify.com/search/${query}" target="_blank" rel="noreferrer"><span class="brand-icon spotify-icon"></span>Spotify</a>
    </div>
  `;
}

function scoreClass(score) {
  if (score >= 5) return "score-hot";
  if (score > 0) return "score-good";
  if (score === 0) return "score-neutral";
  return "score-bad";
}

function eventInfo(event) {
  if (isSecretEvent(event)) return ["Secret show", "secret show"];
  if (event.program) return ["Doprovodný program", programType(event.name)];
  return artistInfo[event.name] || ["TBA", "hudebni act"];
}

function isSecretEvent(event) {
  return event.name.includes("Special Guest by Mastercard");
}

function programType(name) {
  const lower = name.toLowerCase();
  if (lower.includes("stand-up") || lower.includes("comedy") || lower.includes("na stojaka")) return "stand-up comedy";
  if (lower.includes("podcast") || lower.includes("headliner") || lower.includes("prostor x") || lower.includes("poprask")) return "podcast / rozhovor";
  if (lower.includes("az-kviz") || lower.includes("az-kviz")) return "festivalovy kviz";
  if (lower.includes("karaoke")) return "karaoke";
  if (lower.includes("tanecni")) return "tanecni program";
  if (lower.includes("slam")) return "slam poetry";
  if (lower.includes("svatba") || lower.includes("film") || lower.includes("kmeny")) return "projekce / filmový program";
  if (lower.includes("talk") || lower.includes("reflex") || lower.includes("ct:") || lower.includes("diskuze") || lower.includes("diky")) return "debata / rozhovor";
  if (lower.includes("cirque") || lower.includes("burlesque") || lower.includes("show")) return "performance";
  if (lower.includes("muzikal")) return "muzikal / comedy show";
  return "doprovodný program";
}

function findEventById(id) {
  for (const day of days) {
    const found = day.events.find((event) => eventId(day.id, event) === id);
    if (found) return { day, event: found };
  }
  return null;
}

function openEvent(id, anchor) {
  const found = findEventById(id);
  if (!found) return;
  activeEventId = id;
  const { day, event } = found;
  els.eventDialog.innerHTML = `
    <div class="dialog-card">
      <button class="dialog-close" id="closeDialog" type="button" aria-label="Zavřít detail">x</button>
      <p class="dialog-kicker">${day.label} ${day.date} · ${displayStage(event.stage)} · ${event.start} - ${event.end}</p>
      <h2>${event.name}</h2>
      <div class="score-line">
        <strong>${formatScore(getEventScore(id))}</strong>
        <span>${voteBreakdown(id)}</span>
      </div>
      ${artistLinks(event)}
      <div class="rating-row" aria-label="Hodnocení ${event.name}">
        ${Object.entries(ratingMeta).map(([key, meta]) => `<button type="button" data-rating="${key}">${meta.label}</button>`).join("")}
      </div>
      <div class="votes"></div>
      <form class="comment-form">
        <textarea placeholder="Poznámka ke kapele nebo programu"></textarea>
        <button type="submit">Přidat komentář</button>
      </form>
      <div class="comments"></div>
    </div>
  `;

  const myRating = state.votes[id]?.[state.activeFriend];
  els.eventDialog.querySelectorAll("[data-rating]").forEach((button) => {
    button.classList.toggle("active", button.dataset.rating === myRating);
    button.addEventListener("click", () => {
      if (!ensureActiveFriend()) return;
      state.votes[id] ||= {};
      state.votes[id][state.activeFriend] = button.dataset.rating;
      saveState();
      openEvent(id);
      renderBackground();
    });
  });
  renderVotes(els.eventDialog.querySelector(".votes"), id);
  renderComments(els.eventDialog.querySelector(".comments"), id);
  els.eventDialog.querySelector(".comment-form").addEventListener("submit", (eventSubmit) => {
    eventSubmit.preventDefault();
    const textarea = eventSubmit.currentTarget.querySelector("textarea");
    const text = textarea.value.trim();
    if (!text) return;
    if (!ensureActiveFriend()) return;
    state.comments[id] ||= [];
    state.comments[id].push({ friend: state.activeFriend, text, createdAt: new Date().toISOString() });
    textarea.value = "";
    saveState();
    openEvent(id);
    renderBackground();
  });
  els.eventDialog.querySelector(".dialog-close").addEventListener("click", closeEvent);
  els.eventDialog.classList.add("open");
  positionEventDialog(anchor);
}

function closeEvent() {
  activeEventId = null;
  els.eventDialog.classList.remove("open");
  els.eventDialog.innerHTML = "";
}

function positionEventDialog(anchor) {
  if (!anchor) return;
  const rect = anchor.getBoundingClientRect();
  const dialog = els.eventDialog.querySelector(".dialog-card");
  if (!dialog) return;
  const gap = 10;
  const width = Math.min(520, window.innerWidth - 24);
  const height = Math.min(dialog.offsetHeight || 520, window.innerHeight - 24);
  let left = rect.right + gap;
  let top = rect.top;

  if (left + width > window.innerWidth - 12) left = rect.left - width - gap;
  if (left < 12) left = 12;
  if (top + height > window.innerHeight - 12) top = window.innerHeight - height - 12;
  if (top < 12) top = 12;

  els.eventDialog.style.left = `${left}px`;
  els.eventDialog.style.top = `${top}px`;
  els.eventDialog.style.width = `${width}px`;
}

function renderVotes(container, id) {
  container.innerHTML = "";
  const votes = state.votes[id] || {};
  Object.entries(votes).forEach(([friend, rating]) => {
    const pill = document.createElement("span");
    pill.className = `vote-pill ${rating}`;
    pill.textContent = `${friend}: ${ratingMeta[rating].label}`;
    container.append(pill);
  });
}

function renderComments(container, id) {
  container.innerHTML = "";
  (state.comments[id] || []).slice().reverse().forEach((comment) => {
    const node = document.createElement("div");
    node.className = "comment";
    const who = document.createElement("strong");
    const text = document.createElement("p");
    who.textContent = comment.friend;
    text.textContent = comment.text;
    node.append(who, text);
    if (comment.friend === state.activeFriend) {
      const actions = document.createElement("div");
      actions.className = "item-actions";
      const edit = document.createElement("button");
      const remove = document.createElement("button");
      edit.type = "button";
      remove.type = "button";
      edit.textContent = "Upravit";
      remove.textContent = "Smazat";
      edit.addEventListener("click", () => editComment(id, comment.createdAt));
      remove.addEventListener("click", () => deleteComment(id, comment.createdAt));
      actions.append(edit, remove);
      node.append(actions);
    }
    container.append(node);
  });
}

function editComment(id, createdAt) {
  const comment = (state.comments[id] || []).find((item) => item.createdAt === createdAt && item.friend === state.activeFriend);
  if (!comment) return;
  const next = prompt("Upravit komentář:", comment.text);
  if (next === null) return;
  comment.text = next.trim();
  saveState();
  openEvent(id);
  renderBackground();
}

function deleteComment(id, createdAt) {
  state.comments[id] = (state.comments[id] || []).filter((item) => !(item.createdAt === createdAt && item.friend === state.activeFriend));
  saveState();
  openEvent(id);
  renderBackground();
}

function ratingId(type, ...parts) {
  return slug([type, ...parts].join("-"));
}

function ratingAverage(type, id) {
  const values = Object.values(state.ratings[type]?.[id] || {});
  if (!values.length) return null;
  return values.reduce((sum, value) => sum + Number(value), 0) / values.length;
}

function renderRatingPanel() {
  if (activeView === "program") {
    els.ratingPanel.hidden = true;
    return;
  }

  els.ratingPanel.hidden = false;
  const isBeer = activeView === "beer";
  const title = isBeer ? "Beer rating" : "Food rating";
  const source = isBeer ? beerLineup : foodLineup;
  els.ratingPanel.innerHTML = `
    <div class="rating-head">
      <div>
        <p class="eyebrow">${isBeer ? "Pivovary a čepovaná piva" : "Gastro stánky"}</p>
        <h2>${title}</h2>
      </div>
      <span>${source.length} ${isBeer ? "pivovarů" : "stánků"}</span>
    </div>
    ${isBeer ? `
      <div class="rating-search">
        <label>
          <span>Vyhledat pivovar nebo pivo</span>
          <input id="beerSearchInput" type="search" placeholder="třeba Clock, IPA, nealko" />
        </label>
      </div>
    ` : `
      <div class="rating-search">
        <label>
          <span>Vyhledat stánek nebo jídlo</span>
          <input id="foodSearchInput" type="search" placeholder="třeba burger, vegan, hranolky" />
        </label>
      </div>
    `}
    <div class="rating-list"></div>
  `;
  const list = els.ratingPanel.querySelector(".rating-list");

  if (isBeer) {
    renderBeerList();
    els.ratingPanel.querySelector("#beerSearchInput").addEventListener("input", renderBeerList);
  } else {
    renderFoodList();
    els.ratingPanel.querySelector("#foodSearchInput").addEventListener("input", renderFoodList);
  }
}

function renderBeerList() {
  const list = els.ratingPanel.querySelector(".rating-list");
  const query = els.ratingPanel.querySelector("#beerSearchInput")?.value.trim().toLowerCase() || "";
  list.innerHTML = "";
  const filtered = beerLineup.map((breweryItem) => {
    const matchesBrewery = breweryItem.name.toLowerCase().includes(query);
    const beers = getBreweryBeers(breweryItem).filter((beerName) => matchesBrewery || beerName.toLowerCase().includes(query));
    return { ...breweryItem, beers, matchesBrewery };
  }).filter((breweryItem) => !query || breweryItem.beers.length);

  if (!filtered.length) {
    list.innerHTML = '<div class="empty-state">Nic nenalezeno. Zkus jiný pivovar nebo styl.</div>';
    return;
  }

  filtered.forEach((breweryItem) => {
    const breweryId = ratingId("brewery", breweryItem.name);
    const isOpen = query || openBeerId === breweryId;
    const averages = getBreweryBeers(breweryItem).map((beerName) => ratingAverage("beer", ratingId("beer", breweryItem.name, beerName))).filter((value) => value !== null);
    const breweryAverage = averages.length ? (averages.reduce((sum, value) => sum + value, 0) / averages.length).toFixed(1) : "-";
    const group = document.createElement("article");
    group.className = `rating-group beer-group ${isOpen ? "open" : ""}`;
    group.innerHTML = `
      <button class="brewery-toggle" type="button" aria-expanded="${isOpen}">
        <span class="chevron">${isOpen ? "v" : ">"}</span>
        <span class="brewery-brand">${breweryLogo(breweryItem)}<strong>${breweryItem.name}</strong></span>
        <span>${breweryAverage}</span>
      </button>
      <div class="rating-items" ${isOpen ? "" : "hidden"}></div>
    `;
    group.querySelector(".brewery-toggle").addEventListener("click", () => {
      openBeerId = isOpen ? null : breweryId;
      renderBeerList();
    });
    const items = group.querySelector(".rating-items");
    if (breweryItem.rotating) {
      items.append(createCustomBeerForm(breweryItem.name));
    }
    breweryItem.beers.forEach((beerName) => {
      items.append(createBeerRow(breweryItem.name, beerName));
    });
    list.append(group);
  });
}

function renderFoodList() {
  const list = els.ratingPanel.querySelector(".rating-list");
  const query = els.ratingPanel.querySelector("#foodSearchInput")?.value.trim().toLowerCase() || "";
  list.innerHTML = "";
  const filtered = foodLineup
    .map((vendor) => ({ vendor, average: foodVendorAverage(ratingId("food", vendor.name)) }))
    .filter(({ vendor }) => {
      const id = ratingId("food", vendor.name);
      const dishes = Object.values(groupFoodReviews(id)).map((reviews) => reviews[0].dish);
      const haystack = [vendor.name, vendor.description, ...dishes].join(" ").toLowerCase();
      return !query || haystack.includes(query);
    })
    .sort((a, b) => {
      if (a.average === null && b.average === null) return a.vendor.name.localeCompare(b.vendor.name);
      if (a.average === null) return 1;
      if (b.average === null) return -1;
      return b.average - a.average;
    });

  if (!filtered.length) {
    list.innerHTML = '<div class="empty-state">Nic nenalezeno. Zkus jiný stánek nebo jídlo.</div>';
    return;
  }

  filtered.forEach(({ vendor }) => list.append(createFoodVendorCard(vendor)));
}

function breweryLogo(breweryItem) {
  if (breweryBadges[breweryItem.name]) {
    return `<span class="brewery-initials logo-badge-${slug(breweryItem.name)}">${breweryBadges[breweryItem.name]}</span>`;
  }
  if (breweryItem.logo) {
    return `<img class="brewery-logo" src="${breweryItem.logo}" alt="" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('span'), { className: 'brewery-initials', textContent: '${initials(breweryItem.name)}' }))" />`;
  }
  return `<span class="brewery-initials">${initials(breweryItem.name)}</span>`;
}

function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function getBreweryBeers(breweryItem) {
  return breweryItem.beers.concat(state.customBeers[breweryItem.name] || []);
}

function createCustomBeerForm(breweryName) {
  const form = document.createElement("form");
  form.className = "custom-beer-form";
  form.innerHTML = `
    <input name="beer" type="text" placeholder="Název piva z rotující pípy" required />
    <button type="submit">Přidat pivo</button>
  `;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const beerName = String(new FormData(form).get("beer") || "").trim();
    if (!beerName) return;
    state.customBeers[breweryName] ||= [];
    if (!state.customBeers[breweryName].includes(beerName)) {
      state.customBeers[breweryName].push(beerName);
      saveState();
    }
    renderBeerList();
  });
  return form;
}

function createBeerRow(breweryName, beerName) {
  const id = ratingId("beer", breweryName, beerName);
  const row = createRatingRow("beer", id, beerName);
  row.classList.add("beer-row");
  const detail = document.createElement("div");
  detail.className = "rating-votes";
  detail.hidden = true;
  renderRatingVotes(detail, "beer", id);
  row.append(detail);
  row.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "input") return;
    detail.hidden = !detail.hidden;
  });
  return row;
}

function createRatingRow(type, id, name, description = "") {
  const row = document.createElement("article");
  row.className = "rating-row-card";
  const average = ratingAverage(type, id);
  const myRating = state.ratings[type]?.[id]?.[state.activeFriend] ?? "";
  row.innerHTML = `
    <div>
      <h3>${name}</h3>
      ${description ? `<p>${description}</p>` : ""}
    </div>
    <div class="rating-control">
      <strong>${average === null ? "-" : average.toFixed(1)}</strong>
      <label>
        <span>hodnocení</span>
        <input type="number" min="0" max="10" step="1" value="${myRating}" placeholder="0-10" />
      </label>
    </div>
  `;
  row.querySelector("input").addEventListener("change", (event) => {
    if (!ensureActiveFriend()) {
      event.target.value = "";
      return;
    }
    const value = Number(event.target.value);
    if (!Number.isFinite(value) || value < 0 || value > 10) {
      event.target.value = "";
      return;
    }
    state.ratings[type] ||= {};
    state.ratings[type][id] ||= {};
    state.ratings[type][id][state.activeFriend] = value;
    saveState();
    if (type === "beer" && activeView === "beer") renderBeerList();
    else renderRatingPanel();
  });
  return row;
}

function createFoodVendorCard(vendor) {
  const id = ratingId("food", vendor.name);
  const average = foodVendorAverage(id);
  const isOpen = openFoodId === id;
  const card = document.createElement("article");
  card.className = "food-card";
  card.innerHTML = `
    <button class="food-toggle" type="button">
      <div>
        <h3>${vendor.name}</h3>
        <p>${vendor.description}</p>
      </div>
      <strong class="${scoreSpectrumClass(average)}">${average === null ? "-" : average.toFixed(1)}</strong>
    </button>
    <div class="food-detail" ${isOpen ? "" : "hidden"}>
      <div class="food-dishes"></div>
      <form class="food-form">
        <input name="dish" type="text" placeholder="Co sis dal/a" required />
        <input name="price" type="number" min="0" step="1" placeholder="Cena v Kč" />
        <input name="rating" type="number" min="0" max="10" step="1" placeholder="Hodnocení 0-10" required />
        <textarea name="comment" placeholder="Komentář k jídlu"></textarea>
        <button type="submit">Přidat jídlo</button>
      </form>
    </div>
  `;
  const detail = card.querySelector(".food-detail");
  const dishesNode = card.querySelector(".food-dishes");
  card.querySelector(".food-toggle").addEventListener("click", () => {
    openFoodId = detail.hidden ? id : null;
    renderFoodList();
  });
  card.querySelector(".food-form").addEventListener("submit", (event) => {
    event.preventDefault();
    if (!ensureActiveFriend()) return;
    const form = new FormData(event.currentTarget);
    const dish = String(form.get("dish") || "").trim();
    const rating = Number(form.get("rating"));
    const price = formatPrice(form.get("price"));
    const comment = String(form.get("comment") || "").trim();
    if (!dish || !Number.isFinite(rating) || rating < 0 || rating > 10) return;
    state.foodReviews[id] ||= [];
    state.foodReviews[id].push({ friend: state.activeFriend, dish, price, rating, comment, createdAt: new Date().toISOString() });
    saveState();
    openFoodId = id;
    openDishId = `${id}-${slug(dish.toLowerCase())}`;
    renderFoodList();
  });
  renderFoodDishes(dishesNode, id);
  return card;
}

function foodVendorAverage(id) {
  const reviews = state.foodReviews[id] || [];
  if (!reviews.length) return null;
  const dishAverages = Object.values(groupFoodReviews(id)).map((reviewsForDish) => average(reviewsForDish.map((review) => review.rating)));
  return average(dishAverages);
}

function groupFoodReviews(id) {
  return (state.foodReviews[id] || []).reduce((groups, review) => {
    const key = review.dish.trim().toLowerCase();
    groups[key] ||= [];
    groups[key].push(review);
    return groups;
  }, {});
}

function average(values) {
  if (!values.length) return null;
  return values.reduce((sum, value) => sum + Number(value), 0) / values.length;
}

function scoreSpectrumClass(value) {
  if (value === null) return "score-empty";
  if (value >= 8) return "score-10";
  if (value >= 6) return "score-7";
  if (value >= 4) return "score-5";
  if (value >= 2) return "score-3";
  return "score-0";
}

function formatPrice(rawPrice) {
  const value = String(rawPrice || "").trim();
  if (!value) return "";
  return `${value} Kč`;
}

function renderFoodDishes(container, vendorId) {
  const groups = groupFoodReviews(vendorId);
  const dishes = Object.entries(groups).map(([key, reviews]) => ({
    key,
    name: reviews[0].dish,
    price: reviews.find((review) => review.price)?.price || "",
    reviews,
    average: average(reviews.map((review) => review.rating))
  })).sort((a, b) => b.average - a.average);

  if (!dishes.length) {
    container.innerHTML = '<div class="empty-state">Zatím tu není žádné jídlo. Buď první testovací žaludek.</div>';
    return;
  }

  container.innerHTML = "";
  dishes.forEach((dish) => {
    const dishId = `${vendorId}-${slug(dish.key)}`;
    const node = document.createElement("article");
    node.className = "dish-card";
    node.innerHTML = `
      <button class="dish-toggle" type="button">
        <strong>${dish.name}${dish.price ? ` · ${dish.price}` : ""}</strong>
        <span class="${scoreSpectrumClass(dish.average)}">${dish.average.toFixed(1)}</span>
      </button>
      <div class="dish-detail" ${openDishId === dishId ? "" : "hidden"}>
        <form class="dish-form">
          <input name="rating" type="number" min="0" max="10" step="1" placeholder="0-10" required />
          <textarea name="comment" placeholder="Komentář k tomuhle jídlu"></textarea>
          <button type="submit">Přidat hodnocení</button>
        </form>
        <div class="food-reviews">
          ${dish.reviews.slice().reverse().map((review) => `
            <div class="food-review" data-created-at="${review.createdAt}">
              <strong>${review.rating}/10</strong>
              <span>${review.friend}</span>
              ${review.comment ? `<p>${review.comment}</p>` : ""}
              ${review.friend === state.activeFriend ? `
                <div class="item-actions">
                  <button type="button" data-action="edit-food">Upravit</button>
                  <button type="button" data-action="delete-food">Smazat</button>
                </div>
              ` : ""}
            </div>
          `).join("")}
        </div>
      </div>
    `;
    node.querySelector(".dish-toggle").addEventListener("click", () => {
      openDishId = openDishId === dishId ? null : dishId;
      renderFoodList();
    });
    node.querySelector(".dish-form").addEventListener("submit", (event) => {
      event.preventDefault();
      if (!ensureActiveFriend()) return;
      const form = new FormData(event.currentTarget);
      const rating = Number(form.get("rating"));
      const comment = String(form.get("comment") || "").trim();
      if (!Number.isFinite(rating) || rating < 0 || rating > 10) return;
      state.foodReviews[vendorId] ||= [];
      state.foodReviews[vendorId].push({ friend: state.activeFriend, dish: dish.name, rating, comment, createdAt: new Date().toISOString() });
      saveState();
      openDishId = dishId;
      renderFoodList();
    });
    node.querySelectorAll("[data-action='edit-food']").forEach((button) => {
      button.addEventListener("click", (event) => {
        const createdAt = event.currentTarget.closest(".food-review").dataset.createdAt;
        editFoodReview(vendorId, createdAt);
      });
    });
    node.querySelectorAll("[data-action='delete-food']").forEach((button) => {
      button.addEventListener("click", (event) => {
        const createdAt = event.currentTarget.closest(".food-review").dataset.createdAt;
        deleteFoodReview(vendorId, createdAt);
      });
    });
    container.append(node);
  });
}

function editFoodReview(vendorId, createdAt) {
  const review = (state.foodReviews[vendorId] || []).find((item) => item.createdAt === createdAt && item.friend === state.activeFriend);
  if (!review) return;
  const rating = prompt("Upravit hodnocení 0-10:", String(review.rating));
  if (rating === null) return;
  const numericRating = Number(rating);
  if (!Number.isFinite(numericRating) || numericRating < 0 || numericRating > 10) return;
  const comment = prompt("Upravit komentář:", review.comment || "");
  if (comment === null) return;
  review.rating = numericRating;
  review.comment = comment.trim();
  saveState();
  renderFoodList();
}

function deleteFoodReview(vendorId, createdAt) {
  state.foodReviews[vendorId] = (state.foodReviews[vendorId] || []).filter((item) => !(item.createdAt === createdAt && item.friend === state.activeFriend));
  if (!state.foodReviews[vendorId].length) delete state.foodReviews[vendorId];
  saveState();
  renderFoodList();
}

function renderRatingVotes(container, type, id) {
  const votes = state.ratings[type]?.[id] || {};
  const entries = Object.entries(votes);
  container.innerHTML = entries.length
    ? entries.map(([friend, value]) => `<span>${friend}: <strong>${value}/10</strong></span>`).join("")
    : "<span>Zatím bez hodnocení.</span>";
}

function renderView() {
  const program = activeView === "program";
  els.programOnly.forEach((element) => {
    element.hidden = !program;
  });
  document.querySelectorAll(".shared-panel").forEach((element) => {
    element.hidden = !program;
  });
  els.schedule.hidden = !program;
  els.moduleButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === activeView);
  });
  if (program) {
    els.ratingPanel.hidden = true;
    renderSchedule();
  } else {
    renderRatingPanel();
  }
}

function navigateToProgramSearch() {
  const query = els.searchInput.value.trim();
  renderEventSuggestions();
  if (!query) {
    searchTargetId = null;
    render();
    return;
  }

  const matches = findProgramMatches(query);
  const exact = matches.find(({ day, event }) => eventSuggestionLabel(day, event) === query);
  const target = exact || (query.length >= 2 ? matches[0] : null);
  if (!target) {
    searchTargetId = null;
    render();
    return;
  }

  activeView = "program";
  activeDay = target.day.id;
  searchTargetId = target.id;
  activeEventId = null;
  els.stageFilter.value = "all";
  closeEvent();
  render();
}

function renderBackground() {
  renderFriends();
  renderView();
}

function render() {
  renderFriends();
  renderStages();
  renderEventSuggestions();
  renderTabs();
  renderView();
}

async function initApp() {
  state = loadState();
  render();
  await loadCloudState();
  render();
  subscribeCloudState();
}

els.activeFriend.addEventListener("change", () => {
  state.activeFriend = els.activeFriend.value;
  saveState();
  render();
});

function addFriend() {
  const name = prompt("Jméno člověka v partě:");
  const clean = name?.trim();
  if (!clean || state.friends.includes(clean)) return false;
  state.friends.push(clean);
  state.activeFriend = clean;
  saveState();
  render();
  return true;
}

function ensureActiveFriend() {
  if (state.activeFriend) return true;
  alert("Nejdřív přidej člověka do party.");
  return false;
}

els.addFriendBtn.addEventListener("click", addFriend);
els.addFriendPanelBtn.addEventListener("click", addFriend);

els.stageFilter.addEventListener("change", render);
els.searchInput.addEventListener("input", () => {
  clearTimeout(searchTimer);
  renderEventSuggestions();
  searchTimer = setTimeout(navigateToProgramSearch, 180);
});
els.searchInput.addEventListener("change", navigateToProgramSearch);
els.onlyMine.addEventListener("change", render);
els.schedule.addEventListener("scroll", updateMobileStageTrack, { passive: true });
els.moduleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeView = button.dataset.view;
    closeEvent();
    renderView();
  });
});

els.eventDialog.addEventListener("click", (event) => {
  if (event.target === els.eventDialog) closeEvent();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeEvent();
});

function mergeVotes(current, imported) {
  const merged = { ...current };
  Object.entries(imported).forEach(([id, votes]) => {
    merged[id] = { ...(merged[id] || {}), ...votes };
  });
  return merged;
}

function mergeComments(current, imported) {
  const merged = { ...current };
  Object.entries(imported).forEach(([id, comments]) => {
    const existing = merged[id] || [];
    const known = new Set(existing.map((comment) => `${comment.friend}-${comment.createdAt}-${comment.text}`));
    merged[id] = existing.concat(comments.filter((comment) => !known.has(`${comment.friend}-${comment.createdAt}-${comment.text}`)));
  });
  return merged;
}

function mergeFoodReviews(current, imported) {
  const merged = { ...current };
  Object.entries(imported).forEach(([id, reviews]) => {
    const existing = merged[id] || [];
    const known = new Set(existing.map((review) => `${review.friend}-${review.createdAt}-${review.dish}-${review.rating}-${review.comment}`));
    merged[id] = existing.concat(reviews.filter((review) => !known.has(`${review.friend}-${review.createdAt}-${review.dish}-${review.rating}-${review.comment}`)));
  });
  return merged;
}

function mergeCustomBeers(current, imported) {
  const merged = { ...current };
  Object.entries(imported).forEach(([brewery, beers]) => {
    merged[brewery] = [...new Set([...(merged[brewery] || []), ...beers])];
  });
  return merged;
}

initApp();
