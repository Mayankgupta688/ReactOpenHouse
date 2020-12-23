import React from "react";
import contentData from "./contextData";

export default function GrandChildren() {
    var getContextData = React.useContext(contentData)

    function updateParent() {
        getContextData.updateDetails("Sharma");
    }

    function addProperty() {
        debugger;
        getContextData.addDetails("salary", "1000");
    }

    return (
        <div>
            <h1>This is Grand Child Component from another File</h1>
            <h2>Village Belonging: {getContextData.user.city}</h2>
            <h2>SurName: {getContextData.user.surName}</h2>
            <h2>SurName: {getContextData.user.designation ? getContextData.user.designation: "Not Mentioned"}</h2>
            <input type="button" onClick={updateParent} value="Update Details" />
            <input type="button" onClick={addProperty} value="Add Details" />
        </div>
    )
}