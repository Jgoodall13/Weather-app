import React, {Component} from 'react';
import { connect } from 'react-redux';

import Headers from '../components/headers'
import Chart from '../components/chart'
import GoogleMap from '../components/googleMap'

class WeatherList extends Component {

    renderWeather = (data) => {
        const name = data.city.name
        const temps = data.list.map(weather => weather.main.temp)
        const pressures = data.list.map(weather => weather.main.pressure)
        const humidities = data.list.map(weather => weather.main.humidity)
        const { lon, lat } = data.city.coord;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3"><h2><GoogleMap lon={lon} lat={lat} /></h2></div>
                    <div className="col-md-3"><Chart data={temps} color="orange" unit='°F' /></div>
                    <div className="col-md-3"><Chart data={pressures} color="green" unit='hPa' /></div>
                    <div className="col-md-3"><Chart data={humidities} color="blue" unit='%' /></div>
                </div>
            </div>
        )
    }

    render(){
       return (
            <div>
            <Headers />
            {this.props.weather.map(this.renderWeather)}
            </div>
        )
    }
}

function mapStateToProps({weather}){
    return { weather }
}

export default connect(mapStateToProps, null)(WeatherList)