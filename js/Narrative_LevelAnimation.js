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