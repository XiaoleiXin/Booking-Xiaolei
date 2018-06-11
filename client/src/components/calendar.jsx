import React from 'react';
import $ from 'jquery';
import dateArray from 'moment-array-dates';
import { DateRangePickerWrapper , DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import moment from 'moment';
import axios from 'axios';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDates: null,
      endDates: null,
      data: [moment('2018-07-02')],
    };
  }

  componentDidMount() {
    this.fetchInfo();
  }

  fetchInfo() {
    axios.get('/dates/2')
      .then((response) => this.setState({ data: response.data }))
      .catch((err) => console.log('err on fetchInfo', err));
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
    const BAD_DATES = [];
    for (let i = 0; i < this.state.data.length; i++) {
      let date = new Date(this.state.data[i].dates);
      date.setDate(date.getDate() + 1);
      BAD_DATES.push(moment(date));
    }
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
          isDayBlocked={ this.isDayBlocked.bind(this) }
          numberOfMonths={1}
          showClearDates
          regular
        />
      </div>
    );
  }
}

export default Calendar;
