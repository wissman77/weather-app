import './styles/main.css';
import icon from './assets/icon.png';
import {
  getCurrentWeatherDataByCity,
  getWeatherDataFor5Days,
} from './modules/apiFuncs';
import { buildMainWeather, buildFiveDaysWeather } from './modules/domFuns';

(() => {
  const tempsRadio = document.querySelectorAll('.temps input[type="radio"]');
  const mainDataDiv = document.querySelector('.main-output');
  const weatherForm = document.querySelector('form');
  const moreDetailsDiv = document.querySelector('.more-details');
  const spinner = document.querySelector('#spinner');
  const errorDiv = document.querySelector('.error');
  let cityName = 'Tirah';
  let units;

  // add favicon
  function addFavicon() {
    const link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.type = 'image/png';
    link.href = icon;
    document.head.appendChild(link);
  }

  function showErrorMessage() {
    errorDiv.style.display = 'block';
    errorDiv.textContent = 'The requested city not found.';
    spinner.setAttribute('hidden', '');
  }

  function getWeatherData(event) {
    if (!event) {
      units = 'metric';
    } else if (event.target.getAttribute('id')) {
      units = event.target.id;
    }
    // show spinner
    spinner.removeAttribute('hidden');
    // hide error message
    errorDiv.style.display = 'none';
    getCurrentWeatherDataByCity(cityName, units)
      .then((weatherData) => {
        mainDataDiv.innerHTML = '';
        mainDataDiv.appendChild(buildMainWeather(weatherData));
      })
      .catch((err) => {
        console.log(err);
        showErrorMessage();
      });
    getWeatherDataFor5Days(cityName, units)
      .then((daysWeatherData) => {
        // hide spinner
        spinner.setAttribute('hidden', '');
        moreDetailsDiv.innerHTML = '';
        moreDetailsDiv.appendChild(buildFiveDaysWeather(daysWeatherData));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  tempsRadio.forEach((radio) => {
    radio.addEventListener('click', getWeatherData);
  });

  weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    cityName = document.querySelector('#city').value;
    getWeatherData(e);
  });

  getWeatherData();
  addFavicon();
})();
