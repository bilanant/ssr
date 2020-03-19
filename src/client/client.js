// Starting Point for client side application
// The goal of this file is to boot up location of our app in the browser
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { Provider } from 'react-redux';
import Routes from './Routes';

import reducers from './reducers';

const axiosInstance = axios.create({
    baseURL: '/api',

})

const store = createStore(
    reducers,
    window.INITIAL_STATE,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
); // Here the empty object denotes INITIAL_STATE now it's window.INITIAL_STATE

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
            {/* <Routes /> */}
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root"));
