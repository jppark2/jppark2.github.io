var weatherData;

//text
var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var city = "Chicago";
var apiKey = "&units=imperial&appid=fc3a29db9da406f9f26b2b3c16307c38";

var citySelect;

function setup(){

	createCanvas(500, 500);

	//dropdown menu
	citySelect = createSelect();
	citySelect.position(10, 10);
	citySelect.option("Chicago");
	citySelect.option("New York");
	citySelect.option("Los Angeles");
	citySelect.changed(changeCity);

}

function changeCity(){

	var weatherURL = api + citySelect.value() + apiKey;
	loadJSON(weatherURL, gotWeatherData);

}

function gotWeatherData(data){

	weatherData = data;
	console.log(weatherData);

}

function draw(){
	background(0);

	if(weatherData){
		ellipse(width/2, height/2, weatherData.main.temp, weatherData.main.temp);

	}

}