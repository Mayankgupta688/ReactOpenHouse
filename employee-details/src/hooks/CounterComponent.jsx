import React, { useState } from "react";

export default function CounterComponent() {
    var userCounter = 0;

    var [counter, setCounter] = useState(1000);
    var [user, setUser] = useState({
        name: "Mayank",
        profession: "Developer",
        age: 10
    });

    function updateCounter() {
        setCounter(counter => counter + 1);
        userCounter = userCounter + 1;
    }

    function updateUser() {
        setUser({
            ...user,
            name: "Anshul...",
            age: 100
        })
    }

    return (
        <div>
            <h1>Counter Value is: {counter}</h1>
            <h3>User Counter: {userCounter}</h3>
            <input type="button" value="Update Counter" onClick={updateCounter} /><hr/><br/>


            User Name: <label>{user.name}</label><br/><br/>
            User Age:  <label>{user.age}</label><br/><br/>
            User Designation:  <label>{user.profession}</label><br/><br/>
            <input type="button" value="Update Counter" onClick={updateUser} /><hr/>
        </div>
    )
}