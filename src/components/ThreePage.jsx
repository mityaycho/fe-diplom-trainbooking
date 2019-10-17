import React, { Component } from 'react';

import HeaderSectionThreePage from '../components/HeaderSectionThreePage';
import SectionSearchThreePage from '../components/SectionSearchThreePage';
import Footer from '../components/Footer';

class ThreePage extends Component {
	render() {
		return (
			<div>
				<HeaderSectionThreePage />
				<SectionSearchThreePage />
				<Footer />
			</div>
		);
	}
};

export default ThreePage;