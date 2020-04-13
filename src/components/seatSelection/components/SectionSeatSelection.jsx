import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {setDataFormAC} from '../../../redux/action';
import iconCoupe from '../../../images/icon_coupe.png';
import iconEconomclass from '../../../images/icon_economclass.png';
import iconSedentary from '../../../images/icon_sedentary.png';
import iconLuxury from '../../../images/icon_luxury.png';
import iconWifi from '../../../images/icon_wifi.png';
import iconExpress from '../../../images/icon_express.png';
import iconThere from '../../../images/icon_there.png';
import iconBack from '../../../images/icon_back.png';
import iconMinus from '../../../images/icon_minus.png';
import iconRuble from '../../../images/icon_ruble.png';
import iconWifiRocketCup from '../../../images/icons_wifiRocketCup.png';
import progressStateSelect from '../../../images/progress_state_select.png';
import progressStateDefault from '../../../images/progress_state_default.png';
import choiceOtherTrainButtonThere from '../../../images/choice_other_train_button_there.png';
import choiceTrainIcon from '../../../images/icon_choice_train.png';
import iconSearchThere from '../../../images/icon_search_there.png';
import choiceTimeIcon from '../../../images/icon_choice_time.png';
import iconRubleSmall from '../../../images/icon_ruble_small.png';
import imageVagonPlaces from '../../../images/image_vagon_places.png';
import choiceOtherTrainButtonBack from '../../../images/choice_other_train_button_back.png';
import iconSearchBack from '../../../images/icon_search_back.png';
import ProgressLineCost from '../../shared/ProgressLineCost';
import SideBarSearchTicketsAndSeatSelection from '../../shared/SideBarSearchTicketsAndSeatSelection';

class SectionSeatSelection extends React.Component {
	render () {
		return (
			<div>
				<ProgressLineCost tickets={progressStateSelect}
													passengers={progressStateDefault}
													passengersClass=""
													payment={progressStateDefault}
													paymentClass=""
													checkClass=""/>

				<div className="container d-flex">
					<SideBarSearchTicketsAndSeatSelection />
					<div className="choice-of-place col-lg-9 pt-5 pb-5 pl-5">
						<h3 className="text-uppercase">выбор мест</h3>
						<div className="choice-of-place-there">
							<div className="choice-other-train-button d-flex mt-4">
								<button type="button" className="btn btn-outline-light p-0 ml-3"><img src={choiceOtherTrainButtonThere} alt="..."/></button>
								<NavLink type="button" 
								className="btn btn-outline-dark ml-3 font-weight-bold pt-3"
								to="/search_tickets">Выбрать другой поезд</NavLink>
							</div>
							<div className="choice-ticket-train-there d-flex mt-4 pt-3 justify-content-between">
								<div className="d-flex">
									<img className="align-self-center ml-5 mr-5" src={choiceTrainIcon} alt="..."/>
									<ul className="list-unstyled">
										<li className="font-weight-bold">116C</li>
										<li>Адлер</li>
										<li>Москва</li>
										<li>Санкт-Петербург</li>
									</ul>
								</div>
								<div className="d-flex">
									<ul className="list-unstyled align-self-center">
										<li className="font-weight-bold">00:10</li>
										<li className="">Москва</li>
										<li className="font-weight-light">Курский вокзал</li>
									</ul>
									<img className="col align-self-center" src={iconSearchThere} alt="иконка стрелки вправо"/>
									<ul className="list-unstyled align-self-center">
										<li className="font-weight-bold">09:52</li>
										<li className="">Санкт-Петербург</li>
										<li className="font-weight-light">Ладожский вокзал</li>
									</ul>
								</div>
								<div className="d-flex mr-5">
									<img className="align-self-center" src={choiceTimeIcon} alt="..."/>
									<ul className="list-unstyled align-self-center mt-2 ml-2">
										<li className="font-weight-bold">9 часов</li>
										<li className="font-weight-bold">42 минуты</li>
									</ul>
								</div>
							</div>
							<h4 className="font-weight-bold mt-5 ml-3">Количество билетов</h4>
							<div className="d-flex h-100">
								<div className="quantity-tickets-check-there-left col pl-4">
									<button type="button" className="btn btn-outline-dark mt-4 btn-block text-left mr-2">Взрослых — 2</button>
									<p className="mt-3">Можно добавить еще 3 пассажиров</p>
								</div>
								<div className="quantity-tickets-check-there-center col">
									<button type="button" className="btn btn-outline-dark mt-4 btn-block text-left mr-2">Детских — 1</button>
									<p className="mt-3">Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</p>
								</div>
								<div className="col"><button type="button" className="btn btn-outline-dark mt-4">Детских «без места» — 0</button></div>
							</div>
							<div className="horizontal-line-gray mt-5 mb-5"></div>
							<h5 className="font-weight-bold ml-3">Тип вагона</h5>
							<div className="choice-type-vagon-button d-flex justify-content-between mt-4">
								<button type="button" className="btn btn-outline-light ml-5">
									<a className="icon-type-vagon-seat align-self-center" href="#a.a"/>
									<p>Сидячий</p>
								</button>
								<button type="button" className="btn btn-outline-light">
									<a className="icon-type-vagon-reserved-seat align-self-center" href="a#"/>
									<p>Плацкарт</p>
								</button>
								<button type="button" className="btn btn-outline-light">
									<a className="icon-type-vagon-coupe align-self-center" href="a#"/>
									<p>Купе</p>
								</button>
								<button type="button" className="btn btn-outline-light mr-5">
									<a className="icon-type-vagon-luxury align-self-center" href="a#"/>
									<p>Люкс</p>
								</button>
							</div>
							<div className="number-of-vagon d-flex justify-content-between">
								<div className="d-flex">
									<p>Вагоны</p>
									<p className="font-weight-bold text-white ml-1">07</p>
									<p className="font-weight-bold ml-1">09</p>
								</div>
								<p>Нумерация вагонов начинается с головы поезда</p>
							</div>
							<div className="number-of-vagon-checked d-flex">
								<div className="number-of-vagon-checked-yellow">
									<p className="number-of-vagon-checked-yellow-number">07</p>
									<p className="number-of-vagon-checked-yellow-text">вагон</p>
								</div>
								<div className="col ml-5 mt-3">
									<p>места 11</p>
									<p>Верхние 3</p>
									<p>Нижние 8</p>
								</div>
								<div className="col ml-5 mt-3">
									<p>Стоимость</p>
									<p>2 920<img className="align-self-center ml-1" src={iconRubleSmall} alt="..."/></p>
									<p>3 530<img className="align-self-center ml-1" src={iconRubleSmall} alt="..."/></p>
								</div>
								<div className="col-lg-4 mt-3">
									<p>Обслуживание ФПК</p>
									<div>
									<label><input type="checkbox" className="icon-vagon-conditioner align-self-center"/><span></span></label>
									<label><input type="checkbox" className="icon-vagon-wifi align-self-center"/><span></span></label>
									<label><input type="checkbox" className="icon-vagon-linens align-self-center"/><span></span></label>
									<label><input type="checkbox" className="icon-vagon-cup align-self-center"/><span></span></label>
									</div>
								</div>
							</div>
							<div className="d-flex justify-content-end">
								<p className="number-of-people-online mr-4">11 человек выбирают места в этом поезде</p>
							</div>
							<img className="image-vagon-places" src={imageVagonPlaces} alt="..."/>
						</div>
						<div className="choce-of-place-back mt-3 mb-5 pb-5">
							<div className="choice-other-train-button d-flex justify-content-end mt-4">
								<button type="button" className="btn btn-outline-light p-0"><img src={choiceOtherTrainButtonBack} alt="..."/></button>
								<button type="button" className="btn btn-outline-dark ml-3 mr-3 font-weight-bold">Выбрать другой поезд</button>
							</div>
							<div className="choice-ticket-train-back d-flex mt-4 pt-3 justify-content-between">
								<div className="d-flex">
									<img className="align-self-center ml-5 mr-5" src={choiceTrainIcon} alt="..."/>
									<ul className="list-unstyled">
										<li className="font-weight-bold">116C</li>
										<li>Адлер</li>
										<li>Москва</li>
										<li>Санкт-Петербург</li>
									</ul>
								</div>
								<div className="d-flex">
									<ul className="list-unstyled align-self-center">
										<li className="font-weight-bold">00:10</li>
										<li className="">Москва</li>
										<li className="font-weight-light">Курский вокзал</li>
									</ul>
									<img className="col align-self-center" src={iconSearchBack} alt="иконка стрелки вправо"/>
									<ul className="list-unstyled align-self-center">
										<li className="font-weight-bold">09:52</li>
										<li className="">Санкт-Петербург</li>
										<li className="font-weight-light">Ладожский вокзал</li>
									</ul>
								</div>
								<div className="d-flex mr-5">
									<img className="align-self-center" src={choiceTimeIcon} alt="..."/>
									<ul className="list-unstyled align-self-center mt-2 ml-2">
										<li className="font-weight-bold">9 часов</li>
										<li className="font-weight-bold">42 минуты</li>
									</ul>
								</div>
							</div>
							<h4 className="font-weight-bold mt-5 ml-3">Количество билетов</h4>
							<div className="d-flex h-100">
								<div className="quantity-tickets-check-back-left col pl-4">
									<button type="button" className="btn btn-outline-dark mt-4 btn-block text-left mr-2">Взрослых — 2</button>
									<p className="mt-3">Можно добавить еще 3 пассажиров</p>
								</div>
								<div className="col">
									<button type="button" className="btn btn-outline-dark mt-4 btn-block text-left mr-2">Детских — 0</button>
									<p className="mt-3"></p>
								</div>
								<div className="col"><button type="button" className="btn btn-outline-dark mt-4">Детских «без места» — 0</button></div>
							</div>
							<div className="horizontal-line-gray mt-5 mb-5"></div>
							<h5 className="font-weight-bold ml-3">Тип вагона</h5>
							<div className="choice-type-vagon-button d-flex justify-content-between mt-4">
								<button type="button" className="btn btn-outline-light ml-5">
									<a className="icon-type-vagon-seat align-self-center" href="a#"/>
									<p>Сидячий</p>
								</button>
								<button type="button" className="btn btn-outline-light">
									<a className="icon-type-vagon-reserved-seat align-self-center" href="a#"/>
									<p>Плацкарт</p>
								</button>
								<button type="button" className="btn btn-outline-light">
									<a className="icon-type-vagon-coupe align-self-center" href="a#"/>
									<p>Купе</p>
								</button>
								<button type="button" className="btn btn-outline-light mr-5">
									<a className="icon-type-vagon-luxury align-self-center" href="a#"/>
									<p>Люкс</p>
								</button>
							</div>
						</div>
						<div className="d-flex justify-content-end">
							<NavLink className="btn btn-warning text-white font-weight-bold pl-5 pr-5 mt-5 mb-5" to="/passengers" type="button">Далее</NavLink>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionSeatSelection);