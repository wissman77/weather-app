import {
  formatLongDate,
  capitalize,
  getWeekDay,
  formatShortDate,
} from './utilFuncs';

function buildMainWeather(weatherData) {
  const windSpeedUnits = weatherData.units === 'metric' ? 'km/h' : 'mi/h';
  const tempUnits = weatherData.units === 'metric' ? '°C' : '°F';

  const mainDiv = document.createElement('div');
  mainDiv.classList.add('single-weather');

  // left side div
  const leftSideDiv = document.createElement('div');
  leftSideDiv.classList.add('city-details');
  mainDiv.appendChild(leftSideDiv);

  const cityNameHeader = document.createElement('h2');
  cityNameHeader.textContent = `${weatherData.cityName}, ${weatherData.country}`;
  leftSideDiv.appendChild(cityNameHeader);

  const tempHeader = document.createElement('h3');
  tempHeader.innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i> ${Math.floor(
    weatherData.temp
  )} ${tempUnits}`;
  leftSideDiv.appendChild(tempHeader);

  const descriptionHeader = document.createElement('h4');
  descriptionHeader.textContent = capitalize(weatherData.description);
  leftSideDiv.appendChild(descriptionHeader);

  const icon = document.createElement('img');
  icon.title = capitalize(weatherData.description);
  icon.src = weatherData.icon;
  leftSideDiv.appendChild(icon);

  const dateTimePara = document.createElement('p');
  dateTimePara.textContent = formatLongDate(weatherData.dateTime);
  leftSideDiv.appendChild(dateTimePara);

  // right side div
  const rightSideDiv = document.createElement('div');
  rightSideDiv.classList.add('weather-details');
  mainDiv.appendChild(rightSideDiv);

  const humidityDiv = document.createElement('div');
  const humidityicon = document.createElement('div');
  humidityicon.innerHTML = '<i class="fa-solid fa-droplet"></i>';
  humidityicon.title = 'Humidity';
  humidityDiv.appendChild(humidityicon);
  const humidityResult = document.createElement('div');
  humidityResult.textContent = `${weatherData.humidity}%`;
  humidityDiv.appendChild(humidityResult);
  rightSideDiv.appendChild(humidityDiv);

  const windSpeedDiv = document.createElement('div');
  const windSpeedIcon = document.createElement('div');
  windSpeedIcon.innerHTML = '<i class="fa-solid fa-wind"></i>';
  windSpeedIcon.title = 'Wind Speed';
  windSpeedDiv.appendChild(windSpeedIcon);
  const windSpeedResult = document.createElement('div');
  windSpeedResult.textContent = `${weatherData.windSpeed} ${windSpeedUnits}`;
  windSpeedDiv.appendChild(windSpeedResult);
  rightSideDiv.appendChild(windSpeedDiv);

  const feelsLikeDiv = document.createElement('div');
  const feelsLikeIcon = document.createElement('div');
  feelsLikeIcon.innerHTML = '<i class="fa-solid fa-temperature-quarter"></i>';
  feelsLikeIcon.title = 'Feels Like';
  feelsLikeDiv.appendChild(feelsLikeIcon);
  const feelsLikeResult = document.createElement('div');
  feelsLikeResult.textContent = `${Math.floor(
    weatherData.feelsLike
  )} ${tempUnits}`;
  feelsLikeDiv.appendChild(feelsLikeResult);
  rightSideDiv.appendChild(feelsLikeDiv);

  return mainDiv;
}

function buildFiveDaysWeather(days) {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('cards');

  days.forEach((weatherData) => {
    const windSpeedUnits = weatherData.units === 'metric' ? 'km/h' : 'mi/h';
    const tempUnits = weatherData.units === 'metric' ? '°C' : '°F';

    const card = document.createElement('div');
    card.classList.add('card');

    const dayHeader = document.createElement('h3');
    dayHeader.textContent = getWeekDay(weatherData.dateTime);
    card.appendChild(dayHeader);

    const datePara = document.createElement('p');
    datePara.textContent = formatShortDate(weatherData.dateTime);
    card.appendChild(datePara);

    const tempHeader = document.createElement('h4');
    tempHeader.innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i> ${Math.floor(
      weatherData.temp
    )} ${tempUnits}`;
    card.appendChild(tempHeader);

    const icon = document.createElement('img');
    icon.title = capitalize(weatherData.description);
    icon.src = weatherData.icon;
    card.appendChild(icon);

    const humidityPara = document.createElement('p');
    humidityPara.innerHTML = `<i class="fa-solid fa-droplet" title='Humidity'></i> ${weatherData.humidity}%`;
    card.appendChild(humidityPara);

    const windSpeedPara = document.createElement('p');
    windSpeedPara.innerHTML = `<i class="fa-solid fa-wind" title='Wind Speed'></i> 
    ${weatherData.windSpeed} ${windSpeedUnits}`;
    card.appendChild(windSpeedPara);

    mainDiv.appendChild(card);
  });

  return mainDiv;
}

export { buildMainWeather, buildFiveDaysWeather };
