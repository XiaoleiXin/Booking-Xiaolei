import React from 'react';
import $ from 'jquery';
import dateArray from 'moment-array-dates';
import { DateRangePickerWrapper , DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import moment from 'moment';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDates: null,
      endDates: null,
    };
  }

  handle(startDate, endDate) {
    const startDates = moment(startDate);
    const timeEnd = moment(endDate);
    const diff = timeEnd.diff(startDates);
    const diffDuration = moment.duration(diff);
    const days = diffDuration.days();
    this.props.setTotalDays(days);
    if (endDate && startDate) {
      console.log(dateArray.range(startDate, endDate, 'YYYY-MM-DD', true));
    }
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
          startDatePlaceholderText="Check in"
          startDate={this.state.startDates}
          startDateId="startDate"
          endDatePlaceholderText="Check out"
          endDate={this.state.endDates}
          endDateId="endDate"
          focusedInput={this.state.focusedInput}
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDates: startDate, endDates: endDate }); this.handle(startDate, endDate); }}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          minimumNights = {3}
          isDayBlocked={this.isDayBlocked}
          numberOfMonths={1}
          showClearDates
          regular
        />
      </div>
    );
  }
}

export default Calendar;
