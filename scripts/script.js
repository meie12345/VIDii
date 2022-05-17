//click functie toevoegen aan het plaatje. Samen met Milan. 
function maakPlaatjeInteractive(naam, plaatje1url, plaatje1tekst, plaatje2url, plaatje2tekst, animatienaam) {
    var afbeelding = document.querySelector(`#${naam} img`)
    var tekst = document.querySelector(`#${naam} p`)
    var click = false //click laat zien of het plaatje gedraaid is. 
    afbeelding.addEventListener('click', function () {

        if (!click) {
            afbeelding.classList.add(animatienaam);
            //het plaatje eerst rotate functie laten doen en daarna veranderen. 
            setTimeout((function () {
                    afbeelding.src = plaatje2url;
                    tekst.textContent = plaatje2tekst;
                }),
                350
            )

            click = true

        } else {
            afbeelding.classList.remove(animatienaam);
            afbeelding.src = plaatje1url;
            click = false
            tekst.textContent = plaatje1tekst;
        }


    })
}
//Goofy 1 plaatje 

maakPlaatjeInteractive('vallen', 'images/goofy1.png', 'Yaaaaaaa-hoo-hoo-hoo-hooey', 'images/dippydawg.png', '1932 Mickey’s revue. Goofy verschijnt voor het eerst op beeld als een oude hond met een bril en een baard. Een verwilderde uitstraling gecombineerd met een oude hoed, vest en witte handschoenen. Met een wat onuitstaanbaar en gek gedrag was de iconische lach van Goofy te horen.', "rotate");

//Goofy 2 plaatje

maakPlaatjeInteractive('gevallen', 'images/goofy2.png', 'Gawrsh!', 'images/onice.png', '1935 On ice. Goofy is te zien in normale kleding, de staart is weg, de oren zijn langer, de ogen hangen meer en de huidskleur is meer beige. Samen met een andere kleur hoed en handschoenen heeft onze favoriete dingo veel design veranderingen gekregen.', "blink")

//Goofy 3 plaatje 

maakPlaatjeInteractive('verward', 'images/goofy3.png', 'Oh boy!', 'images/movingday.png', '1936 Moving day. Goofy krijgt meer persoonlijkheid en heeft een onderscheidend karakater. Ongemakkelijk en klungelig wat terug te zien is in de kleding: grotere platte schoenen, een vest over een trui. In tegenstelling tot andere Disney karakters veranderen de kleur van de hoed en een vest af en toe. ', "flip-vertical-right")

//Goofy 4 plaatje 

maakPlaatjeInteractive('wijzen', 'images/goofy4.png', 'tekst', 'images/motormania.png', '1950 Motor Mania. Goofy is een alledaagse familieman en staat bekend als George Geef. Zonder oren en handschoenen leek Goofy meer op een mens en ging alledaags mensen dingen doen die zich afspeelde in 1950. Ook kreeg hij een vrouw en kind die op mensen leken. Goofy’s populariteit ging omlaag door het alledaagse karakter.', "heenenweer")

//Goofy 5 plaatje 

maakPlaatjeInteractive('zitten', 'images/goofy5.png', 'Howdey, hoe gaat het?', 'images/goofytroop.png', '1992 Goof troop. Deze televisiehow was erg populair bij kinderen. Goofy blijft een familieman, maar behoud het populaire karakter. Goofy is klungelig, niet altijd even slim en liefdevol naar anderen. Het karakter is met de 1940 en 1950 stijl gecombineerd. Zijn zoon Max is ook terug te zien, maar heeft nu net zoals Goofy een hondachtige uitstraling. ', "jello")

//Goofy 6 plaatje 

maakPlaatjeInteractive('metmax', 'images/goofy6.png', 'tekst', 'images/nu.png', '2004 Twice upon a Christmas. Goofy is voor het eerst te zien in CG animatie. Deze CG Goofy is ook in Mickey Mouse Clubhuis te zien. 2013 Mickey Mouse Disneyplus Shorts. Goofy heeft weer een Dippy Dawg uitstraling met kleinere schoenen, een staart, dunne armen en benen en een lang postuur.', "bounce-top")

//Goofy 7 plaatje 

maakPlaatjeInteractive('start', 'images/goofy7.png', 'Wowee! Dat maakt mijn dag goed!', 'images/startbutton.png', 'test', "rotate")
