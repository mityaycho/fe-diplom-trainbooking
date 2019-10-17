import React, { Component } from 'react';

import HeaderSectionThreePage from '../components/HeaderSectionThreePage';
import SectionSearchFivePage from '../components/SectionSearchFivePage';

class FivePage extends Component {
	render() {
		return (
			<div>
				<HeaderSectionThreePage />
				<SectionSearchFivePage />
			</div>
		);
	}
};

export default FivePage;