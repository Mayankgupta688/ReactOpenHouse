import React from "react";

export default class SampleClass extends React.Component {
    currentTime = "";
    userName = "Mayank";
    constructor() {

        dataExtractor = fetchDataFromApi.getData()
        super();
        this.state = {
            dateNow: this.returnCurrentTime()
        }
        this.currentTime = this.returnCurrentTime();
    }

    componentDidMount() {
        dataExtractor.getData();
        setInterval(() => {
            this.setState({
                dateNow:  this.returnCurrentTime()
            })

            console.log(this.currentTime);
        }, 1000); 
    }

    shouldComponentUpdate(nextProps, nextState) {
        debugger;
        return true;
    }

    returnCurrentTime() {
        debugger;
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }

    render() {
        return (
            <div>
                <h1>Current Time: {this.currentTime}</h1>
                <h1>Current Time for {this.userName} from State: {this.state.dateNow}</h1>
            </div>
        )
    }
}