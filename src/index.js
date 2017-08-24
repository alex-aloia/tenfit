import style from './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/App';
// import Routing from './components/Routing';


const maskVisibility = (state = 'SHOW', action) => {
    switch (action.type) {
        case 'SET_MASK_VISIBILITY':
            return action.visibility;
        default:
            return state;
    }
};

const mainMenu = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_MENU':
            // console.log('action.items', [...state, ...action.items]);
            
            return [...state, ...action.items];
        default:
            return state;
    }
};


const pageContent = (state = '', action) => {
    switch (action.type) {
        case 'LOAD_PAGE':
            console.log('action.content', action.content);

            return action.content;
        default:
            return state;
    }
};

const reducers = combineReducers({
    maskVisibility,
    mainMenu,
    pageContent
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log('STORE', store.getState());

let req = () => fetch('http://10.0.0.3:7777/wp-json/wp-api-menus/v2/menu-locations/top')
    .then(function (response) {
        return response.json();
        // return response;
    })
    .then(json => {
        // console.log('JSON', JSON.stringify( json, null, 2));
        console.log('JSON', json);

        store.dispatch({type: 'LOAD_MENU', items: json});
        // return json;
    });

req();



let req2 = () => fetch('http://10.0.0.3:7777/wp-json/wp/v2/pages/12')
    .then(function (response) {
        return response.json();
        // return response;
    })
    .then(json => {
        console.log('PAGE!!!!!!', JSON.stringify( json, null, 2));
        store.dispatch({type: 'LOAD_PAGE', content: json.content.rendered});
        // return json;
    });


req2();


import $ from 'jquery';
window.$ = $;
// import whatInput from 'what-input';

import Foundation from 'foundation-sites';

ReactDOM.render(
    //<Routing />,
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);




