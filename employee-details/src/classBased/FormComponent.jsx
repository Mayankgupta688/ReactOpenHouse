import axios from 'axios';
import React from 'react';

export default class FormComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            userAge: 0,
            userDesignation: "",
            userSalary: 0
        }
    }

    changeUserData = (event) => {
        this.setState({
            ...this.state,
            ["user" + event.target.id]: event.target.value
        })
    }

    postData = () => {
        axios.post("", this.state).then((res) => {
            
        })
    }

    render() {
        return (
            <>
                Enter Name        <input type="text" id="Name" onChange={this.changeUserData}/><br/><br/>
                Enter Age         <input type="text" id="Age" onChange={this.changeUserData}/><br/><br/>
                Enter Designation <input type="text" id="Designation" onChange={this.changeUserData}/><br/><br/>
                Enter Salary      <input type="text" id="Salary" onChange={this.changeUserData}/><br/><br/>
                <input type="button" value="Submit" onClick={this.postData} /><hr/>

                <h1>user Name is: {this.state.userName}</h1>
                <h1>user Name is: {this.state.userAge}</h1>
                <h1>user Name is: {this.state.userDesignation}</h1>
                <h1>user Name is: {this.state.userSalary}</h1>
            </>
        )
    }
}