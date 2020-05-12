import React from 'react';
import choiceTrainIcon from '../../../images/icon_choice_train.png';
import choiceTimeIcon from '../../../images/icon_choice_time.png';
import TrainJSX from './TrainJSX';
import train_fourth_class from '../../../images/train_fourth_class.png';
import train_third_class from '../../../images/train_third_class.png';
import train_second_class from '../../../images/train_second_class.png';
import train_first_class from '../../../images/train_first_class.png';
import iconRuble from '../../../images/icon_ruble.png';


class TrainFrom extends React.Component {

	state = {
		fourthClass: false,
		thirdClass: false,
		secondClass: false,
		firstClass: false,
		fourth: [],
		third: [],
		second: [],
		first: [],
		sumTickets: 0
	}

	setFourthClass = () => {
		this.props.choiceSeatsArray.map(el => {
			if (el.coach.class_type === 'fourth') {
				this.props.setCoachId(el.coach._id);
				this.setState({
					sumTickets: this.props.sumSeats * el.coach.top_price,
					fourth: el,
					fourthClass: true,
					thirdClass: false,
					secondClass: false,
					firstClass: false
				});
			}
		});
	}

	setThirdClass = () => {
		this.props.choiceSeatsArray.map(el => {
			if (el.coach.class_type === 'third') {
				this.props.setCoachId(el.coach._id);
				this.setState({
					sumTickets: this.props.sumSeats * el.coach.top_price,
					third: el,
					fourthClass: false,
					thirdClass: true,
					secondClass: false,
					firstClass: false
				});
			}
		});
	}

	setSecondClass = () => {
		this.props.choiceSeatsArray.map(el => {
			if (el.coach.class_type === 'second') {
				this.props.setCoachId(el.coach._id);
				this.setState({
					sumTickets: this.props.sumSeats * el.coach.top_price,
					second: el,
					fourthClass: false,
					thirdClass: false,
					secondClass: true,
					firstClass: false
				});
			}
		});
	}

	setFirstClass = () => {
		this.props.choiceSeatsArray.map(el => {
			if (el.coach.class_type === 'first') {
				console.log(el)
				this.props.setCoachId(el.coach._id);
				this.setState({
					sumTickets: this.props.sumSeats * el.coach.top_price,
					first: el,
					fourthClass: false,
					thirdClass: false,
					secondClass: false,
					firstClass: true
				});
			}
		});
	}

	render() {

		const getHours = (msc) => new Date(msc).getHours();
		const getMinutes = (msc) => (new Date(msc).getMinutes() < 10 ? '0' : '') + new Date(msc).getMinutes();


		return (
			<div className="choice-of-place-there mb-3">
				{this.props.trainButton}
				<div className="choice-ticket-train-there d-flex mt-4 pt-3 justify-content-between">
					<div className="d-flex">
						<img className="align-self-center ml-5 mr-5" src={choiceTrainIcon} alt="..." />
						<ul className="list-unstyled">
							<li className="font-weight-bold">{this.props.trainName}</li>
							<li>Адлер</li>
							<li>{this.props.cityNameDeparture}</li>
							<li>{this.props.cityNameArrival}</li>
						</ul>
					</div>
					<div className="d-flex">
						<ul className="list-unstyled align-self-center">
							<li className="font-weight-bold">{getHours(this.props.dateTime)}:{getMinutes(this.props.dateTime)}</li>
							<li className="">{this.props.cityNameDeparture}</li>
							<li className="font-weight-light">{this.props.railwayStationDeparture}</li>
						</ul>
						<img className="col align-self-center" src={this.props.iconSearch} alt="иконка стрелки вправо" />
						<ul className="list-unstyled align-self-center">
							<li className="font-weight-bold">{getHours(this.props.arrivalTime)}:{getMinutes(this.props.arrivalTime)}</li>
							<li className="">{this.props.cityNameArrival}</li>
							<li className="font-weight-light">{this.props.railwayStationArrival}</li>
						</ul>
					</div>
					<div className="d-flex mr-5">
						<img className="align-self-center" src={choiceTimeIcon} alt="..." />
						<ul className="list-unstyled align-self-center mt-2 ml-2">
							<li className="font-weight-bold">{getHours(this.props.duration)} часов</li>
							<li className="font-weight-bold">{getMinutes(this.props.duration)} минуты</li>
						</ul>
					</div>
				</div>
				<h4 className="font-weight-bold mt-5 ml-3">Количество билетов</h4>
				<div className="d-flex">
					<div className="quantity-tickets-check-left col">
						<select className="custom-select mt-4"
							onChange={(e) => this.props.setSeats(+e.currentTarget.value)}>
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
						<select className="custom-select mt-4"
							onChange={(e) => this.props.setChildSeat(+e.currentTarget.value)}>
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
						<select className="custom-select mt-4"
							onChange={(e) => this.props.setChildWithoutSeat(+e.currentTarget.value)}>
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
				{this.state.sumTickets !== 0 &&
					<div className="row justify-content-end mr-3 mb-3">
						<p className="last-ticket-price ml-1">{this.state.sumTickets}</p>
						<img className="icon-coupe ml-1" src={iconRuble} alt="иконка рубль" />
					</div>}
			</div>
		);
	}
}

export default (TrainFrom);