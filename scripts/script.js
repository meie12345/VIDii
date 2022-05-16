
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

maakPlaatjeInteractive('vallen', 'images/goofy1.png', 'Yaaaaaaa-hoo-hoo-hoo-hooey', 'images/dippydawg.png', 'test', "rotate");

//Goofy 2 plaatje

maakPlaatjeInteractive('gevallen', 'images/goofy2.png', 'Gawrsh!', 'images/onice.png', 'test', "flip-vertical-right")

//Goofy 3 plaatje 

maakPlaatjeInteractive('verward', 'images/goofy3.png', 'Oh boy!', 'images/movingday.png', 'test', "flip-vertical-right")

//Goofy 4 plaatje 

maakPlaatjeInteractive('wijzen', 'images/goofy4.png', 'tekst', 'images/motormania.png', 'test', "flip-vertical-right")

//Goofy 5 plaatje 

maakPlaatjeInteractive('zitten', 'images/goofy5.png', 'tekst', 'images/goofytroop.png', 'test', "flip-vertical-right")

//Goofy 6 plaatje 

maakPlaatjeInteractive('metmax', 'images/goofy6.png', 'tekst', 'images/nu.png', 'test', "flip-vertical-right")

//Goofy 7 plaatje 

maakPlaatjeInteractive('start', 'images/goofy7.png', 'tekst', 'images/startbutton.png', 'test', "rotate")



