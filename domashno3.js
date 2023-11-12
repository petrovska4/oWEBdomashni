var words = ["battery", "school", "register", "coffee", "ready", "black", "visual", "bedroom", "report", "index", "false", "mind", "lunch", "house", "return"];
var counter = 0;
var word = new Array();

function Click() {
  var index = Math.floor( Math.random()*15 );
  word = words[index];

  var pom = new Array( word.length );
  for ( var i = 0; i < word.length; i++ ) {
    pom[i] = '_';
  }

  for ( var i = 0; i < 3; i++ ) {
    index = Math.floor( Math.random()*word.length );
    if( pom[index] == '_' ){
      pom[index] = word.charAt( index );
    }
    else i--;
  }
  document.getElementById("generatedWord").innerHTML += pom;
}

function tryThis(e) {
  if( word.length == 0 ) {
    alert("ERROR! Prvo generiraj zbor");
    return;
  }
  if(counter < 5) {
    if(word == e.target.value) {
      alert("Igrata e uspeshnaaa!!!");
      counter = 0;
    }
    else {
      alert("Try again!!!");
      counter++;
    }
  }
  else {
   alert("Igrata ne e uspeshna!!!");
   var button = document.createElement('button');
   var placeHolder = document.createTextNode("New Game");
   var div = document.getElementById('div');
   button.appendChild(placeHolder);
   button.addEventListener('click', newGame);
   div.appendChild(button);
  }
}

function newGame() {
  window.location.reload();
}

window.addEventListener("DOMContentLoaded", (event) => {
  const el = document.getElementById("guess");
  el.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      tryThis(e);
    }
  });
});







