import { combineReducers } from "redux";

import employeesReducer from "./employeesReducer";
import flightsReducer from "./flightsReducer";
import moviesReducer from "./moviesReducer";


debugger
const rootReducer = combineReducers({
    employees: employeesReducer,
    flights: flightsReducer,
    movies: moviesReducer
});

export default rootReducer;