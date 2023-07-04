import {PENDING, PUT_CITY, PUT_WEATHER} from "../actions/weatherActions";

const initialState ={
    city: '',
    country: '',
    temp: '',
    sunset: '',
    pressure: '',
    message: 'Enter city name'
}
export const weatherReducer = (state = initialState, action) =>{
    switch (action.type){
        case PENDING:
            return {...state, message: 'Pending'}

        case PUT_WEATHER:
            return action.payload

        case PUT_CITY:
            return {...state, cityForm: action.payload}

        default: return state;
    }

}