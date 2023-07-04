import {weatherReducer} from "../reducers/wheatherReducer";
import {applyMiddleware, legacy_createStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";


export const store = legacy_createStore(weatherReducer, applyMiddleware(thunk, logger))