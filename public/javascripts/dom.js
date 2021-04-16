const cityBtn = document.getElementById("cityButton")
const cityInput = document.getElementById("cityInput")
const city = document.getElementById("city")
const temp = document.getElementById("temperature")
const description = document.getElementById("description")
const icon = document.getElementById("icon")
const stateInput = document.getElementById("stateInput")
const star = document.getElementById("star")
const container = document.querySelector(".container")
const title = document.querySelector(".title")
const favorites = document.querySelector(".favorites")

cityBtn.addEventListener("click", () => {
    var url= `https://api.openweathermap.org/data/2.5/weather?zip=${cityInput.value},US&appid=35f1b4967b15466c87502e7b3aef9681`
    container.style.visibility ="visible";
    title.style.visibility ="visible";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        weather = {
        city : data.name,
        temperature :  parseInt((data.main.temp- 273.15) * 1.8 + 32),
        description : data.weather[0].description,
        icon : data.weather[0].icon
<<<<<<< HEAD
    };
    city.innerHTML = weather.city
    temp.innerHTML = weather.temperature +" °F"
    description.innerHTML = weather.description
    icon.src = `http://openweathermap.org/img/w/${weather.icon}.png`;
=======
        };
        city.innerHTML = weather.city
        temp.innerHTML = weather.temperature +" °F"
        description.innerHTML = weather.description
        icon.src = `http://openweathermap.org/img/w/${weather.icon}.png`;
    });
>>>>>>> 38dd2181c5f7814325c740fd01d8ef1a5e890c56
});

let display= false
// star.addEventListener("click", () => {
// if(display){
//     star.classList.add("checked")
// }else{
//     star.classList.remove("checked")
// }
// display = !display
// });


let display= false
star.addEventListener("click", () => {
if(display){
    star.classList.add("checked")

}else{
    star.classList.remove("checked")
}
display = !display
});
// let favorites = []
// function displayFavorites(favorites){
//     for (const favorite of favorites) {
//         favorites.insertAdjacentHTML(
//         "beforeend",`
//         <div class="container">
//             <p class="city" ></p>
//             <img></img>
//             <p ></p>
//             <p></p>
//         </div>`
//         )
//     }
// }

for (const place of favorites){
    if (place.class === "unchecked"){
        const index = favorites.indexOf(place);
        favorites.splice(index, 1)
    }
}
console.log(favorites)
