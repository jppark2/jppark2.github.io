var canvas;

//screen text
var greeting;
var title;
var firstOption;
var secondOption;
var userName;

//inputs
var nameInput;

//animation variables
var sunX;
var sunY;

var sunSlider;

//boolean
var firstScreen;
var walkToSun;
var sunAnimate;
var walkCloser;

//images
var spaceBG;

function preLoad(){

	spaceBG = loadImage('./Images/space.png');
}

function setup(){

	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style("z-index", "-1");

	beginning();
}

function beginning(){
	background(0);
	greeting = createP("Please type your name and press enter");
	createElement("br");

	nameInput = createInput("type your name here");
	nameInput.changed(startStory);
}

function startStory(){
	greeting.hide();
	nameInput.hide();
	userName = createElement('h1', nameInput.value());
	title = createElement('h1,', "Get home before the sun sets");

	firstOption = createA("#", "walk towards the sun");
	createElement('br');
	secondOption = createA("#", "go home");

	firstOption.mousePressed(toSun);
	secondOption.mousePressed(toHome);
}

function toSun(){
	walkToSun = true;
	userName.html(nameInput.value());

	title.html('Your walk towards the sun, it gets bigger');
	firstOption.html('walk closer');
	secondOption.html("control the sun");
	firstOption.mousePressed(walkCloserToSun);
}


function toHome(){
	firstOption.hide();
	secondOption.hide();

	title.html('you have gone home. good night');

}

function walkCloserToSun(){
	walkToSun = false;
	walkCloser = true;

	userName.html(nameInput.value());

	title.html('You are very close to the sun');
	firstOption.html('Go home');
	secondOption.html("Flay away");

	sunSlider = createSlider(0, 255, 0);
}


function draw(){
	background(0);
	if(walkToSun == true){
	toSunAnim();
	}else if(walkCloser == true){
		walkCloserAnim();
	}

}


//animation functions
function toSunAnim(){

	sunX = windowWidth/2;
	sunY = windowHeight/2;
	sunX = sunX + random(-5, 5);
	sunY = sunY + random(-3, 3);
	ellipse(sunX, sunY, 300, 300);

}

function walkCloserAnim(){
	background(spaceBG);
	image(spaceBG, 500, 600, 900, 50);
	fill(sunSlider.value(), 0, 0);
	ellipse(windowWidth/2, windowHeight/2,  sunSlider.value(), sunSlider.value());
	if(sunSlider.value()>200){
		title.html('You are too close.');	
	}else{
		title.htmml('You are very close to the sun.');
	}

}


function windowResized(){
	canvas = createCanvas(windowWidth, windowHeight);

}