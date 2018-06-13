import React from 'react';
import { Well } from 'react-bootstrap';
import Calendar from './calendar.jsx';
import Summary from './Summary.jsx';
import style from '../style.css';
import axios from 'axios';

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: 1,
      children: 0,
      infants: 0,
      adultAddStatus: false,
      adultRemoveStatus: true,
      childrenAddStatus: false,
      childrenRemoveStatus: true,
      infantsAddStatus: false,
      infantsRemoveStatus: true,
      open: false,
      days: null,
      selectDays: null,
    };

    this.setTotalDays = this.setTotalDays.bind(this);
    this.setSelectDays = this.setSelectDays.bind(this);
  }

  setTotalDays(days) {
    this.setState({ days });
  }

  setSelectDays(selectDays) {
    this.setState({ selectDays });
  }

  setAddButtonState(adults, children) {
    if (adults > 1) {
      this.setState({ adultRemoveStatus: false });
    }
    if (children > 0) {
      this.setState({ childrenRemoveStatus: false });
    }
    if (adults + children >= this.props.info.guests) {
      this.setState({ adultAddStatus: true, childrenAddStatus: true });
      if (adults === 1) {
        this.setState({ adultRemoveStatus: true, childrenRemoveStatus: false });
      } else if (children === 0) {
        this.setState({ adultRemoveStatus: false, childrenRemoveStatus: true });
      }
    }
    if (this.state.infants > -1) {
      this.setState({ infantsRemoveStatus: false });
      if (this.state.infants > 3) {
        this.setState({ infantsAddStatus: true });
      }
    }
  }

  setRemoveButtonState(adults, children) {
    if (adults < 2) {
      this.setState({ adultAddStatus: false, adultRemoveStatus: true });
    }
    if (children < 1) {
      this.setState({ childrenAddStatus: false, childrenRemoveStatus: true });
    }
    if (adults + children < this.props.info.guests) {
      this.setState({ adultAddStatus: false, childrenAddStatus: false });
    }
    if (this.state.infants < 2) {
      this.setState({ infantsRemoveStatus: true });
    }
    if (this.state.infants < 6) {
      this.setState({ infantsAddStatus: false });
    }
  }

  addAdults() {
    let newAdults = this.state.adults;
    newAdults += 1;
    this.setState({ adults: newAdults });
    this.setAddButtonState(this.state.adults + 1, this.state.children);
  }

  removeAdults() {
    let newAdults = this.state.adults;
    newAdults -= 1;
    this.setState({ adults: newAdults });
    this.setRemoveButtonState(this.state.adults - 1, this.state.children);
  }

  addChildren() {
    let newChildren = this.state.children;
    newChildren += 1;
    this.setState({ children: newChildren });
    this.setAddButtonState(this.state.adults, this.state.children + 1);
  }

  removeChildren() {
    let newChildren = this.state.children;
    newChildren -= 1;
    this.setState({ children: newChildren });
    this.setRemoveButtonState(this.state.adults, this.state.children - 1);
  }

  addInfants() {
    let newInfants = this.state.infants;
    newInfants += 1;
    this.setState({ infants: newInfants });
    this.setAddButtonState();
  }

  removeInfants() {
    let newInfants = this.state.infants;
    newInfants -= 1;
    this.setState({ infants: newInfants });
    this.setRemoveButtonState();
  }

  postDates() {
    if (this.state.selectDays) {
      const endPoint = window.location.pathname.slice(6);
      const data = { date: this.state.selectDays };
      axios.post(`/dates/${endPoint}`, data)
        .then((response) => {
          this.props.handleSuccess();
          this.setState({ days: null })
        })
        .catch((error) => {
          console.log('err to post', err);
        });}
  }

  render() {
    const totalGuests = this.state.adults + this.state.children;
    const totalPeople = this.state.infants ? `${totalGuests} guests, ${this.state.infants} infants` : `${totalGuests} guests`;
    return (
      <div>
        <Calendar
          setTotalDays={this.setTotalDays}
          setSelectDays={this.setSelectDays}
          minimumNights={this.props.info.minimumNights}
        />
        <div className={style.guestModule}>
          <span id={style.wordGuests} >Guests</span>
          <button type="button" id={style.guestButton} className="btn btn-Primary btn-block" onClick={() => this.setState({ open: !this.state.open })}>
            {totalPeople}
          </button>
          {this.state.open ? <div id={style.collapse}>
            <div>
              <Well id={style.well}>
                <div className={style.adults}>
                  <div id={style.adults}>Adults</div>
                  <button id={style.adultsbutton} className="btn btn-circle btn-lg am" type="button" onClick={() => this.addAdults()} disabled={this.state.adultAddStatus}>+</button>
                  <span id={style.adultsletters} className="am">{this.state.adults}</span>
                  <button id={style.adultsbutton} className="btn btn-circle btn-lg am" type="button" onClick={() => this.removeAdults()} disabled={this.state.adultRemoveStatus}>-</button>
                </div>
                <div className={style.guests}>
                  <span>Children</span>
                  <button className="btn btn-circle btn-lg am" type="button" onClick={() => this.addChildren()} disabled={this.state.childrenAddStatus}>+</button>
                  <span id={style.amletters} className="am">{this.state.children}</span>
                  <button className="btn btn-circle btn-lg am" type="button" onClick={() => this.removeChildren()} disabled={this.state.childrenRemoveStatus}>-</button>
                  <p id={style.under}>Ages 2 - 12</p>
                </div>
                <div className={style.guests}>
                  <span>Infants</span>
                  <button className="btn btn-circle btn-lg am" type="button" onClick={() => this.addInfants()} disabled={this.state.infantsAddStatus}>+</button>
                  <span id={style.amletters} className="am">{this.state.infants}</span>
                  <button className="btn btn-circle btn-lg am" type="button" onClick={() => this.removeInfants()} disabled={this.state.infantsRemoveStatus}>-</button>
                  <p id={style.under}>Under 2</p>
                </div>
                <div id={style.limit}>
                  {this.props.info.guests} guests maximum. Infants don’t count toward the number of guests.
                </div>
                <a href="#;" id={style.close} onClick={() => this.setState({ open: !this.state.open })}>Close</a>
              </Well>
            </div>
          </div> : null}
          {this.state.days ?
            <Summary info={this.props.info} days={this.state.days} /> : <div id={style.space} />}
          <button type="button" id={style.book} className="btn btn-Primary btn-danger btn-block" onClick={() => { this.postDates(); }}>Book</button>
          <div id={style.wont} className={style.chargeSentence}>You won’t be charged yet</div>
        </div>
      </div>
    );
  }
}

export default Guests;
