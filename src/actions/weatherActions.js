import {api_key, base_url} from "../utils/constants";

export const PENDING = 'PENDING';

export const PUT_WEATHER = 'PUT_WEATHER';

export const PUT_CITY = 'PUT_CITY';

export const putCity = cityForm => (
    {
        type: PUT_CITY,
        payload: cityForm
    })

export const pending = () => ({
    type: PENDING,
})

export const putWeather = weather =>({
    type: PUT_WEATHER,
    payload: weather
})

export const getWeather = () => {
    return (dispatch, getState) => {
        dispatch(pending())
        fetch(`${base_url}?q=${getState().cityForm}&appid=${api_key}&units=metric`)
        .then(response =>response.json())
        .then( data => dispatch(putWeather({
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                sunset: data.sys.sunset,
                pressure: data.main.pressure,
                message: ''
            })))
        .catch (e => dispatch(putWeather({message:'Enter correct city name'})))
    }
}