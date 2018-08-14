import React, { Component } from 'react';

class Timeslot extends Component {
  render() {
    const totalMinutesInDay = 24 * 60;
    const styles = {
      top: `${(this.props.startTimeInMinutes / totalMinutesInDay) * 100}%`,
      height: `${(this.props.minuteLength / totalMinutesInDay) * 100}%`,
    }

    return (
      <div className="timeslot" style={styles}>
      </div>
    );
  }
}

export default Timeslot;