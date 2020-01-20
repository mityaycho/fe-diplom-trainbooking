import React from "react";
import iconTicketTrain from "../../../images/icon_ticket_train.png";
import iconArrowRightGray from "../../../images/icon_arrow_right_gray.png";
import iconArrowRightBlack from "../../../images/icon_arrow_right_black.png";
import iconSearchThere from "../../../images/icon_search_there.png";
import iconRubleSmall from "../../../images/icon_ruble_small.png";
import iconSearchBack from "../../../images/icon_search_back.png";


const ResultSearchTickets = (props) => {
  return (
    <div className="result-search-of-tickets row mt-4">
      <div className="select-tickets-search-number-train col-lg-3 pt-5 pb-5">
        <img className="pl-5" src={iconTicketTrain} alt="иконка поезда"/>
        <h5 className="text-center">{props.state.departure.train.name}</h5>
        <p className="pl-3 pt-5 font-weight-light">Адлер<img className="pl-2" src={iconArrowRightGray}
                                                             alt="..."/></p>
        <p className="pl-3">Москва<img className="pl-2" src={iconArrowRightBlack} alt="..."/></p>
        <p className="pl-3">Санкт-Петербург</p>
      </div>
      <div className="col-lg-9">
        <div className="row pl-4 pr-4 pt-5 justify-content-between">
          <div>
            <h5>00:10</h5>
            <p>Москва</p>
            <p className="font-weight-light">Курский вокзал</p>
          </div>
          <div className="pl-4">
            <p className="font-weight-light">9:42</p>
            <img src={iconSearchThere} alt="иконка стрелки вправо"/>
          </div>
          <div className="pl-4">
            <h5>9:52</h5>
            <p>Санкт-Петербург</p>
            <p className="font-weight-light">Ладожский вокзал</p>
          </div>
          <div className="pl-5">
            <div className="row">
              <p className="pr-1">Сидячий</p>
              <p className="quantity-places-orange ml-auto">88</p>
              <p className="ml-2">от</p>
              <h5 className="mt-n2 ml-2">1 920</h5>
              <img className="align-self-senter mt-n1 pl-1 h-100" src={iconRubleSmall} alt="..."/>
            </div>
            <div className="row mt-3">
              <p className="pr-1">Плацкарт</p>
              <p className="quantity-places-orange ml-auto">52</p>
              <p className="ml-2">от</p>
              <h5 className="mt-n2 ml-2">2 530</h5>
              <img className="align-self-senter mt-n1 pl-1 h-100" src={iconRubleSmall} alt="..."/>
            </div>
            <div className="row mt-3">
              <p className="pr-1">Купе</p>
              <p className="quantity-places-orange ml-auto">24</p>
              <p className="ml-2">от</p>
              <h5 className="mt-n2 ml-2">3 820</h5>
              <img className="align-self-senter mt-n1 pl-1 h-100" src={iconRubleSmall} alt="..."/>
            </div>
          </div>
        </div>
        <div className="row pl-4 pr-4 pt-5 justify-content-between">
          <div>
            <h5>00:10</h5>
            <p>Москва</p>
            <p className="font-weight-light">Курский вокзал</p>
          </div>
          <div className="ml-4">
            <p className="font-weight-light">9:42</p>
            <img src={iconSearchBack} alt="иконка стрелки вправо"/>
          </div>
          <div className="ml-4">
            <h5>9:52</h5>
            <p>Санкт-Петербург</p>
            <p className="font-weight-light">Ладожский вокзал</p>
          </div>
          <div className="pl-5">
            <div className="row">
              <p className="pr-1">Сидячий</p>
              <p className="quantity-places-orange ml-auto">88</p>
              <p className="ml-2">от</p>
              <h5 className="mt-n2 ml-2">1 920</h5>
              <img className="align-self-senter mt-n1 pl-1 h-100" src={iconRubleSmall} alt="..."/>
            </div>
            <div className="row mt-3">
              <p className="pr-1">Плацкарт</p>
              <p className="quantity-places-orange ml-auto">52</p>
              <p className="ml-2">от</p>
              <h5 className="mt-n2 ml-2">2 530</h5>
              <img className="align-self-senter mt-n1 pl-1 h-100" src={iconRubleSmall} alt="..."/>
            </div>
            <div className="row mt-3">
              <p className="pr-1">Купе</p>
              <p className="quantity-places-orange ml-auto">24</p>
              <p className="ml-2">от</p>
              <h5 className="mt-n2 ml-2">3 820</h5>
              <img className="align-self-senter mt-n1 pl-1 h-100" src={iconRubleSmall} alt="..."/>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <button className="btn btn-warning btn-sm m-3 col-lg-3" to="/three_page" type="button">Выбрать места
          </button>
        </div>
      </div>
    </div>
  )
};

export default ResultSearchTickets;