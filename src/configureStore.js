import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import reducers from './reducers/index';

const configureStore = (history) => {
    let middleware = [
        routerMiddleware(history)
    ];

    return createStore(
        reducers,
        // undefined,
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
};

export default configureStore;

