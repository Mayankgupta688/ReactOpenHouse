import React, { useState, useEffect } from "react";

export default function UseEffectHooks() {
    debugger;
    var [timer, setTimer] = useState(new Date().toTimeString());
    var [name, setName] = useState("Anshul");

    useEffect(() => {
        console.log("Component Initially Rendered...")
    }, []);

    useEffect(() => {
        console.log("Component Initially Rendered...")
    }, [timer]);

    useEffect(() => {
        console.log("Component Initially Rendered...")
    }, [name]);

    useEffect(() => {
        console.log("Component Initially Rendered...")
    }, [name, timer]);

    function updateTime() {
        setTimer(new Date().toTimeString())
    }

    function updateName() {
        setName("Mayank")
    }

    debugger;
    return (
        <div>
            <h1>Current Timer is: {timer}</h1>
            <input type="button" onClick={updateTime} value="Update Time" /><hr/><br/>

            <h1>Current Name is: {name}</h1>
            <input type="button" onClick={updateName} value="Update Name" /><hr/>
        </div>
    )
}