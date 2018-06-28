import React, { Component } from 'react';
import Search from '../container/search';
import { WeatherList } from '../container/weather_list';
export default class App extends Component {
  render() {
    return (
      <div>
      <Search/>
      <WeatherList></WeatherList>
      </div>
    );
  }
}
