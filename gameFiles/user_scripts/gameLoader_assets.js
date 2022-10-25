function startLoadingAssets(){
    setTimeout(function(){
    var loader = document.createElement('div')
    loader.setAttribute('id','loader');

    var loadertxt = document.createElement('p')
    loadertxt.setAttribute("id", "user_textloader");

    document.getElementById("user_titleScreen").appendChild(loader);
    document.getElementById("user_titleScreen").appendChild(loadertxt);
    document.getElementById("user_textloader").innerHTML = "Waiting for Calculations"
    }, 3000)

    setTimeout(function(){
        document.getElementById("user_textloader").remove();
        document.getElementById("loader").remove();

        var gamebtnPlay = document.createElement('div')
        gamebtnPlay.setAttribute('id','playBtn_game');
        gamebtnPlay.setAttribute('onclick','createNewGame()');
        gamebtnPlay.innerHTML = "Play"
    
        var gamebtnSettings = document.createElement('div')
        gamebtnSettings.setAttribute("id", "user_settings");
        gamebtnSettings.innerHTML = "Settings"

        document.getElementById("user_titleScreen").appendChild(gamebtnPlay);
        document.getElementById("user_titleScreen").appendChild(gamebtnSettings);
    }, 12000)
}

function createNewGame(){
    document.getElementById("game_selector").style.transform = "translateX(0%)";
}