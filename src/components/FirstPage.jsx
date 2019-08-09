import React, { Component } from 'react';

import HeaderSection from '../components/HeaderSection';
import AboutUs from '../components/AboutUs';
import HowItWorks from '../components/HowItWorks';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

class FirstPage extends Component {
	render() {
		return (
			<div>
				{HeaderSection()}
				{AboutUs()}
				{HowItWorks()}
				{Reviews()}
				{Footer()}
			</div>
		);
	}
};

export default FirstPage;