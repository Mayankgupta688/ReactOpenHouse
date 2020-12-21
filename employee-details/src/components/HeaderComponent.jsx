import React from "react";

export default function HeaderComponent(props) {

    // You cannot Modify the Props Data...
    //props.userName = "Random Name";
    return (
        <div>
            <h1>Welcome {props.userName} to TechnoFunnel</h1>
            <h2>This is React Session...</h2><hr/>
        </div>
    )
}