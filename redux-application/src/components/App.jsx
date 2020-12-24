import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import * as actions from "../actions/index";

class App extends React.Component {
    userList = [];


    deleteEmployeeData = (empId) => {

        axios.delete('http://localhost:4000/employeeList/' + empId).then((res) => {
            if(res.status === 200) {
                this.props.removeEmployee(empId)
            }
        }, () => {
            alert("deletion Failed...");
        })
    }

    render() {
        debugger;
        return (
            <div>
                {this.props.userList.map((emp => {
                    return (
                        <div>
                            <h1>Employee Name is: {emp.name}</h1>
                            <input type="button" value={"Delete " + emp.name} onClick={() => this.deleteEmployeeData(emp.id)} /><hr/>
                        </div>
                    )
                }))}

                <input type="button" value="Add Employee" onClick={this.addUserList} /><hr/>
                
            </div>
        )
    }

    addUserList = () => {
        debugger;
        this.props.addEmployeeList([
            {name: "Mayank", age: 20},
            {name: "Anshul", age: 20}
        ])
    }
}

function mapStateToProps(state) {
    return {
       userList: state.employees,
       flights: state.flights
    }
}

export default connect(mapStateToProps, actions)(App)

