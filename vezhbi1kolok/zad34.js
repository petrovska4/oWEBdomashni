var timer = 0;

function start() {
  timer = parseInt(document.getElementById('time').value);
  let timerEl = setInterval(function() {
    if (timer > 0) {
      document.getElementById('timer').innerText = timer;
      timer -= 1;
    } else {
      document.getElementById('timer').innerText = timer;
      document.getElementById('timer').style.backgroundColor = "red";
      clearInterval(timerEl);
    }
  },1000);
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('text').style.display = "none";
  document.getElementById('time').style.display = "visible";
  document.getElementById('time').addEventListener('keydown', function(e) {
    if (e.key == "Enter") {
      document.getElementById('text').innerText = timer;
      start();
    }
  });
});