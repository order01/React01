import React from 'react'
import '../App.css'
class style extends React.Component{
    constructor(){
        super()
    }
    render(){
        let myStyle = {fontSize:'50px',color:'yellow'}
        return (
            <div>
                <div style={myStyle}>123</div>
            </div>
        )
    }
}
export {style}