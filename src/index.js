import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/libs/animate.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware,compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from  './store/reducers/rootReducer'
//enable async operation and call external services/db from within the action creator.
//instead of returning an action, we will return a function, thus hulting the dispach operation
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


// const store = createStore(rootReducer,applyMiddleware(thunk),composeWithDevTools());
const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk),
        composeWithDevTools()
    ));

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
