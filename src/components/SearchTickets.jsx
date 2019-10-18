import React, { Component } from 'react';
import SectionSearchTicketsHeader from './SectionSearchTicketsHeader';
import SectionSearchTickets from './SectionSearchTickets';

class SearchTickets extends Component {
	render() {
		return (
			<div>
				<SectionSearchTicketsHeader />
				<SectionSearchTickets />
			</div>
		);
	};
};

export default SearchTickets;