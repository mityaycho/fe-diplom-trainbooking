import React from 'react';
import choiceTrainIcon from '../../../images/icon_choice_train.png';
import choiceTimeIcon from '../../../images/icon_choice_time.png';
import choiceOtherTrainButtonBack from '../../../images/choice_other_train_button_back.png';
import iconSearchBack from '../../../images/icon_search_back.png';



const TrainTo = (props) => {
	return (
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
									<a className="icon-type-vagon-seat align-self-center" href="a#"> </a>
									<p>Сидячий</p>
								</button>
								<button type="button" className="btn btn-outline-light">
									<a className="icon-type-vagon-reserved-seat align-self-center" href="a#"> </a>
									<p>Плацкарт</p>
								</button>
								<button type="button" className="btn btn-outline-light">
									<a className="icon-type-vagon-coupe align-self-center" href="a#"> </a>
									<p>Купе</p>
								</button>
								<button type="button" className="btn btn-outline-light mr-5">
									<a className="icon-type-vagon-luxury align-self-center" href="a#"> </a>
									<p>Люкс</p>
								</button>
							</div>
						</div>
	);
}

export default TrainTo;