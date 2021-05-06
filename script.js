var body = document.getElementById("main");
var color1 = document.querySelector(".input1");
var color2 = document.querySelector(".input2");
var css = document.getElementsByTagName("h3")[0];
var random_button = document.querySelector(".random");

function randomColorGenerator(){
    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);

    color1.value = "#" + randomColor1;
    color2.value = "#" + randomColor2;
    setBackground();
}

function setBackground(){
    body.style.background = "linear-gradient(to right," + 
                            color1.value + "," + 
                            color2.value + ")";
    css.textContent = body.style.background;
}

color1.addEventListener("input", setBackground);
color2.addEventListener("input", setBackground);

random_button.addEventListener("click", randomColorGenerator);