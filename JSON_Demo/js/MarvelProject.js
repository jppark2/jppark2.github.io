var title;

//weather datas
var weatherData;
var canvas;
var windSpeed;
var windX;
var fillTemp;

var marvelSelect;


//marvel datas
var marvelCharData;
var allCharacs;
var randCharacs;

var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=fc3a29db9da406f9f26b2b3c16307c38", gotWeatherData;

// var marvelURL = "https://gateway.marvel.com:443/v1/public/characters?apikey=8c1b6d600cd58a877e856041cc9cff30", gotMarvelData;


function preload(){
	//marvel url
	//loadJSON("https://gateway.marvel.com:443/v1/public/characters?apikey=8c1b6d600cd58a877e856041cc9cff30", gotMarvelData);
	
	loadJSON("https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=fc3a29db9da406f9f26b2b3c16307c38", gotWeatherData);
	loadJSON(weatherURL, gotWeatherData);

	marvelCharData = loadJSON("js/marvelCharacters.json");
}

function updateWeather(){
	
	loadJSON(weatherURL, gotWeatherData);

}

function setup(){

	canvas = createCanvas(windowWidth, windowHeight);
	background(140);
	fill(100);
	textSize(30);

	windX = windowWidth/2;

	print(marvelCharData);

	allCharacs = marvelCharData.Characters;
	print(allCharacs.length);
	
	//dropdown menu
	title = createElement('h1', " ");
	title.html("Choose a Marvel movie franchise");

	marvelSelect = createSelect();
	marvelSelect.position(10, 40);
	marvelSelect.option("Avengers");
	marvelSelect.option("Thor");
	marvelSelect.option("Captain America");
	marvelSelect.option("Guardians of the Galaxy");
	marvelSelect.option("All Marvel");
	marvelSelect.changed(changeMarvel);

//for the image?
	// for(var i = 0; i < allCharacs.length; i++){
	// 	createElement('h1', allCharacs[i].Marname);
		// var members = allBirds[i].members;
		// for(var j = 0; j < members.length; j++){
		// 	createP(members[j]);
	// } 

	console.log(marvelCharData.Characters.length);
	randCharacs = int(random(0, marvelCharData.Characters.length));



}


function gotWeatherData(data){

	weatherData = data;
	console.log(weatherData);
	console.log(weatherData.weather[0].description);
	console.log(weatherData.main.temp);
	console.log(weatherData.wind.speed);


}


// function gotMarvelData(){



// }

function draw(){

	background();
	fill(255);
	textSize(60);

	
	if(weatherData){
		fillTemp = weatherData.main.temp;	
		var mappedFillTemp;
		mappedFillTemp = map(fillTemp, 0, 0, 0, 255);
		fill(mappedFillTemp, 30, 150);
		windSpeed = weatherData.wind.speed;
		windX = windX + windSpeed
		//replace with image
		rect(windX, windowHeight/2, 50, 50);
		text("The " + marvelCharData.Characters[randCharacs] + " is seeing " + weatherData.weather[0].description, 10, 40);

		if(windX > windowWidth){
			windX = 0;
	
		}
	
	}

}