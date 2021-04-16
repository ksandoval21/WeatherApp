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
const favoritesContainer = document.querySelector(".favorites")
let favorites = []

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
        class : "unchecked"
    };
    city.innerHTML = weather.city
    temp.innerHTML = weather.temperature +" °F"
    description.innerHTML = weather.description
    icon.src = `http://openweathermap.org/img/w/${weather.icon}.png`;


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

    });


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
