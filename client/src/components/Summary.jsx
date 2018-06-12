import React from 'react';

const Summary = ({ info, days }) => {
  const totalPrice = info.price * days;
  const serviceFee = Math.floor(totalPrice * 0.09);
  const cleaningFee = info.cleaning;
  const total = totalPrice + serviceFee + cleaningFee;

  return (
    <div id="summary" >
      <div className="line">${info.price} x {days} night
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
    </div>
  );
};

export default Summary;
