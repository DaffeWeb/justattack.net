



function updateGMEasy(){
    document.getElementById("preload").remove()
    setTimeout(function(){
        var tlt = document.createElement('div');
        tlt.setAttribute('id', 'user_titleScreen');

        var loader = document.createElement('div')
    loader.setAttribute('id','loader');

    var loadertxt = document.createElement('p')
    loadertxt.setAttribute("id", "user_textloader");

        var gameContainer = document.createElement('div');
        gameContainer.setAttribute('id', 'gameContainer');
        tlt.append(loader);
        loadertxt.innerHTML = "Preparing Game..."
        tlt.append(loadertxt);
        gameContainer.append(tlt);
        document.getElementById('main').append(gameContainer);

        setTimeout(function(){
            loadertxt.innerHTML = "Reviewing Powers...";
            setTimeout(function(){
                loadertxt.innerHTML = "Creating Map..."
                setTimeout(function(){
                    loadertxt.innerHTML = "Loading Sequences..."
                    setTimeout(function(){
                        loadertxt.innerHTML = "Contacting Karan..."
                        setTimeout(function(){
                            loadertxt.innerHTML = "Finalizing..."
                            setTimeout(function(){
                                loadertxt.innerHTML = "Finished!"
                                setTimeout(function(){
                                    tlt.remove();
                                    window.location = "game_copy.html";
                                },3000)
                            },5000)
                        },1000)
                    },3000)
                },3000)
            },3000)
        },3000)
    },3000)
}

const replaceDOMElements = async() =>{
    const html = await fetch('../game.html').then((data) => data.text());
    
    var script1 = document.createElement('script');
    script1.src = "gameFiles/game_scripts/game_ui_selector.js";
    script1.setAttribute('defer', null);

    var script2 = document.createElement('script');
    script2.src = "gameFiles/game_scripts/game_countriessys.js";
    script2.setAttribute('defer', null);

    var script3 = document.createElement('script');
    script3.src = "gameFiles/game_scripts/eventMessaging.js";
    script3.setAttribute('defer', null);

    console.log(html)
    document.getElementById('main').innerHTML = html
    document.head.append(script1);
    document.head.append(script2);
    document.head.append(script3);
    document.getElementById('gameContainer').style.display = "none";
    setTimeout(function(){
        document.getElementById('gameContainer').style.display = "unset";
    }, 1000);
}
