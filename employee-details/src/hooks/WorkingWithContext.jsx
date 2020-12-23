import React, { useState } from "react";
import contentData from "./contextData";
import GrandChildren from "./GrandChildren";

export default function GrandParent() {
    var [user, setUser] = useState({
        surName: "Gupta",
        city: "Delhi"
    })

    function updateDetails(surName) {
        setUser({
            surName: surName,
            city: "Mumbai",
            designation: "Developer"
        })
    }

    function addDetails(propertyName, propertyValue) {
        var userModified = {
            ...user,
            [propertyName]: propertyValue
        }
        setUser(userModified)
    }

    return (
        <contentData.Provider value={{"user": user, "updateDetails": updateDetails, "addDetails": addDetails}}>
            <h1>This is Grand Parent Component</h1>
            <h2>Village Belonging: {user.city}</h2>
            <h2>SurName: {user.surName}</h2>
            <h2>Salary: {user.salary ? user.salary: "Not Assigned"}</h2>
            <hr></hr>
            <Parent></Parent>
        </contentData.Provider>
    )
}

function Parent() {
    var getContextData = React.useContext(contentData);
    return (
        <div>
            <h1>This is Parent Component {getContextData.user.surName}</h1>
            <h2>Salary: {getContextData.user.salary ? getContextData.user.salary: "Not Assigned"}</h2>
            <input type="button" onClick={getContextData.updateDetails} value="Update Details" />
            <hr></hr>
            <Children></Children>
        </div>
    )
}

function Children() {
    return (
        <div>
            <h1>This is Child Component</h1><hr/>
            <GrandChildren></GrandChildren>
        </div>
    )
}