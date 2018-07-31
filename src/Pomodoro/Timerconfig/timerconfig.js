import React from 'react';

const TimerConfig = (props) => (
    <div className="row">
    <h3 className="text-primary">Set Timer</h3>

    <div className="form-group">
        <div className="col-3">
            <label htmlFor="hours">Hours</label>
        </div>
        <div className="col-9">
            <input id="hours" className="form-control" type="number" defaultValue={props.hours} />
        </div>
    </div>

    <div className="form-group">
        <div className="col-3">
            <label htmlFor="hours">Minutes</label>
        </div>
        <div className="col-9">
            <input id="minutes" className="form-control" type="number" defaultValue={props.minutes} />
        </div>
    </div>

    <div className="form-group">
        <div className="col-3">
            <label htmlFor="hours">Seconds</label>
        </div>
        <div className="col-9">
            <input id="seconds" className="form-control" type="number" defaultValue={props.seconds} />
        </div>
    </div>

</div>

);

export default TimerConfig;