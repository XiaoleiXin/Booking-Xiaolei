import React from 'react';
import StarRatings from 'react-star-ratings';

const Price = ({ info }) => (
  <div>
    <div className="price">
      <div>
        <span id="price">${info.price}</span>
        <span> per night</span>
      </div>
      <StarRatings
        rating={info.stars}
        starDimension="10px"
        starSpacing="0px"
        starRatedColor="rgb(29, 129, 107)"
      />
      <span> {info.reviews}</span>
    </div>
  </div>
);

export default Price;
