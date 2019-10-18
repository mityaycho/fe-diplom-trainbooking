import React from 'react';
import {NavLink} from 'react-router-dom';
import iconThere from '../images/icon_there.png';
import iconBack from '../images/icon_back.png';
import iconMinus from '../images/icon_minus.png';
import iconRuble from '../images/icon_ruble.png';
import progressStateSelected from '../images/progress_state_selected.png';
import iconSearchThere from '../images/icon_search_there.png';
import iconRubleSmall from '../images/icon_ruble_small.png';
import iconPassanger from '../images/icon_passanger.png';
import iconTicketTrain from '../images/icon_ticket_train.png';
import iconArrowRightGray from '../images/icon_arrow_right_gray.png'
import iconArrowRightBlack from '../images/icon_arrow_right_black.png'
import iconSearchBack from '../images/icon_search_back.png';
import iconWifiRocketCup from '../images/icons_wifiRocketCup.png';
import iconPassangerSircle from '../images/icon_passanger_sircle.png';

const SectionCheckConfirmOrder = () => {
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
						<img className="ml-4" src={progressStateSelected} alt="..."/>
					</li>
					<li class="progress-state-button check list-group-item w-50 justify-content-left d-flex font-weight-bold border-0">
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
							<h7 className="ml-2 text-white-50">30.08.2018</h7>
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
							<h7 className="ml-2 text-white-50">09.09.2018</h7>
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

				<div className="tickets-search-result col-lg-9 pt-5 pb-5 pl-5">
					<div className="result-search-of-tickets col">
						<h5 className="row p-4 border-bottom mb-0">Поезд</h5>
						<div className="row">
							<div className="select-tickets-search-number-train col-lg-3 pt-5 pb-5">
								<img className="pl-5" src={iconTicketTrain} alt="иконка поезда"/>
								<h5 className="text-center">116C</h5>
								<p className="pl-3 pt-5 text-black-50">Адлер<img className="pl-2" src={iconArrowRightGray} alt="..."/></p>
								<p className="pl-3">Москва<img className="pl-2" src={iconArrowRightBlack} alt="..."/></p>
								<p className="pl-3">Санкт-Петербург</p>
							</div>
							<div className="col-lg-9">
								<div className="row pl-4 mr-4 pt-5 justify-content-between">
									<div>
										<h5>00:10</h5>
										<p>Москва</p>
										<p className="text-black-50">Курский вокзал</p>
									</div>
									<div className="pl-4">
										<p className="text-black-50">9:42</p>
										<img src={iconSearchThere} alt="иконка стрелки вправо"/>
									</div>
									<div className="pl-4">
										<h5>9:52</h5>
										<p>Санкт-Петербург</p>
										<p className="text-black-50">Ладожский вокзал</p>
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
								<div className="row pl-4 mr-4 pt-3 justify-content-between">
									<div>
										<h5>00:10</h5>
										<p>Москва</p>
										<p className="text-black-50">Курский вокзал</p>
									</div>
									<div className="ml-4">
										<p className="text-black-50">9:42</p>
										<img src={iconSearchBack} alt="иконка стрелки вправо"/>
									</div>
									<div className="ml-4">
										<h5>9:52</h5>
										<p>Санкт-Петербург</p>
										<p className="text-black-50">Ладожский вокзал</p>
									</div>
									<div className="pl-5">
										<div className="row">
											<p className="pr-4">Люкс</p>
											<p className="quantity-places-orange pl-2 ml-auto">15</p>
											<p className="ml-2">от</p>
											<h5 className="mt-n2 ml-2">4 920</h5>
											<img className="align-self-senter mt-n1 pl-1 h-100" src={iconRubleSmall} alt="..."/>
										</div>
									</div>
								</div>
								<div className="row justify-content-end pr-4">
									<img className="align-self-senter mt-n1 pl-1 h-100" src={iconWifiRocketCup} alt="..."/>
								</div>
								<div className="row justify-content-end">
									<button className="btn btn-outline-dark font-weight-bold btn-sm m-4 col-lg-3" type="button">Изменить</button>
								</div>
							</div>
						</div>
					</div>

					<div className="result-search-of-tickets col mt-5">
						<h5 className="row p-4 border-bottom mb-0">Пассажиры</h5>
						<div className="row">
							<div className="col-lg-8">
								<div className="row pl-4 pt-3 border-bottom border-right">
									<div className="col-lg-2">
										<img src={iconPassangerSircle} alt="..."/>
										<h6 className="mt-3">Взрослый</h6>
									</div>
									<div className="col ml-3">
										<h6>Мартынюк Ирина Эдуардовна</h6>
										<p className="text-black-50 mt-3">Пол женский</p>
										<p className="text-black-50 mt-4">Дата рождения 17.02.1985</p>
										<p className="text-black-50 mt-4">Паспорт РФ 4204 380694</p>
									</div>
								</div>
								<div className="row pl-4 pt-3 border-bottom border-right">
									<div className="col-lg-2">
										<img src={iconPassangerSircle} alt="..."/>
										<h6 className="mt-3">Детский</h6>
									</div>
									<div className="col ml-3">
										<h6>Мартынюк Кирилл Сергеевич</h6>
										<p className="text-black-50 mt-3">Пол мужской</p>
										<p className="text-black-50 mt-4">Дата рождения 25.01.2006</p>
										<p className="text-black-50 mt-4">Свидетельство о рождении VIII УН 256319</p>
									</div>
								</div>
								<div className="row pl-4 pt-3 pb-3 border-right">
									<div className="col-lg-2">
										<img src={iconPassangerSircle} alt="..."/>
										<h6 className="mt-3">Взрослый</h6>
									</div>
									<div className="col ml-3">
										<h6>Мартынюк Сергей Петрович</h6>
										<p className="text-black-50 mt-3">Пол мужской</p>
										<p className="text-black-50 mt-4">Дата рождения 19.06.1982</p>
										<p className="text-black-50 mt-4">Паспорт РФ 4204 380694</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 pb-3 align-self-end">
								<div className="row justify-content-end mt-4 mb-2">
									<h4 className="mr-3">Всего</h4>
									<h4 className="mr-3">7 760<img className="ml-2" src={iconRuble} alt="..."/></h4>
								</div>
								<div className="row justify-content-end">
									<button className="btn btn-outline-dark font-weight-bold btn-sm mr-4 pl-5 pr-5" type="button">Изменить</button>
								</div>
							</div>
						</div>
					</div>
					<div className="result-search-of-tickets col mt-5">
						<h5 className="row p-4 border-bottom mb-0">Способ оплаты</h5>
						<h6 className="row pl-4 pt-4">Наличными</h6>
						<div className="row justify-content-end">
							<button className="btn btn-outline-dark font-weight-bold btn-sm m-4 pl-5 pr-5" type="button">Изменить</button>
						</div>
					</div>
					<div className="d-flex justify-content-end mt-5">
						<NavLink className="btn btn-warning text-white text-uppercase pl-5 pr-5 mt-5 mb-3" to="/order_confirmed" type="button">подтвердить</NavLink>
					</div>
				</div>

				
			</div>
		</div>
	);
};

export default SectionCheckConfirmOrder;