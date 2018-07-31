import React from 'react';
import moment from 'moment';
import TimerHeader from './Timerheader/timerheader';
import TimerDisplay from './Timerdisplay/timerdisplay';
import TimerButton from './Timerbutton/timerbutton';
import TimerConfig from './Timerconfig/timerconfig';


class Pomodoro extends React.Component {
    constructor() {
        super();

        this.state = {
            currentTime: moment.duration(25, 'minutes'),
            baseTime: moment.duration(25, 'minutes')
        }
    }


    
    render() {
        return(
            <div className="panel panel-default app-content">
                <div className="panel-body">
                    <div className="container-fluid">
                        <TimerHeader />
                        <TimerDisplay currentTime={this.state.currentTime} />
                        <TimerButton />
                        <TimerConfig 
                            hours={this.state.hours} 
                            minutes={this.state.minutes} 
                            seconds={this.state.seconds}
                        />
                    </div>
                </div>
            </div>
        );
    }
}



export default Pomodoro;