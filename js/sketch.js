function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(120);

}

function draw() {
  // put drawing code here
  
  stroke(0, 255, 0);
  strokeWeight(20);
  ellipse(400, 500, mouseX, mouseY);
  if (mouseIsPressed == true){
  	fill(0, 0, 255);
  }else{
  	fill(255, 0, 0);
  }
  print(mouseIsPressed);
  if (keyIsPressed == true){
  	fill(224, 17, 180);
  // }else{
  // 	fill(255, 0, 0);
  }
}


function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	background(120);

}