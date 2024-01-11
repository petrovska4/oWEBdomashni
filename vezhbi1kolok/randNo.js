let count = 0; //klk pati se pogoduvalo
const random = Math.ceil(Math.random()*6);

function check() {
  const guess = document.getElementById("broj").value;
  if (guess > random) {
    document.getElementById("izlez").innerText = "Pogodokot e pogoelem od generiraniot";
  } else if (guess < random){
    document.getElementById("izlez").innerText = "Pogodokot e pomal od generiraniot";
  } else {
    alert("Pogodivte od " + ++count + " pat!!!");
    location.reload();
  }

  count += 1;
  document.getElementById("pogodoci").innerText = "Broj na pogodoci: " + count;
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("pogodoci").innerText = "Broj na pogodoci: " + count;

  document.getElementById("broj").addEventListener('keydown', function(e) {
    if (e.key == "Enter") {
      check();
    }
  })
})