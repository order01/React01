import React from 'react'
import '../App.css';

class user extends React.Component{
    constructor(){
        super()
        this.state ={
          name:"sala"
        }
    }
    click() {
        if(1 ==1){
            alert(1111)
        }
    }
    render() {
        function formatName(user) {
            return user.firstName + ' ' + user.lastName;
        }

        const user = {
            firstName: '李上宏',
            lastName: '小红'
        };

        const element = (
            <h1>
                Hello, {formatName(user)}!
            </h1>
        );
        const element2 = (
            <div className={"input"} name="li" onClick={this.click.bind(this)}>{this.props.name}</div>
        )
        function getGreeting(user) {
            if (user) {
                return <h1>Hello, {formatName(user)}!</h1>;
            }
            return <h1>Hello, Stranger.</h1>;
        }
        // return element
        // return getGreeting(user)
        return element2
    }
}
/*
const user = ()=>{
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    const user = {
        firstName: '李上宏',
        lastName: '小红'
    };

    const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);
    return element
}*/
export {
    user
}