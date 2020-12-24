export default function flightsReducer(state = [], action) {
    debugger;
    if(action.type === "ADD_FLIGHTS") {
        return action.payload;
    }

    if(action.type === "ADD_EMPLOYEE_LIST") {
        return [
            {flightNo: "1", flightName: "Air India"},
            {flightNo: "2", flightName: "Air Asia"}
        ]
    }

    return state;
}