import React, { Component } from 'react';

import HeaderSectionThreePage from '../components/HeaderSectionThreePage';
import SectionSearchFivePage from '../components/SectionSearchFivePage';
import Footer from '../components/Footer';

class FivePage extends Component {
	render() {
		return (
			<div>
				{HeaderSectionThreePage()}
				{SectionSearchFivePage()}
				{Footer()}
			</div>
		);
	}
};

export default FivePage;