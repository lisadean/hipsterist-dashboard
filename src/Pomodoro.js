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
                        <div className="row">
                            <h2 className="text-primary">Set Timer</h2>
                            <div className="form-group">
                                <label htmlFor="hours">Hours</label>
                                <input id="hours" className="form-control" type="number" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Pomodoro;