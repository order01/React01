import React from 'react';
import {Redirect,Route,Link,Switch} from 'react-router-dom';
import logo from './logo.svg';
import {index} from "./componment/index"
import {Order} from "./componment/order"
import {proudts} from "./componment/proudts"
import {user} from "./componment/users"
import {MyCompont1} from "./componment/compont"
import './App.css';
import {Message} from "./componment/message";
import {MyList} from "./componment/myList";

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
                messageList:["dddd","sssss","vvvv"]
            }
        }
        render() {
            return(
                <div className="app">
                    <Link to="index">首页</Link>
                    <Link to="order">订单</Link>
                    <Link to="proudts">产品</Link>
                    <Link to={`${this.props.match.url}/my`}>用户</Link>
                    <Link to={`${this.props.match.url}/fin`}>登录</Link>
                    <Link to={this.props.match.url+"/message"}>消息通知</Link>
                    <Link to={`${this.props.match.url}/list`}>列表</Link>
                    {/* 不加switch的后果就是一旦有与之匹配的路由就会显示 */}
                    {/* <Route exact path="/" component={Home} />
                <Route path="/order" component={Order} />s
                <Route path="/user" component={User} />
                <Route path="/:id" render = {()=> (<p>不加switch的后果</p>)}/> */}

                     <Switch>
                    <Route path={`${this.props.match.url}/index`} component={index} />
                    <Route path={`${this.props.match.url}/order`} component={Order} />
                    <Route path={`${this.props.match.url}/proudts`} component={proudts}/>
                    <Route path={`${this.props.match.url}/my`} component={user}/>
                    <Route path={`${this.props.match.url}/fin`} render={()=>(<MyCompont1 name = "李上宏"/>)}/>{/*父向子传值*/}
                    <Route path={`${this.props.match.url}/message`} render={()=>(<Message  messageList={this.state.messageList}/>)}/>{/*父向子传值*/}
                    <Route path={`${this.props.match.url}/list`} render={()=>(<MyList />)}/>{/*父向子传值*/}
                    <Redirect from={`${this.props.match.url}/`} to={`${this.props.match.url}/index`}></Redirect>
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
