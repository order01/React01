import React from 'react'
import {Route,Link} from 'react-router-dom';

 class Order extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }
    render() {
      return (
          <div className="order">
              <Link to={{pathname:"/sss",search:"?name=3&age=4"}}>订单1</Link>
          </div>
      )
                  // <div className="order">
                  // <Link to={{pathname:"/sss/"+this.state.id}}>订单1</Link>
                  // </div>
    }
}
/*
function Order({match}) {
    return(
        <div className="order">
            <Link to={`${match.url}/order1`}>订单1</Link>
            <Link to={`${match.url}/order2`}>订单2</Link>
            <Link to={`${match.url}/order3`}>订单3</Link>
            <Route path="/:id=3" component={listOrder}/>
        </div>
    )
}*/
class listOrder extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }
    componentDidMount() {
        console.log(36987546554)
    }
    //{match}其实是props.match，参数{match}可以变成props
    // 如果是方法直接在方法加match参数，结果也是用match.parmas.name调用 路由匹配为path，其他为pathname
    //parmas 字符串 props.parmas获取，其他都是props.location获取
    //query 对象 刷新后不存在 非明文
    //state  对象 刷新后不存在 非明文
    //search ？name=3&age=4形式
    //this.props.history.push('路径')
    render() {
        return(
            <div className="my">
                {/*<p>{this.props.location.search.age == undefined?123:this.props.location.search.age/*      this.props.match.params.order    props.location.query.ge*!/</p>*/}
                <p>{this.props.location.search.age}</p>
                <p>name</p>
                <p>name</p>
                <p>name</p>
                <p>name</p>
            </div>
        )
    }
}
export {
    Order,
    listOrder
}