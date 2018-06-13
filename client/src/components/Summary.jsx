import React from 'react';
import style from '../style.css';

const Summary = ({ info, days }) => {
  const totalPrice = info.price * days;
  const serviceFee = Math.floor(totalPrice * 0.09);
  const cleaningFee = info.cleaning;
  const total = totalPrice + serviceFee + cleaningFee;

  return (
    <div id={style.summary} >
      <div className={style.line}>${info.price} x {days} night
        <span className={style.numbers}>${totalPrice}</span>
      </div>
      <div className={style.line}>Cleaning fee
        <span className={style.numbers}>${cleaningFee}</span>
      </div>
      <div className={style.line}>Service fee
        <span className={style.numbers}>${serviceFee}</span>
      </div>
      <div id={style.total} className={style.line}>Total
        <span className={style.numbers}>${total}</span>
      </div>
    </div>
  );
};

export default Summary;
