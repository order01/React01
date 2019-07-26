import React from 'react'
import {Compontl} from './componts/com'
function MyCompont1(props) {
    return(
        <div className={"MyCompont1"}>
        <div>{props.name}</div>
    <Compontl name={props.name}/>
    </div>
    )
}
export {
    MyCompont1
}

