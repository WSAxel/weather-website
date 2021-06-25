const textInput = document.getElementById("textInput")
let name = document.getElementById("mainCityName")
let weather = document.getElementById("mainWeather")
let temp = document.getElementById("mainTemperature")
function searchCity() {
        fetch("https://api.openweathermap.org/data/2.5/find?q="+textInput.value+
            "&units=metric&appid=dd57959a67b88e214d382b42c517d74e"
        ).then(response => response.json())
            .then(data => {
                console.log(data)
                let nameValue= data['list']['0']['name'];
                let weatherValue= data['list']['0']['weather']['0']['description'];
                let tempValue= data['list']['0']['main']['temp'];

                name.innerHTML =nameValue;
                weather.innerHTML =weatherValue;
                temp.innerHTML =tempValue+" °C";
            })

}
let name1 = document.getElementById("cityName1")
let weather1 =document.getElementById("weather1")
let temp1 =document.getElementById("temperature1")
fetch("https://api.openweathermap.org/data/2.5/find?q=Oslo&units=metric&appid=dd57959a67b88e214d382b42c517d74e")
    .then(response => response.json())
    .then(data => {
            console.log(data)
            let nameValue =data['list']['0']['name'];
            let weatherValue= data['list']['0']['weather']['0']['description'];
            let tempValue= data['list']['0']['main']['temp'];

            name1.innerHTML =nameValue;
            weather1.innerHTML =weatherValue;
            temp1.innerHTML =tempValue+" °C";

    })
let name2 = document.getElementById("cityName2")
let weather2 =document.getElementById("weather2")
let temp2 =document.getElementById("temperature2")
fetch("https://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=dd57959a67b88e214d382b42c517d74e")
    .then(response => response.json())
    .then(data => {
            console.log(data)
            let nameValue =data['list']['0']['name'];
            let weatherValue= data['list']['0']['weather']['0']['description'];
            let tempValue= data['list']['0']['main']['temp'];

            name2.innerHTML =nameValue;
            weather2.innerHTML =weatherValue;
            temp2.innerHTML =tempValue+" °C";

    })
let name3 = document.getElementById("cityName3")
let weather3 =document.getElementById("weather3")
let temp3 =document.getElementById("temperature3")
fetch("https://api.openweathermap.org/data/2.5/find?q=New%20York&units=metric&appid=dd57959a67b88e214d382b42c517d74e")
    .then(response => response.json())
    .then(data => {
            console.log(data)
            let nameValue =data['list']['0']['name'];
            let weatherValue= data['list']['0']['weather']['0']['description'];
            let tempValue= data['list']['0']['main']['temp'];

            name3.innerHTML =nameValue;
            weather3.innerHTML =weatherValue;
            temp3.innerHTML =tempValue+" °C";

    })
let name4 = document.getElementById("cityName3")
let weather4 =document.getElementById("weather3")
let temp4 =document.getElementById("temperature3")
fetch("https://api.openweathermap.org/data/2.5/find?q=Tokyo&units=metric&appid=dd57959a67b88e214d382b42c517d74e")
    .then(response => response.json())
    .then(data => {
            console.log(data)
            let nameValue =data['list']['0']['name'];
            let weatherValue= data['list']['0']['weather']['0']['description'];
            let tempValue= data['list']['0']['main']['temp'];

            name4.innerHTML =nameValue;
            weather4.innerHTML =weatherValue;
            temp4.innerHTML =tempValue+" °C";

    })

