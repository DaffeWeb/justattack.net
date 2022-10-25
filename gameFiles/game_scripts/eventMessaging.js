let main = document.getElementById('main');

function eventHandleMessage(Message){
    let message = Message;

    var newdivmessage = document.createElement('div');
    newdivmessage.setAttribute('id', 'user_message');
    newdivmessage.style.display = "flex"

    var text = document.createElement('p');
    text.innerHTML = message;

    newdivmessage.append(text);
    main.append(newdivmessage);

    setTimer(newdivmessage);
}

function setTimer(obj){
    setTimeout(function(){
        obj.remove()
    }, 10000);
}