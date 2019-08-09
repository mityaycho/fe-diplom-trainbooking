import React from 'react';
import { Link } from 'react-router-dom';
import iconThere from '../images/icon_there.png';
import iconBack from '../images/icon_back.png';
import iconMinus from '../images/icon_minus.png';
import iconRuble from '../images/icon_ruble.png';
import progressStateSelect from '../images/progress_state_select.png';
import progressStateSelected from '../images/progress_state_selected.png';
import progressStateDefault from '../images/progress_state_default.png';
import iconSearchThere from '../images/icon_search_there.png';
import iconRubleSmall from '../images/icon_ruble_small.png';
import iconPassanger from '../images/icon_passanger.png';
import iconMinusSircle from '../images/icon_minus_sircle.png';
import iconPlusSircle from '../images/icon_plus_sircle.png';
import iconCloseX from '../images/icon_close_x.png';
import iconCloseXSircle from '../images/icon_close_x_sircle.png';
import iconPlusSmallYellow from '../images/icon_plus_small_yellow.png';
import iconDawSircle from '../images/icon_daw_sircle.png';

const SectionSearchFivePage = () => {
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
						<img className="" src={progressStateSelect} alt="..."/>
					</li>
					<li class="progress-state-button payment list-group-item w-25 justify-content-end d-flex font-weight-bold border-0 bg-dark">
						<p className="progress-state-number">3</p>
						<p className="progress-state-text mr-5">Оплата</p>
						<img className="ml-4" src={progressStateDefault} alt="..."/>
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
								<img className="pl-4" src={iconMinusSircle} alt="..."/>
								<h5 className="ml-3">Пассажир 1</h5>
								<img className="ml-auto mr-5 mt-auto" src={iconCloseX} alt="..."/>
							</div>

							<select class="form-control w-25 ml-4 mt-4">
								<option>Взрослый</option>
								<option>Десткий</option>
							</select>
							<div className="d-flex">
								<form className="form pt-3 pl-4 pr-4 w-100" action="input">
									<p>Фамилия</p>
									<div className="form-group">
										<input className="col-sm form-control" type="text" placeholder="Мартынюк"/>
									</div>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-100" action="input">
									<p>Имя</p>
									<div className="form-group">
										<input className="col-sm form-control" type="text" placeholder="Ирина"/>
									</div>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-100" action="input">
									<p>Отчество</p>
									<div className="form-group">
										<input className="col-sm form-control" type="text" placeholder="Эдуардовна"/>
									</div>
								</form>
							</div>
							<div className="d-flex">
								<form className="form pt-3 pl-4 pr-4 w-25" action="input">
									<p>Пол</p>
									<label className="switch">
										<input type="checkbox"/>
										<span className="slider"></span>
									</label>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-25" action="input">
									<p>Дата рождения</p>
									<div className="form-group">
										<input className="col-sm form-control" type="text" placeholder="дд/мм/гг"/>
									</div>
								</form>
							</div>
							<div className="row border-bottom">
								<div className="form-group ml-5">
									<input type="checkbox"/>
								</div>
								<p className="ml-2">ограниченная подвижность</p>
							</div>
							<div className="row border-bottom">
								<form className="form ml-4 pt-3 pl-4 pr-4 w-25" action="input">
									<p>Тип докумета</p>
									<select class="form-control">
										<option>Паспорт РФ</option>
										<option>Свидетельство о рождении</option>
									</select>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-25" action="input">
									<p>Серия</p>
									<div className="form-group">
										<input className="col-sm form-control" type="text" placeholder="_ _ _ _"/>
									</div>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-25" action="input">
									<p>Номер</p>
									<div className="form-group">
										<input className="col-sm form-control" type="text" placeholder="_ _ _ _ _ _"/>
									</div>
								</form>
							</div>

							<div className="d-flex justify-content-end mt-4">
								<button type="button" className="btn btn-outline-dark m-3 pl-3 pr-3 font-weight-bold">Следующий пасссажир</button>
							</div>
						</div>
					</div>

					<div className="passengers-form-filling-box mt-5 mb-5 ml-5">
						<div className="passengers-form-filling col">
							<div className="passengers-form-number row border-bottom pt-4 pb-4">
								<img className="pl-4" src={iconMinusSircle} alt="..."/>
								<h5 className="ml-3">Пассажир 2</h5>
								<img className="ml-auto mr-5 mt-auto" src={iconCloseX} alt="..."/>
							</div>

							<select class="form-control w-25 ml-4 mt-4">
								<option>Десткий</option>
								<option>Взрослый</option>
							</select>
							<div className="d-flex">
								<form className="form pt-3 pl-4 pr-4 w-100" action="input">
									<p>Фамилия</p>
									<div className="form-group">
										<input className="col-sm form-control" type="text" placeholder="Мартынюк"/>
									</div>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-100" action="input">
									<p>Имя</p>
									<div className="form-group">
										<input className="col-sm form-control" type="text" placeholder="Ирина"/>
									</div>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-100" action="input">
									<p>Отчество</p>
									<div className="form-group">
										<input className="col-sm form-control" type="text" placeholder="Эдуардовна"/>
									</div>
								</form>
							</div>
							<div className="d-flex">
								<form className="form pt-3 pl-4 pr-4 w-25" action="input">
									<p>Пол</p>
									<label className="switch">
										<input type="checkbox"/>
										<span className="slider"></span>
									</label>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-25" action="input">
									<p>Дата рождения</p>
									<div className="form-group">
										<input className="col-sm form-control" type="text" placeholder="дд/мм/гг"/>
									</div>
								</form>
							</div>
							<div className="row border-bottom">
								<div className="form-group ml-5">
									<input type="checkbox"/>
								</div>
								<p className="ml-2">ограниченная подвижность</p>
							</div>

							<div className="row border-bottom">
								<form className="form ml-4 pt-3 pl-4 pr-4 w-50" action="input">
									<p>Тип докумета</p>
									<select class="form-control">
										<option>Свидетельство о рождении</option>
										<option>Паспорт РФ</option>
									</select>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-25" action="input">
									<p>Номер</p>
									<div className="form-group">
										<input className="col-sm form-control" type="text" placeholder="12 символов _ _ _ _"/>
									</div>
								</form>
							</div>
							<div className="d-flex justify-content-end mt-4">
								<button type="button" className="btn btn-outline-dark m-3 pl-3 pr-3 font-weight-bold">Следующий пасссажир</button>
							</div>
						</div>
					</div>

					<div className="passengers-form-filling-box mt-5 mb-5 ml-5">
						<div className="passengers-form-filling col">
							<div className="passengers-form-number row border-bottom pt-4 pb-4">
								<img className="pl-4" src={iconMinusSircle} alt="..."/>
								<h5 className="ml-3">Пассажир 2</h5>
								<img className="ml-auto mr-5 mt-auto" src={iconCloseX} alt="..."/>
							</div>
							<select class="form-control w-25 ml-4 mt-4">
								<option>Десткий</option>
								<option>Взрослый</option>
							</select>
							<div className="d-flex">
								<form className="form pt-3 pl-4 pr-4 w-100" action="input">
									<p>Фамилия</p>
									<div className="form-group">
										<input className="col-sm form-control" type="text" placeholder="Мартынюк"/>
									</div>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-100" action="input">
									<p>Имя</p>
									<div className="form-group">
										<input className="col-sm form-control" type="text" placeholder="Ирина"/>
									</div>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-100" action="input">
									<p>Отчество</p>
									<div className="form-group">
										<input className="col-sm form-control" type="text" placeholder="Эдуардовна"/>
									</div>
								</form>
							</div>
							<div className="d-flex">
								<form className="form pt-3 pl-4 pr-4 w-25" action="input">
									<p>Пол</p>
									<label className="switch">
										<input type="checkbox"/>
										<span className="slider"></span>
									</label>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-25" action="input">
									<p>Дата рождения</p>
									<div className="form-group">
										<input className="col-sm form-control" type="text" placeholder="дд/мм/гг"/>
									</div>
								</form>
							</div>
							<div className="row border-bottom">
								<div className="form-group ml-5">
									<input type="checkbox"/>
								</div>
								<p className="ml-2">ограниченная подвижность</p>
							</div>
							<div className="d-flex">
								<form className="form pt-3 pl-4 pr-4 w-50" action="input">
									<p>Тип докумета</p>
									<select class="form-control">
										<option>Свидетельство о рождении</option>
										<option>Паспорт РФ</option>
									</select>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-25" action="input">
									<p>Номер</p>
									<div className="form-group">
										<input className="form-control" type="text" placeholder="12 символов _ _ _ _"/>
									</div>
								</form>
							</div>
							<div className="form-passport-danger row mt-4">
								<img className="pl-4 align-self-center" src={iconCloseXSircle} alt="..."/>
								<p className="col align-self-center mb-n3 pt-3">Номер свидетельства о рожденни указан некорректно <p className="d-flex">Пример:<p className="font-weight-bold pl-1">VIII-ЫП-123456</p></p></p>
							</div>
						</div>
					</div>

					<div className="passengers-form-filling-box mt-5 mb-5 ml-5">
						<div className="passengers-form-filling col">
							<div className="passengers-form-number row border-bottom pt-4 pb-4">
								<img className="pl-4" src={iconMinusSircle} alt="..."/>
								<h5 className="ml-3">Пассажир 2</h5>
								<img className="ml-auto mr-5 mt-auto" src={iconCloseX} alt="..."/>
							</div>
							<select class="form-control w-25 ml-4 mt-4">
								<option>Десткий</option>
								<option>Взрослый</option>
							</select>
							<div className="d-flex">
								<form className="form pt-3 pl-4 pr-4 w-100" action="input">
									<p>Фамилия</p>
									<div className="form-group">
										<input className="col-sm form-control" type="text" placeholder="Мартынюк"/>
									</div>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-100" action="input">
									<p>Имя</p>
									<div className="form-group">
										<input className="col-sm form-control" type="text" placeholder="Ирина"/>
									</div>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-100" action="input">
									<p>Отчество</p>
									<div className="form-group">
										<input className="col-sm form-control" type="text" placeholder="Эдуардовна"/>
									</div>
								</form>
							</div>
							<div className="d-flex">
								<form className="form pt-3 pl-4 pr-4 w-25" action="input">
									<p>Пол</p>
									<label className="switch">
										<input type="checkbox"/>
										<span className="slider"></span>
									</label>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-25" action="input">
									<p>Дата рождения</p>
									<div className="form-group">
										<input className="col-sm form-control" type="text" placeholder="дд/мм/гг"/>
									</div>
								</form>
							</div>
							<div className="row  border-bottom">
								<div className="form-group ml-5">
									<input type="checkbox"/>
								</div>
								<p className="ml-2">ограниченная подвижность</p>
							</div>
							<div className="d-flex">
								<form className="form pt-3 pl-4 pr-4 w-50" action="input">
									<p>Тип докумета</p>
									<select class="form-control">
										<option>Свидетельство о рождении</option>
										<option>Паспорт РФ</option>
									</select>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-25" action="input">
									<p>Номер</p>
									<div className="form-group">
										<input className="form-control" type="text" placeholder="12 символов _ _ _ _"/>
									</div>
								</form>
							</div>
							<div className="form-passport-ready row mt-4">
								<img className="pl-4 align-self-center" src={iconDawSircle} alt="..."/>
								<p className="col align-self-center text-light mt-3">Готово</p>
								<div className="d-flex justify-content-end mt-4">
									<button type="button" className="btn btn-outline-dark m-3 mt-n2 pl-3 pr-3 font-weight-bold">Следующий пасссажир</button>
								</div>
							</div>
						</div>
					</div>

					<div className="passengers-form-filling-box mt-5 mb-5 ml-5">
						<div className="passengers-form-filling col">
							<div className="passengers-form-number row pt-4 pb-4">
								<img className="pl-4" src={iconPlusSircle} alt="..."/>
								<h5 className="ml-3">Пассажир 3</h5>
							</div>
						</div>
					</div>

					<div className="passengers-form-filling-box mt-5 mb-5 ml-5">
						<div className="passengers-form-filling col">
							<div className="passengers-form-number row pt-4 pb-4">
								<h5 className="ml-3">Добавить пассажира</h5>
								<img className="ml-auto mr-5 mt-auto" src={iconPlusSmallYellow} alt="..."/>
							</div>
						</div>
					</div>

					<div className="d-flex justify-content-end">
						<Link className="btn btn-secondary text-white font-weight-bold pl-5 pr-5 mt-5 mb-5" to="/six_page" type="button">Далее</Link>
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default SectionSearchFivePage;