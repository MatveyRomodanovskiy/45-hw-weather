import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {putCity} from "../actions/weatherActions";

const Weather = () => {
const wheather = useSelector(state => state);


    return (
        <div className={'infoWeath'}>{
            !wheather.message && <div>
                <p>Location: {wheather.country}, {wheather.city}</p>
                <p>Temp: {wheather.temp}</p>
                <p>Pressure: {wheather.pressure}</p>
                <p>Sunset: {new Date(wheather.sunset * 1000).toLocaleTimeString()}</p>
            </div>
        }
        <p>{wheather.message}</p>
        </div>
    );
};

export default Weather;