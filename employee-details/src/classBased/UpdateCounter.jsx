import React from 'react';

export default class UpdateCounter extends React.Component {
    constructor() {
        super();
        this.userName = 'Mayank';
        this.state = {
            counter: 0,
            currentTime: new Date().toTimeString()
        }
    }

    updateCounter = () => {
        this.setState({
            counter: this.state.counter + 1,
            currentTime: new Date().toTimeString()
        })
    }

    updateCounterWithoutSetState = () => {
        // Non Recommended Way to Update Data
        // ** setState should be used Always....

        this.state.counter = 10;
        this.forceUpdate();
        this.state.counter = 40;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {  
        debugger;
        return (
            <div>
                <h1>Counter Value for {this.userName} is: {this.state.counter} {this.state.currentTime}</h1>
                <input type="button" value="Update Counter" onClick={this.updateCounter} /><br/><br/>
                <input type="button" value="Update Counter without Set State" onClick={this.updateCounterWithoutSetState} />
            </div>
        )
    }
}