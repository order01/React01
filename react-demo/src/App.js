import React from 'react';
import {Redirect,Route,Link,Switch} from 'react-router-dom';
import logo from './logo.svg';
import {index} from "./componment/index"
import {Order} from "./componment/order"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
class Test2 extends React.Component{
        constructor(){
            super()
            this.state={

            }
        }
        render() {
            return(
                <div className="app">
                    <Link to="/">首页</Link>
                    <Link to="/order">订单</Link>
                    <Link to="/products">产品</Link>
                    <Link to="/user">用户</Link>
                    <Link to="/admin">登录</Link>

                    {/* 不加switch的后果就是一旦有与之匹配的路由就会显示 */}
                    {/* <Route exact path="/" component={Home} />
                <Route path="/order" component={Order} />
                <Route path="/user" component={User} />
                <Route path="/:id" render = {()=> (<p>不加switch的后果</p>)}/> */}

                     <Switch>
                    <Route exact path="/" component={index} />
                    <Route path="/order" component={Order} />

                </Switch>

                    {/* 将PrivateRoute组件添加到现有路由 */}

                </div>

            )
        }
}
function Test1() {
        return(<div>123</div>)
}

export {
        App,
        Test1,
        Test2
}
