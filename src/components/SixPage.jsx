import React, { Component } from 'react';

import HeaderSectionThreePage from '../components/HeaderSectionThreePage';
import SectionSearchSixPage from '../components/SectionSearchSixPage';
import Footer from '../components/Footer';

class SixPage extends Component {
	render() {
		return (
			<div>
				{HeaderSectionThreePage()}
				{SectionSearchSixPage()}
				{Footer()}
			</div>
		);
	}
};

export default SixPage;