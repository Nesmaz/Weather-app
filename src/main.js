
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const apiKey = "9e664f70c9d53581d82503dc713cc1ce";

const searchBtn = document.getElementById('search-icon');
const searchBox = document.getElementById('search-box');
const img = document.getElementById('state-img');



async function checkWeather(city){
    const Response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (Response.status === 404){
        document.querySelector('#state').style.display = 'none';
        document.querySelector('#info').style.display = 'none';
        document.querySelector('.error').style.display = 'block';
        
    }
    let data = await Response.json();

document.getElementById('city').innerHTML=data.name;
document.getElementById('weather').innerHTML=Math.round(data.main.temp) + ` °C`;
const weatherState = data.weather[0].main;
document.getElementById('humidity').innerHTML=data.main.humidity + ` %`;

document.getElementById('wind').innerHTML=data.wind.speed + ` km/hr`;

switch (weatherState){
    case 'Clouds':
        img.src="media/cloudy.png"
        document.getElementById('wState').innerHTML = "Cloudy!";
    break;
    case 'Clear':
        img.src="media/sunny.png"
        document.getElementById('wState').innerHTML = "Sunny!";
    break;
    case 'Rain':
        img.src="media/rain.png"
        document.getElementById('wState').innerHTML = "Rainy!";
    break;
    case 'Drizzle':
        img.src="media/drizzle.png"
        document.getElementById('wState').innerHTML = "Mild rain!";
    break;
    case 'Mist':
        img.src="media/fog.png"
        document.getElementById('wState').innerHTML = "Misty!";
    break;
    case 'Snow':
        img.src="media/snowy.png"
        document.getElementById('wState').innerHTML = "Snowy!";
    break;

}

document.querySelector('#state').style.display = 'block';
document.querySelector('#info').style.display = 'flex';
document.querySelector('.error').style.display = 'none';

}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})