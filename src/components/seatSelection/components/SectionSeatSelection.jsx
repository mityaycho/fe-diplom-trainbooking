import React from 'react';
import progressStateSelect from '../../../images/progress_state_select.png';
import progressStateDefault from '../../../images/progress_state_default.png';
import ProgressLineCost from '../../shared/ProgressLineCost';
import SideBarSearchTicketsAndSeatSelection from '../../shared/SideBarSearchTicketsAndSeatSelection';
import choiceOtherTrainButtonThere from '../../../images/choice_other_train_button_there.png';
import iconSearchThere from '../../../images/icon_search_there.png';
import choiceOtherTrainButtonBack from '../../../images/choice_other_train_button_back.png';
import iconSearchBack from '../../../images/icon_search_back.png';
import TrainTicket from './TrainTicket';

import { connect } from 'react-redux';
import { setRouteTrainSeatAC, passengersAndPayAC } from '../../../redux/action';
import { withRouter, NavLink } from 'react-router-dom';



class SectionSeatSelection extends React.Component {

	state = {
		coach_id: '',
		seat_number: '',
		is_child: false,
		include_children_seat: false,
		sumSeats: 0
	}

	setCoachId = (id) => this.setState({ coach_id: id });

	setSeatNumber = (event) => this.setState({ seat_number: event.currentTarget.innerHTML });

	setAdultSeats = (value) => {
		this.setState({ sumSeats: this.state.sumSeats + value });
		this.props.setPassengersAndPay('ticketsAdult', value);
	}

	setChildSeat = (value) => {
		this.setState({ sumSeats: this.state.sumSeats + value, is_child: value !== 0 ? true : false });
		this.props.setPassengersAndPay('ticketsChild', value);
	}

	setChildWithoutSeat = (value) => {
		this.props.setPassengersAndPay('ticketsChildWithoutPlace', value);
		this.setState({ include_children_seat: value !== 0 ? true : false });
	}

	setRouteTrainSeatReducer = () => {
		this.props.history.push('/passengers')
		this.props.setRouteTrainSeat(
			this.props.trainId,
			this.state.coach_id,
			this.state.seat_number,
			this.state.is_child,
			this.state.include_children_seat);
	}

	trainButtonFrom = <div className="choice-other-train-button d-flex mt-4">
		<button type="button" className="btn btn-outline-light p-0 ml-3"><img src={choiceOtherTrainButtonThere} alt="..." /></button>
		<NavLink type="button"
			className="btn btn-outline-dark ml-3 pl-5 pr-5 pt-3 font-weight-bold"
			to="/search_tickets">Выбрать другой поезд</NavLink>
	</div>;

	trainButtonTo = <div className="choice-other-train-button d-flex justify-content-end mt-4">
		<button type="button" className="btn btn-outline-light p-0"><img src={choiceOtherTrainButtonBack} alt="..." /></button>
		<NavLink type="button" className="btn btn-outline-dark ml-3 mr-3 pl-5 pr-5 pt-3 font-weight-bold"
			to="/search_tickets">Выбрать другой поезд</NavLink>
	</div>;

	render() {

		const ticketSelected = this.props.ticketsArray.find(el => el.departure._id === this.props.trainId);
		let fromDateTime = ticketSelected.departure.from.datetime;
		let toDateTime = ticketSelected.departure.to.datetime;
		let duration = ticketSelected.departure.duration;
		let fromArrival = fromDateTime + duration;
		let toArrival = toDateTime + duration;

		return (
			<div>
				<ProgressLineCost tickets={progressStateSelect}
					passengers={progressStateDefault}
					passengersClass=""
					payment={progressStateDefault}
					paymentClass=""
					checkClass="" />

				<div className="container d-flex">
					<SideBarSearchTicketsAndSeatSelection />
					<div className="choice-of-place col-lg-9 pt-5 pb-5 pl-5">
						<h3 className="text-uppercase">выбор мест</h3>
						<TrainTicket
							trainButton={this.trainButtonFrom}
							trainName={ticketSelected.departure.train.name}
							cityNameDeparture={ticketSelected.departure.from.city.name}
							cityNameArrival={ticketSelected.departure.to.city.name}
							railwayStationDeparture={ticketSelected.departure.from.railway_station_name}
							railwayStationArrival={ticketSelected.departure.to.railway_station_name}
							dateTime={fromDateTime}
							arrivalTime={fromArrival}
							duration={duration}
							iconSearch={iconSearchThere}
							choiceSeatsArray={this.props.choiceSeatsArray}
							setCoachId={this.setCoachId}
							setSeatNumber={this.setSeatNumber}
							setAdultSeats={this.setAdultSeats}
							setChildSeat={this.setChildSeat}
							setChildWithoutSeat={this.setChildWithoutSeat}
							sumSeats={this.state.sumSeats} />
						<TrainTicket
							trainButton={this.trainButtonTo}
							trainName={ticketSelected.departure.train.name}
							cityNameDeparture={ticketSelected.departure.to.city.name}
							cityNameArrival={ticketSelected.departure.from.city.name}
							railwayStationDeparture={ticketSelected.departure.to.railway_station_name}
							railwayStationArrival={ticketSelected.departure.from.railway_station_name}
							dateTime={toDateTime}
							arrivalTime={toArrival}
							duration={duration}
							iconSearch={iconSearchBack}
							choiceSeatsArray={this.props.choiceSeatsArray}
							setCoachId={this.setCoachId}
							setSeatNumber={this.setSeatNumber}
							setAdultSeats={this.setAdultSeats}
							setChildSeat={this.setChildSeat}
							setChildWithoutSeat={this.setChildWithoutSeat}
							sumSeats={this.state.sumSeats} />
						<div className="d-flex justify-content-end">
							<button className="btn btn-warning text-white font-weight-bold pl-5 pr-5 mt-5 mb-5" type="button" onClick={this.setRouteTrainSeatReducer}>Далее</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		form: state.sectionSearch.form,
		ticketsArray: state.filterChoiceTicketsAndSeatsPages.ticketsArray,
		choiceSeatsArray: state.filterChoiceTicketsAndSeatsPages.choiceSeatsArray,
		trainId: state.filterChoiceTicketsAndSeatsPages.trainId
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setRouteTrainSeat: (train, coach_id, trainId, seat_number, is_child, include_children_seat) => {
			const action = setRouteTrainSeatAC(train, coach_id, trainId, seat_number, is_child, include_children_seat);
			dispatch(action);
		},
		setPassengersAndPay: (fieldName, fieldValue) => dispatch(passengersAndPayAC(fieldName, fieldValue))
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SectionSeatSelection));