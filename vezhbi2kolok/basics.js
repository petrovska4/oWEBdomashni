
$(document).ready(function(){
  //selectors
  $(this).hide() // hides the current element.
  
  $("p").hide() // hides all <p> elements.
  
  $(".test").hide() // hides all elements with class="test".
  
  $("#test").hide() // hides the element with id="test".

  $("*") // selects all elements
  $("p.intro") // all p elements with class intro
  $("p:first") // the first p element

  //events
  $("p").click(function() {
    $(this).hide();
  });

  $("p").dblclick();
  $("p").mouseenter();
  $("p").mouseleave();
  $("p").mousedown();
  $("p").mouseup();

  $("#p1").hover(function(){
    alert("You entered p1!"); // when the element i hovered
  },
  function(){
    alert("Bye! You now leave p1!"); // when you leave the element
  });

  $("input").focus(function(){ // when you click to input something
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){ // when you are finished with the input
    $(this).css("background-color", "green");
  });

  //another way
  $("p").on("click", function(){
    $(this).hide();
  });

  // effects
  $("#hide").click(function(){
    $("p").hide();
  });  
  $("#show").click(function(){
    $("p").show();
  });
  $("button").click(function(){
    $("p").toggle();
  });

  $("button").click(function(){
    $("#div1").fadeIn(); // 0-100%
    $("#div2").fadeOut("slow"); // 100%-0
    $("#div3").fadeToggle(3000); // show <-> hide
    $("#div4").fadeTo("slow", 0.5);
  });

  $("#panel").slideUp();
  $("#panel").slideDown();
  $("#panel").slideToggle();

  $("button").click(function(){
    $("div").animate({
      left: '250px',
      width: '+=150px',
      height: 'toggle'
    });
  }); 

  $("#p1").css("color", "red").slideUp(2000).slideDown(2000); // effect chaining

  //HTML
  $("#p").text(); // to get content
  $("#p").html();
  $("#p").val();
  $("#p").attr("href");

  $("#test1").text("Hello world!"); // set content
  $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
  $("#w3s").attr({
    "href" : "https://www.w3schools.com/jquery/",
    "title" : "W3Schools jQuery Tutorial"
  });

  $("p").append("Some appended text."); //Inserts content at the end of the selected elements (inside)
  $("p").prepend("Some prepended text."); //Inserts content at the beginning of the selected elements
  $("img").after("Some text after"); //Inserts content after the selected elements
  $("img").before("Some text before"); //Inserts content before the selected elements

  $("#div1").remove(); // removes the selected element
  $("#div1").empty(); // removes the children of the selected element
  $("p").remove(".test, .demo");

  $("button").click(function(){
    $("h1, h2, p").addClass("blue");
    $("#div1").addClass("important blue");
    $("h1, h2, p").removeClass("blue");
    $("h1, h2, p").toggleClass("blue");
  });

  $("p").css("background-color"); // returns the value of the property
  $("p").css({"background-color": "yellow", "font-size": "200%"}); // set the value of the property

  width() // width of an element
  height() // height of an element
  innerWidth() // padding + element
  innerHeight()
  outerWidth() // border + padding + element
  outerHeight()

});