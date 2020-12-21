import React from "react";

export default function EmployeeListDynamic() {

    var employeeList = [
        { id: 10, name: "Mayank Gupta" },
        { id: 15, name: "Anshul Gupta   " },
        { id: 3, name: "Aniket" },
        { id: 30, name: "Ankit" }
    ];

    function addEmployeeData() {
        employeeList.push({
            id: 100,
            name: "Meha"
        })
    }

    return (
        <div>
            { employeeList.map((emp) => {
                return (
                    <EmployeeDetails employee={emp}></EmployeeDetails>
                )
            })}

            <input type="button" value="Add Employee" onClick={addEmployeeData} />
        </div>
    )
}

function EmployeeDetails(props) {
    return (
        <div>
            <h2>Employee Name is: {props.employee.name}</h2>
            <h3>Employee Id is: {props.employee.id}</h3><hr/>
        </div>
    )
}

