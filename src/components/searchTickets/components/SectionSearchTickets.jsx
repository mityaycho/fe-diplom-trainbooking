import React from 'react';
import progressStateSelect from '../../../images/progress_state_select.png';
import progressStateDefault from '../../../images/progress_state_default.png';
import ProgressLineCost from '../../shared/ProgressLineCost';
import SearchTicketsJSX from './SearchTicketsJSX';
import SideBarSearchTicketsAndSeatSelection from './../../shared/SideBarSearchTicketsAndSeatSelection';


const SectionSearchTickets = () => {

	return (
		<div className="text-white tickets-search-window ">

			<ProgressLineCost tickets={progressStateSelect}
				passengers={progressStateDefault}
				passengersClass=""
				payment={progressStateDefault}
				paymentClass=""
				checkClass="" />

			<div className="container d-flex">
				<SideBarSearchTicketsAndSeatSelection />

				<SearchTicketsJSX />}
        </div>
		</div>
	);
}

export default SectionSearchTickets;