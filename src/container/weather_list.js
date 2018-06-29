import React,{Component} from 'react';
import {connect} from 'react-redux';
class WeatherList extends Component
{   
    getList(cityName)
    {   const name=cityName.city.name;
        return (
            <tr key={name}>
            <td>{name}</td>
            </tr>
        )


    }
    render()
    {   
         return (
            <div>
                <table className="table table-hover">

                <thead>
                   <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                   
                   </thead>
                   <tbody>                    
                   {this.props.weather.map(this.getList)}
                   </tbody>
                    
                </table>
            </div>
        );

    }
}
function mapStateToProps({ weather }) {
    
    return { weather };
  }
export default connect(mapStateToProps)(WeatherList);