import React from 'react';
import dateArray from 'moment-array-dates';
import { DateRangePicker } from 'react-dates';
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
    this.isDayBlocked = this.isDayBlocked.bind(this)
  }

  componentDidMount() {
    this.fetchInfo();
  }

  fetchInfo() {
    const endPoint = window.location.pathname.slice(6);
    axios.get(`/dates/${endPoint}`)
      .then(response => this.setState({ data: response.data }))
      .catch(err => console.log('err on fetchDates', err));
  }

  handle(startDate, endDate) {
    const startDates = moment(startDate);
    const timeEnd = moment(endDate);
    const diff = timeEnd.diff(startDates);
    const diffDuration = moment.duration(diff);
    const days = diffDuration.days();
    this.props.setTotalDays(days);
    if (endDate && startDate) {
      const selectDays = dateArray.range(startDate, endDate, 'YYYY-MM-DD', true);
      this.props.setSelectDays(selectDays);
    }
  }

  isDayBlocked(day) {
    const BAD_DATES = [];
    for (let i = 0; i < this.state.data.length; i++) {
      const date = new Date(this.state.data[i].dates);
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
          minimumNights = {this.props.minimumNights}
          isDayBlocked={this.isDayBlocked}
          numberOfMonths={1}
          showClearDates
          block
        />
      </div>
    );
  }
}

export default Calendar;
