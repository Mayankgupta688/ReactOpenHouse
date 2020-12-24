export default function employeesReducer(state = [], action) {
    debugger;
    if(action.type === "ADD_EMPLOYEE_LIST") {
        return action.payload;
    } 

    if(action.type === "REMOVE_EMPLOYEE") {
        var empIdToDelete = action.payload;
        return state.filter((emp) => {
            return emp.id !== empIdToDelete
        })
    }

    return state;
}