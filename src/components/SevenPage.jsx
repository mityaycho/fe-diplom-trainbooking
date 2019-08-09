import React, { Component } from 'react';

import HeaderSectionThreePage from '../components/HeaderSectionThreePage';
import SectionSearchSevenPage from '../components/SectionSearchSevenPage';
import Footer from '../components/Footer';

class SevenPage extends Component {
	render() {
		return (
			<div>
				{HeaderSectionThreePage()}
				{SectionSearchSevenPage()}
				{Footer()}
			</div>
		);
	}
};

export default SevenPage;