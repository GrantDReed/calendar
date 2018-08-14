import React, { Component } from 'react';
import DayDisplay from './DayDisplay';

class CalendarDashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        {/*<ToggleableView />*/}
        <DayDisplay />
      </div>
    );
  }
}

export default CalendarDashboard;