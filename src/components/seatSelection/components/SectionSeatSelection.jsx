import React from 'react';
import progressStateSelect from '../../../images/progress_state_select.png';
import progressStateDefault from '../../../images/progress_state_default.png';
import ProgressLineCost from '../../shared/ProgressLineCost';
import SideBarSearchTicketsAndSeatSelection from '../../shared/SideBarSearchTicketsAndSeatSelection';
import { connect } from 'react-redux';
import { setRouteTrainSeatAC } from '../../../redux/action';
import { withRouter } from 'react-router-dom';
import TrainFrom from './TrainFrom';
import TrainTo from './TrainTo';



class SectionSeatSelection extends React.Component {

	state = {
		coach_id: '',
		seat_number: '',
		is_child: false,
		include_children_seat: false
	}

	setCoachId = (id) => this.setState({coach_id: id});

	setSeatNumber = (event) => this.setState({seat_number: event.currentTarget.innerHTML});

	setChildSeat = (event) => this.setState({is_child: +event.currentTarget.value !== 0 ? true : false});

	setChildWithoutSeat = (event) => this.setState({include_children_seat: +event.currentTarget.value !== 0 ? true : false});

	setRouteTrainSeatReducer = () => {
		this.props.history.push('/passengers')
		this.props.setRouteTrainSeat(
		this.props.trainId, 
		this.state.coach_id,
		this.state.seat_number,
		this.state.is_child,
		this.state.include_children_seat);
	}

	render() {

		const ticketSelected = this.props.ticketsArray.find(el => el.departure._id === this.props.trainId);
		console.log(ticketSelected);

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
						<TrainFrom 
						ticket={ticketSelected} 
						places={this.props.choiceSeatsArray} 
						setCoachId={this.setCoachId}
						setSeatNumber={this.setSeatNumber}
						setChildSeat={this.setChildSeat}
						setChildWithoutSeat={this.setChildWithoutSeat} />
						<TrainTo 
						ticket={ticketSelected} 
						places={this.props.choiceSeatsArray}
						setCoachId={this.setCoachId}
						setSeatNumber={this.setSeatNumber}
						setChildSeat={this.setChildSeat}
						setChildWithoutSeat={this.setChildWithoutSeat} />
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
		}
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SectionSeatSelection));