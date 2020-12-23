import React from 'react';

export default class EmployeeDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            age: 40,
            designation: "Trainer",
            employeeList: [
                { name: "Mayank", age: 10 },
                { name: "Anshul", age: 30 }
            ], userName: "Mayank Gupta"
        }
    }

    componentDidMount() {
        Axios.get('https://5a530e1477e1d20012fa066a.mockapi.io/employeedata').then((data) => {
            this.processData()
            this.setState()
        });
    }

    processData() {
        
    }

    componentDidUpdate() {
        // On Updated Complete...
    }

    updateUserName = (data) => {
        this.setState({
            ...this.state,
            userName: data
        })
    }

    render() {
        debugger;
        return (
            <div>
                <HeaderComponent updateUser={this.updateUserName} employeeList={this.state.employeeList} userName={this.state.userName}></HeaderComponent>
                
                {this.state.employeeList.map((employee) => {
                    return (
                        <DetailComponent userName={this.state.userName} employee={employee}></DetailComponent>
                    )
                })}

                <input type="button" value="Change User Name" onClick={this.updateUserName} />
            </div>
        )
    }
}

class HeaderComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            userCount: 0
        }

        setInterval(() => {
            this.setState({
                userCount: this.state.userCount + 1
            })
        }, 1000) 
    }

    render() {
        return (
            <div>
                <h1>Employee List for {this.props.userName}:</h1>
                <DisplayCount userCount={this.state.userCount}></DisplayCount>
                <input type="button" value="Update User" onClick={() => this.props.updateUser("An......")} /><hr/>
            </div>
        )
    }
}

function DisplayCount(props) {
    debugger;
    return <h1>Counter from Header is: {props.userCount}</h1>
}

function DetailComponent(props) {
    return (
        <div>
            <h1>User Name for {props.userName}: {props.employee.name}</h1>
            <h1>User Age: {props.employee.age}</h1><hr/>
        </div>
    )
}