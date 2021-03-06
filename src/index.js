import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import { Home, AjaxCon, MemoPad } from "./containers";
import reducers from '../src/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Promise from 'promise-polyfill';

import './index.css';





if(!window.Promise){
    window.Promise = Promise;
}

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router history={ browserHistory }>
            <Route path="/" component={ App }>
                <IndexRoute component={ Home } />
                <Route path="memopad" component={ MemoPad } />
                <Route path="ajax" component={ AjaxCon } />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
