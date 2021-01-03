var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button")


body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

css.innerHTML = body.style.background + ";<br/>"
	+ color1.value + ", " + color2.value;

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	// css.textContent = body.style.background + "; <br />...";
	// css.textContent += "hello";
	css.innerHTML = body.style.background + ";<br/>"
	+ color1.value + ", " + color2.value;
	console.log(color1.value);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColors() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient(); 
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", setRandomColors);
// console.log(color1.value)