const cityBtn = document.getElementById("cityButton")
const cityInput = document.getElementById("cityInput")
const city = document.getElementById("city")
const temp = document.getElementById("temperature")
const description = document.getElementById("description")
const icon = document.getElementById("icon")
const stateInput = document.getElementById("stateInput")
const star = document.querySelector(".star")
const container = document.querySelector(".container")
const title = document.querySelector(".title")
const favorites = document.querySelector(".favorites")
const wind = document.getElementById("wind")
const temp_max = document.getElementById("temp_max")
const temp_min = document.getElementById("temp_min")
const feels = document.getElementById("feels")

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
        icon : data.weather[0].icon,
        wind: data.wind.speed,
        temp_max: parseInt((data.main.temp_max- 273.15) * 1.8 + 32),
        temp_min:parseInt((data.main.temp_min- 273.15) * 1.8 + 32),
        feels: parseInt((data.main.feels_like- 273.15) * 1.8 + 32),
    };
    city.innerHTML = weather.city
    temp.innerHTML = "Current: " + weather.temperature +" °F"
    description.innerHTML = "Weather Conditions: " + weather.description
    icon.src = `http://openweathermap.org/img/w/${weather.icon}.png`;
    wind.innerHTML = "Wind Speed: " + weather.wind +" MPH"
    temp_max.innerHTML = "High: " + weather.temp_max + " °F "
    temp_min.innerHTML = "Low: " + weather.temp_min + " °F "
    feels.innerHTML = "Feels Like : " + weather.feels + " °F "
});


    let display = false
    star.addEventListener("click", () => {
    if(display){
        star.classList.add("checked")
        // favorites.push(weather = {
        //     city : data.name,
        //     temperature :  parseInt((data.main.temp- 273.15) * 1.8 + 32),
        //     description : data.weather[0].description,
        //     icon : data.weather[0].icon,
        //     class : "checked"
        // })
        // console.log(favorites)

    }else{
        star.classList.remove("checked")
    //     for (const place of favorites){
    //         if (place.weather.class === "unchecked"){
    //             const index = favorites.indexOf(place);
    //             favorites.splice(index, 1)
    //         }
    //     }
    // }
    display = !display

    };


})
});




// function displayFavorites(favorites){
//     for (const favorite of favorites) {
//         favoritesContainer.insertAdjacentHTML(
//         "beforeend",`
//         <div class="container">
//             <p class="city" ></p>
//             <img></img>
//             <p ></p>
//             <p></p>
//         </div>`
//         )
//     };
// }

// displayFavorites(favorites)
// console.log(favorites)
