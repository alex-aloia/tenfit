import React from 'react';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter} from 'react-router-redux';
import {Link} from 'react-router-dom';

import configureStore from '../configureStore';
import App from './App';
// import Routing from '../test/Routing';

const history = createHistory(),
      store   = configureStore(history);

console.log('STORE', store.getState());

history.listen((location, action) => {
    console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`);
    console.log(`The last navigation action was ${action}`);
});

const Root = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
                <App match={{params: {id: 0}, url: ''}}/>
            </div>
        </ConnectedRouter>
    </Provider>
);

export default Root;

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
        store.dispatch({type: 'LOAD_PAGE', content: json.content.rendered});
        // return json;
    });

req2();
