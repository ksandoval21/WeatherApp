var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

city= "Memphis"

var url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=35f1b4967b15466c87502e7b3aef9681`

router.get('/heyman', function(req, res, next){
  console.log("pain")
  request(url, function(error, response, body){
    console.log("wassup dude")
    weather_json= JSON.parse(body);
    var weather = {
      city : city,
      temperature : (1.8 * (Math.round(weather_json.main.temp)- 273) + 32),
      description : weather_json.weather[0].description,
      icon : weather_json.weather[0].icon
    };

    var weather_data = {weather : weather};
    res.render("hey", weather_data)
    

  })
})


module.exports = router;
