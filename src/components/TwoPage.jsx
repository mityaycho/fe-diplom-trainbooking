import React, { Component } from 'react';

import HeaderSectionTwoPage from '../components/HeaderSectionTwoPage';
import AboutUs from '../components/AboutUs';
import HowItWorks from '../components/HowItWorks';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

class TwoPage extends Component {
	render() {
		return (
			<div>
				<HeaderSectionTwoPage />
				<AboutUs />
				<HowItWorks />
				<Reviews />
				<Footer />
			</div>
		);
	}
};

export default TwoPage;