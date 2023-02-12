const mainConatiner = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


const apikey = "3265874a2c77ae4a04bb96236a642d2f";
//Note : This is a function which returns weather using location and key
const WEATHER_API_URL = (location) => { return `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&appid=${apikey}` };


async function getWeatherByLocation(location) {
    const response = await fetch(WEATHER_API_URL(location));
    const data = await response.json();
    console.log(data);
    // console.log("Temp is " + KelToCel(data.list[0].temp.day));
    addWeatherToPage(data);
}

// getWeatherByLocation("Bangalore");


function addWeatherToPage(data) {
    const temp = data.list[0].temp.day;
    const location = data.city.name;
    const weatherType = data.list[0].weather[0].description
    const weatherElement = document.createElement('div');
    weatherElement.classList.add('weather');

    weatherElement.innerHTML = `
        <h2>${temp}°C</h2>
        <img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" />
        <p>${location}</p>
        <p>${weatherType}</p>
    `

    //cleanup maincontainer first
    mainConatiner.innerHTML = "";

    mainConatiner.appendChild(weatherElement);

}

//Kelvin to Celsius
function KelToCel(temp) {
    return (temp - 273.15).toFixed(2);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchLocation = search.value;

    if (searchLocation) {
        getWeatherByLocation(searchLocation);
    } else {
        // If the input location is not correct
        console.log("Location Not found!!!");
    }
})



