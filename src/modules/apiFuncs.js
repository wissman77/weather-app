const apiKey = 'e23f4e2a8fd980f3490ac76932aae2d0';

async function getData(requestedUrl, cityName, units) {
  const url = new URL(requestedUrl);
  url.searchParams.set('q', cityName);
  url.searchParams.set('units', units);
  url.searchParams.set('appid', apiKey);

  let data = {};
  try {
    const response = await fetch(url, { mode: 'cors' });
    data = await response.json();
  } catch (error) {
    return error;
  }
  return data;
}

async function getCurrentWeatherDataByCity(cityName, units = 'metric') {
  let data;
  try {
    data = await getData(
      'https://api.openweathermap.org/data/2.5/weather',
      cityName,
      units
    );
  } catch (error) {
    return error;
  }

  const currentData = {
    cityName: data.name,
    country: data.sys.country,
    dateTime: new Date(data.dt * 1000),
    temp: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    windSpeed: data.wind.speed,
    description: data.weather[0].description,
    units: units,
  };

  // console.log(data);
  return currentData;
}

async function getWeatherDataFor5Days(cityName, units = 'metric') {
  let data;
  try {
    data = await getData(
      'https://api.openweathermap.org/data/2.5/forecast',
      cityName,
      units
    );
  } catch (error) {
    return error;
  }

  const weatherDays = [];
  for (let i = 0; i < data.list.length; i += 8) {
    const weatherDay = {
      dateTime: new Date(data.list[i].dt * 1000),
      temp: data.list[i].main.temp,
      description: data.list[i].weather[0].description,
      icon: `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`,
      humidity: data.list[i].main.humidity,
      windSpeed: data.list[i].wind.speed,
      units,
    };

    weatherDays.push(weatherDay);
  }

  return weatherDays;
}

export { getCurrentWeatherDataByCity, getWeatherDataFor5Days };
