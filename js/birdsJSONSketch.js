//http://localhost/JSON_Demo/

var birdData;
var allBirds;

function preload(){

	birdData = loadJSON("js/birdsNA.json");

}


function setup(){
	// createCanvas(windowWidth, windowHeight);
	noCanvas();
	print(birdData);

	allBirds = birdData.birds;
	print(allBirds.length);

	for(var i = 0; i < allBirds.length; i++){
		createElement('h1', allBirds[i].family);
		var members = allBirds[i].members;
		for(var j = 0; j < members.length; j++){
			createP(members[j]);
		} 

	}

}

function draw(){
	background(0);
	fill(255);
	textSize(60);
	text(birdData.birds[2].family, 20, 60);
	textSize(40);
	text(birdData.birds[2].members[2], 20, 100);
	text(birdData.birds[2].members[3], 20, 140);
	

	// text(birdData.birds[0].wingspan, 20, 80);
	
}