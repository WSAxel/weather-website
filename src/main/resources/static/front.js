const textInput = document.getElementById("textInput")
let name = document.getElementById("mainCityName")
let weather = document.getElementById("mainWeather")
let temp = document.getElementById("mainTemperature")
let icon = document.getElementById("icon")
const rainIcon =document.getElementById("rainIcon")
let rain = document.getElementById("rain")
function searchCity() {
        fetch("https://api.openweathermap.org/data/2.5/find?q="+textInput.value+
            "&units=metric&appid=dd57959a67b88e214d382b42c517d74e"
        ).then(response => response.json())
            .then(data => {
                console.log(data)
                let nameValue= data['list']['0']['name'];
                let weatherValue= data['list']['0']['weather']['0']['description'];
                let tempValue= data['list']['0']['main']['temp'];
                let iconValue= data['list']['0']['weather']['0']['icon']
                rainIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXkSrgcNbcA121rKu-PnIwTEclWPLHp8GGg&usqp=CAU"
                try {
                    let rainValue= data['list']['0']['rain']['1h']
                    rain.innerHTML =rainValue+" mm"
                } catch (error){
                    rain.innerHTML ="0 mm"
                }

                name.innerHTML =nameValue;
                weather.innerHTML =weatherValue;
                temp.innerHTML =tempValue+" °C";
                icon.src = " https://openweathermap.org/img/wn/"+iconValue +"@2x.png";
            })

}
document.querySelector(".form-control").addEventListener("keyup", function (event){
    //remove the event inside the function() and the if (event.key == "Enter"){} for automatic search upon writing.
    if (event.key == "Enter") {
        searchCity();
    }
});
let name1 = document.getElementById("cityName1")
let weather1 =document.getElementById("weather1")
let temp1 =document.getElementById("temperature1")
let icon1 = document.getElementById("icon1")
fetch("https://api.openweathermap.org/data/2.5/find?q=Tokyo&units=metric&appid=dd57959a67b88e214d382b42c517d74e")
    .then(response => response.json())
    .then(data => {
            console.log(data)
            let nameValue =data['list']['1']['name'];
            let weatherValue= data['list']['1']['weather']['0']['description'];
            let tempValue= data['list']['1']['main']['temp'];
            let iconValue= data['list']['1']['weather']['0']['icon']

            name1.innerHTML =nameValue;
            weather1.innerHTML =weatherValue;
            temp1.innerHTML =tempValue+" °C";
            icon1.src = " https://openweathermap.org/img/wn/"+iconValue +"@2x.png";

    })
let name2 = document.getElementById("cityName2")
let weather2 =document.getElementById("weather2")
let temp2 =document.getElementById("temperature2")
let icon2 = document.getElementById("icon2")
fetch("https://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=dd57959a67b88e214d382b42c517d74e")
    .then(response => response.json())
    .then(data => {
            console.log(data)
            let nameValue =data['list']['0']['name'];
            let weatherValue= data['list']['0']['weather']['0']['description'];
            let tempValue= data['list']['0']['main']['temp'];
            let iconValue= data['list']['0']['weather']['0']['icon']

            name2.innerHTML =nameValue;
            weather2.innerHTML =weatherValue;
            temp2.innerHTML =tempValue+" °C";
            icon2.src = " https://openweathermap.org/img/wn/"+iconValue +"@2x.png";

    })
let name3 = document.getElementById("cityName3")
let weather3 =document.getElementById("weather3")
let temp3 =document.getElementById("temperature3")
let icon3 = document.getElementById("icon3")
fetch("https://api.openweathermap.org/data/2.5/find?q=New%20York&units=metric&appid=dd57959a67b88e214d382b42c517d74e")
    .then(response => response.json())
    .then(data => {
            console.log(data)
            let nameValue =data['list']['0']['name'];
            let weatherValue= data['list']['0']['weather']['0']['description'];
            let tempValue= data['list']['0']['main']['temp'];
            let iconValue= data['list']['0']['weather']['0']['icon']

            name3.innerHTML =nameValue;
            weather3.innerHTML =weatherValue;
            temp3.innerHTML =tempValue+" °C";
            icon3.src = " https://openweathermap.org/img/wn/"+iconValue +"@2x.png";

    })


