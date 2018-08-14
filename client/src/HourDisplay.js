import React, { Component } from 'react';
import Timeslot from './Timeslot';

class HourDisplay extends Component {
  render() {
    const data = {
                   "timeslots":[
                      {
                         "id":"5531a21178b45a502f000029|1433347200",
                         "available_spots":10,
                         "booked_count":0,
                         "max_guests":10,
                         "minute_length":180,
                         "start":"2015-06-03T09:00:00-07:00",
                         "end":"2015-06-03T12:00:00-07:00",
                         "activity_name":"Activity 1"
                      },
                      {
                         "id":"5531a24678b45a502f000053|1433350800",
                         "available_spots":5,
                         "booked_count":0,
                         "max_guests":5,
                         "minute_length":240,
                         "start":"2015-06-03T10:00:00-07:00",
                         "end":"2015-06-03T14:00:00-07:00",
                         "activity_name":"Activity 3"
                      },
                      {
                         "id":"5531a21b78b45a502f000031|1433354400",
                         "available_spots":10,
                         "booked_count":0,
                         "max_guests":10,
                         "minute_length":60,
                         "start":"2015-06-03T11:00:00-07:00",
                         "end":"2015-06-03T12:00:00-07:00",
                         "activity_name":"Activity 2"
                      },
                      {
                         "id":"5531a26278b45a15b900000c|1433359800",
                         "available_spots":10,
                         "booked_count":0,
                         "max_guests":10,
                         "minute_length":60,
                         "start":"2015-06-03T12:30:00-07:00",
                         "end":"2015-06-03T13:30:00-07:00",
                         "activity_name":"Activity 2"
                      },
                      {
                         "id":"5531a26278b45a15b900000c|1433359800",
                         "available_spots":10,
                         "booked_count":0,
                         "max_guests":10,
                         "minute_length":60,
                         "start":"2015-06-03T13:00:00-07:00",
                         "end":"2015-06-03T16:30:00-07:00",
                         "activity_name":"Activity 2"
                      }
                    ]
                  };

      const timeslots = data.timeslots.map(timeslot => {
        const start = new Date(timeslot.start);
        const startTimeInMinutes = start.getHours() * 60 + start.getMinutes();

        return (
          <Timeslot
            id={timeslot.id}
            availableSpots={timeslot.available_spots}
            bookedCount={timeslot.booked_count}
            maxGuests={timeslot.max_guests}
            minuteLength={timeslot.minute_length}
            start={timeslot.start}
            end={timeslot.end}
            activityName={timeslot.activity_name}
            startTimeInMinutes={startTimeInMinutes}
          />
        );
      })

    return (
      <div className="table">
        <table>
          <tr>
            <td>00:00</td>
          </tr>
          <tr>
            <td>01:00</td>
          </tr>
          <tr>
            <td>02:00</td>
          </tr>
          <tr>
            <td>03:00</td>
          </tr>
          <tr>
            <td>04:00</td>
          </tr>
          <tr>
            <td>05:00</td>
          </tr>
          <tr>
            <td>06:00</td>
          </tr>
          <tr>
            <td>07:00</td>
          </tr>
          <tr>
            <td>08:00</td>
          </tr>
          <tr>
            <td>09:00</td>
          </tr>
          <tr>
            <td>10:00</td>
          </tr>
          <tr>
            <td>11:00</td>
          </tr>
          <tr>
            <td>12:00</td>
          </tr>
          <tr>
            <td>13:00</td>
          </tr>
          <tr>
            <td>14:00</td>
          </tr>
          <tr>
            <td>15:00</td>
          </tr>
          <tr>
            <td>16:00</td>
          </tr>
          <tr>
            <td>17:00</td>
          </tr>
          <tr>
            <td>18:00</td>
          </tr>
          <tr>
            <td>19:00</td>
          </tr>
          <tr>
            <td>20:00</td>
          </tr>
          <tr>
            <td>21:00</td>
          </tr>
          <tr>
            <td>22:00</td>
          </tr>
          <tr>
            <td>23:00</td>
          </tr>
        </table>
        {timeslots}
      </div>
    );
  }
}

export default HourDisplay;