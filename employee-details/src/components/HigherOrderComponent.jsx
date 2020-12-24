import React, { useEffect, useState } from "react";
import axios from "axios";

function ShowUserDetails(props) {
    return (
        <>
            {props.empList.map(emp => {
                return <h1>{emp.name}</h1>
            })}
        </>
    )
}

function ShowUserDetailsToDirector(props) {
    return (
        <>
            {props.empList.map(emp => {
                return (
                    <>
                        <h1>{emp.name}</h1>
                        <h2>{emp.id}</h2>
                    </>
                )
            })}
        </>
    )
}

function ShowAdvancedUserDetails(props) {
    return (
        <>
            {props.empList.map(emp => {
                return (
                    <>
                        <h1>{emp.name}</h1>
                        <h1>{emp.id}</h1>
                        <h1>{emp.createdAt}</h1>
                        <h1>{emp.avatar}</h1>
                    </>
                )
            })}
        </>
    )
}

function higherOrderComponent(WrapperComponent) {
    return function ShowAdvancedUserDetails() {
        var [empList, setEmpList] = useState([])
        useEffect(() => {
            axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/employeedata").then((res) => {
                setEmpList(res.data);
            })
        })
    
        return <WrapperComponent empList={empList}></WrapperComponent>
    }
}


export var ShowUserDetailsComponent = higherOrderComponent(ShowUserDetails)
export var ShowAdvancedUserDetailsComponent = higherOrderComponent(ShowAdvancedUserDetails)
export var ShowUserDetailsToDirectorComponent = higherOrderComponent(ShowUserDetailsToDirector)