import React, { Component } from 'react';

import SectionSearchTicketsHeader from './SectionSearchTicketsHeader';
import SectionCheckConfirmOrder from './SectionCheckConfirmOrder';

class CheckConfirmOrder extends Component {
	render() {
		return (
			<div>
				<SectionSearchTicketsHeader />
				<SectionCheckConfirmOrder />
			</div>
		);
	}
};

export default CheckConfirmOrder;