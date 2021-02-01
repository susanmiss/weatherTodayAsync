const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const updateUI = (data) => {

    // console.log(data);
    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    //destructure properties, same as above:
    const { cityDetails, weather } = data;

    //update details template
    details.innerHTML = `
            <h5 class="my-3">${cityDetails.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
        `;

    //update the night/day & icon images:
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);


    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);

    //remove the d-none class if present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
}

const updateCity = async (citySearch) => {
    //console.log(citySearch);
    const cityDetails = await getCity(citySearch);
    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        weather: weather
    }
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    //get city value from form:
    const citySearch = cityForm.city.value.trim();
    cityForm.reset();

    //update UI with new city:
    updateCity(citySearch)
        .then(data => updateUI(data))
        .catch(err => console.log(err))
});