import {createStore} from 'redux';
import reducers from './reducers/index';


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

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log('STORE', store.getState());

export default store;