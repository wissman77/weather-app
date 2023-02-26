const apiKey = 'e23f4e2a8fd980f3490ac76932aae2d0';

async function getCurrentWeatherDataByCity(cityName, units = 'metric') {
  const url = new URL('https://api.openweathermap.org/data/2.5/weather');
  url.searchParams.set('q', cityName);
  url.searchParams.set('units', units);
  url.searchParams.set('appid', apiKey);

  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();

  const currentData = {
    cityName: data.name,
    country: data.sys.country,
    dateTime: new Date(data.dt * 1000),
    temp: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
  };
}

async function getWeatherDataFor5Days(cityName, units = 'metric') {}

export { getCurrentWeatherDataByCity, getWeatherDataFor5Days };
