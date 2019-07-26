import React from 'react'
class Compontl extends React.Component {
    constructor() {
        super()
        this.state = {
            time: "",
            my:1
        }
    }
    UNSAFE_componentWillMount() {
        this.colock()
        this.setState({
            my:4
        })
        this.setState((prevState)=>({
            my: prevState.my + 10
        }))
    }
    componentWillUnmount() {
        clearTimeout(this.timeID)
    }

    fromDate(a){
        let abc = a.toString()
        if(abc.length < 2){
            abc = "0" + abc
        }
        return abc
    }
    colock() {
        let date = new Date()
        this.setState({
            time:date.getFullYear()+"年"+this.fromDate(date.getMonth())+"月"+this.fromDate(date.getDate())+"号  "+this.fromDate(date.getHours())+":"+this.fromDate(date.getMinutes())+":"+this.fromDate(date.getSeconds())
        })
        let that = this
        this.timeID = setTimeout(function () {
            that.colock()
        },1000)
    }
   render(){
       return(
           <div className={"Compontl"}>
               <h1>我是{this.props.name}的子组件啊</h1>
               <p>{this.state.time}</p>
               <p>{this.state.my}</p>
           </div>
       )
   }

}
export {
    Compontl
}