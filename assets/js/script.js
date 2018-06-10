
function sendBesked() {
    var besked = document.getElementById("besked");
    besked.className = "show";
    setTimeout(function(){ besked.className = besked.className.replace("show", ""); }, 5000);

    var navn = document.querySelector("#navn")
    var mail = document.querySelector("#mail")
    var tele = document.querySelector("#tel")
    var vedr = document.querySelector("#vedr")

    var newData = [navn.value, mail.value, tele.value, vedr.value];

    var jsonData = JSON.stringify(newData);

    localStorage.setItem("UserData", jsonData);
};


//Variable slideIndex with value 1, this means the default shown slide is slide nr 1
var slideIndex = 1;
showDivs(slideIndex);

//This function adds a number, assigned in the html, to showDivs's slideIndex, showing of that slide
function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  //Standard for writting loops
  var i;
  //this variable get's its value by getting the element with the class 'slides' into an array with 3 'elements'
  var slides = document.getElementsByClassName("slides");
  //this gets the value from class 'demo'
  var dots = document.getElementsByClassName("demo");
  //runs the loops as many times as there are slides
  for (i = 0; i < slides.length; i++) {
    //Every slide gets the styledisplay none:
     slides[i].style.display = "none";
  }
  //gives the class block to slide 1, but with js logic, as it starts with 0
    slides[slideIndex-1].style.display = "block";

//replaces the class from the buttons, from active to none
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
  }
//adds the active class to the shown class
  dots[slideIndex-1].className += " active";
}
