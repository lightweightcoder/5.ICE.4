const buttonDiv = document.createElement('div');
const button = document.createElement('button');
button.innerText = 'get weather';

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  });
} else {
  console.log('geolocation IS NOT available');
}

// event listener for button to get weather
button.addEventListener('click', async () => {
  try {
    // get Sg's weather from API
    const sgInfo = await axios.get('https://metaweather-with-cors.now.sh/api/location/1062617/');
    const weatherStateAbbr = sgInfo.data.consolidated_weather[0].weather_state_abbr;
    const weatherStateIcon = `https://www.metaweather.com/static/img/weather/${weatherStateAbbr}.svg`;

    const weatherInfoDiv = document.createElement('div');
    const minTempEl = document.createElement('p');
    const maxTempEl = document.createElement('p');
    const weatherStateEl = document.createElement('p');
    document.body.append(weatherInfoDiv);
    weatherInfoDiv.append(minTempEl);
    weatherInfoDiv.append(maxTempEl);
    weatherInfoDiv.append(weatherStateEl);

    minTempEl.innerText = sgInfo.data.consolidated_weather[0].min_temp;
    maxTempEl.innerText = sgInfo.data.consolidated_weather[0].max_temp;
    weatherStateEl.innerText = `${sgInfo.data.consolidated_weather[0].weather_state_name}`;

    const icon = document.createElement('img');
    weatherInfoDiv.append(icon);
    icon.setAttribute('src', weatherStateIcon);
    console.log(sgInfo);
  } catch (error) {
    console.log(error);
  }
});

// append elements
document.body.append(buttonDiv);
buttonDiv.append(button);
