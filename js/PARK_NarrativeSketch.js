var canvas;

//screen text
var greeting;
var title;
var firstOption;
var secondOption;

var paragraph;
var namePerson;
var optionBreak;

//input
var nameInput;

var seeCall;
var answer;
var neverHear;

//booleans
var phoneRingsTrig;
var answerCallTrig;
var ignoreCallTrig;
var whyTrig

//sounds
var vibrate;

function preload(){
	vibrate = loadSound('Sound/Vibration.mp3');

}


function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style("z-index", "-1");
	title = createElement('h1', " ");
	firstOption = createA("#", "");
	secondOption = createA("#", "");
	paragraph = createElement("h2", " ");
	
	beginning();

}

function beginning(){
	background(244, 252, 255);
	greeting = createElement("h1", "What is your name? (Press enter when completed)");
	createElement("br");

	nameInput = createInput("type your name here");
	nameInput.changed(phoneRings);
}

function phoneRings(){
	greeting.hide();
	nameInput.hide();
	phoneRingsTrig = true;
	ignoreCallTrig = false;
	firstOption.hide();
	vibrate.play();

	title.html('Your phone rings.');

	firstOption = createA("#", "See who is calling.");
	optionBreak = createElement('br');
	secondOption = createA("#", "Ignore the call.");

	firstOption.mousePressed(seeWhoCall);
	secondOption.mousePressed(ignoreCall);
}

function seeWhoCall(){
	seeCall = true;
	firstOption.hide();
	secondOption.hide();
	phoneRingsTrig = true;
	ignoreCallTrig = false;
	vibrate.stop();
	vibrate.play();
	optionBreak.hide();
	title.html("You check your phone. It's your mom.")

	firstOption = createA("#", "Answer the phone.");
	optionBreak = createElement('br');
	secondOption = createA("#", "Ignore her call.");

	firstOption.mousePressed(answerCall);
	secondOption.mousePressed(ignoreHerCall);
}

function ignoreCall(){

	firstOption.hide();
	secondOption.hide();
	optionBreak.hide();
	phoneRingsTrig = false;
	ignoreCallTrig = true;
	vibrate.stop();

	title.html('You ignored the caller.');
	firstOption = createA("#", "Okay.");
	firstOption.mousePressed(phoneRings);

}

function answerCall(){
	answer = true;
	phoneRingsTrig = false;
	answerCallTrig = true;
	firstOption.hide();
	secondOption.hide();
	optionBreak.hide();
	title.hide();
	vibrate.stop();

	namePerson = createElement('h1', nameInput.value() + ', are you there?');

	firstOption = createA("#", '"Hey, Im kind of busy right now, Can you call back later?"');
	optionBreak = createElement('br');
	secondOption = createA("#", '"Hi mom, how are you?"');

	firstOption.mousePressed(neverHearBack);
	secondOption.mousePressed(conversation);

}

function conversation(){
	firstOption.hide();
	secondOption.hide();
	optionBreak.hide();
	title.show();
	namePerson.hide();

	phoneRingsTrig = false;
	answerCallTrig = true;
	title.html("The two of you have a nice conversation.");
	paragraph.html("But all things must come to an end. You have work to finish.")
	firstOption = createA("#", '"Ill call you back tomorrow. Love you."');
	optionBreak = createElement('br');
	secondOption = createA("#", '"I have to go now, but we can talk later, okay?"');

	firstOption.mousePressed(neverHearBack);
	secondOption.mousePressed(neverHearBack);
}

function neverHearBack(){
	firstOption.hide();
	secondOption.hide();
	paragraph.hide();
	optionBreak.hide();
	namePerson.hide();
	title.show();

	neverHear = true;
	phoneRingsTrig = false;
	ignoreCallTrig = true;
	firstOption.hide();
	secondOption.hide();
	title.html("You never hear back from her again.");
	whyTrig = true;
	
}

function ignoreHerCall(){
	firstOption.hide();
	secondOption.hide();
	paragraph.hide();
	optionBreak.hide();
	title.show();

	neverHear = true;
	phoneRingsTrig = false;
	ignoreCallTrig = true;
	firstOption.hide();
	secondOption.hide();
	title.html("You never hear back from her again.");
	whyTrig = true;
	
}

function draw(){
	if(phoneRingsTrig == true){
		phoneRingsAnimation();
	}else if(ignoreCallTrig == true){
		ignoreCallAnimation();
	}else if(answerCallTrig == true){
		answerCallAnimation();
	}
	if(whyTrig == true){
		whyAnimation();
	}
	
}


function phoneRingsAnimation(){
	background(244, 252, 255);
	//why does it sound like a bunch of angry bees
	//vibrate.play();
}

function answerCallAnimation(){
	background(217, 230, 252);
	//vibrate.stop();

}

function ignoreCallAnimation(){
	background(88, 109, 142);
	//vibrate.stop();
}

function whyAnimation(){
	text("why", mouseX, mouseY);
	
}


function windowResized(){
	canvas = createCanvas(windowWidth, windowHeight);

}