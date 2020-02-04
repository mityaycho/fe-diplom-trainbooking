import React from 'react';
import iconRubleSmall from '../../../images/icon_ruble_small.png';

const TicketPriceAndSeats = (props) => {
  return (
    <div className="row mt-3">
      <p className="pr-1">{props.name}</p>
      <p className="quantity-places-orange ml-auto">{props.seats}</p>
      <p className="ml-2">от</p>
      <h5 className="mt-n2 ml-2">{props.price}</h5>
      <img className="mt-n1 pl-1 h-100" src={iconRubleSmall} alt="..."/>
    </div>
  );
};

export default TicketPriceAndSeats;