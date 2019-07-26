import React from 'react'

export class proudts extends React.Component{
    constructor(){
        super()
        this.state ={
           isLogin : false,
            name:"登录"
        }
    }
     login(){
        this.setState({
            isLogin : this.state.isLogin? false : true,
            name : this.state.name =="登录"? "退出登录":"登录"
        })
         console.log(this.state.name)
    }

    /*return renderTem()*/
    render() {
        let that = this
        const My = <MyMess/>
       function renderTem() {
            if (that.state.isLogin == false){
                return <Template1 name={"我还没有登录的"}/>
            }
            else {
                return <Template2 name={"我已经登录的"}/>
            }
        }
        return(
            <div>
                <h1>我是所有产品</h1>
                <div>还有一大堆信息，下面就是组件了</div>
                <div>{renderTem()}</div>
                {My}
                <button onClick={this.login.bind(this)}>{this.state.name}</button>
            </div>
        )
    }
}
class Template1 extends React.Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }
    render(){
        return(
            <div>我是组1--------{this.props.name}</div>

        )
    }
}

class Template2 extends React.Component{
    constructor(){
        super()
        this.state ={

        }
    }
    render(){
        return(
            <div>我是组2---------{this.props.name}</div>
        )
    }
}
class MyMess extends React.Component{
    constructor(){
        super()
        this.state ={

        }
    }
    render(){
        return(
            <div>我不是谁的组件，我是用户信息</div>
        )
    }
}