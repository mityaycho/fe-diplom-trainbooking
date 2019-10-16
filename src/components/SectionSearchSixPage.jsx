import React from 'react';
import {NavLink} from 'react-router-dom';
import iconThere from '../images/icon_there.png';
import iconBack from '../images/icon_back.png';
import iconMinus from '../images/icon_minus.png';
import iconRuble from '../images/icon_ruble.png';
import progressStateSelect from '../images/progress_state_select.png';
import progressStateSelected from '../images/progress_state_selected.png';
import iconSearchThere from '../images/icon_search_there.png';
import iconRubleSmall from '../images/icon_ruble_small.png';
import iconPassanger from '../images/icon_passanger.png';

const SectionSearchSixPage = () => {
	return (
		<div>
			<div className="progress-state">
				<ul class="list-group list-group-horizontal justify-content-between w-100">
					<li class="progress-state-button tickets list-group-item w-50 justify-content-end d-flex font-weight-bold border-0">
						<p className="progress-state-number">1</p>
						<p className="progress-state-text mr-5">Билеты</p>
						<img className="justify-content-end ml-5" src={progressStateSelected} alt="..."/>
					</li>
					<li class="progress-state-button passengers list-group-item w-25 justify-content-end d-flex font-weight-bold border-0">
						<p className="progress-state-number">2</p>
						<p className="progress-state-text mr-5">Пассажиры</p>
						<img className="" src={progressStateSelected} alt="..."/>
					</li>
					<li class="progress-state-button payment list-group-item w-25 justify-content-end d-flex font-weight-bold border-0">
						<p className="progress-state-number">3</p>
						<p className="progress-state-text mr-5">Оплата</p>
						<img className="ml-4" src={progressStateSelect} alt="..."/>
					</li>
					<li class="progress-state-button check list-group-item w-50 justify-content-left d-flex font-weight-bold border-0 bg-dark">
						<p className="progress-state-number ml-5">4</p>
						<p className="progress-state-text ">Проверка</p>
					</li>
				</ul>
			</div>
			<div className="container d-flex">
				<div className="trip-details-tickets col-lg-3 mt-5 mb-5">
					<div className="trip-details bg-dark pt-4 pb-4">
						<h5 className="text-center text-uppercase">Детали поездки</h5>
						<hr className="bg-light mt-4"/>
						<div className="d-flex align-items-center">
							<img className="ml-3" src={iconThere} alt="иконка туда"/>
							<h5 className="ml-2">Туда</h5>
							<h7 className="ml-2 font-weight-light">30.08.2018</h7>
							<img className="ml-auto mr-3" src={iconMinus} alt="..."/>
						</div>
						<div className="d-flex justify-content-between">
							<div className="ml-3">
								<p className="mt-3">№ Поезда</p>
								<p className="mt-3">Название</p>
							</div>
							<div className="mr-3 text-right">
								<h6 className="mt-3">116С</h6>
								<p className="mt-3">Адлер</p>
								<p className="mt-n3">Санкт-Петербург</p>
							</div>
						</div>
						<div className="d-flex justify-content-between">
							<div className="ml-3 mt-3">
								<h6>00:10</h6>
								<p className="text-white-50">30.08.2018</p>
							</div>
							<div>
								<p>9:42</p>
								<img className="mt-n4" src={iconSearchThere} alt="иконка стрелки вправо"/>
							</div>
							<div className="mr-3 mt-3 text-right">
								<h6>9:52</h6>
								<p className="text-white-50">31.08.2018</p>
							</div>
						</div>
						<div className="d-flex justify-content-between">
							<div className="ml-3">
								<h7>Москва</h7>
								<p className="text-white-50">Курский </p>
								<p className="mt-n3 text-white-50">вокзал</p>
							</div>
							<div className="mr-3 text-right">
								<h7>Санкт-Петербург</h7>
								<p className="text-white-50">Ладожский</p>
								<p className="mt-n3 text-white-50">вокзал</p>
							</div>
						</div>
						<hr className="bg-light"/>

						<div className="d-flex align-items-center">
							<img className="ml-3" src={iconBack} alt="иконка туда"/>
							<h5 className="ml-2">Обратно</h5>
							<h7 className="ml-2 font-weight-light">09.09.2018</h7>
							<img className="ml-auto mr-3" src={iconMinus} alt="..."/>
						</div>
						<div className="d-flex justify-content-between">
							<div className="ml-3">
								<p className="mt-3">№ Поезда</p>
								<p className="mt-3">Название</p>
							</div>
							<div className="mr-3 text-right">
								<h6 className="mt-3">116С</h6>
								<p className="mt-3">Адлер</p>
								<p className="mt-n3">Санкт-Петербург</p>
							</div>
						</div>
						<div className="d-flex justify-content-between">
							<div className="ml-3 mt-3">
								<h6>00:10</h6>
								<p className="text-white-50">09.09.2018</p>
							</div>
							<div>
								<p>9:42</p>
								<img className="mt-n4" src={iconSearchThere} alt="иконка стрелки вправо"/>
							</div>
							<div className="mr-3 mt-3 text-right">
								<h6>9:52</h6>
								<p className="text-white-50">08.09.2018</p>
							</div>
						</div>
						<div className="d-flex justify-content-between">
							<div className="ml-3">
								<h7>Москва</h7>
								<p className="text-white-50">Курский </p>
								<p className="mt-n3 text-white-50">вокзал</p>
							</div>
							<div className="mr-3 text-right">
								<h7>Санкт-Петербург</h7>
								<p className="text-white-50">Ладожский</p>
								<p className="mt-n3 text-white-50">вокзал</p>
							</div>
						</div>
						<hr className="bg-light"/>

						<div className="d-flex align-items-center">
							<img className="ml-3" src={iconPassanger} alt="иконка пасссажир"/>
							<h5 className="ml-2">Пассажиры</h5>
							<img className="ml-auto mr-3" src={iconMinus} alt="..."/>
						</div>
						<div className="d-flex justify-content-between">
							<div className="ml-3 mt-3">
								<p>2 Взрослых</p>
								<p>1 Ребенок</p>
							</div>
							<div className="mr-3 mt-3">
								<h6>5 840<img className="ml-1" src={iconRubleSmall} alt="..."/></h6>
								<h6>1 920<img className="ml-1" src={iconRubleSmall} alt="..."/></h6>
							</div>
						</div>
						<hr className="bg-light"/>
						<div className="d-flex justify-content-between mt-4">
							<h3 className="ml-3">Итог</h3>
							<h3 className="mr-3 text-warning">7 760<img className="ml-2" src={iconRuble} alt="..."/></h3>
						</div>
					</div>
				</div>

				<div className="col-lg-9 mb-5">
					<div className="passengers-form-filling-box mt-5 mb-5 ml-5">
						<div className="passengers-form-filling col">
							<div className="passengers-form-number border-bottom row pt-4 pb-4">
								<h5 className="ml-5">Персональные данные</h5>
							</div>

							<div className="d-flex">
								<form className="form pt-3 pl-4 pr-4 w-100" action="input">
									<p>Фамилия</p>
									<div className="d-flex form-group">
										<input className="col-sm form-control" type="text" placeholder="Мартынюк"/>
									</div>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-100" action="input">
									<p>Имя</p>
									<div className="d-flex form-group">
										<input className="col-sm form-control" type="text" placeholder="Ирина"/>
									</div>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-100" action="input">
									<p>Отчество</p>
									<div className="d-flex form-group">
										<input className="col-sm form-control" type="text" placeholder="Эдуардовна"/>
									</div>
								</form>
							</div>
							<form className="form pt-3 pl-4 pr-4 w-50" action="input">
								<p>Контактный телефон</p>
								<div className="d-flex form-group">
									<input className="col-sm form-control" type="text" placeholder="+7 ___ ___ __ __"/>
								</div>
							</form>
							<form className="form pt-3 pl-4 pr-4 w-50" action="input">
								<p>E-mail</p>
								<div className="d-flex form-group">
									<input className="col-sm form-control" type="text" placeholder="+inbox@gmail.ru"/>
								</div>
							</form>

							<div className="passengers-form-number border-top border-bottom row pt-4 pb-4">
								<h5 className="ml-5">Способ оплаты</h5>
							</div>

							<div className="row pl-5 mt-4">
								<div className="form-group">
									<input type="checkbox"/>
								</div>
								<p className="ml-2 text-black-50">Онлайн</p>
							</div>
							<ul className="list-group list-group-horizontal justify-content-between w-75 ml-3">
								<li className="list-group-item w-50 border-0 font-weight-bold">Банковской картой</li>
								<li className="list-group-item w-50 border-0 font-weight-bold">PayPal</li>
								<li className="list-group-item w-50 border-0 font-weight-bold">Visa QIWI Wallet</li>
							</ul>
							<div className="row p-5 border-top">
								<div className="form-group">
									<input type="checkbox"/>
								</div>
								<p className="ml-2 text-black-50">Наличными</p>
							</div>
						</div>
						<div className="d-flex justify-content-end mt-5">
							<NavLink className="btn btn-warning text-white font-weight-bold pl-5 pr-5 mt-5 mb-3" to="/seven_page" type="button">купить билеты</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionSearchSixPage;