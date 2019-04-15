import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { MuiThemeProvider } from '@material-ui/core';
import activeTheme from './theme/theme';
import { Provider } from 'react-redux';
import { getStore } from './store';
export const client = new ApolloClient({
    uri: "http://localhost:2000/graphql"
});
ReactDOM.render(
    <Provider store={getStore()}>
        <ApolloProvider client={client}>
            <MuiThemeProvider theme={activeTheme}>
                <App />
            </MuiThemeProvider>

        </ApolloProvider>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
