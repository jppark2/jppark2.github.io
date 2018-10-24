
var canvas;
var title;

//weather datas
var weatherData;
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=fc3a29db9da406f9f26b2b3c16307c38", gotWeatherData;

var windSpeed;
var windX;
var fillTemp;
var currentWeather;

var randWeatherCast;

//marvel datas
var marvelCharData;
var allCharacs;

var chooseMarvel;
var marvelSelect;
var gotMarvelData;
//marvel images
var marvelImageBBuck;
var marvelImageThor;
var marvelImageBPan;
var marvelImageSLord;
var marvelImageSWitch;





function preload(){

	marvelCharData = loadJSON("js/marvelCharacters.json");
	loadJSON("https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=fc3a29db9da406f9f26b2b3c16307c38", gotWeatherData);
	marvelImageBBuck = loadImage("Images/BB.png");
	marvelImageThor = loadImage("Images/Thor.png");
	marvelImageBPan = loadImage("Images/BPanther.png");
	marvelImageSLord = loadImage("Images/StarLord.png");
	marvelImageSWitch = loadImage("Images/Switch.png");

}

function chooseMarvel(){
	background(204, 24, 24);

	//dropdown menu
	title = createElement('h1', "Choose a Marvel movie franchise");
	createElement ("br");

	marvelSelect = createSelect();
	marvelSelect.position(20, 120);
	marvelSelect.option("Avengers");
	marvelSelect.option("Thor");
	marvelSelect.option("Captain America");
	marvelSelect.option("Guardians of the Galaxy");
	marvelSelect.option("ETC.");
	button = createButton('Okay');
	button.position(140, 150);
	button.mousePressed(changeMarvel);
	// marvelSelect.changed(changeMarvel);
	
}

function changeMarvel(){

	for(var i= 0; i < marvelCharData.Characters.length; i++){
	 if(marvelCharData.Characters[i].movie == marvelSelect.value()){
	 	console.log(marvelCharData.Characters[i].cast);
	 	//for(var j=0; j< marvelCharData.Characters[i].cast.length; j++){
	 		var randCast = int(random(0, marvelCharData.Characters[i].cast.length));
	 		randWeatherCast = marvelCharData.Characters[i].cast[randCast];
	 	//}
	 	
	 	loadJSON(marvelCharData, gotMarvelData);
	 }
	}
	currentWeather();
}

function gotMarvelData(data){
	marvelCharData = data;
}

function setup(){ 

	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style("z-index", "-1");

	windX = windowWidth/2;

	// title = createElement('h1', " ");

	//console.log(marvelCharData.Characters[1]);
	chooseMarvel();

}



function gotWeatherData(data){

	weatherData = data;
	console.log(weatherData);
	console.log(weatherData.weather[0].description);
	console.log(weatherData.main.temp);
	console.log(weatherData.wind.speed);


}

function currentWeather(){
	background(204, 24, 24);
	title.hide();

	if(weatherData){
		
		textSize(40);
		fill(255, 249, 249);
		text(randWeatherCast + " says they currently see " + weatherData.weather[0].description, 10, 40);
		text(randWeatherCast + " tells you 'It is " + weatherData.main.temp + " degrees Fahrenheit right now'", 10, 90);
		
		
	}

}

function draw(){
	// background(204, 24, 24);
	// if(currentWeather){
	windSpeed = weatherData.wind.speed;
	windX = windX + windSpeed
	rect(windX, windowHeight/2, 50, 50);


		if(windX > windowWidth){
			windX = 0;
		}
	// }
	
	// textSize(30);
}

function marvelImages(){

	// if(marvelSelect.option("Avengers") == true){
	// 	marvelImageSWitch(windX, windowHeight/2);
	// }

	// if(marvelSelect.option("Thor") == true){
	// 	marvelImageThor;
	// }
	// if(marvelSelect.option("Captain America") == true){
	// 	marvelImageBBuck
	// }
	// if(marvelSelect.option("Guardians of the Galaxy") == true){
	// 	marvelImageSLord
	// }
	// if(marvelSelect.option("ETC.") == true){
	// 	marvelImageBPan
	// }

}