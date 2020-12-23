import React from "react";

export default function ContentComponent(props) {
    return (
        <div>
            <h1>User Name is: {props.employee.userName}</h1>
            <h2>User Age is: {props.employee.userAge}</h2>
            <h3>User Designation is: {props.employee.userDesignation}</h3>
            <h4>User Salary is: {props.employee.userSalary}</h4><hr/>
        </div>
    )
}