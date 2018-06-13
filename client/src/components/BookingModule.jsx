import React from 'react';
import 'react-dates/initialize';
import Price from './price.jsx';
import Guests from './guests.jsx';
import style from '../style.css';

class BookingModule extends React.Component {
  constructor(props) {
    super(props);
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
        <div className={style.app} >
          <Price info={this.props.data} />
          <Guests info={this.props.data} handleSuccess={this.props.handleSuccess} />
        </div>
      </div>
    );
  }
}

export default BookingModule;
