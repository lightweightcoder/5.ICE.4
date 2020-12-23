// let latitude = '';
// let longitude = '';

// // get location coordinates of the user if geolocation services are available
// if ('geolocation' in navigator) {
//   navigator.geolocation.getCurrentPosition((position) => {
//     latitude = position.coords.latitude;
//     longitude = position.coords.longitude;
//   });
// } else {
//   console.log('geolocation IS NOT available');
// }

// const buttonDiv = document.createElement('div');
// const button = document.createElement('button');
// button.innerText = 'get weather';

// // event listener for button to get weather
// button.addEventListener('click', async () => {
//   try {
//     // get user's location info to get his/her woeid
//     const locationsInfo = await axios.get(`https://metaweather-with-cors.now.sh/api/location/search/?lattlong=${latitude},${longitude}`);

//     const woeid = locationsInfo.data[0].woeid;
//     const country = locationsInfo.data[0].title;

//     // get Sg's weather from API
//     const sgInfo = await axios.get(`https://metaweather-with-cors.now.sh/api/location/${woeid}/`);
//     const weatherStateAbbr = sgInfo.data.consolidated_weather[0].weather_state_abbr;
//     const weatherStateIcon = `https://www.metaweather.com/static/img/weather/${weatherStateAbbr}.svg`;

//     const weatherInfoDiv = document.createElement('div');
//     const countryEl = document.createElement('p');
//     const minTempEl = document.createElement('p');
//     const maxTempEl = document.createElement('p');
//     const weatherStateEl = document.createElement('p');
//     document.body.append(weatherInfoDiv);
//     weatherInfoDiv.append(countryEl);
//     weatherInfoDiv.append(minTempEl);
//     weatherInfoDiv.append(maxTempEl);
//     weatherInfoDiv.append(weatherStateEl);

//     countryEl.innerText = country;
//     minTempEl.innerText = sgInfo.data.consolidated_weather[0].min_temp;
//     maxTempEl.innerText = sgInfo.data.consolidated_weather[0].max_temp;
//     weatherStateEl.innerText = `${sgInfo.data.consolidated_weather[0].weather_state_name}`;

//     const icon = document.createElement('img');
//     weatherInfoDiv.append(icon);
//     icon.setAttribute('src', weatherStateIcon);
//   } catch (error) {
//     console.log(error);
//   }
// });

// // append elements
// document.body.append(buttonDiv);
// buttonDiv.append(button);

let latitude = '';
let longitude = '';
const getWeather = async () => {
  // get user's location info to get his/her woeid
  const locationsInfo = await axios.get(`https://metaweather-with-cors.now.sh/api/location/search/?lattlong=${latitude},${longitude}`);
  const woeid = locationsInfo.data[0].woeid;
  const country = locationsInfo.data[0].title;
  // get Sg's weather from API
  const sgInfo = await axios.get(`https://metaweather-with-cors.now.sh/api/location/${woeid}/`);
  const weatherStateAbbr = sgInfo.data.consolidated_weather[0].weather_state_abbr;
  const weatherStateIcon = `https://www.metaweather.com/static/img/weather/${weatherStateAbbr}.svg`;
  const weatherInfoDiv = document.createElement('div');
  const countryEl = document.createElement('p');
  const minTempEl = document.createElement('p');
  const maxTempEl = document.createElement('p');
  const weatherStateEl = document.createElement('p');
  document.body.append(weatherInfoDiv);
  weatherInfoDiv.append(countryEl);
  weatherInfoDiv.append(minTempEl);
  weatherInfoDiv.append(maxTempEl);
  weatherInfoDiv.append(weatherStateEl);
  countryEl.innerText = country;
  minTempEl.innerText = sgInfo.data.consolidated_weather[0].min_temp;
  maxTempEl.innerText = sgInfo.data.consolidated_weather[0].max_temp;
  weatherStateEl.innerText = `${sgInfo.data.consolidated_weather[0].weather_state_name}`;
  const icon = document.createElement('img');
  weatherInfoDiv.append(icon);
  icon.setAttribute('src', weatherStateIcon);
};
// get location coordinates of the user if geolocation services are available
const userLocation = () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      console.log('latitude2', latitude);
      console.log('longtitude', longitude);
      console.log('ran geolocation API.. running getweather()');
      getWeather();
    });
  } else {
    console.log('geolocation IS NOT available');
  }
};
const buttonDiv = document.createElement('div');
const button = document.createElement('button');
button.innerText = 'get weather';
// event listener for button to get weather
button.addEventListener('click', async () => {
  userLocation();
});
// append elements
document.body.append(buttonDiv);
buttonDiv.append(button);
