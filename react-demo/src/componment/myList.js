import React from 'react'

export class MyList extends React.Component{
    constructor(){
        super()
        this.state ={

        }
    }
  myAlert(e){
        alert(e.target.id)
  }
    render() {
        const list = [1,2,3,4]
        const DoubleList =list.map((list,index)=><li key={index} id={index} onClick={this.myAlert.bind(this)}>{list}</li>)
        let myClass1 = {background:'red',padding:'10px'}
        function myDiv(){
            if(1 == 1){
                return(<div>456888</div>)
            }
        }
        return(
            <div>
                {myDiv()}
                <ul style={myClass1}>
                {DoubleList}
                </ul>
            </div>
        )
    }
}