import React from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import { Modal } from 'react-bootstrap';
import 'react-dates/initialize';
import Price from './price.jsx';
import Guests from './guests.jsx';
import style from '../style.css';
import BookingModule from './BookingModule.jsx';

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
        <div className={style.bottombook}>
          <div className={style.bottomprice}>
            <span id={style.price}>${this.state.data[0].price}</span>
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
          <button type="button" id={style.bottombookbutton} onClick={() => this.handleShow()} className="btn btn-Primary btn-danger">Request to Book</button>
        </div>
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          className={style.modalcontainer}
        >
          <div className={style.bottomapp} >
            <Price info={this.state.data[0]} />
            <Guests info={this.state.data[0]} handleSuccess={this.handleSuccess} />
          </div>
        </Modal>
        <Modal
          id={style.success}
          show={this.state.open}
          onHide={this.handleHide}
          container={this}
          className={style.modalcontainer}
        >
          <p>Booking Success!</p>
        </Modal>
      </div>
    );
  }
}

export default App;
