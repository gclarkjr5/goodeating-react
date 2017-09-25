import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import goodEatingApp from './reducers'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import initialState from './initialState.json';
import store from './store'

// let store = createStore(goodEatingApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let storeInstance = store(initialState);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
