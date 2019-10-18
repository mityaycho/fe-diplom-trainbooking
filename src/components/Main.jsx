import React, { Component } from 'react';

import SectionSearchMain from './SectionSearchMain';
import AboutUs from '../components/AboutUs';
import HowItWorks from '../components/HowItWorks';
import Reviews from '../components/Reviews';

class Main extends Component {
	render() {
		return (
			<div>
				<SectionSearchMain />
				<AboutUs />
				<HowItWorks />
				<Reviews />
			</div>
		);
	}
};

export default Main;