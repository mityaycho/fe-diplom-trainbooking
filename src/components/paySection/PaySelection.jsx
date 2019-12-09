import React, { Component } from 'react';

import SectionSearchTicketsHeader from '../shared/SectionSearchTicketsHeader';
import PaySectionSearch from './components/PaySectionSearch';

class PaySelection extends Component {
	render() {
		return (
			<div>
				<SectionSearchTicketsHeader />
				<PaySectionSearch />
			</div>
		);
	};
};

export default PaySelection;