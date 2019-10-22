import React, { Component } from 'react';

import SectionSearchTicketsHeader from './SectionSearchTicketsHeader';
import SectionPassengers from './SectionPassengers';

class Passengers extends Component {
	render() {
		return (
			<div>
				<SectionSearchTicketsHeader />
				<SectionPassengers />
			</div>
		);
	};
};

export default Passengers;