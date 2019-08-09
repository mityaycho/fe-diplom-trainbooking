import React, { Component } from 'react';

import HeaderSectionThreePage from '../components/HeaderSectionThreePage';
import SectionSearchFourPage from '../components/SectionSearchFourPage';
import Footer from '../components/Footer';

class FourPage extends Component {
	render() {
		return (
			<div>
				{HeaderSectionThreePage()}
				{SectionSearchFourPage()}
				{Footer()}
			</div>
		);
	}
};

export default FourPage;