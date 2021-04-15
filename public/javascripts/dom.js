const cityBtn = document.getElementById("cityButton")
const cityInput = document.getElementById("cityInput")
const city = document.getElementById("city")
const temp = document.getElementById("temperature")
const description = document.getElementById("description")
const icon = document.getElementById("icon")
const stateInput = document.getElementById("stateInput")


cityBtn.addEventListener("click", () => {
    var url= `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value},${stateInput.value},US&appid=35f1b4967b15466c87502e7b3aef9681`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        weather = {
        city : data.name,
        temperature :  parseInt((data.main.temp- 273.15) * 1.8 + 32),
        description : data.weather[0].description,
        icon : data.weather[0].icon
    };
    city.innerHTML = weather.city
    temp.innerHTML = weather.temperature +" °F"
    description.innerHTML = weather.description
    icon.src = `http://openweathermap.org/img/w/${weather.icon}.png`;

});

    console.log(data)
})
