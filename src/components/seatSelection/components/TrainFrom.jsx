import React from 'react';
import choiceTrainIcon from '../../../images/icon_choice_train.png';
import choiceTimeIcon from '../../../images/icon_choice_time.png';
import choiceOtherTrainButtonThere from '../../../images/choice_other_train_button_there.png';
import iconSearchThere from '../../../images/icon_search_there.png';
import TrainJSX from './TrainJSX';
import train_fourth_class from '../../../images/train_fourth_class.png';
import train_third_class from '../../../images/train_third_class.png';
import train_second_class from '../../../images/train_second_class.png';
import train_first_class from '../../../images/train_first_class.png';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


class TrainFrom extends React.Component {

	state = {
		fourthClass: false,
		thirdClass: false,
		secondClass: false,
		firstClass: false,
		fourth: [],
		third: [],
		second: [],
		first: []
	}

	setFourthClass = () => {
		this.props.choiceSeatsArray.map(el => {
			if (el.coach.class_type === 'fourth') {
				this.props.setCoachId(el.coach._id);
				this.setState({ fourth: el, fourthClass: true, thirdClass: false, secondClass: false, firstClass: false });
			}
		});
	}

	setThirdClass = () => {
		this.props.choiceSeatsArray.map(el => {
			if (el.coach.class_type === 'third') {
				this.props.setCoachId(el.coach._id);
				this.setState({ third: el, fourthClass: false, thirdClass: true, secondClass: false, firstClass: false });
			}
		});
	}

	setSecondClass = () => {
		this.props.choiceSeatsArray.map(el => {
			if (el.coach.class_type === 'second') {
				this.props.setCoachId(el.coach._id);
				this.setState({ second: el, fourthClass: false, thirdClass: false, secondClass: true, firstClass: false });
			}
		});
	}

	setFirstClass = () => {
		this.props.choiceSeatsArray.map(el => {
			if (el.coach.class_type === 'first') {
				this.props.setCoachId(el.coach._id);
				this.setState({ first: el, fourthClass: false, thirdClass: false, secondClass: false, firstClass: true });
			}
		});
	}

	render() {

		let fromDateTime = this.props.ticket.departure.from.datetime;
		// let toDateTime = this.props.ticket.departure.to.datetime;
		let duration = this.props.ticket.departure.duration;
		let fromArrival = fromDateTime + duration;
		// let toArrival = toDateTime + duration;

		const getHours = (msc) => new Date(msc).getHours();
		const getMinutes = (msc) => (new Date(msc).getMinutes() < 10 ? '0' : '') + new Date(msc).getMinutes();


		return (
			<div className="choice-of-place-there mb-3">
				<div className="choice-other-train-button d-flex mt-4">
					<button type="button" className="btn btn-outline-light p-0 ml-3"><img src={choiceOtherTrainButtonThere} alt="..." /></button>
					<NavLink type="button"
						className="btn btn-outline-dark ml-3 pl-5 pr-5 pt-3 font-weight-bold"
						to="/search_tickets">Выбрать другой поезд</NavLink>
				</div>
				<div className="choice-ticket-train-there d-flex mt-4 pt-3 justify-content-between">
					<div className="d-flex">
						<img className="align-self-center ml-5 mr-5" src={choiceTrainIcon} alt="..." />
						<ul className="list-unstyled">
							<li className="font-weight-bold">{this.props.ticket.departure.train.name}</li>
							<li>Адлер</li>
							<li>{this.props.ticket.departure.from.city.name}</li>
							<li>{this.props.ticket.departure.to.city.name}</li>
						</ul>
					</div>
					<div className="d-flex">
						<ul className="list-unstyled align-self-center">
							<li className="font-weight-bold">{getHours(fromDateTime)}:{getMinutes(fromDateTime)}</li>
							<li className="">{this.props.ticket.departure.from.city.name}</li>
							<li className="font-weight-light">{this.props.ticket.departure.from.railway_station_name}</li>
						</ul>
						<img className="col align-self-center" src={iconSearchThere} alt="иконка стрелки вправо" />
						<ul className="list-unstyled align-self-center">
							<li className="font-weight-bold">{getHours(fromArrival)}:{getMinutes(fromArrival)}</li>
							<li className="">{this.props.ticket.departure.to.city.name}</li>
							<li className="font-weight-light">{this.props.ticket.departure.to.railway_station_name}</li>
						</ul>
					</div>
					<div className="d-flex mr-5">
						<img className="align-self-center" src={choiceTimeIcon} alt="..." />
						<ul className="list-unstyled align-self-center mt-2 ml-2">
							<li className="font-weight-bold">{getHours(duration)} часов</li>
							<li className="font-weight-bold">{getMinutes(duration)} минуты</li>
						</ul>
					</div>
				</div>
				<h4 className="font-weight-bold mt-5 ml-3">Количество билетов</h4>
				<div className="d-flex">
					<div className="quantity-tickets-check-left col">
						<select className="custom-select mt-4">
							<option selected value="0">Взрослых - 0</option>
							<option value="1">Взрослых - 1</option>
							<option value="2">Взрослых - 2</option>
							<option value="3">Взрослых - 3</option>
							<option value="4">Взрослых - 4</option>
							<option value="5">Взрослых - 5</option>
						</select>
						<p className="mt-3">Можно добавить еще 3 пассажиров</p>
					</div>
					<div className="quantity-tickets-check-center col">
						<select className="custom-select mt-4" onChange={(e) => this.props.setChildSeat(e)}>
							<option selected value="0">Детских - 0</option>
							<option value="1">Детских - 1</option>
							<option value="2">Детских - 2</option>
							<option value="3">Детских - 3</option>
							<option value="4">Детских - 4</option>
							<option value="5">Детских - 5</option>
						</select>
						<p className="mt-3">Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</p>
					</div>
					<div className="quantity-tickets-check-right col">
					<select className="custom-select mt-4" onChange={(e) => this.props.setChildWithoutSeat(e)}>
							<option selected value="0">Детских «без места» - 0</option>
							<option value="1">Детских «без места» - 1</option>
							<option value="2">Детских «без места» - 2</option>
							<option value="3">Детских «без места» - 3</option>
							<option value="4">Детских «без места» - 4</option>
							<option value="5">Детских «без места» - 5</option>
						</select>
						</div>
				</div>
				<div className="horizontal-line-gray mt-5 mb-5"></div>
				<h5 className="font-weight-bold ml-3">Тип вагона</h5>
				<div className="choice-type-vagon-button d-flex justify-content-between mt-4 mb-2">
					<button type="button" className="btn btn-outline-light ml-5"
						onClick={this.setFourthClass}>
						<div className="icon-type-vagon-seat align-self-center"></div>
						<p>Сидячий</p>
					</button>
					<button type="button" className="btn btn-outline-light"
						onClick={this.setThirdClass}>
						<div className="icon-type-vagon-reserved-seat align-self-center"></div>
						<p>Плацкарт</p>
					</button>
					<button type="button" className="btn btn-outline-light"
						onClick={this.setSecondClass}>
						<div className="icon-type-vagon-coupe align-self-center"></div>
						<p>Купе</p>
					</button>
					<button type="button" className="btn btn-outline-light mr-5"
						onClick={this.setFirstClass}>
						<div className="icon-type-vagon-luxury align-self-center"></div>
						<p>Люкс</p>
					</button>
				</div>
				{this.state.fourthClass && <TrainJSX 
				train={this.state.fourth} image={train_fourth_class} setSeatNumber={this.props.setSeatNumber} />}
				{this.state.thirdClass && <TrainJSX 
				train={this.state.third} image={train_third_class} setSeatNumber={this.props.setSeatNumber} />}
				{this.state.secondClass && <TrainJSX 
				train={this.state.second} image={train_second_class} setSeatNumber={this.props.setSeatNumber} />}
				{this.state.firstClass && <TrainJSX 
				train={this.state.first} image={train_first_class} setSeatNumber={this.props.setSeatNumber} />}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		choiceSeatsArray: state.filterChoiceTicketsAndSeatsPages.choiceSeatsArray,
	};
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(TrainFrom);