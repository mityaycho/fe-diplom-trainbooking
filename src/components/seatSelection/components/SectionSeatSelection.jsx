import React from 'react';
import progressStateSelect from '../../../images/progress_state_select.png';
import progressStateDefault from '../../../images/progress_state_default.png';
import ProgressLineCost from '../../shared/ProgressLineCost';
import SideBarSearchTicketsAndSeatSelection from '../../shared/SideBarSearchTicketsAndSeatSelection';
import { connect } from 'react-redux';
import { setDataFormAC } from '../../../redux/action';
import { NavLink } from 'react-router-dom';
import TrainFrom from './TrainFrom';
import TrainTo from './TrainTo';

class SectionSeatSelection extends React.Component {

	render () {
		
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
						<TrainFrom />
						<TrainTo />
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
		ticketsArray: state.filterChoiceTicketsAndSeatsPages.ticketsArray
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDataForm: (form) => {
      const action = setDataFormAC(form);
      dispatch(action);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionSeatSelection);