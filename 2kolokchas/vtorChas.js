
$(document).ready(function() {
  $('#main').replaceWith($('<p>new</p>')); //replace main with new paragraph
  $('#main').replaceAll($('.target')); //replace target with main
  $('#main').prepend($('<div>new</div>')); //div e novo dete na main, na pochetokot
  $('#main').append($('<div>new</div>')); //dodava na kraj
  $('#main').before($('<div>new</div>')); //go dodava div pred main vo html strukturata, na isto nivo
  $('.foo').wrap($('<div>new</div>')); //foo se pravi da bide dete na div, se dodava roditel na nekoj nachin
  $('.foo').wrapInner($('<div>new</div>')); //slichno na append i prepend


  //changing css properties
  // DVOJNI NAVODNICI PRI KORISTENJE NA CSS
  $("p").CSS("propertyName","value"); // da se smeni property na p
  $("p").css({"background-color": "yellow", "font-size": "200%"});

  //events (ne se tolku bitni)
  $('#foo').on('click', {msg: 'Hello event'}, 
  function(event) {
    alert(event.data.msg);
  });
  $('#foo').trigger('click');

  //AJAX (ne mora)
  $("button").click(function() {
    $("#div").load("demo_test.txt");
  });
  $("button").click(function() {
    $.get("demo_test.asp", function(data, status) {
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
  $("button").click(function() {
    $.post("demo_test_post.asp"),
    {
      name: "Donald Duck",
      city: "Duckburg"
    },
    function(data, status) {
      alert("Data: " + data + "\nStatus: " + status);
    }
  });

  //
});
