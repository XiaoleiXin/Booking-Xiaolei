import React from 'react';
import { Modal } from 'react-bootstrap';
import 'react-dates/initialize'
import BookingModule from './BookingModule.jsx';
import Price from './price.jsx';
import Guests from './guests.jsx';
import 'react-dates/lib/css/_datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import StarRatings from 'react-star-ratings';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{}],
      show: false,
      open: false,
    };
    this.handleHide = this.handleHide.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  componentDidMount() {
    this.fetchInfo();
  }

  fetchInfo() {
    const endPoint = window.location.pathname.slice(6);
    axios.get(`/info/${endPoint}`)
      .then(response => this.setState({ data: response.data }))
      .catch(err => console.log('err on fetchInfo', err));
  }

  handleHide() {
    this.setState({ show: false, open: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSuccess() {
    this.setState({ show: false, open: true });
  }

  render() {
    return (
      <div>
        <BookingModule data={this.state.data[0]} handleSuccess={this.handleSuccess} />
        <div className="bottombook">
          <div className="bottomprice">
            <span id="price">${this.state.data[0].price}</span>
            <span> per night</span>
            <div>
              <StarRatings
                rating={this.state.data[0].stars}
                starDimension="10px"
                starSpacing="0px"
                starRatedColor="rgb(29, 129, 107)"
              />
              {this.state.data[0].reviews}
            </div>
          </div>
          <button type="button" id="bottombookbutton" onClick={() => this.handleShow()}className="btn btn-Primary btn-danger">Request to Book</button>
        </div>
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          className="modal-container"
        >
          <div className="bottomapp" >
            <Price info={this.state.data[0]} />
            <Guests info={this.state.data[0]} handleSuccess={this.handleSuccess} />
          </div>
        </Modal>
        <Modal
          id="success"
          show={this.state.open}
          onHide={this.handleHide}
          container={this}
          className="modal-container"
        >
          <p>Booking Success!</p>
        </Modal>
      </div>
    );
  }
}

export default App;
