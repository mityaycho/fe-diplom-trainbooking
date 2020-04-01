import React from 'react';
import iconCoupe from '../../../images/icon_coupe.png';
import iconEconomclass from '../../../images/icon_economclass.png';
import iconSedentary from '../../../images/icon_sedentary.png';
import iconLuxury from '../../../images/icon_luxury.png';
import iconWifi from '../../../images/icon_wifi.png';
import iconExpress from '../../../images/icon_express.png';
import iconThere from '../../../images/icon_there.png';
import iconBack from '../../../images/icon_back.png';
import iconPlus from '../../../images/icon_plus.png';
import iconSearchLeft from '../../../images/icon_page_search_left.png';
import iconSearchRight from '../../../images/icon_page_search_right.png';
import iconSearchDots from '../../../images/icon_page_search_dots.png';
import progressStateSelect from '../../../images/progress_state_select.png';
import progressStateDefault from '../../../images/progress_state_default.png';
import {setDataFormAC} from '../../../redux/action';
import {connect} from 'react-redux';
import ResultSearchTickets from './ResultSearchTickets';
import iconMinus from "../../../images/icon_minus.png";
import ProgressLineCost from "../../shared/ProgressLineCost";
import LastRoutes from './LastRoutes';


class SectionSearchTickets extends React.Component {
  state = {
    customRangeCostFrom: false,
    customRangeCostTo: false,
    total_count: 0,
		items: [],
		lastRoutes: [],
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_first_class: false,
    have_wifi: false,
    have_express: false,
    whereFromDate: undefined,
    whereToDate: undefined,
    sort: 'date',
    limit: '5'
  };

  componentDidMount() {
		fetch( 'https://netology-trainbooking.herokuapp.com/routes/last' )
		.then( response => response.json())
		.then(data => {
			console.log(data);
			return data;
		})
    .then( data => this.setState({lastRoutes: data}));


    fetch(`https://netology-trainbooking.herokuapp.com/`
      + `routes?from_city_id=${this.props.form.cityWhereFromId}&to_city_id=${this.props.form.cityWhereToId}`
      + `${this.state.have_second_class ? '&have_second_class=true' : ''}`
      + `${this.state.have_third_class ? '&have_third_class=true' : ''}`
      + `${this.state.have_fourth_class ? '&have_fourth_class=true' : ''}`
      + `${this.state.have_first_class ? '&have_first_class=true' : ''}`
      + `${this.state.have_wifi ? '&have_wifi=true' : ''}`
      + `${this.state.have_express ? '&have_express=true' : ''}`
      + (`${this.state.sort}` ? `&sort=${this.state.sort}` : '')
      + (`${this.state.limit}` ? `&limit=${this.state.limit}` : ''))
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
        sort: this.state.sort,
        limit: this.state.limit
      }));


    // fetch(`https://netology-trainbooking.herokuapp.com/`
    //   + `routes?from_city_id=${this.props.form.cityWhereFromId}&to_city_id=${this.props.form.cityWhereToId}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     return data;
    //   })
    //   .then(data => this.setState({
    //     total_count: data.total_count,
    //     whereFromDate: this.props.form.whereFromDate,
    //     whereToDate: this.props.form.whereToDate
    //   }));

    // test url from work UI

    // fetch(`https://netology-trainbooking.herokuapp.com/routes?from_city_id=5b9a2fa7f83e028786ea5672&to_city_id=5b9a2fa7f83e028786ea5673`)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     return data;
    //   })
    //   .then(data => this.setState({
    //     total_count: data.total_count,
    //     whereFromDate: this.props.form.whereFromDate,
    //     whereToDate: this.props.form.whereToDate,
    //     have_second_class: this.state.have_second_class
    //   }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.total_count !== this.state.total_count ||
      prevState.have_second_class !== this.state.have_second_class ||
      prevState.have_third_class !== this.state.have_third_class ||
      prevState.have_fourth_class !== this.state.have_fourth_class ||
      prevState.have_first_class !== this.state.have_first_class ||
      prevState.have_wifi !== this.state.have_wifi ||
      prevState.have_express !== this.state.have_express ||
      prevState.sort !== this.state.sort ||
      prevState.limit !== this.state.limit) {
      fetch(`https://netology-trainbooking.herokuapp.com/`
        + `routes?from_city_id=${this.props.form.cityWhereFromId}&to_city_id=${this.props.form.cityWhereToId}`
        + `${this.state.have_second_class ? '&have_second_class=true' : ''}`
        + `${this.state.have_third_class ? '&have_third_class=true' : ''}`
        + `${this.state.have_fourth_class ? '&have_fourth_class=true' : ''}`
        + `${this.state.have_first_class ? '&have_first_class=true' : ''}`
        + `${this.state.have_wifi ? '&have_wifi=true' : ''}`
        + `${this.state.have_express ? '&have_express=true' : ''}`
        + (`${this.state.sort}` ? `&sort=${this.state.sort}` : '')
        + (`${this.state.limit}` ? `&limit=${this.state.limit}` : ''))
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
          sort: this.state.sort,
          limit: this.state.limit
        }));
    }
    console.log(this.state.items)
  };

  setWhereFromDate = (event) => this.setState({whereFromDate: event.currentTarget.value});

  setWhereToDate = (event) => this.setState({whereToDate: event.currentTarget.value});

  checkSecondClass = (event) => this.setState({have_second_class: event.currentTarget.checked});

  checkThirdClass = (event) => this.setState({have_third_class: event.currentTarget.checked});

  checkFourthClass = (event) => this.setState({have_fourth_class: event.currentTarget.checked});

  checkFirstClass = (event) => this.setState({have_first_class: event.currentTarget.checked});

  checkWiFi = (event) => this.setState({have_wifi: event.currentTarget.checked});

  checkExpress = (event) => this.setState({have_express: event.currentTarget.checked});

  sortSearch = (event) => this.setState({sort: event.currentTarget.value});

  filterChoiceTickets = (event) => this.setState({limit: event.currentTarget.innerHTML});

  setCustomRangeCostFrom = (bool) => this.setState({customRangeCostFrom: bool});

  setCustomRangeCostTo = (bool) => this.setState({customRangeCostTo: bool});

  render() {
    let classFilterChoiceFive = this.state.limit === "5" ? "filter-choice-tickets-active" : "filter-choice-tickets";
    let classFilterChoiceTen = this.state.limit === "10" ? "filter-choice-tickets-active" : "filter-choice-tickets";
    let classFilterChoiceTwenty = this.state.limit === "20" ? "filter-choice-tickets-active" : "filter-choice-tickets";

    let pages = Math.ceil(Number(this.state.total_count) / Number(this.state.limit));
    let buttonsPages = [];
    for (let i = 1; i < pages; i++) {
      buttonsPages.push(<button className="page-search-select-number ml-3" key={i} type="button">{i}</button>);
		}
		
		const lastRoutesJSX = this.state.lastRoutes ? this.state.lastRoutes.map((el, idx) => 
		<LastRoutes key={idx} state={el}/>) : [];

    const resultSearch = this.state.items ? this.state.items.map((el, idx) =>
      <ResultSearchTickets key={idx} state={el}/>) : [];

    return (
      <div className="text-white tickets-search-window ">
        <ProgressLineCost tickets={progressStateSelect}
                          passengers={progressStateDefault}
                          passengersClass=""
                          payment={progressStateDefault}
                          paymentClass=""
                          checkClass=""/>

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
              <div className="row ml-1">
                <div className="container coupe ml-3 d-flex">
                  <img className="icon-coupe" src={iconCoupe} alt="иконка купе"/>
                  <p className="container">Купе</p>
                  <div className="custom-control custom-switch d-flex justify-content-end mr-4">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1"
                           checked={this.state.have_second_class} onChange={this.checkSecondClass}/>
                    <label className="custom-control-label" htmlFor="customSwitch1"></label>
                  </div>
                </div>
                <div className="container economclass ml-3 d-flex">
                  <img className="icon-coupe" src={iconEconomclass} alt="иконка Плацкарт"/>
                  <p className="container">Плацкарт</p>
                  <div className="custom-control custom-switch d-flex justify-content-end mr-4">
                    <input type="checkbox" className="custom-control-input" id="customSwitch2"
                           checked={this.state.have_third_class} onChange={this.checkThirdClass}/>
                    <label className="custom-control-label" htmlFor="customSwitch2"></label>
                  </div>
                </div>
                <div className="container coupe ml-3 d-flex">
                  <img className="icon-coupe" src={iconSedentary} alt="иконка Сидячий"/>
                  <p className="container">Сидячий</p>
                  <div className="custom-control custom-switch d-flex justify-content-end mr-4">
                    <input type="checkbox" className="custom-control-input" id="customSwitch3"
                           checked={this.state.have_fourth_class} onChange={this.checkFourthClass}/>
                    <label className="custom-control-label" htmlFor="customSwitch3"></label>
                  </div>
                </div>
                <div className="container coupe ml-3 d-flex">
                  <img className="icon-coupe" src={iconLuxury} alt="иконка Люкс"/>
                  <p className="container">Люкс</p>
                  <div className="custom-control custom-switch d-flex justify-content-end mr-4">
                    <input type="checkbox" className="custom-control-input" id="customSwitch4"
                           checked={this.state.have_first_class} onChange={this.checkFirstClass}/>
                    <label className="custom-control-label" htmlFor="customSwitch4"></label>
                  </div>
                </div>
                <div className="container coupe ml-3 d-flex">
                  <img className="icon-coupe" src={iconWifi} alt="иконка Wi-Fi"/>
                  <p className="container">Wi-Fi</p>
                  <div className="custom-control custom-switch d-flex justify-content-end mr-4">
                    <input type="checkbox" className="custom-control-input" id="customSwitch5"
                           checked={this.state.have_wifi} onChange={this.checkWiFi}/>
                    <label className="custom-control-label" htmlFor="customSwitch5"></label>
                  </div>
                </div>
                <div className="container coupe ml-3 d-flex">
                  <img className="icon-coupe" src={iconExpress} alt="иконка Экспресс"/>
                  <p className="container">Экспресс</p>
                  <div className="custom-control custom-switch d-flex justify-content-end mr-4">
                    <input type="checkbox" className="custom-control-input" id="customSwitch6"
                           checked={this.state.have_express} onChange={this.checkExpress}/>
                    <label className="custom-control-label" htmlFor="customSwitch6"></label>
                  </div>
                </div>
              </div>


              <hr className="bg-light"/>
              <form className="form pt-3 pl-4 pr-4 w-100">
                <label className="custom-range-cost" htmlFor="customRange3">Стоимость</label>
                <div className="row justify-content-between ml-1 mr-1"><span>от</span><span>до</span></div>
                <input type="range" className="custom-range" min="0" max="5" step="0.5" id="customRange3"/>
                <div className="row justify-content-between ml-1 mr-1"><span>0</span><span>7000</span></div>
              </form>

              {/*<CustomInputRange/>*/}


              <hr className="bg-light"/>
              {this.state.customRangeCostFrom ?
                <div>
                  <div className="container d-flex justify-content-between w-100">
                    <p className="custom-range-cost ml-2 mt-2 font-weight-bold">
                      <img className="mr-2" src={iconThere} alt="иконка туда"/>Туда</p>
                    <img className="custom-range-cost-check icon-coupe mr-3 mt-3"
                         onClick={() => this.setCustomRangeCostFrom(false)}
                         src={iconMinus} alt="иконка плюс"/>
                  </div>
                  <form className="form pl-4 pr-4 w-100">
                    <label htmlFor="customRange3">Время отбытия</label>
                    <input type="range" className="custom-range" min="0" max="5" step="0.5" id="customRange3"/>
                  </form>
                  <form className="form pl-4 pr-4 w-100">
                    <div className="d-flex mt-4 justify-content-end">
                      <label htmlFor="customRange3">Время прибытия</label>
                    </div>
                    <input type="range" className="custom-range" min="0" max="5" step="0.5" id="customRange3"/>
                  </form>
                </div> :
                <div className="container d-flex justify-content-between w-100">
                  <p className="custom-range-cost ml-2 mt-2 font-weight-bold">
                    <img className="mr-2"
                         src={iconThere}
                         alt="иконка туда"/>Туда</p>
                  <img className="custom-range-cost-check icon-coupe mr-3 mt-3"
                       onClick={() => this.setCustomRangeCostFrom(true)}
                       src={iconPlus} alt="иконка плюс"/>
                </div>}

              <hr className="bg-light"/>

              {this.state.customRangeCostTo ?
                <div>
                  <div className="container d-flex justify-content-between w-100">
                    <p className="custom-range-cost ml-2 mt-2 font-weight-bold">
                      <img className="mr-2" src={iconBack} alt="иконка туда"/>Обратно</p>
                    <img className="custom-range-cost-check icon-coupe mr-3 mt-3"
                         onClick={() => this.setCustomRangeCostTo(false)}
                         src={iconMinus} alt="иконка плюс"/>
                  </div>
                  <form className="form pl-4 pr-4 w-100">
                    <label htmlFor="customRange3">Время отбытия</label>
                    <input type="range" className="custom-range" min="0" max="5" step="0.5" id="customRange3"/>
                  </form>
                  <form className="form pl-4 pr-4 w-100">
                    <div className="d-flex mt-4 justify-content-end">
                      <label htmlFor="customRange3">Время прибытия</label>
                    </div>
                    <input type="range" className="custom-range" min="0" max="5" step="0.5" id="customRange3"/>
                  </form>
                </div> :
                <div className="container d-flex justify-content-between w-100">
                  <p className="custom-range-cost ml-2 mt-2 pb-3 font-weight-bold">
                    <img className="mr-2"
                         src={iconBack}
                         alt="иконка обратно"/>Обратно</p>
                  <img className="custom-range-cost-check icon-coupe mr-3 mt-3"
                       onClick={() => this.setCustomRangeCostTo(true)}
                       src={iconPlus} alt="иконка плюс"/>
                </div>
              }
            </div>


						<div className="last-tickets">
							<h4 className="mt-5 mb-2">Последние билеты</h4>
            	{lastRoutesJSX}
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
              <div className="row text-right ml-5 mr-3">показывать по:&nbsp;
                <button className={classFilterChoiceFive}
                        onClick={this.filterChoiceTickets}>5
                </button>
                <button className={classFilterChoiceTen}
                        onClick={this.filterChoiceTickets}>10
                </button>
                <button className={classFilterChoiceTwenty}
                        onClick={this.filterChoiceTickets}>20
                </button>
              </div>
            </div>

            {resultSearch}

            <div className="row justify-content-end mt-5">
              <button className="page-search-select-number ml-3" type="button">
                <img src={iconSearchLeft} alt="иконка влево"/>
              </button>

              {buttonsPages}

              <button className="page-search-select-number ml-3" type="button">
                <img src={iconSearchDots} alt="иконка точки"/>
              </button>
              <button className="page-search-select-number ml-3" type="button">10</button>
              <button className="page-search-select-number ml-3" type="button">
                <img src={iconSearchRight} alt="иконка вправо"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionSearchTickets);