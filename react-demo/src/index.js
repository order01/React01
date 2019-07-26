import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App,Test1,Test2} from './App';
import {listOrder} from  './componment/order'
import {style} from './componment/style'
import * as serviceWorker from './serviceWorker';
import { Redirect,HashRouter,Route } from 'react-router-dom'

ReactDOM.render(
    <HashRouter>
            <Route path='/index' component={Test2}/>
            <Route path='/' exact render={()=> (
                <Redirect to={"/index"}/>
            )}/>
            <Route path='/sss' component={listOrder} />
        {/*<Route path='/sss/:id' component={listOrder} />*/}
        <Route path='/style' component={style} />

    </HashRouter>,

    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
