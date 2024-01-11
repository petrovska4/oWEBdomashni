// Modify the previous exercise so that the colour of the grid cells changes every time you click on the window. 
// Use JavaScript and a list of pre-defined colors.

var colors = ["blue", "orange", "red", "yellow"];
var currentColor = 0;

function smeniBoja() {
  currentColor = Math.floor(Math.random()*4);
  var elements = document.getElementsByClassName('element');
  for (var i = 0; i < elements.length; i++){
    elements[i].style.backgroundColor = colors[currentColor];
  }
}

document.addEventListener('click', smeniBoja);