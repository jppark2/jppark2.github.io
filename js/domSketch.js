var canvas;
var bgColor;
var name;
var colorButton;
var paragraph;
var textInput;
var ellipseSlider;


function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style("z-index", "-1");
	bgColor = 200;

	//create a h1 element
	userName = createElement('h1', 'Purne');
	// userName.position(100,10);

	//create button element
	button = createButton("change color");
	button.mousePressed(changeColor);

	//create paragraph
	paragraph = createP("this is a paragraph weepee");
	
	//check to see if mouse hovers over
	paragraph.mouseOver(changeColor);

	//create text box
	textInput = createInput("type name here please");
	// userName.html(textInput.value());
	textInput.changed(updateName);
	textInput.changed(updateFontColor);

	createElement('br');
	//create slider element (min, max. start)
	ellipseSlider = createSlider(0, 600, 300);



}

function changeColor(){

	bgColor = color(random(255));
}


function updateName(){
	userName.html(textInput.value());

}

function updateFontColor(){
	paragraph.style("color", "red");
	paragraph.style("font-size", bgColor);
	userName.style("color", "red");

}

function draw(){
	background(bgColor);
	fill(255, 0, 0);
	text(textInput.value(), 50, 100);
	ellipse(width/2, height/2, ellipseSlider.value());
	userName.position(ellipseSlider.value(), 0);

	if(ellipseSlider.value() > 400){
		fill(0, 255, 0);
		userName.hide();
	}else{
		userName.show();
		userName.position(ellipseSlider.value(), 0);
		fill(255, 0, 0);
	}
}