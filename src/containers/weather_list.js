import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map( weather => weather.main.temp );
        const pressure = cityData.list.map( weather => weather.main.pressure );
        const humidity = cityData.list.map( weather => weather.main.humidity );


        return (
            <tr key={ name }>
                <td>{ cityData.city.name }</td>
                <td><Chart data={temps} color='orange' units='K' /> </td>
                <td><Chart data={pressure} color='red' units='hPa' /> </td>
                <td><Chart data={humidity} color='blue' units='%' /> </td>
            </tr>
        );
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(K)</th>
                        <th>Pressure__(hPa)</th>
                        <th>Humidity____(%)</th>
                    </tr>
                    <code>Search for: cities, states, country </code>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({ weather }) => { // Destructuring syntax state { weather }
    return {
        weather
    }
    //  { weather : weather }
}

export default connect(mapStateToProps)(WeatherList);

