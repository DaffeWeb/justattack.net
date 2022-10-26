let map = document.getElementById('user_mapCountries');

let probabilityEasy = [1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let possibleActions = ["invade","none","none","none","none","none","none","none","none","none","none","none","none","none","none","trade","rebel", "art"];

//map contents

let audioMusic1 = new Audio;
let audioMusic2 = new Audio;
let audioMusicBGM = new Audio;
let audioSFX = new Audio;

let paths = map.getElementsByTagName('path');
//let viewbox = document.querySelector('.viewbox')

let countrySelected = "";
let countrySelectedClass = "";
let pathsnotme = '';

let invasionPercent = 0;

let countriesInvasion = 0;

let invadingCountry = "";

let invasionCancel = false;

//Controls

let countrySelectionGroup = document.getElementById('countryControls');
let countrySelectName = document.getElementById('countrySelectName');

let invasionSelectionGroup = document.getElementById('invasionControls');
let invasionSelectName = document.getElementById('invasionSelectName');

let userControls = document.getElementById('user_controls_HUD');

let countryNameHolder = document.getElementById('countryname');
let countryCashHolder = document.getElementById('countryMoney');

let countryMilitarySize = document.getElementById('militarySize');
let countryMilitaryAircraft = document.getElementById('militaryFighterAircraft');
let countryMilitaryAmmunition = document.getElementById('militaryAmmunition');

// Game Load Random

var randomCountry = paths[Math.floor(Math.random() * paths.length)];

var countryNameRandom = randomCountry.getAttribute('data-country-name');

var moneyCash = Math.random() * (250000000000 - 150000000) + 150000000;

var militarySize = Math.round(Math.random() * (90000 - 300) + 300);

var militaryAmmunition = Math.round(Math.random() * (30 - 3) + 3);

var militaryFighterAircraft = Math.round(Math.random() * (600 - 20) + 20);

var CountryCash = Math.round(moneyCash);

console.log(countryNameRandom)

countryNameHolder.innerHTML = countryNameRandom;

countryCashHolder.children[0].innerHTML = `$ ${CountryCash}`;

countryMilitarySize.children[0].children[1].innerHTML = militarySize;

countryMilitaryAmmunition.children[0].children[1].innerHTML = militaryAmmunition;

countryMilitaryAircraft.children[1].innerHTML = militaryFighterAircraft;

console.log(countryCashHolder.children)

function gameOverTime(){
    document.getElementById("gameOver").style.display = "flex";
    document.getElementById("gameContainer").style.filter = "blur(10px)";
    document.getElementById("gameContainer").style.pointerEvents = "none";
    audioMusic1.src = "gameFiles/audiofiles/gameoverdrop.wav";
    audioMusic1.loop = false;
    audioMusic1.play();
    audioMusicBGM.pause();
}

for (let i = 0; i < paths.length; i++){
    paths[i].classList.add('countryFree');
}

let events = setInterval(function(){
    const militarySize2 = militarySize;

    const CountryCash2 = CountryCash;

    const militaryAmmunition2 = militaryAmmunition;

    const militaryFighterAircraft2 = militaryFighterAircraft;

    var FormattedCash = CountryCash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    countryCashHolder.children[0].innerHTML = `$ ${FormattedCash}`;
    
    countryMilitarySize.children[0].children[1].innerHTML = militarySize2;
    
    countryMilitaryAmmunition.children[0].children[1].innerHTML = militaryAmmunition2;
    
    countryMilitaryAircraft.children[1].innerHTML = militaryFighterAircraft2;

    var randomProbability = probabilityEasy[Math.floor(Math.random() * probabilityEasy.length)];

    if(randomProbability == 1){
        var randomActions = possibleActions[Math.floor(Math.random() * possibleActions.length)];

        console.log(randomActions)

        if(randomActions == "invade"){
        }
        else if(randomActions == "trade"){
            console.log("Asking For Trade")
        }
    }

    if(militarySize2 <= 0){
        countryMilitarySize.children[0].children[1].innerHTML = "0";
        militarySize = 0;
        gameOverTime()
        console.log("Game Over")
        clearInterval(events);
    }
},500)


document.querySelector(`.${randomCountry.classList[0]}`).classList.add('You');
document.querySelector(`.${randomCountry.classList[0]}`).classList.remove('countryFree');
document.querySelector(`.${randomCountry.classList[0]}`).removeAttribute('onclick');


// Country Selector

function gameStartEz(){
    audioMusicBGM.src = "gameFiles/audiofiles/cancion-triste-1502.mp3"
    audioMusicBGM.loop = true;
    audioMusicBGM.volume = 0.5;
    audioMusicBGM.play();
}

function countrySelect(obj){
    const pathsnotme2 = document.querySelectorAll('.countryFree');
    pathsnotme = pathsnotme2

    for (let i = 0; i < pathsnotme2.length; i++){
        pathsnotme2[i].style.fill = "#2B1582"
    }

    var selectedCountryName = obj.getAttribute('data-country-name');

    countrySelectName.children[0].innerHTML = selectedCountryName;

    countrySelectionGroup.style.opacity = "1";
    countrySelectionGroup.style.display = "flex";
    countrySelectionGroup.style.pointerEvents = "all";

    invasionSelectionGroup.style.opacity = "0";
    invasionSelectionGroup.style.display = "none";
    invasionSelectionGroup.style.pointerEvents = "none";

    obj.style.fill = "#8568fc";
    countrySelected = selectedCountryName;
    countrySelectedClass = obj.classList[0]
}

function countryUnselect(){
    const pathsnotme2 = document.querySelectorAll('.countryFree');
    pathsnotme = pathsnotme2

    for (let i = 0; i < pathsnotme2.length; i++){
        pathsnotme2[i].style.fill = "#2B1582"
    }
    
    countrySelectionGroup.style.opacity = "0";
    countrySelectionGroup.style.display = "none";
    countrySelectionGroup.style.pointerEvents = "none";
    countrySelected = "";

    console.log("clicked")
}

function formatInvade(){
    if(countrySelected){
        if(countriesInvasion != 1){
            document.getElementById("confirmation_invasion").style.display = "flex";
            document.getElementById("gameContainer").style.filter = "blur(10px)";
            document.getElementById("gameContainer").style.pointerEvents = "none";
    
            invadingCountry = countrySelectedClass;
        }
    }
}

function invadeAccept(){
    invadeCountry(countrySelected);
    countriesInvasion = 1;
    document.getElementById("confirmation_invasion").style.display = "none";
    document.getElementById("gameContainer").style.filter = "blur(0px)";
    document.getElementById("gameContainer").style.pointerEvents = "all";
}

function invadeCancel(){
    document.getElementById("confirmation_invasion").style.display = "none";
    document.getElementById("gameContainer").style.filter = "blur(0px)";
    document.getElementById("gameContainer").style.pointerEvents = "all";
}

let intervalSet = 1000;

function invadeCountry(country){
    if(countriesInvasion != 1){
    audioMusic1.src = "gameFiles/audiofiles/invasionstart.wav";
    audioMusic1.loop = false;
    audioMusic1.volume = 0.6;
    audioMusic1.play();
    audioSFX.src = "gameFiles/audiofiles/warsfx.mp3"
    audioSFX.loop = true;
    audioSFX.volume = 0.4;
    audioSFX.play();
    document.getElementById('invasions').style.transform = "translateY(0%)"
    document.querySelector(`.${invadingCountry}`).style.fill = "#fc6868";
    document.querySelector(`.${invadingCountry}`).removeAttribute('onclick');
    document.querySelector(`.${invadingCountry}`).setAttribute('onclick', 'selectInvasion(this)');
    document.querySelector(`.${invadingCountry}`).classList.add('invading');
    document.querySelector(`.${invadingCountry}`).classList.remove('countryFree');
    eventHandleMessage(`You started an invasion towards ${country}`);

    militarySize = militarySize - 1000;
    militaryFighterAircraft = militaryFighterAircraft - 10;
    CountryCash = CountryCash - 859059321;

    countryUnselect()

    let warcounter = setInterval(reduceMilitary, intervalSet);

    let invasionTotal = setInterval(function(){
        const militarySize2 = militarySize;
        if(militarySize <= 0){
            clearInterval(warcounter);
            clearInterval(invasionTotal);
            console.log("Military Empty")
        }
        if(invasionPercent >= 100){
            clearInterval(warcounter);
            document.querySelector(`.${invadingCountry}`).style.fill = "#FF7A00";
            document.querySelector(`.${invadingCountry}`).classList.remove('invading');
            document.querySelector(`.${invadingCountry}`).removeAttribute('onclick');
            document.querySelector(`.${invadingCountry}`).classList.add('You');
            invasionPercent = 0;
            countriesInvasion = 0;
            console.log("invasion complete")
            invasionSelectionGroup.style.opacity = "0";
            invasionSelectionGroup.style.display = "none";
            invasionSelectionGroup.style.pointerEvents = "none";
            audioMusic1.src = "gameFiles/audiofiles/invasioncomplete.wav";
            audioMusic1.loop = false;
            audioMusic1.volume = 0.6;
            audioMusic1.play()
            document.getElementById('invasions').style.transform = "translateY(-100%)"
            document.getElementById('victoryCard').style.display = "flex";
            audioSFX.pause();
            clearInterval(warcounter);
            clearInterval(invasionTotal);
        }
        if(invadeCancel == true){
            document.querySelector(`.${invadingCountry}`).style.fill = "#2B1582";
            document.querySelector(`.${invadingCountry}`).classList.remove('invading');
            document.querySelector(`.${invadingCountry}`).removeAttribute('onclick');
            document.querySelector(`.${invadingCountry}`).setAttribute('onclick', 'countrySelect(this)')
            document.querySelector(`.${invadingCountry}`).classList.add('countryFree');
            document.getElementById('invasions').style.transform = "translateY(-100%)"
            invasionPercent = 0;
            countriesInvasion = 0;
            document.getElementById('sliderproginner').style.width = '0%';
            console.log("invasion canceled")
            clearInterval(warcounter);
            invasionCancel = false;
            clearInterval(invasionTotal);
        }
    }, 500)
    }
}

function reduceMilitary(){
    militarySize = militarySize - 23

    invasionPercent = invasionPercent + 0.7

    document.getElementById('sliderproginner').style.width = `${invasionPercent}%`;

    console.log(invasionPercent)

    console.log('reduced')
}

function selectInvasion(obj){
    const pathsnotme2 = document.querySelector('.invading');

    var selectedCountryName = obj.getAttribute('data-country-name');

    invasionSelectName.children[0].innerHTML = selectedCountryName;

    invasionSelectionGroup.style.opacity = "1";
    invasionSelectionGroup.style.display = "flex";
    invasionSelectionGroup.style.pointerEvents = "all";

    countrySelectionGroup.style.opacity = "0";
    countrySelectionGroup.style.display = "none";
    countrySelectionGroup.style.pointerEvents = "none";

    countryUnselect()
}

function deselectInvasion(){
    invasionSelectionGroup.style.opacity = "0";
    invasionSelectionGroup.style.display = "none";
    invasionSelectionGroup.style.pointerEvents = "none";
}

function retreatTroops(){
    document.getElementById("confirmation_cancel").style.display = "flex";
    document.getElementById("gameContainer").style.filter = "blur(10px)";
    document.getElementById("gameContainer").style.pointerEvents = "none";
}

function retreatCancel(){
    document.getElementById("confirmation_cancel").style.display = "none";
    document.getElementById("gameContainer").style.filter = "blur(0px)";
    document.getElementById("gameContainer").style.pointerEvents = "all";
}

function retreatAccept(){
    document.getElementById("confirmation_cancel").style.display = "none";
    document.getElementById("gameContainer").style.filter = "blur(0px)";
    document.getElementById("gameContainer").style.pointerEvents = "all";

    invadeCancel = true;

    deselectInvasion()
}

function claimCashInvasion(){
    document.getElementById('cashAnimation').style.display = "unset";
    setTimeout(function(){
        document.getElementById('cashAnimation').style.display = "none";
    }, 2000)
}

function startAirStrike(){
    if(militaryAmmunition >= 3){
        document.getElementById("confirmation_airstrike").style.display = "flex";
        document.getElementById("gameContainer").style.filter = "blur(10px)";
        document.getElementById("gameContainer").style.pointerEvents = "none";
    }
}

function strikeCancel(){
    document.getElementById("confirmation_airstrike").style.display = "none";
    document.getElementById("gameContainer").style.filter = "blur(0px)";
    document.getElementById("gameContainer").style.pointerEvents = "all";
}

function strikeAccept(){
    document.getElementById("confirmation_airstrike").style.display = "none";
    document.getElementById("gameContainer").style.filter = "blur(0px)";
    document.getElementById("gameContainer").style.pointerEvents = "all";

    militaryAmmunition = militaryAmmunition - 3;

    if(militaryAmmunition < 0){
        militaryAmmunition = 0
    }

    audioMusic2.src = "gameFiles/audiofiles/callairstrikesfx.mp3"
    audioMusic2.loop = false;
    audioMusic2.volume = 0.2;
    audioMusic2.play();

    deselectInvasion()

    setTimeout(function(){
        audioMusic2.src = "gameFiles/audiofiles/airstrikesfx2.mp3"
        audioMusic2.loop = false;
        audioMusic2.volume = 0.5;
        audioMusic2.play();
        invasionPercent = invasionPercent + 9;
    }, 5000)
}

function goToMain(){
    window.location = "index.html";
}
