import React from 'react';
import $ from 'jquery';
import Calendar from './calendar.jsx';
import { Collapse, Well, Glyphicon } from 'react-bootstrap';

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
    };
  }

  setTotalDays(days) {
    this.setState({ days });
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

  render() {
    const totalPrice = this.props.info.price * this.state.days;
    const serviceFee = Math.floor(totalPrice * 0.09);
    const cleaningFee = this.props.info.cleaning;
    const total = totalPrice + serviceFee + cleaningFee;
    const totalGuests = this.state.adults + this.state.children;
    const totalPeople = this.state.infants ? `${totalGuests} guests, ${this.state.infants} infants` : `${totalGuests} guests`;
    return (
      <div>
        <Calendar setTotalDays={this.setTotalDays.bind(this)} />
        <div className="guestModule">
          <span id="wordGuests" >Guests</span>
          <button type="button" id="guestButton" className="btn btn-Primary btn-block" onClick={() => this.setState({ open: !this.state.open })}>
            {totalPeople}
            {this.state.open ? <Glyphicon glyph="menu-up" id="arrow" /> : <Glyphicon glyph="menu-down" id="arrow" />}
          </button>
          <Collapse id="collapse" in={this.state.open}>
            <div>
              <Well id="well">
                <div className="adults">
                  <div id="adults">Adults</div>
                  <button id="adultsbutton" className="btn btn-circle btn-lg am" type="button" onClick={() => this.addAdults()} disabled={this.state.adultAddStatus}>+</button>
                  <span id="adultsletters" className="am">{this.state.adults}</span>
                  <button id="adultsbutton" className="btn btn-circle btn-lg am" type="button" onClick={() => this.removeAdults()} disabled={this.state.adultRemoveStatus}>_</button>
                </div>
                <div className="guests">
                  <span>Children</span>
                  <button className="btn btn-circle btn-lg am" type="button" onClick={() => this.addChildren()} disabled={this.state.childrenAddStatus}>+</button>
                  <span id="amletters" className="am">{this.state.children}</span>
                  <button className="btn btn-circle btn-lg am" type="button" onClick={() => this.removeChildren()} disabled={this.state.childrenRemoveStatus}>_</button>
                  <p id="under">Ages 2 - 12</p>
                </div>
                <div className="guests">
                  <span>Infants</span>
                  <button className="btn btn-circle btn-lg am" type="button" onClick={() => this.addInfants()} disabled={this.state.infantsAddStatus}>+</button>
                  <span id="amletters" className="am">{this.state.infants}</span>
                  <button className="btn btn-circle btn-lg am" type="button" onClick={() => this.removeInfants()} disabled={this.state.infantsRemoveStatus}>_</button>
                  <p id="under">Under 2</p>
                </div>
                <div id="limit">{this.props.info.guests} guests maximum. Infants don’t count toward the number of guests.</div>
                <a href="#;" id="close" onClick={() => this.setState({ open: !this.state.open })}>Close</a>
              </Well>
            </div>
          </Collapse>
          {this.state.days ?
            <div id="summary" >
              <div className="line">${this.props.info.price} x {this.state.days} night
                <span className="numbers">${totalPrice}</span>
              </div>
              <div className="line">Cleaning fee
                <span className="numbers">${cleaningFee}</span>
              </div>
              <div className="line">Service fee
                <span className="numbers">${serviceFee}</span>
              </div>
              <div id="total" className="line">Total
                <span className="numbers">${total}</span>
              </div>
            </div> : <div id="space"> .</div>}
          <button type="button" id="book" className="btn btn-Primary btn-danger btn-block">Book</button>
          <div id="wont" className="chargeSentence">You won’t be charged yet</div>
        </div>
      </div>
    );
  }
}

export default Guests;

