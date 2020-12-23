import React, { useState, useEffect } from "react";
import axios from "axios";


var contentData = React.createContext();

export default function ContextList() {
    var [empList, setEmpList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/employeeList").then((res) => {
            setTimeout(() => {
                setEmpList(res.data)
            }, 5000)
        })
    }, [])

    return (
        <contentData.Provider value={empList}>
            <ShowList></ShowList>
        </contentData.Provider>
    )
}


function ShowList() {
    var empListData = React.useContext(contentData)
    return (
        <div>
            <h1>This is the Employee List:</h1>
            {empListData.map((emp) => {
                return <h1>{emp.name}</h1>
            })}
        </div>
    )
}