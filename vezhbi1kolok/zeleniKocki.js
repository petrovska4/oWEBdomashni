var count = 3;
var radius = [0, 0, 0];

function addSquare() {
  count++;
  var container = document.getElementsByClassName('container')[0]
  var newS = document.createElement('div');
  newS.id = 'k' + count;
  newS.className = 'k';
  container.appendChild(newS);
  addSquareEventListeners(newS);
}

function change(index) {
  var square = document.getElementById("k"+index);
  if (radius[index-1]) {
    square.style.borderRadius = "0px";
    radius[index-1] = 0;
  } else {
    square.style.borderRadius = "25px";
    radius[index-1] = 1;
  }
}

function colorIn(index) {
  var square = document.getElementById("k"+index);
  square.style.backgroundColor = "red";
}
function colorOut(index) {
  var square = document.getElementById("k"+index);
  square.style.backgroundColor = "black";
}

function addSquareEventListeners(square) {
  var index = parseInt(square.id.slice(1));
  square.addEventListener('click', function() {
    change(index);
  });
  square.addEventListener('mouseover', function() {
    colorIn(index);
  });
  square.addEventListener('mouseout', function() {
    colorOut(index);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('button').addEventListener('click', addSquare);
  var squares = document.getElementsByClassName('k');
  for(let i = 0;  i < count; i++) {
    addSquareEventListeners(squares[i]);
  }
});