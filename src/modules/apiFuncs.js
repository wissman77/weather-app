const apiKey = 'e23f4e2a8fd980f3490ac76932aae2d0';

async function getData(requestedUrl, cityName, units) {
  const url = new URL(requestedUrl);
  url.searchParams.set('q', cityName);
  url.searchParams.set('units', units);
  url.searchParams.set('appid', apiKey);

  try {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getCurrentWeatherDataByCity(cityName, units = 'metric') {
  const data = await getData(
    'https://api.openweathermap.org/data/2.5/weather',
    cityName,
    units
  );

  const currentData = {
    cityName: data.name,
    country: data.sys.country,
    dateTime: new Date(data.dt * 1000),
    temp: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
  };

  console.log(data);
  return currentData;
}

async function getWeatherDataFor5Days(cityName, units = 'metric') {
  const data = getData(
    'https://api.openweathermap.org/data/2.5/weather',
    cityName,
    units
  );
}

export { getCurrentWeatherDataByCity, getWeatherDataFor5Days };
