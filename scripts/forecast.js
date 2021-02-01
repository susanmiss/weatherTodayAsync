const key = 'rlAin7pJor2xqu4OQ2WrVAb3UVFQFRzI';


//get weather information:
const getWeather = async (locationKey) => {

    const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${locationKey}?apikey=${key}`;

    const response = await fetch(baseUrl + query);
    const data = await response.json();

    // console.log(data);
    return data[0];

};

//get city information:
const getCity = async (city) => {

    const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(baseUrl + query);
    const data = await response.json();

    //console.log(data[0]);
    return data[0];

}

// getCity()
//     .then(data => {
//         return getWeather(data.Key);
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err));

// getWeather('328328');