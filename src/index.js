import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import { Home, AjaxCon, Memopad } from "./containers";

import './index.css';

ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path="/" component={ App }>
            <IndexRoute component={ Home } />
            <Route path="memopad" component={ Memopad } />
            <Route path="ajax" component={ AjaxCon } />
        </Route>
    </Router>,
    document.getElementById('root')
);
