import  React from 'react'
import '../App.css'
import logo from '../logo.svg';
let indeClass = {height:'300px',fontSize:'30px'}
class index extends React.Component{
    constructor(){
        super()
        this.state={
          userName:"",
          passWord:""
        }
    }
    login(){
        console.log(this.state.userName+"----"+this.state.passWord)
    }
    chageUser(e){
        this.setState({
            userName:e.target.value,
        })
    }
    chagePswd(e){
        // this.setState({
        //     passWord:e.target.num
        // })
        console.log(e.target.dataset.num)
        //   alert(e.target.num)
    }
    render() {
        return(
        <div style={indeClass} className="myIndex">
            <div>可以登录的</div>
            <img className={"image"}  src={logo}/>
            <input type={"text"}  onChange={this.chageUser.bind(this)} placeholder={"请输入账号"}/>
            <input type={"password"}  data-num="23" onChange={this.chagePswd.bind(this)} placeholder={"请输入密码"}/>
            <div>{this.state.userName+'ssss'}</div>
            <div>{this.state.passWord}</div>
            <div>{this.props.match.url}</div>
            <div>
                <button onClick={this.login.bind(this)} className={"button"}>登录</button>
            </div>
        </div>
        )
    }
}
export {
    index
}