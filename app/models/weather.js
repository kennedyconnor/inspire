export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = data.main.temp.toFixed(0) + '° K'
    this.fahrenheit = ((data.main.temp - 273.15) * (9 / 5) + 32).toFixed(0) + '° F'
    this.celsius = (data.main.temp - 273.15).toFixed(0) + '° C'
    this.icon = data.weather[0].icon
  }
  get Template() {
    return `
	<div>${this.fahrenheit}</div>
	<img src="https://openweathermap.org/img/w/${this.icon}.png">
`
  }
} 