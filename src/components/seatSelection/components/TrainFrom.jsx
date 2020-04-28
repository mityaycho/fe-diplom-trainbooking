import React from 'react';
import choiceTrainIcon from '../../../images/icon_choice_train.png';
import choiceTimeIcon from '../../../images/icon_choice_time.png';
import choiceOtherTrainButtonThere from '../../../images/choice_other_train_button_there.png';
import iconSearchThere from '../../../images/icon_search_there.png';
import { NavLink } from 'react-router-dom';
import TrainFourthJSX from './TrainFourthJSX';
import TrainThirdJSX from './TrainThirdJSX';
import TrainSecondJSX from './TrainSecondJSX';
import TrainFirstJSX from './TrainFirstSX';
import { connect } from 'react-redux';


class TrainFrom extends React.Component {

	state = {
		fourthClass: false,
		thirdClass: false,
		secondClass: false,
		firstClass: false,
		fourth: true,
		third: true,
		second: true,
		first: true,
	}

	setFourthClass = () => this.setState({ fourthClass: true, thirdClass: false, secondClass: false, firstClass: false });

	setThirdClass = () => this.setState({ fourthClass: false, thirdClass: true, secondClass: false, firstClass: false });

	setSecondClass = () => this.setState({ fourthClass: false, thirdClass: false, secondClass: true, firstClass: false });

	setFirstClass = () => this.setState({ fourthClass: false, thirdClass: false, secondClass: false, firstClass: true });

	render() {

		let fromDateTime = this.props.ticket.departure.from.datetime;
		let toDateTime = this.props.ticket.departure.to.datetime;
		let duration = this.props.ticket.departure.duration;
		let fromArrival = fromDateTime + duration;
		let toArrival = toDateTime + duration;

		const getHours = (msc) => new Date(msc).getHours();
		const getMinutes = (msc) => (new Date(msc).getMinutes() < 10 ? '0' : '') + new Date(msc).getMinutes();

		const seatsArr = this.props.choiceSeatsArray;

		for (let i = 0; i <= seatsArr.length; i++) {
			console.log(seatsArr[i])
			// for (let type in this.props.choiceSeatsArray[0].coach.class_type) {
			// 	this.setState({[type]: false});
			// }
		}

		const seatJSX = this.props.choiceSeatsArray.map(el => el.coach.class_type === 'fourth' ?
		el.seats.map(elem => <div className="index">{elem.index}</div>) : '')

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
				<div className="choice-type-vagon-button d-flex justify-content-between mt-4 mb-2">
					<button type="button" className="btn btn-outline-light ml-5" 
					disabled={this.state.fourth}
					onClick={this.setFourthClass}>
						<div className="icon-type-vagon-seat align-self-center"></div>
						<p>Сидячий</p>
					</button>
					<button type="button" className="btn btn-outline-light" 
					disabled={this.state.third}
					onClick={this.setThirdClass}>
						<div className="icon-type-vagon-reserved-seat align-self-center"></div>
						<p>Плацкарт</p>
					</button>
					<button type="button" className="btn btn-outline-light" 
					disabled={this.state.second}
					onClick={this.setSecondClass}>
						<div className="icon-type-vagon-coupe align-self-center"></div>
						<p>Купе</p>
					</button>
					<button type="button" className="btn btn-outline-light mr-5" 
					disabled={this.state.first}
					onClick={this.setFirstClass}>
						<div className="icon-type-vagon-luxury align-self-center"></div>
						<p>Люкс</p>
					</button>
				</div>
				{this.state.fourthClass && <TrainFourthJSX />}
				{this.state.thirdClass && <TrainThirdJSX />}
				{this.state.secondClass && <TrainSecondJSX />}
				{this.state.firstClass && <TrainFirstJSX />}
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