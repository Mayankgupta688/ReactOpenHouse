import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

function OtherAppComponent(props) {
    return (
        <div>
            <h1>Some Flight Info:</h1>
            {props.flights.map((flight) => {
                return <h2>Flight Name: {flight.flightName}</h2>
            })}
        </div>
    )
}

function mapStateToProps(state) {
    return {
       flights: state.flights
    }
}

const ConnectedComponent = connect(mapStateToProps, actions)(OtherAppComponent)
export default ConnectedComponent;