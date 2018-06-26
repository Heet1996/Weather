import React,{Component} from 'react';
export class WeatherList extends Component
{
    render()
    {
        return (
            <div>
                <table className="table table-hover">
                    <th>
                        <tr>City</tr>
                        <tr>Temperature</tr>
                        <tr>Pressure</tr>
                        <tr>Humidity</tr>
                    </th>
                    <td>
                    </td>
                </table>
            </div>
        );

    }
}