import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {LOCATION_CHANGE} from 'react-router-redux';

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
            // console.log('action.content', action.content);
            return action.content;
        default:
            return state;
    }
};

const routeAction = (state = {}, action) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            console.log('ROUTE ACTION - payload', action.payload);
            return {state, ...action.payload};
        default:
            return state;
    }
};

const reducers = combineReducers({
    routeAction,
    maskVisibility,
    mainMenu,
    pageContent,
    routing
});

export default reducers;