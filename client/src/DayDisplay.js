import React, { Component } from 'react';
import HourDisplay from './HourDisplay';

class DayDisplay extends Component {
  render() {
    return (
      <div className="day">
        <HourDisplay />
      </div>
    );
  }
}

export default DayDisplay;