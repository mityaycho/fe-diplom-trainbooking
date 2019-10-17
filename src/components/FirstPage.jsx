import React, { Component } from 'react';

import HeaderSectionFirstPage from './HeaderSectionFirstPage';
import AboutUs from '../components/AboutUs';
import HowItWorks from '../components/HowItWorks';
import Reviews from '../components/Reviews';

class FirstPage extends Component {
	render() {
		return (
			<div>
				<HeaderSectionFirstPage />
				<AboutUs />
				<HowItWorks />
				<Reviews />
			</div>
		);
	}
};

export default FirstPage;