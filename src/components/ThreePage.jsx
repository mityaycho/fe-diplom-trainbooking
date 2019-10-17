import React, { Component } from 'react';
import HeaderSectionThreePage from '../components/HeaderSectionThreePage';
import SectionSearchThreePage from '../components/SectionSearchThreePage';

class ThreePage extends Component {
	render() {
		return (
			<div>
				<HeaderSectionThreePage />
				<SectionSearchThreePage />
			</div>
		);
	};
};

export default ThreePage;