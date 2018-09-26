var canvas;

//screen text
var greeting;
var title;
var firstOption;
var secondOption;
var userName;

//input
var nameInput;

var seeCall;
var answer;
var neverHear;

//booleans
var phoneRingsTrig;
var ignoreCallTrig;

//sounds
var vibrate;

// function preload(){
// 	vibrate = loadSound('.audio/___.mp3');

// }


function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style("z-index", "-1");
	title = createElement('h1', " ");
	firstOption = createA("#", "");
	beginning();

}

function beginning(){
	background(244, 252, 255);
	greeting = createP("What is your name? (Press enter when completed)");
	createElement("br");

	nameInput = createInput("type your name here");
	nameInput.changed(phoneRings);
}

function phoneRings(){
	greeting.hide();
	nameInput.hide();
	phoneRingsTrig = true;
	ignoreCallTrig = false;
	
	title.html('Your Phone Rings');

	firstOption = createA("#", "See who is calling.");
	createElement('br');
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

	title.html("You check your phone. It's your mom.")

	firstOption = createA("#", "Answer the phone.");
	createElement('br');
	secondOption = createA("#", "Ignore her call.");

	firstOption.mousePressed(answerCall);
	secondOption.mousePressed(neverHearBack);
}

function ignoreCall(){

	firstOption.hide();
	secondOption.hide();
	phoneRingsTrig = false;
	ignoreCallTrig = true;
	title.html('You ignored the caller.');
	firstOption = createA("#", "Okay.");
	firstOption.mousePressed(phoneRings);

}

function answerCall(){
	answer = true;

	firstOption.hide();
	secondOption.hide();
	//how would I add the name of person and add a '?' after?
	//userName = createElement('h1', nameInput.value());
	//want to say ___? Are you there?
	//only want the name to show up in one more place after this
	title.html("Are you there?")

	firstOption = createA("#", '"Hey, Im kind of busy right now, Can you call back later?"');
	createElement('br');
	secondOption = createA("#", '"Hi mom, how are you?"');

	firstOption.mousePressed(neverHearBack);
	secondOption.mousePressed(conversation);

}

function conversation(){
	firstOption.hide();
	secondOption.hide();
	title.html("The two of you have a nice conversation.");
	//how to make a paragraph that isnt linked?
	//paragraph: But all things must come to an end. You have business to attend to.
	firstOption = createA("#", '"Ill call you back tomorrow. Love you."');
	createElement('br');
	secondOption = createA("#", '"I have to go now, but we can talk later, okay?"');

	firstOption.mousePressed(neverHearBack);
	secondOption.mousePressed(neverHearBack);
}

function neverHearBack(){
	neverHear = true;
	phoneRingsTrig = false;
	ignoreCallTrig = true;
	firstOption.hide();
	secondOption.hide();
	title.html("You never hear back from her again.");

}


function draw(){
	if(phoneRingsTrig == true){
		phoneRingsAnimation();
	}else if(ignoreCallTrig == true){
		ignoreCallAnimation();
	}
}

//currenty not using animations
function phoneRingsAnimation(){
	background(244, 252, 255);
	___.play();
}

function ignoreCallAnimation(){
	background(88, 109, 142);
}



function windowResized(){
	canvas = createCanvas(windowWidth, windowHeight);

}