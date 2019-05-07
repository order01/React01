import  React from 'react'

let indeClass = {height:'300px',background:'blue',fontSize:'30px'}
class index extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render() {
        return(
        <div style="indeClassn" className="myIndex">我是首页啊</div>
        )
    }
}
export {
    index
}