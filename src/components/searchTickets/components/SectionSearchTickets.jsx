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
import iconRuble from '../../../images/icon_ruble.png';
import iconWifiRocketCup from '../../../images/icons_wifiRocketCup.png';
import iconSearchLeft from '../../../images/icon_page_search_left.png';
import iconSearchRight from '../../../images/icon_page_search_right.png';
import iconSearchDots from '../../../images/icon_page_search_dots.png';
import progressStateSelect from '../../../images/progress_state_select.png';
import progressStateDefault from '../../../images/progress_state_default.png';
import {setDataFormAC} from "../../../redux/action";
import {connect} from "react-redux";
import ResultSearchTickets from "./ResultSearchTickets";

class SectionSearchTickets extends React.Component {
  state = {
    total_count: 0,
    items: [],
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_first_class: false,
    have_wifi: false,
    have_express: false,
    whereFromDate: undefined,
    whereToDate: undefined,
    sort: 'date'
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.total_count !== this.state.total_count ||
      prevState.have_second_class !== this.state.have_second_class ||
      prevState.have_third_class !== this.state.have_third_class ||
      prevState.have_fourth_class !== this.state.have_fourth_class ||
      prevState.have_first_class !== this.state.have_first_class ||
      prevState.have_wifi !== this.state.have_wifi ||
      prevState.have_express !== this.state.have_express ||
      prevState.sort !== this.state.sort) {
      fetch(`https://netology-trainbooking.herokuapp.com/routes?from_city_id=5b9a2fa7f83e028786ea5672&to_city_id=5b9a2fa7f83e028786ea5673`
        + `${this.state.have_second_class ? '&have_second_class=true' : ''}`
        + `${this.state.have_third_class ? '&have_third_class=true' : ''}`
        + `${this.state.have_fourth_class ? '&have_fourth_class=true' : ''}`
        + `${this.state.have_first_class ? '&have_first_class=true' : ''}`
        + `${this.state.have_wifi ? '&have_wifi=true' : ''}`
        + `${this.state.have_express ? '&have_express=true' : ''}`
        + (`${this.state.sort}` ? `&sort=${this.state.sort}` : ''))
        .then(response => response.json())
        .then(data => {
          console.log(data);
          return data;
        })
        .then(data => this.setState({
          total_count: data.total_count,
          items: data.items,
          whereFromDate: this.props.form.whereFromDate,
          whereToDate: this.props.form.whereToDate,
          have_second_class: this.state.have_second_class,
          have_third_class: this.state.have_third_class,
          have_fourth_class: this.state.have_fourth_class,
          have_first_class: this.state.have_first_class,
          have_wifi: this.state.have_wifi,
          have_express: this.state.have_express,
          sort: this.state.sort
        }));
    }
    console.log(this.state.items)
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

  checkFourthClass = (event) => {
    this.setState({have_fourth_class: event.currentTarget.checked})
  };

  checkFirstClass = (event) => {
    this.setState({have_first_class: event.currentTarget.checked})
  };

  checkWiFi = (event) => {
    this.setState({have_wifi: event.currentTarget.checked})
  };

  checkExpress = (event) => {
    this.setState({have_express: event.currentTarget.checked})
  };

  sortSearch = (event) => {
    this.setState({sort: event.currentTarget.value})
  };

  render() {
    const resultSearch = this.state.items ? this.state.items.map((el, idx) =>
      <ResultSearchTickets key={idx} state={el} />) : [];
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
                  <input type="checkbox" className="custom-control-input" id="customSwitch1"
                         checked={this.state.have_second_class} onChange={this.checkSecondClass}/>
                  <label className="custom-control-label" htmlFor="customSwitch1"></label>
                </div>
              </div>
              <div className="container economclass ml-5 d-flex">
                <img className="icon-coupe" src={iconEconomclass} alt="иконка Плацкарт"/>
                <p className="container">Плацкарт</p>
                <div className="custom-control custom-switch d-flex justify-content-end pr-5">
                  <input type="checkbox" className="custom-control-input" id="customSwitch2"
                         checked={this.state.have_third_class} onChange={this.checkThirdClass}/>
                  <label className="custom-control-label" htmlFor="customSwitch2"></label>
                </div>
              </div>
              <div className="container coupe ml-5 d-flex">
                <img className="icon-coupe" src={iconSedentary} alt="иконка Сидячий"/>
                <p className="container">Сидячий</p>
                <div className="custom-control custom-switch d-flex justify-content-end pr-5">
                  <input type="checkbox" className="custom-control-input" id="customSwitch3"
                         checked={this.state.have_fourth_class} onChange={this.checkFourthClass}/>
                  <label className="custom-control-label" htmlFor="customSwitch3"></label>
                </div>
              </div>
              <div className="container coupe ml-5 d-flex">
                <img className="icon-coupe" src={iconLuxury} alt="иконка Люкс"/>
                <p className="container">Люкс</p>
                <div className="custom-control custom-switch d-flex justify-content-end pr-5">
                  <input type="checkbox" className="custom-control-input" id="customSwitch4"
                         checked={this.state.have_first_class} onChange={this.checkFirstClass}/>
                  <label className="custom-control-label" htmlFor="customSwitch4"></label>
                </div>
              </div>
              <div className="container coupe ml-5 d-flex">
                <img className="icon-coupe" src={iconWifi} alt="иконка Wi-Fi"/>
                <p className="container">Wi-Fi</p>
                <div className="custom-control custom-switch d-flex justify-content-end pr-5">
                  <input type="checkbox" className="custom-control-input" id="customSwitch5"
                         checked={this.state.have_wifi} onChange={this.checkWiFi}/>
                  <label className="custom-control-label" htmlFor="customSwitch5"></label>
                </div>
              </div>
              <div className="container coupe ml-5 d-flex">
                <img className="icon-coupe" src={iconExpress} alt="иконка Экспресс"/>
                <p className="container">Экспресс</p>
                <div className="custom-control custom-switch d-flex justify-content-end pr-5">
                  <input type="checkbox" className="custom-control-input" id="customSwitch6"
                         checked={this.state.have_express} onChange={this.checkExpress}/>
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
              <div className="row text-right">сортировать по:&nbsp;
                <select className="custom-sort-train" name="sortTrain" id="sort" onChange={this.sortSearch}>
                  <option value="date">времени</option>
                  <option value="price">стоимости</option>
                  <option value="duration">длительности</option>
                </select>
              </div>
              <div className="row text-right">показывать по:&nbsp;
                <div>5</div>&nbsp;
                <div>10</div>&nbsp;
                <div>20</div>
              </div>
            </div>

            {resultSearch}

            <div className="row justify-content-end mt-5">
              <button className="page-search-select-number ml-3" to="/" type="button">
                <img src={iconSearchLeft} alt="иконка влево"/>
              </button>
              <button className="page-search-select-number ml-3" to="/" type="button">1</button>
              <button className="page-search-select-number ml-3" to="/" type="button">2</button>
              <button className="page-search-select-number ml-3" to="/" type="button">3</button>
              <button className="page-search-select-number ml-3" to="/" type="button">
                <img src={iconSearchDots} alt="иконка влево"/>
              </button>
              <button className="page-search-select-number ml-3" to="/" type="button">10</button>
              <NavLink className="page-search-select-number ml-3" to="/seat_selection" type="button">
                <img src={iconSearchRight} alt="иконка влево"/>
              </NavLink>
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