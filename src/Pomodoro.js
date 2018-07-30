import React from 'react';



class Pomodoro extends React.Component {
    render() {
        return(
            <div className="panel panel-default app-content">
                <div className="panel-body">
                    <div className="container-fluid">
                        <div className="row">
                            <h2>
                                Tempo Scaduto!
                            </h2>
                        </div>
                        <div className="row">
                            <h2 className="text-center">00:00:00</h2>
                        </div>
                        <div className="row justify-content-center">
                            <button className="btn btn-success">Start</button>
                        </div>

                        <div className="row">
                            <h3 className="text-primary">Set Timer</h3>

                            <div className="form-group">
                                <div className="col-3">
                                    <label htmlFor="hours">Hours</label>
                                </div>
                                <div className="col-9">
                                    <input id="hours" className="form-control" type="number" />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-3">
                                    <label htmlFor="hours">Minutes</label>
                                </div>
                                <div className="col-9">
                                    <input id="minutes" className="form-control" type="number" />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-3">
                                    <label htmlFor="hours">Seconds</label>
                                </div>
                                <div className="col-9">
                                    <input id="seconds" className="form-control" type="number" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Pomodoro;