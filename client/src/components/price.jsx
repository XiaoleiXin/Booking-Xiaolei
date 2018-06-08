import React from 'react';
import $ from 'jquery';
import StarRatings from 'react-star-ratings';

class Price extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 205,
      rating: 3,
      reviews: 25,
    };
  }

  render() {
    return (
      <div>
        <div className="price">
          <div>
            <span id="price">${this.state.price}</span>
            <span> per night</span>
          </div>
          <StarRatings
            rating={this.state.rating}
            starDimension="10px"
            starSpacing="0px"
            starRatedColor="rgb(29, 129, 107)"
          />
          <span> {this.state.reviews}</span>
        </div>
      </div>
    );
  }
}

export default Price;
