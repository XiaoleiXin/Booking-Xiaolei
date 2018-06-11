import React from 'react';
import ReactDOM from 'react-dom';
import 'react-dates/initialize'
import $ from 'jquery';
import Price from './components/price.jsx';
import Guests from './components/guests.jsx';
import Calendar from './components/calendar.jsx';
import 'react-dates/lib/css/_datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      guests: true,
      data: [{}],
    };
  }

  componentDidMount() {
    this.fetchInfo();
  }

  fetchInfo() {
    axios.get('/info/2')
      .then((response) => this.setState({ data: response.data }))
      .catch((err) => console.log('err on fetchInfo', err));
  }

  showGuests() {
    const guestsStatus = this.state.guests;
    this.setState({ guests: !guestsStatus });
  }

  render() {
    return (
      <div>
        <div className="app">
          <Price info={this.state.data[0]} />
          <Guests info={this.state.data[0]} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));