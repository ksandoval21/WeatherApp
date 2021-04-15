const cityBtn = document.getElementById("cityButton")
const cityInput = document.getElementById("cityInput")
const city = document.getElementById("city")
const temp = document.getElementById("temperature")
const description = document.getElementById("description")
const icon = document.getElementById("icon")
let stateCode 
const stateInput = document.getElementById("stateInput")
const star = document.getElementById("star")
const container = document.querySelector(".container")
const title = document.querySelector(".title")


cityBtn.addEventListener("click", () => {
    var url= `https://api.openweathermap.org/data/2.5/weather?zip=${cityInput.value},US&appid=35f1b4967b15466c87502e7b3aef9681`
    container.style.visibility ="visible";
    title.style.visibility ="visible";
    console.log(url)
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


})
// if (cityInput.value == " "){
//     container.style.visibility = "hidden";;
// }else{
//     container.style.visibility ="visible";
// }
let display= false
star.addEventListener("click", () => {
if(display){
    star.classList.add("checked")
}else{
    star.classList.remove("checked")
}
display = !display
});
