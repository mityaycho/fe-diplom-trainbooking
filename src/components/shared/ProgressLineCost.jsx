import React from 'react';


const ProgressLineCost = (props) => {
  return (
    <div className="progress-line-cost">
      <ul className="list-group list-group-horizontal justify-content-between w-100 h-25 d-flex flex-wrap">
        <li
          className="progress-line-cost-button completed list-group-item w-25 d-flex font-weight-bold border-0">
          <p className="progress-line-cost-number ml-auto">1</p>
          <p className="progress-line-cost-text mr-3">Билеты</p>
          <img className="ml-5" src={props.tickets} alt="..."/>
        </li>
        <li
          className={`progress-line-cost-button ${props.passengersClass} list-group-item w-25 justify-content-center d-flex font-weight-bold border-0`}>
          <p className="progress-line-cost-number">2</p>
          <p className="progress-line-cost-text mr-5">Пассажиры</p>
          <img src={props.passengers} alt="..."/>
        </li>
        <li
          className={`progress-line-cost-button ${props.paymentClass} list-group-item w-25 justify-content-center d-flex font-weight-bold border-0`}>
          <p className="progress-line-cost-number">3</p>
          <p className="progress-line-cost-text mr-5">Оплата</p>
          <img src={props.payment} alt="..."/>
        </li>
        <li
          className={`progress-line-cost-button ${props.checkClass} list-group-item w-25 justify-content-left d-flex font-weight-bold border-0`}>
          <p className="progress-line-cost-number ml-5">4</p>
          <p className="progress-line-cost-text ">Проверка</p>
        </li>
      </ul>
    </div>
  );
};

export default ProgressLineCost;