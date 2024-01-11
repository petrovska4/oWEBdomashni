var images = 0;

function add() {
  images++;
  var rand = Math.ceil(Math.random()*6);
  body.innerHTML += '<img id="'+images+'" src="dice' + rand + '.png">';
}
function roll() {
  for (var i = 1; i < images + 1; i++) {
    var rand = Math.ceil(Math.random()*6);
    var img = document.getElementById(i);
    img.src="dice"+rand+".png";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  add();
  add();

  document.getElementById('add').addEventListener('click', add)

  document.getElementById('roll').addEventListener('click', roll);
});