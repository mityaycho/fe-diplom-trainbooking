import React, { Component } from 'react';

import SectionSearchTicketsHeader from './SectionSearchTicketsHeader';
import SectionSearchSixPage from '../components/SectionSearchSixPage';

class PaySelection extends Component {
	render() {
		return (
			<div>
				<SectionSearchTicketsHeader />
				<SectionSearchSixPage />
			</div>
		);
	}
};

export default PaySelection;