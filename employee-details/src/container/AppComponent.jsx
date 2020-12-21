import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import ContentComponent from "../components/ContentComponent";

export default function AppComponent() {
    var name = "Aniket Gupta";

    var employeeData = {
        userName: "Mayank",
        userAge: 30,
        userDesignation: "developer",
        userSalary: 1
    }

    setTimeout(() => {
        name = "Mayank Gupta";
        employeeData.userName = "Anshul Gupta"
        console.log(name);
    }, 5000);

    return (
        <div>
            <HeaderComponent userName={name} userAge="30"></HeaderComponent>
            <ContentComponent employee={employeeData}></ContentComponent>
            <FooterComponent></FooterComponent>
        </div>
    )
}