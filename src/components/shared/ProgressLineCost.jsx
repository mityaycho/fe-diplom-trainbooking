import React from 'react';


const ProgressLineCost = (props) => {
  return (
    <div className="progress-line-cost">
      <ul className="list-group list-group-horizontal justify-content-between w-100 animated fadeInLeft">
        <li
          className="progress-line-cost-button completed list-group-item w-50 justify-content-end d-flex font-weight-bold border-0">
          <p className="progress-line-cost-number">1</p>
          <p className="progress-line-cost-text mr-3">Билеты</p>
          <img className="justify-content-end ml-5" src={props.tickets} alt="..."/>
        </li>
        <li
          className={`progress-line-cost-button ${props.passengersClass} list-group-item w-25 justify-content-end d-flex font-weight-bold border-0`}>
          <p className="progress-line-cost-number">2</p>
          <p className="progress-line-cost-text mr-3">Пассажиры</p>
          <img className="" src={props.passengers} alt="..."/>
        </li>
        <li
          className={`progress-line-cost-button ${props.paymentClass} list-group-item w-25 justify-content-end d-flex font-weight-bold border-0`}>
          <p className="progress-line-cost-number">3</p>
          <p className="progress-line-cost-text mr-3">Оплата</p>
          <img className="ml-4" src={props.payment} alt="..."/>
        </li>
        <li
          className={`progress-line-cost-button ${props.checkClass} list-group-item w-50 justify-content-left d-flex font-weight-bold border-0`}>
          <p className="progress-line-cost-number ml-5">4</p>
          <p className="progress-line-cost-text ">Проверка</p>
        </li>
      </ul>
    </div>
  );
};

export default ProgressLineCost;