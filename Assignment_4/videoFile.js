
var T1000;
var playButton;
var vidPlaying = false;
var videos = ['T1000 Reforming', 't2VidGame'];
var vidSelect;
var pulsar;
var T2image;

function preload(){
	T2image = loadImage('images/t2.jpg')
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  // pulsar = createAudio('audio/pulsar.mp3');
  // pulsar.autoplay(true);
  // pulsar.showControls();
  // pulsar.volume(.5);

  T1000 = createVideo(['']);
  T1000.hide();

  vidSelect = createSelect();
  vidSelect.position(10, 10);
  for(i = 0; i < videos.length; i++){
  	vidSelect.option(videos[i]);
  }

  vidSelect.changed(changeVid);

  playButton = createButton('Play Video');
  playButton.mousePressed(playVid);
  playButton.position(10, 60);

}

function changeVid(){
	T1000.attribute('src', 'videos/' + vidSelect.value() + '.mp4');
	T1000.position(150, 100);
	T1000.show();
}

function playVid(){
	if(vidPlaying == true){
		T1000.pause();
		playButton.html('Play Video');
	}else{
		T1000.play();
		T1000.loop();
		playButton.html('Pause Video');
	}
	vidPlaying = !vidPlaying;

}

function draw(){
 	image(T2image, 0, 0, windowWidth, windowHeight);
 	T1000.position(mouseX, 100)
	// T1000.showControls();
// if(mouseIsPressed == true){
//   T1000.play();
//   T1000.speed(3);
// 	T1000.loop();
// 	}else{
// 	  T1000.pause();
// }
}

function resizeWindow(){
	resizeCanvas(windowWidth, windowHeight);

}





