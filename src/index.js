import style from './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import App from './components/App';
// import Routing from './components/Routing';


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




