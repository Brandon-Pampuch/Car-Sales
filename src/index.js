import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';
import { createStore } from 'redux';
import { carReducer } from './reducers/index';


import { Provider } from 'react-redux';

const store = createStore(carReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , rootElement);
