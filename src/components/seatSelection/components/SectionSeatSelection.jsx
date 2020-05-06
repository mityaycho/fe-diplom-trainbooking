import React from 'react';
import progressStateSelect from '../../../images/progress_state_select.png';
import progressStateDefault from '../../../images/progress_state_default.png';
import ProgressLineCost from '../../shared/ProgressLineCost';
import SideBarSearchTicketsAndSeatSelection from '../../shared/SideBarSearchTicketsAndSeatSelection';
import { connect } from 'react-redux';
import { setRouteTrainSeatAC } from '../../../redux/action';
import { NavLink } from 'react-router-dom';
import TrainFrom from './TrainFrom';
import TrainTo from './TrainTo';



class SectionSeatSelection extends React.Component {

	state = {
		route_direction_id: this.props.trainId, 
	coach_id: '', 
	seat_number: '', 
	is_child: '',
	include_children_seat: ''
	}

	componentDidMount() {
		this.props.setRouteTrainSeat(this.props.trainId);
	}

	render () {

		const ticketSelected = this.props.ticketsArray.find(el => el.departure._id === this.props.trainId);
		console.log(ticketSelected);
		
		return (
			<div>
				<ProgressLineCost tickets={progressStateSelect}
													passengers={progressStateDefault}
													passengersClass=""
													payment={progressStateDefault}
													paymentClass=""
													checkClass=""/>

				<div className="container d-flex">
					<SideBarSearchTicketsAndSeatSelection />
					<div className="choice-of-place col-lg-9 pt-5 pb-5 pl-5">
						<h3 className="text-uppercase">выбор мест</h3>
						<TrainFrom ticket={ticketSelected} places={this.props.choiceSeatsArray} />
						<TrainTo ticket={ticketSelected} places={this.props.choiceSeatsArray} />
						<div className="d-flex justify-content-end">
							<NavLink className="btn btn-warning text-white font-weight-bold pl-5 pr-5 mt-5 mb-5" to="/passengers" type="button">Далее</NavLink>
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
    setRouteTrainSeat: (train) => {
      const action = setRouteTrainSeatAC(train);
      dispatch(action);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionSeatSelection);