import React from "react";

export default function ListComponent() {

    var employeeList = [
        { id: 10, name: "Mayank" },
        { id: 15, name: "Anshul" },
        { id: 3, name: "Aniket" },
        { id: 30, name: "Ankit" }
    ];

    employeeList = employeeList.sort((a, b) => {
        return a.id < b.id? 1: -1
    })

    function findCount() {
        return employeeList.filter((emp) => {
            return emp.id > 10
        }).length;
    }

    function getRenderData() {
        if(employeeList.length > 10) {
            return <h1>Length is Greater than 10</h1>
        } else {
            return <h1>Length is Smaller than 10</h1>
        }
    }

    return (
        <div>
            <h1>Employee List: </h1><hr/>
            { getRenderData() }
                {findCount() > 0 && (
                    <div>
                    { employeeList.map((employee) => {
                            return (
                                <div>
                                { (employee.id >= 10 && employee.id < 30) &&  (
                                    <div>
                                        <h2>Employee Name is: {employee.name + " Gupta"}</h2>
                                        <h3>Employee Id is: {employee.id + " Sample"}</h3><hr/>
                                    </div>
                                )}
                                </div>
                            )
                        })
                    }
                </div>
            )
            } 

            {findCount() === 0 && (
                <h1>No Employee</h1>
            )
            }
        </div>
    )
}