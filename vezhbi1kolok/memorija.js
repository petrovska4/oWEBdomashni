var niza = [0,0,0,0,0,0,0,0]; //dali e pogoden

var checked = 0; //da dozvoluva 2 da se otvoreni vo isto vreme
var first, second, index1, index2;


function check(e) {
  if(checked === 0) {
    index = e;
    if (niza[index-1] == 1) return;
    checked = 1;
    first = document.getElementById('p'+index);
    index1 = index;
    first.style.visibility = "visible";
    return;
  }
  if(checked === 1) {
    index = e;
    if (niza[index-1] == 1) return;
    second = document.getElementById('p'+index);
    second.style.visibility = "visible";
    index2 = index;
    if (first.innerHTML == second.innerHTML) {
      niza[index1-1] = 1;
      niza[index2-1] = 1;
    } else {
      var time = setInterval(function() {
        document.getElementById(first.id).style.visibility = "hidden";
        document.getElementById(second.id).style.visibility = "hidden";
        clearInterval(time);
      }, 1000)
    }
    checked = 0;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  for (var i = 1; i <= 8; i++) {
    document.getElementById('card' + i).addEventListener('click', function (index) {
      return function () {
        check(index);
      };
    }(i));
  }
});
