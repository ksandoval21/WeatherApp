var request = require('request');
const city = document.querySelector("#input")
const btn = document.querySelector("#btn")
console.log("Wassup my guy")
var url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=35f1b4967b15466c87502e7b3aef9681`



request(url, function(error, response, body){
    console.log("wassup dude")
    weather_json= JSON.parse(body);
    var weather = {
        city : city,
        temperature :  parseInt(1.8 * (Math.round(weather_json.main.temp)- 273) + 32),
        description : weather_json.weather[0].description,
        icon : weather_json.weather[0].icon
    };
    console.log("infinite")
})
console.log("sup dude")
var weather_data = {weather : weather};


btn.addEventListener("click", () => {
    console.log(city.value)
})