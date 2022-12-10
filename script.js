let weather = {
    "apiKey" : "62c1f688c3f4ca239cd36cef9446f2f7",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            +this.apiKey
            )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
     const { name } = data;
     const { icon, description } = data.weather[0];
     const { temp, humidity } = data.main;
     const { speed } = data.wind;
     const {country} = data.sys;
     document.querySelector(".city").innerText = "Weather in" + " " +  name + "," +" " + country;
     document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +".png"
     document.querySelector(".description").innerText = description;
     document.querySelector(".temp").innerText = temp + "°C";
     document.querySelector(".country").innerText = country; 
     document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
     document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
     document.querySelector(".weather").classList.remove("loading");
    },
    search: function(){
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
};

document.querySelector(".search button")
.addEventListener("click",  function() {
 weather.search();
});

document.querySelector(".searchbar")
.addEventListener("keyup",  function(event) {
if(event.key == "Enter") {
    weather.search(); 
}
}); 

weather.fetchWeather("New Delhi");
