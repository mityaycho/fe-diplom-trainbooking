import React, { Component } from 'react';

import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import ContainerFormMainPage from "./components/ContainerFormMainPage";

class Main extends Component {
	render() {
		return (
			<div>
				<ContainerFormMainPage />
				<AboutUs />
				<HowItWorks />
				<Reviews />
			</div>
		);
	};
};

export default Main;