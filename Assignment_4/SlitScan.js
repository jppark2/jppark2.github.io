var capture;
var w;
var h;
var x = 0;

function setup() {
	createCanvas(1000, 480);
	capture = createCapture(VIDEO);
	capture.size(640, 480);
	// capture.position(40, 40);
	capture.hide();
 
}

function draw() {
	w = capture.width;
	h = capture.height;
	capture.loadPixels();
	// background(255);
	copy(capture, w/2, 0, 1, h, x, 0, 1, h);
	x = x+1;
	if(x > width){
		x=0;

	}
	// image(capture, 0, 0, 640, 480);


}