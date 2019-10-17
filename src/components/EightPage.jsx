import React, { Component } from 'react';

import HeaderSectionEightPage from '../components/HeaderSectionEightPage';
import Footer from '../components/Footer';

class EightPage extends Component {
	render() {
		return (
			<div>
				<HeaderSectionEightPage />
				<div className="final-order-window-white-block"></div>
				<Footer />
			</div>
		);
	}
};

export default EightPage;