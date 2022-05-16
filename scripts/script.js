// JavaScript Document
console.log("Howdy!");

function iniFollowCursor() {
    // de body laten luisteren naat mousemoves
    document.body.addEventListener("mousemove", updateMouseLocalCoor);
}

function updateMouseLocalCoor(e) {
    // eerst de x- en y-positie van de muis bepalen
    // die info zit in het event object
    // console.log(e);
    let mouseX = e.clientX;
    let mouseY = e.clientY;



    // dan het element dat het event heeft laten afgaan
    // in dit geval is dat de body

    // we slaan het element voor het gemak even op
    const element = this;


    // info opvragen over de afmetingen en positie
    const elementRectangle = element.getBoundingClientRect();


    // de breedte en hoogte opslaan
    let elementWidth = elementRectangle.width;
    let elementHeight = elementRectangle.height;


    // percentages berekenen
    // op welk percentages van het element was de muis in de x-richting
    // hier komt een getal uit tussen 0 em 1
    // 0 -> helemaal links, 1 helemaal rechts
    let x = mouseX / elementWidth;
    // op welk percentages van het element was de muis in de y-richting
    // 0 -> helemaal boven, 1 helemaal beneden
    let y = mouseY / elementHeight;


    // de waardes als custom properties aan het element toekennen
    element.style.setProperty("--mouse-x", x);
    element.style.setProperty("--mouse-y", y);
}

// het volgen starten
iniFollowCursor();



//var dippydawg = document.querySelector('main button:nth-of-type(1) img')


function maakPlaatjeInteractive(naam, plaatje1url, plaatje1tekst, plaatje2url, plaatje2tekst, animatienaam) {
    var afbeelding = document.querySelector(`#${naam} img`)
    var tekst = document.querySelector(`#${naam} p`)
    var click = false
    afbeelding.addEventListener('click', function () {

        if (!click) {
            afbeelding.classList.add(animatienaam);
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



