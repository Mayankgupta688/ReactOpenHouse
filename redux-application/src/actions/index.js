import axios from "axios";

export function addEmployeeList(employeeList) {
    debugger;
    return {
        type: "ADD_EMPLOYEE_LIST",
        payload: employeeList
    }
}

export function removeEmployee(employeeId) {
    debugger;
    return {
        type: "REMOVE_EMPLOYEE",
        payload: employeeId
    }
}


export function loadEmployeeData() {
    return function(dispatch) {
        return axios.get('https://5a530e1477e1d20012fa066a.mockapi.io/employeedata').then((res) => {
            dispatch(addEmployeeList(res.data))
        })
    }
}