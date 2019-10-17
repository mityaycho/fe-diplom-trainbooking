import React, { Component } from 'react';

import HeaderSectionThreePage from '../components/HeaderSectionThreePage';
import SectionSearchSixPage from '../components/SectionSearchSixPage';

class SixPage extends Component {
	render() {
		return (
			<div>
				<HeaderSectionThreePage />
				<SectionSearchSixPage />
			</div>
		);
	}
};

export default SixPage;