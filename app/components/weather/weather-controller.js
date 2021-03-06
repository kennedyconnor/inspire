import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	let template = _weatherService.Weather.Template
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
	document.getElementById('weather').innerHTML = template
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
