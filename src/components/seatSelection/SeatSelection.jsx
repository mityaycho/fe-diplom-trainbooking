import React, { Component } from 'react';

import SectionSearchTicketsHeader from '../shared/HeaderSearchForm';
import SectionSeatSelection from './components/SectionSeatSelection';

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