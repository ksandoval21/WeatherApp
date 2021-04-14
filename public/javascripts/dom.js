const cityBtn = document.getElementById("cityButton")
const city = document.getElementById("input")

cityBtn.addEventListener("click", () => {
    var url= `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=35f1b4967b15466c87502e7b3aef9681`
    fetch(url)
    .then(response => response.json())
    .then(weather = {
        city : city,
        temperature :  parseInt(1.8 * (Math.round(response.main.temp)- 273) + 32),
        description : response.weather[0].description,
        icon : response.weather[0].icon
    })
    console.log(city.value)
})


    


// console.log("infinite")
    // console.log("sup dude")
    // var weather_data = {weather : weather};
