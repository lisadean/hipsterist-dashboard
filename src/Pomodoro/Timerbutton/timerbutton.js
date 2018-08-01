import React, { Component } from 'react';
import * as timerStates from '../timerstates';


class TimerButton extends Component {
    constructor() {
        super();

        this.getButton = this.getButton.bind(this);
    }

    getButton() {
        if (this.props.timerState === timerStates.NOT_SET)
            return (<button className="btn btn-success" onClick={this.props.startTimer}>START</button>);

            if (this.props.timerState === timerStates.RUNNING)
            return (<button className="btn btn-danger" onClick={this.props.stopTimer}>STOP</button>);

            if (this.props.timerState === timerStates.COMPLETE)
            return (<button className="btn btn-info" onClick={this.props.stopTimer}>RESET</button>);
    }
    
    render() {
        
        return (
            <div className="row justify-content-center">
            {this.getButton()}
            </div>
        );
    }
}



export default TimerButton;