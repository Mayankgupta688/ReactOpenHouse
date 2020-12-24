import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk"


import App from "./components/App";
import ConnectedComponent from "./components/OtherAppComponent";

import rootReducer from "./reducers/index";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import  { loadEmployeeData } from "./actions/index";

var store = applyMiddleware(thunk)(createStore)(rootReducer)



store.dispatch(loadEmployeeData());

ReactDOM.render((
    <Provider store={store}>
        <ConnectedComponent></ConnectedComponent>
        <App></App>
    </Provider>
), document.getElementById("root"))