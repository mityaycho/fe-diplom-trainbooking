import React, { Component } from 'react';

import SectionSearchTicketsHeader from './SectionSearchTicketsHeader';
import SectionSeatSelection from './SectionSeatSelection';

class SeatSelection extends Component {
	render() {
		return (
			<div>
				<SectionSearchTicketsHeader />
				<SectionSeatSelection />
			</div>
		);
	};
};

export default SeatSelection;