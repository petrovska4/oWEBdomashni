var email;

function submit() {
  var isValid = 1;

  if (isValid) {
    var element = document.getElementById("ime").value;
    if (element == '') {
      isValid = 0;
    }
  }
  if (isValid) {
    var element = document.getElementById("prezime").value;
    if (element == '') {
      isValid = 0;
    }
  }
  if (isValid) {
    var element = document.getElementById("email").value;
    email = element;
    if (element == '') {
      isValid = 0;
    }
  }
  if (isValid) {
    var element = document.getElementById("password").value;
    if (element == '') {
      isValid = 0;
    }
  }
  if (isValid) {
    var element = document.getElementById("tel").value;
    var format = /^\d{3}\/\d{3}-\d{3}$/;
    if (!format.test(element)) {
      isValid = 0;
    }
  }
  if (isValid) {
    var element = document.getElementById("adresa").value;
    if (element == '') {
      isValid = 0;
    }
  }

  if (!isValid) {
    alert("Formata ne e popolneta");
  } else {
    alert("Vladimir successfully submitted the following contact email: "+email);
  }
}
document.getElementById('button').addEventListener('click', submit);