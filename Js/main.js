let searchInput=document.getElementById("search");
let  searchButton=document.getElementById("searchButton");
let weather;
async function getWeather(myWither)
{
    let response=  await fetch(`https://api.weatherapi.com/v1/forecast.json?key=433403cfd9214693a99215418211209&q=${myWither} &days=3`);
    weather= await response.json();
    document.getElementById('current').innerHTML=
    ` 
    <div class="current">
      <h4 class="m-2" style="font-size:35;">${weather.location.name}</h4>
      <div class="d-flex justify-content-between">
              <h1>${weather.current.temp_c}<sup>o</sup> C</h1>
              <img src="https:${weather.current.condition.icon}"/>
      </div>
      <p class="text-primary">${weather.current.condition.text}</p>
      <div class="d-flex justify-content-between">
          <div class="d-flex">
          <i class="fas fa-umbrella"></i>
           <p>${weather.forecast.forecastday[0].day.daily_chance_of_rain} %</p>
          </div>
          <div class="d-flex">
          <i class="fas fa-wind"></i>
           <p>${weather.forecast.forecastday[0].day.maxwind_kph}</p>
          </div>
          <div class="d-flex">
          <i class="far fa-compass"></i>
           <p>${weather.forecast.forecastday[0].hour[0].wind_dir}</p>
          </div>
      </div>

    </div>
    `;

// tomorrow

     document.getElementById('forecast1').innerHTML= `
     <img src="https:${weather.forecast.forecastday[1].day.condition.icon}">
     <h4>${weather.forecast.forecastday[1].day.maxtemp_c}</h4>
     <h5>${weather.forecast.forecastday[1].day.mintemp_c}</h5>
     <p class="text-primary">${weather.forecast.forecastday[1].day.condition.text}</p>
    `;

//after tomorrow
    document.getElementById('forecast2').innerHTML= `
    <img src="https:${weather.forecast.forecastday[2].day.condition.icon}">
    <h4>${weather.forecast.forecastday[2].day.maxtemp_c}</h4>
    <h5>${weather.forecast.forecastday[2].day.mintemp_c}</h5>
    <p class="text-primary">${weather.forecast.forecastday[2].day.condition.text}</p>
   `;
}
getWeather("cairo");


searchInput.addEventListener('keyup',term =>{
    getWeather(term.target.value);
})