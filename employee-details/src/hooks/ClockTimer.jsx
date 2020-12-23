import React , {useState, useEffect} from "react";
import axios from "axios";

export default function ClockTimer() {
    var [timer, setTimer] = useState(`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`);
    var [userList, setUserList] = useState([]);

    useEffect(() => {
        setInterval(() => {
            setTimer(`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`);
        }, 1000);

        axios.get('http://localhost:4000/employeeList').then((response) => {
            debugger;    

            setUserList(response.data.map((emp) => {
                return {
                    "userName": emp.name,
                    "userId": emp.id
                }
            }));
        });
    }, []);

    function addEmployeeData() {
        debugger
        axios.post("http://localhost:4000/employeeList", {
            "id":"102",
            "createdAt":"2019-07-11T07:25:10.284Z",
            "name":"Mayank Bahringer",
            "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/alexandermayes/128.jpg"
        }).then((res) => {
            console.dir(res)
        })
    }

    function deleteEmployee(empId) {
        axios.delete("http://localhost:4000/employeeList/" + empId).then((res) => {
            axios.get('http://localhost:4000/employeeList').then((response) => {
                setUserList(response.data.map((emp) => {
                    return {
                        "userName": emp.name,
                        "userId": emp.id
                    }
                }));
            });
        })
    }

    return (
        <div>
            <h1>Current Time: {timer}</h1>

            {userList.map((emp) => {
                return (
                    <div>
                        <h1>{emp.userName}</h1>
                        <input type="button" value={"Delete " + emp.userName} onClick={() => deleteEmployee(emp.userId)}/>
                    </div>
                )
            })}

            <input type="button" onClick={addEmployeeData} value="Add employee" />
        </div>
    )
}