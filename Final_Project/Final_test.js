//Noel homepage with game and interactive narrative
var canvas;
var peep;
var peeping;

//titles, headings, clickables
var firstOption;
var secondOption;
var thirdOption;
var paragraph;
var homeTitle;
var button;

//images
var noelBrush;
var sleepBG;
var sleeping;
var stairs;
var plastic;
var napping;
var strawberry;
var smoosh;
var yawn;
var bothering;
var sunVideo;
var playtime;
var sun;
var sun2;

//video Diary
var diaryVideos = ['March 25', 'May 19', 'June 8', 'August 23', 'August 31', 'September 14', 'October 15', 'November 19', '2016 January 16', '2016 June 11', '2017 May 10'];
var vidDiary;
var vidSelect;

//var noelBrush;

function preload(){
	noelBrush = loadImage("images/faceCutout.png");
	peep = loadImage("images/peep.png");
	sleepBG = loadImage("images/Noel.jpg")
	stairs = loadImage("images/stairs.jpg");
	plastic = loadImage("images/plastic.jpg");
	napping = loadImage("images/bliss.jpg");
	strawberry = loadImage("images/strawberry.jpg");
	smoosh = loadImage("images/smoosh.jpg");
	sleeping = loadImage("images/sleep.jpg");
	bothering = createVideo("videos/sink.mp4");
	yawn = loadImage("images/yawn.jpg");
	sun = loadImage("images/food.jpg");
	sunVideo = createVideo("videos/sunchild.mp4");
	playtime = createVideo("videos/toy.mp4");
	eating = createVideo("videos/eating.mp4");
	sun2 = loadImage("images/sunlight.jpg");
}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');

	homeTitle = createElement('h1', " ");
	firstOption = createA("#", "");
	secondOption = createA("#", "");
	thirdOption = createA("#", "");
	paragraph = createElement("h2", " ");
	vidSelect = createSelect();
	vidDiary = createVideo(['']);

	homepage();
}

function homepage(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	background(255, 179, 71);
	imageMode(CORNER);
	image(sleepBG, 0, 0, windowWidth, windowHeight);

	imageMode(CENTER);
	peeping = image(peep, 52, windowHeight-200);

	homeTitle.hide();
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	paragraph.hide();
	vidSelect.hide();
	vidDiary.hide();
	bothering.hide();
	sunVideo.hide();
	playtime.hide();
	eating.hide();

	fill(0, 0, 0, 128);
	rect(8, 70, 120, 130, 10);

	homeTitle = createElement("h1", "It's all about ME!");
	firstOption = createA("#", "About Me");
	secondOption = createA("#", "Video Diary");
	thirdOption = createA("#", "My day");

	firstOption.mousePressed(aboutMe);
	secondOption.mousePressed(videoDiary);
	thirdOption.mousePressed(dayGame);

}

function aboutMe(){
	homeTitle.hide();
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	background(255, 180, 76);

	fill(0, 0, 0, 128);
	rect(8, 8, 180, 90, 10);

	fill(255, 226, 191);
	textSize(18);
	text("Hello, I am Noel/Baby, the only names I respond to. I am 4 years old and am a shy, healthy girl. I like dairy treats and humans scratching on my neck. I don’t like being carried. I was found in the basement of someone else’s home when I was just a kitten. I would have stayed with them, but their mama was allergic to me. So they found my owner! And now I live in their home. I like it because there are many windows I can go to for warm light and the humans give me yummy food. I also respond to 맘마/food, because I know that’s when I get the canned food instead of dry foods. I used to have a mousey toy that I grew up with, but I keep losing it in small corners. Maybe I will find it one day. Or the humans will find it for me behind a drawer. They would throw the toy and I would run after it, but then lose interest. They tell me to ‘fetch’, but I don’t know what that means. It’s just fun to run after the toys. I love the smell of plastic bags. It smells like the outside, which seems like a nice but scary place. I am scared of everything. The ding dong sound, the strangers that are invited inside, the strange little humans who try to kill me. It is all so scary. I don’t like meeting new humans, but I very much love the humans I live with. One is my mom. Auntie is the one who is making this for me because mom doesn’t know how. My nice warm bed is in their brother’s room. So is my plastic bag collection. They have a mommy and daddy, but I am only allowed in that room when they are home. They said I am too hairy. I like sitting on high places so I can look down on the humans and judge them. They are stupid, using their strange lighting up screens all the time and not paying attention to me. But when they do pay attention to me, they should stop.", 230, 60, 800, 500);

	firstOption = createA("#", "Fun facts about me!");
	secondOption = createA("#", "Back home please");

	firstOption.mousePressed(funFacts);
	secondOption.mousePressed(homepage);
}

function funFacts(){
	firstOption.hide();
	secondOption.hide();
	
	background(162, 153, 156);

	fill(0, 0, 0, 128);
	rect(8, 8, 180, 90, 10);

	fill(255, 209, 220);
	textSize(15);
	text("My name is Noel/Baby and I am a calico cat", 200, 60, 200, 100);
	text("My favorite toy is 딸기 (strawberry), but now I can't find it", 345, 300, 200, 100);
	text("The light is warm and great place to nap", 490, 30, 200, 100);
	text("I have a collection of plastic bags", 635, 300);
	text("I smoosh my face when I sleep", 730, 20);

	imageMode(CORNER);
	image(stairs, 200, 100, 135, 240);
	image(strawberry, 345, 360, 135, 240);
	image(napping, 490, 70, 135, 240);
	image(plastic, 635, 310, 135, 240);
	image(smoosh, 730, 30, 135, 240);

	firstOption = createA("#", "back");
	secondOption = createA("#", "back back to home");

	firstOption.mousePressed(aboutMe);
	secondOption.mousePressed(homepage);

}

function videoDiary(){
	homeTitle.hide();
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	background(255, 253, 216);
	fill(0, 0, 0, 128);
	rect(8, 8, 200, 100, 10);

	vidDiary = createVideo(['']);
	vidDiary.hide();
 	vidSelect = createSelect();
	vidSelect.position(60, 60);
	for(i = 0; i <diaryVideos.length; i++){
		vidSelect.option(diaryVideos[i]);
	}
	vidSelect.changed(changeVid);

	firstOption = createA("#", "Back to home");
	firstOption.mousePressed(homepage);
}

function changeVid(){
	vidDiary.attribute('src', 'videos/' + vidSelect.value() + '.mp4');
	vidDiary.position(300, 90);
	vidDiary.size(270, 480);
	vidDiary.volume(0);
	vidDiary.show();
	vidDiary.showControls();
	vidDiary.loop();s
}

function dayGame(){
	homeTitle.hide();
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	paragraph.hide();
	background(255, 219, 219);
	imageMode(CORNER);
	image(sleeping, 0, 0, windowWidth, windowHeight);
	fill(0, 0, 0, 128);
	rect(8, 8, 320, 190, 10);

	paragraph = createElement("h2", "The sun is up!");
	firstOption = createA("#", "Get out and bother human");
	secondOption = createA("#", "Stay in warm bed")
	thirdOption = createA("#", "I don't want to play, go back to home")

	firstOption.mousePressed(botherHuman);
	secondOption.mousePressed(stayBed);
	thirdOption.mousePressed(homepage);
}

function botherHuman(){
	paragraph.hide();
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	background(206, 233, 255);
	fill(0, 0, 0, 128);
	rect(8, 8, 470, 150, 10);

	bothering.position(485, 8);
	bothering.size(270, 480);
	bothering.volume(0);
	bothering.show();
	bothering.showControls();
	bothering.loop();

	paragraph = createElement("h2", "I wait for the human to turn the water on");
	textSize(15);
	fill(255, 186, 102);
	text("Sink water is nice and cool, what's next?", 30, 65);
	firstOption = createA("#", "Lay in the sun");
	secondOption = createA("#", "Eat some food");

	firstOption.mousePressed(layinSun);
	secondOption.mousePressed(eat);
}

function eat(){
	bothering.hide();
	paragraph.hide();
	firstOption.hide();
	secondOption.hide();
	background(255, 219, 219);
	fill(0, 0, 0, 128);
	rect(8, 8, 220, 150, 10);

	eating.position(240, 8);
	eating.size(270, 480);
	eating.volume(0);
	eating.show();
	eating.showControls();
	eating.loop();

	paragraph = createElement("h2", "맘마! Food! Yum!");
	firstOption = createA("#", "Warm time");
	secondOption = createA("#", "Playtime");
	firstOption.mousePressed(layinSun);
	secondOption.mousePressed(playing);
}

function stayBed(){
	paragraph.hide();
	firstOption.hide();
	secondOption.hide();
	thirdOption.hide();
	background(206, 233, 255);
	imageMode(CORNER);
	image(yawn, 0, 0, windowWidth, windowHeight);
	fill(0, 0, 0, 128);
	rect(8, 8, 580, 150, 10);

	paragraph = createElement("h2", "One human calls me lazy and tells me to wake up");
	firstOption = createA("#", "Uh oh, let's do that again");
	secondOption = createA("#", "I'm bored, go back to homepage")
	firstOption.mousePressed(dayGame);
	secondOption.mousePressed(homepage);
}

function layinSun(){
	paragraph.hide();
	firstOption.hide();
	secondOption.hide();
	bothering.hide();
	eating.hide();
	background(253, 253, 150);
	imageMode(CORNER);
	image(sun, 230, 30, 270, 480);
	fill(0, 0, 0, 128);
	rect(8, 8, 190, 150, 10);

	paragraph = createElement("h2", "So warm");
	firstOption = createA("#", "Stay in the sun");
	secondOption = createA("#", "Play with... Anything")
	firstOption.mousePressed(stillLayinSun);
	secondOption.mousePressed(playing);
}

function stillLayinSun(){
	paragraph.hide();
	firstOption.hide();
	secondOption.hide();
	playtime.hide();
	background(253, 253, 150);
	fill(0, 0, 0, 128);
	rect(8, 8, 200, 150, 10);

	sunVideo.position(240, 8);
	sunVideo.size(270, 480);
	sunVideo.volume(0);
	sunVideo.show();
	sunVideo.showControls();
	sunVideo.loop();

	paragraph = createElement("h2", "sun sun sun");
	firstOption = createA("#", "sun");
	secondOption = createA("#", "Enough, playtime");
	firstOption.mousePressed(stillstillSun);
	secondOption.mousePressed(playing);
}

function stillstillSun(){
	paragraph.hide();
	firstOption.hide();
	secondOption.hide();
	sunVideo.hide();
	background(253, 253, 150);
	fill(0, 0, 0, 128);
	rect(8, 8, 200, 120, 10);
	imageMode(CORNER);
	image(sun2, 230, 30, 270, 480);

	paragraph = createElement("h2", "Too warm");
	firstOption = createA("#", "Time to go to homepage");
	firstOption.mousePressed(homepage);
}

function playing(){
	paragraph.hide();
	firstOption.hide();
	secondOption.hide();
	sunVideo.hide();
	eating.hide();
	background(206, 233, 255);
	fill(0, 0, 0, 128);
	rect(8, 8, 330, 100, 10);

	playtime.position(290, 130);
	playtime.size(270, 480);
	playtime.volume(0);
	playtime.show();
	playtime.showControls();
	playtime.loop();

	paragraph = createElement("h2", "Anything is a toy if you try");
	firstOption = createA("#", "Oooh, warm spot of light found");
	firstOption.mousePressed(stillLayinSun);
}

function mouseDragged(){
	image(noelBrush, mouseX, mouseY, 40, 40);
}

function windowResized() {
 	resizeCanvas(windowWidth, windowHeight);
 	background(162, 153, 156);
}

function draw(){
	imageMode(CENTER);
	image(peep, 52, windowHeight-200);
}

function mouseClicked(){
	var clickM = dist(mouseX, mouseY, 52, windowHeight-200);
	if(clickM <100){
		fill(255, 224, 236);
		textSize(40);
		hello = text("hello!", 100, windowHeight-200);
	}
}