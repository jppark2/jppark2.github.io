var capture;

function setup() {
	createCanvas(640, 480);
	capture = createCapture(VIDEO);
	capture.size(640, 480);
	// capture.position(40, 40);
	capture.hide();

}

function draw() {
	background(255);
	image(capture, 0, 0, 640, 480);
	fill(200, 40, 0);
	ellipse(mouseX, mouseY, 40, 40);

}