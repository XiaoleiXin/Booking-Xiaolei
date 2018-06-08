import React from 'react';
import ReactDOM from 'react-dom';
import 'react-dates/initialize'
import $ from 'jquery';
import Price from './components/price.jsx';
import Guests from './components/guests.jsx';
import Calendar from './components/calendar.jsx';
import 'react-dates/lib/css/_datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      guests: true,
    };
  }

  showGuests() {
    const guestsStatus = this.state.guests;
    this.setState({ guests: !guestsStatus });
  }

  render() {
    return (
      <div>
        <div className="app">
          <Price />
          <Calendar />
          <Guests />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));