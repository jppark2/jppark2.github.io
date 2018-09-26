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
	title = createElement('h1', "Get home before the sun sets");

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

