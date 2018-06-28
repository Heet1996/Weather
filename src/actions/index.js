import axios from 'axios';
export const cityWeather="CITY_WEATHER";

const API_KEY="adea34372c15bc44103e66e5bab52811";
export default function getWeather(city)
{   const URL=`http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${API_KEY}`;
    const request=axios.get(URL);
    return {
        type:cityWeather,
        payload:request
    }
}
