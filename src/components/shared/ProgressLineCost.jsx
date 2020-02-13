import React from 'react';


const ProgressLineCost = (props) => {
  return (
    <div className="progress-line-const bg-dark">
      <ul className="list-group list-group-horizontal justify-content-between w-100 animated fadeInLeft">
        <li
          className="progress-line-const-button tickets list-group-item w-50 justify-content-end d-flex font-weight-bold border-0">
          <p className="progress-line-const-number">1</p>
          <p className="progress-line-const-text mr-5">Билеты</p>
          <img className="justify-content-end ml-5" src={props.one} alt="..."/>
        </li>
        <li
          className={`progress-line-const-button passengers list-group-item w-25 justify-content-end d-flex font-weight-bold border-0 bg-dark`}>
          <p className="progress-line-const-number">2</p>
          <p className="progress-line-const-text mr-3">Пассажиры</p>
          <img className="" src={props.two} alt="..."/>
        </li>
        <li
          className="progress-line-const-button payment list-group-item w-25 justify-content-end d-flex font-weight-bold border-0 bg-dark">
          <p className="progress-line-const-number">3</p>
          <p className="progress-line-const-text mr-3">Оплата</p>
          <img className="ml-4" src={props.three} alt="..."/>
        </li>
        <li
          className="progress-line-const-button check list-group-item w-50 justify-content-left d-flex font-weight-bold border-0 bg-dark">
          <p className="progress-line-const-number ml-5">4</p>
          <p className="progress-line-const-text ">Проверка</p>
        </li>
      </ul>
    </div>
  )
};

export default ProgressLineCost;