var canvas;
var noelBG;
var videos = ['March 25', 'May 19', 'June 8', 'August 23', 'August 31', 'September 14', 'October 15', '2016 January 16', '2016 June 11', '2017 May 10'];
var vidDiary;
var vidSelect;
var audioBG;
var open;

function preload(){
	noelBG = loadImage('images/Noel.jpg');
}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.style('z-index', '-1');

	audioBG = createAudio('audio/Nobody Knows.mp3');
	audioBG.autoplay(true);
	audioBG.loop();

	vidDiary = createVideo(['']);
	vidDiary.hide();

	vidSelect = createSelect();
	vidSelect.position(130, 90);
	for(i = 0; i < videos.length; i++){
		vidSelect.option(videos[i]);
	}
	vidSelect.changed(changeVid);
}



function changeVid(){
	vidDiary.attribute('src', 'videos/' + vidSelect.value() + '.mp4');
	vidDiary.position(300, 90);
	vidDiary.size(270, 480);
	vidDiary.volume(0);
	vidDiary.show();
	vidDiary.loop();
}

function draw(){
	image(noelBG, 0, 0, windowWidth, windowHeight);
	vidDiary.showControls();

	textSize(30);
	fill(34, 65, 114);
	text("Noel's Video Diary of 2018", 160, 30);
	textSize(20);
	fill(47, 121, 170);
	text("(Including some gems from past years)", 160, 60);
}

function resizeWindow(){
	resizeCanvas(windowWidth, windowHeight);
}