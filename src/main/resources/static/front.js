/*const textInput = document.getElementById("textInput");
const mainCityName = document.getElementById("mainCityName");
const mainWeather = document.getElementById("mainWeather");
const mainTemperature = document.getElementById("mainTemperature");
function searchCity() {
    fetch('https://api.openweathermap.org/data/2.5/find?q='+textInput+
        '&units=metric&appid=dd57959a67b88e214d382b42c517d74e')
        .then(response => response.json())
        .then(data => console.log(data))

    .catch(err => alert("Wrong name of city"))
} */
const button = document.getElementById("submitInput")
const textInput = document.getElementById("textInput")
let name = document.getElementById("mainCityName")
function searchCity() {
        fetch("https://api.openweathermap.org/data/2.5/find?q=London&appid=dd57959a67b88e214d382b42c517d74e"
        ).then(response => response.json())
            .then(data => {
                let nameValue= data['names'];

                name.innerHTML =nameValue;
            })


}

