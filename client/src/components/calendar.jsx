import React from 'react';
import $ from 'jquery';
import { DateRangePickerWrapper , DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import moment from 'moment';

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      focusedInput: null,
      startDates: null,
      endDates: null,
      daySize: null,
    };
  }

  isDayBlocked(day) {
    const BAD_DATES = [moment('2018-07-02'), moment('2018-06-04'), moment('2018-06-05'),moment('2018-06-15'),moment('2018-06-16')];
    return BAD_DATES.filter(d => d.isSame(day, 'day')).length > 0;
  }

  render() {
    return (
      <div id="calendar">
        <span id="wordDates" >Dates</span>
        <DateRangePicker
          startDate={this.state.startDates}
          startDateId="startDate"
          endDate={this.state.endDates}
          endDateId="endDate"
          onDatesChange={({ startDate, endDate }) => {this.setState({ startDates: startDate, endDates: endDate }); console.log(this.state.daySize)}}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          isOutsideRange={() => false}
          minimumNights = {3}
          isDayBlocked={this.isDayBlocked}
          />
      </div>
    );
  }
}

export default Calendar;
