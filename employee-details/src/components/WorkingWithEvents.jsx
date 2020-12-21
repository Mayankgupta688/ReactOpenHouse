import React from "react";

export default function WorkingWithEvents() {

    function alertSalutation(event, data) {
        if(event) {
            var buttonReference = event.target;
            alert("Button Clicked have an Id: " + buttonReference.defaultValue);
        }
        alert("Data: " + data);
    }

    var otherFunctionArrow = (event) => {
        alertSalutation(event, "2")
    }

    function otherFunction(event) {
        alertSalutation(event, "2")
    }

    return (
        <div>
            <h1>Working with Events</h1>
            <input id="1" type="button" value="Add To Invoke Events" onClick={() => alertSalutation(null, "1")} /><br/><br/>
            <input id="2" type="button" value="Add To Invoke Other Events" onClick={otherFunctionArrow} /><br/><br/>
            <input id="3" type="button" value="Add To Invoke Third Events" onClick={otherFunction} /><br/><br/>
        </div>
    );
}