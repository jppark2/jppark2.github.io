
var canvas;
var title;

//weather datas
var weatherData;
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=fc3a29db9da406f9f26b2b3c16307c38", gotWeatherData;

var cloudiness;
var tempMin;
var tempMax;
var tempur;

var currentWeather;
var randWeatherCast;
var randWeatherCast2;

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
var marvelImageSWitch;



function preload(){

	marvelCharData = loadJSON("js/marvelCharacters.json");
	loadJSON("https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=fc3a29db9da406f9f26b2b3c16307c38", gotWeatherData);
	marvelImageBBuck = loadImage("Images/BB.png");
	marvelImageThor = loadImage("Images/Thor.png");
	marvelImageBPan = loadImage("Images/BPanther.png");
	marvelImageSWitch = loadImage("Images/SWitch.png");

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
	
}

function changeMarvel(){

	for(var i= 0; i < marvelCharData.Characters.length; i++){
	 if(marvelCharData.Characters[i].movie == marvelSelect.value()){
	 	console.log(marvelCharData.Characters[i].cast);
	 	//for(var j=0; j< marvelCharData.Characters[i].cast.length; j++){
	 		var randCast = int(random(0, marvelCharData.Characters[i].cast.length));
	 		var randCast2 = int(random(0, marvelCharData.Characters[i].cast.length));
	 		randWeatherCast = marvelCharData.Characters[i].cast[randCast];
	 		randWeatherCast2 = marvelCharData.Characters[i].cast[randCast2];
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
		
		textSize(30);
		fill(255, 249, 249);
		text(randWeatherCast + " says they currently see " + weatherData.weather[0].description, 10, 40);
		text(randWeatherCast2 + " tells you 'It is " + weatherData.main.temp + " °F right now'", 10, 90);
		textSize(15);
		text("Cloudiness: " + cloudiness + "%", 200, 130);
		text("Min Temp: " + tempMin + "°", 320, 130);
		text("Current Temp: ", 440, 130);
		text("Max Temp: " + tempMax + "°", 550, 130);

		
	}

}

function draw(){
	// background(204, 24, 24);

	cloudiness = weatherData.clouds.all;
	tempMin = weatherData.main.temp_min;
	tempMax = weatherData.main.temp_max;
	tempur = weatherData.main.temp;

	image(marvelImageThor, 180, 160, cloudiness*2, cloudiness*2);
	image(marvelImageSWitch, 320, 160, tempMin*2, tempMin*2);
	image(marvelImageBBuck, 440, 160, tempur*2, tempur*2);
	image(marvelImageBPan, 550, 160, tempMax*2, tempMax*2);


}
