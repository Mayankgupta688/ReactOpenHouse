import React from "react";
import ReactDOM from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";

var client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
})

var queryData = gql`query {
    employeeList {
      name,
      id
    }
}`;

function HigherOrderComponentFunction(WrapperComponent) {
    return function App() {
        return (
            <ApolloProvider client={client}>
                <Query query={queryData}>
                    {({loading, data}) => {
                        return (
                            <div>
                                {!loading && (
                                    data.employeeList.map((employee) => {
                                        return <WrapperComponent employee={employee}></WrapperComponent>
                                    })
                                )}
                            </div>
                        )
                    }}
                </Query>
            </ApolloProvider>
        )
    }
}


function RenderData(props) {
    return (
        <div>
            <h4>{props.employee.name}</h4><hr/>
        </div>
    )
}

function RenderDataWithId(props) {
    return (
        <div>
            <h3>{props.employee.name}</h3>
            <h4>{props.employee.id}</h4><hr/>
        </div>
    )
}

var WrappedComponent = HigherOrderComponentFunction(RenderDataWithId);
var WrappedComponentOther = HigherOrderComponentFunction(RenderData);

ReactDOM.render(<WrappedComponent></WrappedComponent>, document.getElementById("root"))

var client1 = new ApolloClient({
    uri: "https://countries.trevorblades.com/"
})

var queryData1 = gql`query {
    countries {
      name
      code
    }
  }`;

export function AppData() {
    return (
        <ApolloProvider client={client1}>
            <Query query={queryData1}>
                {({loading, data}) => {
                    return (
                        <div>
                            {!loading && (
                                data.countries.map((countyry) => {
                                    return (
                                        <div>
                                        <h1>{countyry.name}</h1>
                                        <h2>{countyry.name}</h2><hr/>
                                        </div>
                                    )
                                })
                            )}
                        </div>
                    )
                }}
            </Query>
        </ApolloProvider>
    )
}