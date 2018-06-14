import React from 'react';

const Headers = () => {
    return (
        <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h3>City</h3>
                    </div>
                    <div className="col-md-3">
                        <h3>Temperature (K)</h3>
                    </div>
                    <div className="col-md-3">
                        <h3>Pressure (hPA)</h3>
                    </div>
                    <div className="col-md-3">
                        <h3>Humidity (%)</h3>
                    </div>
                </div>
            </div>
    )
}

export default Headers