import React from 'react';
import {NavLink} from 'react-router-dom';
import iconCoupe from '../../../images/icon_coupe.png';
import iconEconomclass from '../../../images/icon_economclass.png';
import iconSedentary from '../../../images/icon_sedentary.png';
import iconLuxury from '../../../images/icon_luxury.png';
import iconWifi from '../../../images/icon_wifi.png';
import iconExpress from '../../../images/icon_express.png';
import iconThere from '../../../images/icon_there.png';
import iconBack from '../../../images/icon_back.png';
import iconPlus from '../../../images/icon_plus.png';
import iconTicketTrain from '../../../images/icon_ticket_train.png';
import iconArrowRightGray from '../../../images/icon_arrow_right_gray.png'
import iconArrowRightBlack from '../../../images/icon_arrow_right_black.png'
import iconSearchThere from '../../../images/icon_search_there.png';
import iconSearchBack from '../../../images/icon_search_back.png';
import iconRuble from '../../../images/icon_ruble.png';
import iconRubleSmall from '../../../images/icon_ruble_small.png';
import iconWifiRocketCup from '../../../images/icons_wifiRocketCup.png';
import iconSearchLeft from '../../../images/icon_page_search_left.png';
import iconSearchRight from '../../../images/icon_page_search_right.png';
import iconSearchDots from '../../../images/icon_page_search_dots.png';
import progressStateSelect from '../../../images/progress_state_select.png';
import progressStateDefault from '../../../images/progress_state_default.png';
import {setDataFormAC} from "../../../redux/action";
import {connect} from "react-redux";

class SectionSearchTickets extends React.Component {
  state = {
    total_count: 0,
    have_second_class: false,
    have_third_class: false
  };

  componentDidMount() {
    fetch(`https://netology-trainbooking.herokuapp.com/`
      + `routes?from_city_id=${this.props.form.cityWhereFromId}&to_city_id=${this.props.form.cityWhereToId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data;
      })
      .then(data => this.setState({
        total_count: data.total_count,
        whereFromDate: this.props.form.whereFromDate,
        whereToDate: this.props.form.whereToDate
      }));

    // test url from work UI

    fetch(`https://netology-trainbooking.herokuapp.com/routes?from_city_id=5b9a2fa7f83e028786ea5672&to_city_id=5b9a2fa7f83e028786ea5673`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data;
      })
      .then(data => this.setState({
        total_count: data.total_count,
        whereFromDate: this.props.form.whereFromDate,
        whereToDate: this.props.form.whereToDate,
        have_second_class: this.state.have_second_class
      }));
  };

  // don't work have_second_class
  // (не понимаю почему не работает фильтрация на сервере отправляю true как в примере, но ничего не меняется)

  componentDidUpdate(prevProps, prevState) {
    if (prevState.have_third_class !== this.state.have_third_class) {
      fetch(`https://netology-trainbooking.herokuapp.com/routes?from_city_id=5b9a2fa7f83e028786ea5672&to_city_id=5b9a2fa7f83e028786ea5673`
      + `${this.state.have_second_class ? '&have_second_class=true' : ''}${this.state.have_third_class ? '&have_third_class=true' : ''}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          return data;
        })
        .then(data => this.setState({
          total_count: data.total_count,
          whereFromDate: this.props.form.whereFromDate,
          whereToDate: this.props.form.whereToDate,
          have_second_class: this.state.have_second_class,
          have_third_class: this.state.have_third_class
        }));
    }
  };

	setWhereFromDate = (event) => {
		this.setState({whereFromDate: event.currentTarget.value});
	};

	setWhereToDate = (event) => {
		this.setState({whereToDate: event.currentTarget.value});
	};

	checkSecondClass = (event) => {
    this.setState({have_second_class: event.currentTarget.checked})
  };

  checkThirdClass = (event) => {
    this.setState({have_third_class: event.currentTarget.checked})
  };

  render() {
    return (
      <div className="text-white tickets-search-window animated zoomInDow">
        <div className="progress-state">
          <ul className="list-group list-group-horizontal justify-content-between w-100">
            <li
              className="progress-state-button tickets list-group-item w-50 justify-content-end d-flex font-weight-bold border-0">
              <p className="progress-state-number">1</p>
              <p className="progress-state-text mr-5">Билеты</p>
              <img className="justify-content-end ml-5" src={progressStateSelect} alt="..."/>
            </li>
            <li
              className="progress-state-button passengers list-group-item w-25 justify-content-end d-flex font-weight-bold border-0 bg-dark">
              <p className="progress-state-number">2</p>
              <p className="progress-state-text mr-5">Пассажиры</p>
              <img className="" src={progressStateDefault} alt="..."/>
            </li>
            <li
              className="progress-state-button payment list-group-item w-25 justify-content-end d-flex font-weight-bold border-0 bg-dark">
              <p className="progress-state-number">3</p>
              <p className="progress-state-text mr-5">Оплата</p>
              <img className="ml-4" src={progressStateDefault} alt="..."/>
            </li>
            <li
              className="progress-state-button check list-group-item w-50 justify-content-left d-flex font-weight-bold border-0 bg-dark">
              <p className="progress-state-number ml-5">4</p>
              <p className="progress-state-text ">Проверка</p>
            </li>
          </ul>
        </div>

        <div className="container d-flex">
          <div className="tickets-search-param col-lg-3 mt-5 mb-5">
            <div className="tickets-search-menu bg-dark">
              <form className="form pt-5 pl-4 pr-4 w-100" action="input">
                <p>Дата поездки</p>
                <div className="d-flex form-group">
									<input className="col-sm form-control"
												 type="date"
												 onChange={this.setWhereFromDate}
												 value={this.state.whereFromDate}
									/>
                </div>
              </form>
              <form className="form pt-3 pl-4 pr-4 w-100" action="input">
                <p>Дата возвращения</p>
                <div className="d-flex form-group">
									<input className="col-sm form-control"
												 type="date"
												 onChange={this.setWhereToDate}
												 value={this.state.whereToDate}
									/>
                </div>
              </form>
              <hr className="bg-light"/>
              <div className="container coupe ml-5 d-flex">
                <img className="icon-coupe" src={iconCoupe} alt="иконка купе"/>
                <p className="container">Купе</p>
                <div className="custom-control custom-switch d-flex justify-content-end pr-5">
                  <input type="checkbox" className="custom-control-input" id="customSwitch1" checked={this.state.have_second_class} onChange={this.checkSecondClass}/>
                  <label className="custom-control-label" htmlFor="customSwitch1"></label>
                </div>
              </div>
              <div className="container economclass ml-5 d-flex">
                <img className="icon-coupe" src={iconEconomclass} alt="иконка Плацкарт"/>
                <p className="container">Плацкарт</p>
                <div className="custom-control custom-switch d-flex justify-content-end pr-5">
                  <input type="checkbox" className="custom-control-input" id="customSwitch2" checked={this.state.have_third_class} onChange={this.checkThirdClass}/>
                  <label className="custom-control-label" htmlFor="customSwitch2"></label>
                </div>
              </div>
              <div className="container coupe ml-5 d-flex">
                <img className="icon-coupe" src={iconSedentary} alt="иконка Сидячий"/>
                <p className="container">Сидячий</p>
                <div className="custom-control custom-switch d-flex justify-content-end pr-5">
                  <input type="checkbox" className="custom-control-input" id="customSwitch3"/>
                  <label className="custom-control-label" htmlFor="customSwitch3"></label>
                </div>
              </div>
              <div className="container coupe ml-5 d-flex">
                <img className="icon-coupe" src={iconLuxury} alt="иконка Люкс"/>
                <p className="container">Люкс</p>
                <div className="custom-control custom-switch d-flex justify-content-end pr-5">
                  <input type="checkbox" className="custom-control-input" id="customSwitch4"/>
                  <label className="custom-control-label" htmlFor="customSwitch4"></label>
                </div>
              </div>
              <div className="container coupe ml-5 d-flex">
                <img className="icon-coupe" src={iconWifi} alt="иконка Wi-Fi"/>
                <p className="container">Wi-Fi</p>
                <div className="custom-control custom-switch d-flex justify-content-end pr-5">
                  <input type="checkbox" className="custom-control-input" id="customSwitch5"/>
                  <label className="custom-control-label" htmlFor="customSwitch5"></label>
                </div>
              </div>
              <div className="container coupe ml-5 d-flex">
                <img className="icon-coupe" src={iconExpress} alt="иконка Экспресс"/>
                <p className="container">Экспресс</p>
                <div className="custom-control custom-switch d-flex justify-content-end pr-5">
                  <input type="checkbox" className="custom-control-input" id="customSwitch6"/>
                  <label className="custom-control-label" htmlFor="customSwitch6"></label>
                </div>
              </div>
              <hr className="bg-light"/>
              <form className="form pt-3 pl-4 pr-4 w-100" action="input">
                <label htmlFor="customRange3">Стоимость</label>
                <input type="range" className="custom-range" min="0" max="5" step="0.5" id="customRange3"/>
              </form>
              <hr className="bg-light"/>
              <div className="container d-flex justify-content-between w-100">
                <p className="ml-2 font-weight-bold"><img className="icon-coupe mr-3" src={iconThere}
                                                          alt="иконка туда"/>Туда</p>
                <img className="icon-coupe mr-3" src={iconPlus} alt="иконка плюс"/>
              </div>
              <hr className="bg-light"/>
              <div className="container d-flex justify-content-between w-100">
                <p className="ml-2 font-weight-bold"><img className="icon-coupe mr-3" src={iconBack}
                                                          alt="иконка обратно"/>Обратно</p>
                <img className="icon-coupe mr-3" src={iconPlus} alt="иконка плюс"/>
              </div>
            </div>
            <div className="last-tickets">
              <h4 className="mt-5 mb-2">Последние билеты</h4>
              <div className="last-ticket-result row ml-1 mt-2 p-2">
                <div className="d-flex justify-content-between w-100">
                  <div className="">
                    <p className="last-ticket-direction font-weight-bold">Санкт-Петербург</p>
                    <p className="last-ticket-station font-weight-light mt-n3">Курский<br/>вокзал</p>
                  </div>
                  <div className="text-right">
                    <p className="last-ticket-direction font-weight-bold">Самара</p>
                    <p className="last-ticket-station font-weight-light mt-n3">Московский<br/>вокзал</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <img className="icon-wifi-rocket-cup" src={iconWifiRocketCup} alt="иконки Wi-Fi рокета кружка"/>
                  </div>
                  <div className="row ml-2">
                    <p>от</p>
                    <p className="last-ticket-price ml-1">2 500</p>
                    <img className="icon-coupe ml-1" src={iconRuble} alt="иконка рубль"/>
                  </div>
                </div>
              </div>
              <div className="last-ticket-result row ml-1 mt-2 p-2">
                <div className="d-flex justify-content-between w-100">
                  <div className="">
                    <p className="last-ticket-direction font-weight-bold">Москва</p>
                    <p className="last-ticket-station font-weight-light mt-n3">Курский<br/>вокзал</p>
                  </div>
                  <div className="text-right">
                    <p className="last-ticket-direction font-weight-bold">Казань</p>
                    <p className="last-ticket-station font-weight-light mt-n3">Московский<br/>вокзал</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <img className="icon-wifi-rocket-cup" src={iconWifiRocketCup} alt="иконки Wi-Fi рокета кружка"/>
                  </div>
                  <div className="row ml-2">
                    <p>от</p>
                    <p className="last-ticket-price ml-1">3 500</p>
                    <img className="icon-coupe ml-1" src={iconRuble} alt="иконка рубль"/>
                  </div>
                </div>
              </div>
              <div className="last-ticket-result row ml-1 mt-2 p-2">
                <div className="d-flex justify-content-between w-100">
                  <div className="">
                    <p className="last-ticket-direction font-weight-bold">Казань</p>
                    <p className="last-ticket-station font-weight-light mt-n3">Курский<br/>вокзал</p>
                  </div>
                  <div className="text-right">
                    <p className="last-ticket-direction font-weight-bold">Нижний новгород</p>
                    <p className="last-ticket-station font-weight-light mt-n3">Московский<br/>вокзал</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <img className="icon-wifi-rocket-cup" src={iconWifiRocketCup} alt="иконки Wi-Fi рокета кружка"/>
                  </div>
                  <div className="row ml-2">
                    <p>от</p>
                    <p className="last-ticket-price ml-1">3 800</p>
                    <img className="icon-coupe ml-1" src={iconRuble} alt="иконка рубль"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tickets-search-result col-lg-9 pt-5 pb-5 pl-5">
            <div className="row">
              <div className="col">найдено {this.state.total_count}</div>
              <div className="col text-right">сортировать по: времени</div>
              <div className="col text-right">показывать по: 5 10 20</div>
            </div>

            <div className="result-search-of-tickets row mt-4">
              <div className="select-tickets-search-number-train col-lg-3 pt-5 pb-5">
                <img className="pl-5" src={iconTicketTrain} alt="иконка поезда"/>
                <h5 className="text-center">116C</h5>
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

            <div className="result-search-of-tickets row mt-4">
              <div className="select-tickets-search-number-train col-lg-3 pt-5 pb-5">
                <img className="pl-5" src={iconTicketTrain} alt="иконка поезда"/>
                <h5 className="text-center">116C</h5>
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

            <div className="result-search-of-tickets row mt-4">
              <div className="select-tickets-search-number-train col-lg-3 pt-5 pb-5">
                <img className="pl-5" src={iconTicketTrain} alt="иконка поезда"/>
                <h5 className="text-center">116C</h5>
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

            <div className="result-search-of-tickets row mt-4">
              <div className="select-tickets-search-number-train col-lg-3 pt-5 pb-5">
                <img className="pl-5" src={iconTicketTrain} alt="иконка поезда"/>
                <h5 className="text-center">116C</h5>
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

            <div className="row justify-content-end mt-5">
              <button className="page-search-select-number ml-3" to="/" type="button"><img src={iconSearchLeft}
                                                                                           alt="иконка влево"/></button>
              <button className="page-search-select-number ml-3" to="/" type="button">1</button>
              <button className="page-search-select-number ml-3" to="/" type="button">2</button>
              <button className="page-search-select-number ml-3" to="/" type="button">3</button>
              <button className="page-search-select-number ml-3" to="/" type="button"><img src={iconSearchDots}
                                                                                           alt="иконка влево"/></button>
              <button className="page-search-select-number ml-3" to="/" type="button">10</button>
              <NavLink className="page-search-select-number ml-3" to="/seat_selection" type="button"><img
                src={iconSearchRight} alt="иконка влево"/></NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: state.sectionSearch.form
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDataForm: (form) => {
      const action = setDataFormAC(form);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionSearchTickets);