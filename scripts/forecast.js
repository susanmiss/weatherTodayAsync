const key = 'rlAin7pJor2xqu4OQ2WrVAb3UVFQFRzI';


//get weather information:
const getWeather = async (locationKey) => {

    const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${locationKey}?apikey=${key}`;

    const response = await fetch(baseUrl + query);
    const data = await response.json();

    return data[0];

};

//get city information:
const getCity = async (city) => {

    const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(baseUrl + query);
    const data = await response.json();

    return data[0];
}
