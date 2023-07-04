import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getWeather, putCity} from "../actions/weatherActions";

const FormManaged = () => {
    const dispatch = useDispatch();
    const city = useSelector(state => state.cityForm)

    const handleChange = e => {
        dispatch(putCity(e.target.value));
    }
    const handleClick =() =>{
        dispatch(getWeather());
        dispatch(putCity(''));
    }

    return (
        <div>
            <input
                type={'text'}
                placeholder={'City name'}
                onChange={handleChange}
                value={city}
            />
            <button onClick={handleClick}>Get weather</button>
        </div>
    );

}

export default FormManaged;