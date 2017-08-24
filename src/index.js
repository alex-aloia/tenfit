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
            console.log('action.items', [...state, ...action.items]);
            
            return [...state, ...action.items];
        default:
            return state;
    }
};


const pageContent = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_PAGE':
            console.log('action.items', [...state, action.items]);

            return action.content;
        default:
            return state;
    }
};

const reducers = combineReducers({
    maskVisibility,
    mainMenu,
    // pageContent
});

const store = createStore(
    // maskVisibility,
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log('STORE', store.getState());

// setTimeout(() => {
//     store.dispatch({type: 'SET_MASK_VISIBILITY', visibility: 'HIDE'});
//     console.log('STORE NEXT', store.getState());
//     console.log('toggled viz ');
// }, 3000);

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



// let req2 = () => fetch('http://10.0.0.3:7777/wp-json/wp/v2/pages/12')
//     .then(function (response) {
//         return response.json();
//         // return response;
//     })
//     .then(json => {
//         console.log('PAGE!!!!!!', JSON.stringify( json, null, 2));
//         store.dispatch({type: 'LOAD_PAGE', content: json});
//         // return json;
//     });
//
//
// req2();




import $ from 'jquery';
window.$ = $;
// import whatInput from 'what-input';


import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

// $(function () {
//     // $(document.getElementById('menu')).foundation();
//
//     let el = document.getElementById('menu'),
//         menu = new foundation.DropdownMenu(el);
// });

// $(document).foundation();

ReactDOM.render(
    //<Routing />,
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);




