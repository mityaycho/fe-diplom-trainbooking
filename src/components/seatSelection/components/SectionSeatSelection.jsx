import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
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

const SectionSeatSelection = () => {
	return (
		<div>
			<div className="progress-state">
				<ul className="list-group list-group-horizontal justify-content-between w-100">
					<li className="progress-state-button tickets list-group-item w-50 justify-content-end d-flex font-weight-bold border-0">
						<p className="progress-state-number">1</p>
						<p className="progress-state-text mr-5">Билеты</p>
						<img className="justify-content-end ml-5" src={progressStateSelect} alt="..."/>
					</li>
					<li className="progress-state-button passengers list-group-item w-25 justify-content-end d-flex font-weight-bold border-0 bg-dark">
						<p className="progress-state-number">2</p>
						<p className="progress-state-text mr-5">Пассажиры</p>
						<img className="" src={progressStateDefault} alt="..."/>
					</li>
					<li className="progress-state-button payment list-group-item w-25 justify-content-end d-flex font-weight-bold border-0 bg-dark">
						<p className="progress-state-number">3</p>
						<p className="progress-state-text mr-5">Оплата</p>
						<img className="ml-4" src={progressStateDefault} alt="..."/>
					</li>
					<li className="progress-state-button check list-group-item w-50 justify-content-left d-flex font-weight-bold border-0 bg-dark">
						<p className="progress-state-number ml-5">4</p>
						<p className="progress-state-text ">Проверка</p>
					</li>
				</ul>
			</div>
			<div className="container d-flex">
				<div className="tickets-search-param col-lg-3 mt-5 mb-5">
					<div className="tickets-search-menu bg-dark pt-5 pb-1">
						<form className="form pl-4 pr-4 w-100" action="input">
							<p>Дата поездки</p>
							<div className="d-flex form-group">
								<input className="col-sm form-control" type="text" placeholder="дд/мм/гг" />
							</div>
						</form>
						<form className="form pt-3 pl-4 pr-4 w-100" action="input">
							<p>Дата возвращения</p>
							<div className="d-flex form-group">
								<input className="col-sm form-control" type="text" placeholder="дд/мм/гг" />
							</div>
						</form>
						<hr className="bg-light" />
						<div className="container coupe ml-5 d-flex">
							<img className="icon-coupe" src={iconCoupe} alt="иконка купе"/>
							<p className="container">Купе</p>
							<div className="custom-control custom-switch d-flex justify-content-end pr-5">
								<input type="checkbox" className="custom-control-input" id="customSwitch1"/>
								<label className="custom-control-label" for="customSwitch1"></label>
							</div>
						</div>
						<div className="container economclass ml-5 d-flex">
							<img className="icon-coupe" src={iconEconomclass} alt="иконка Плацкарт"/>
							<p className="container">Плацкарт</p>
							<div className="custom-control custom-switch d-flex justify-content-end pr-5">
								<input type="checkbox" className="custom-control-input" id="customSwitch2"/>
								<label className="custom-control-label" for="customSwitch2"></label>
							</div>
						</div>
						<div className="container coupe ml-5 d-flex">
							<img className="icon-coupe" src={iconSedentary} alt="иконка Сидячий"/>
							<p className="container">Сидячий</p>
							<div className="custom-control custom-switch d-flex justify-content-end pr-5">
								<input type="checkbox" className="custom-control-input" id="customSwitch3"/>
								<label className="custom-control-label" for="customSwitch3"></label>
							</div>
						</div>
						<div className="container coupe ml-5 d-flex">
							<img className="icon-coupe" src={iconLuxury} alt="иконка Люкс"/>
							<p className="container">Люкс</p>
							<div className="custom-control custom-switch d-flex justify-content-end pr-5">
								<input type="checkbox" className="custom-control-input" id="customSwitch4"/>
								<label className="custom-control-label" for="customSwitch4"></label>
							</div>
						</div>
						<div className="container coupe ml-5 d-flex">
							<img className="icon-coupe" src={iconWifi} alt="иконка Wi-Fi"/>
							<p className="container">Wi-Fi</p>
							<div className="custom-control custom-switch d-flex justify-content-end pr-5">
								<input type="checkbox" className="custom-control-input" id="customSwitch5"/>
								<label className="custom-control-label" for="customSwitch5"></label>
							</div>
						</div>
						<div className="container coupe ml-5 d-flex">
							<img className="icon-coupe" src={iconExpress} alt="иконка Экспресс"/>
							<p className="container">Экспресс</p>
							<div className="custom-control custom-switch d-flex justify-content-end pr-5">
								<input type="checkbox" className="custom-control-input" id="customSwitch6"/>
								<label className="custom-control-label" for="customSwitch6"></label>
							</div>
						</div>
						<hr className="bg-light" />
						<form className="form pt-3 pl-4 pr-4 w-100" action="input">
							<label htmlFor="customRange3">Стоимость</label>
							<input type="range" className="custom-range" min="0" max="5" step="0.5" id="customRange3"/>
						</form>
						<hr className="bg-light" />
						<div className="container d-flex justify-content-between w-100">
							<p className="ml-2 font-weight-bold"><img className="icon-coupe mr-3" src={iconThere} alt="иконка туда"/>Туда</p>
							<img className="icon-coupe mr-3" src={iconMinus} alt="иконка плюс"/>
						</div>
						<form className="form pl-4 pr-4 w-100" action="input">
							<label htmlFor="customRange3">Время отбытия</label>
							<input type="range" className="custom-range" min="0" max="5" step="0.5" id="customRange3"/>
						</form>
						<form className="form pl-4 pr-4 w-100" action="input">
							<div className="d-flex mt-4 justify-content-end">
								<label htmlFor="customRange3">Время прибытия</label>
							</div>
							<input type="range" className="custom-range" min="0" max="5" step="0.5" id="customRange3"/>
						</form>
						<hr className="bg-light" />
						<div className="container d-flex justify-content-between w-100">
							<p className="ml-2 font-weight-bold"><img className="icon-coupe mr-3" src={iconBack} alt="иконка обратно"/>Обратно</p>
							<img className="icon-coupe mr-3" src={iconMinus} alt="иконка плюс"/>
						</div>
						<form className="form pl-4 pr-4 w-100" action="input">
							<label htmlFor="customRange3">Время отбытия</label>
							<input type="range" className="custom-range" min="0" max="5" step="0.5" id="customRange3"/>
						</form>
						<form className="form mb-5 pl-4 pr-4 w-100" action="input">
							<div className="d-flex mt-4 justify-content-end">
								<label htmlFor="customRange3">Время прибытия</label>
							</div>
							<input type="range" className="custom-range" min="0" max="5" step="0.5" id="customRange3"/>
						</form>
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
				<div className="choice-of-place col-lg-9 pt-5 pb-5 pl-5">
					<h3 className="text-uppercase">выбор мест</h3>
					<div className="choice-of-place-there">
						<div className="choice-other-train-button d-flex mt-4">
							<button type="button" className="btn btn-outline-light p-0 ml-3"><img src={choiceOtherTrainButtonThere} alt="..."/></button>
							<button type="button" className="btn btn-outline-dark ml-3 font-weight-bold">Выбрать другой поезд</button>
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
								<label><imput type="checkbox" className="icon-vagon-conditioner align-self-center"/><span></span></label>
								<label><imput type="checkbox" className="icon-vagon-wifi align-self-center"/><span></span></label>
								<label><imput type="checkbox" className="icon-vagon-linens align-self-center"/><span></span></label>
								<label><imput type="checkbox" className="icon-vagon-cup align-self-center"/><span></span></label>
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
};

export default connect()(SectionSeatSelection);