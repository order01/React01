import React from 'react'
export class Message extends React.Component{
    constructor(props){
        super(props)
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }
    render() {
        return(
        <div>
            <h1>这是消息通知</h1>
            {this.props.messageList.length>0 && <span>{this.props.messageList.length}条消息通知</span>}
            <WarningBanner warn={this.state.showWarning}/>
            <button onClick={this.handleToggleClick}>
                {this.state.showWarning ? 'Hide' : 'Show'}
            </button>
        </div>
        )
    }
}



function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}