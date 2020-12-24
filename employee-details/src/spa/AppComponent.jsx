import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { BrowserRouter, Route, Link } from "react-router-dom"


export default function AppComponent() {
    return (
        <BrowserRouter>
            <HeaderComponent></HeaderComponent>
            <nav>

                <Link style={{"marginRight": "10px"}} to="/home">Home</Link>
                <Link style={{"marginRight": "10px"}} to="/help">Help</Link>
                <Link style={{"marginRight": "10px"}} to="/about">About</Link>
            </nav>
            <div style={{"border": "1px solid grey", "padding": "10px", "margin": "10px", "height": "300px", "overflow": "auto"}}>
                <Route exact path="/" component={HomeComponent} ></Route>
                <Route exact path="/home" render={(props) => {
                    var isAuthorized = false;
                    if(isAuthorized) {
                        return <HomeComponent {...props}></HomeComponent>
                    } else {
                        return <UnAuthorized></UnAuthorized>
                    }
                }}></Route>
                <Route exact path="/help/:id" component={HelpComponent} ></Route>
                <Route exact path="/about" component={AboutComponent} ></Route>
            </div>

            <FooterComponent></FooterComponent>
        </BrowserRouter>
    )
}

function UnAuthorized() {
    return <h1>Cannot Access....</h1>
}

function HomeComponent(props) {
    debugger;
    var [employees, setEmployees] = useState([]);
    useEffect(() => {
        axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/employeedata").then((res) => {
            setEmployees(res.data)
        })
    }, []);

    function redirectToHelpWithEmployeeDetails(employeeId) {
        props.history.push("/help/" + employeeId)
    }

    return (
        <div>
            {employees.map(emp => {
                return (
                    <>
                        <h1>Employee Name: {emp.name}</h1>
                        <input type="button" value="View Details" onClick={() => redirectToHelpWithEmployeeDetails(emp.id)} />
                    </>
                )
            })}
        </div>
    )
}

function HelpComponent(props) {
    var [empDetails, setEmpDetails] = useState({});
    useEffect(() => {
        axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/employeedata/" + props.match.params.id).then((res) => {
            setEmpDetails(res.data);
        })
    }, [])
    return (
        <>
            <h1>Employee Name: {empDetails.name}</h1>
            <h2>Employee Id: {empDetails.id}</h2>
            <input type="button" value="Back" onClick={props.history.goBack} />
        </>
    )
}

function AboutComponent() {
    return <h1>This is About Component Container</h1>
}

function HeaderComponent() {
    return <h1>This is Header from Component</h1>
}

function FooterComponent() {
    return <h3>This is Footer from Component...</h3>
}