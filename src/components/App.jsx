import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import '../css/animate.css';

import FirstPage from '../components/FirstPage';
import TwoPage from '../components/TwoPage';
import ThreePage from '../components/ThreePage';
import FourPage from '../components/FourPage';
import FivePage from '../components/FivePage';
import SixPage from '../components/SixPage';
import SevenPage from '../components/SevenPage';
import EightPage from '../components/EightPage';


export class App extends Component {
  render() {
    return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<Route exact path="/" component={FirstPage} />
						<Route path="/two_page" component={TwoPage} />
						<Route path="/three_page" component={ThreePage} />
						<Route path="/four_page" component={FourPage} />
						<Route path="/five_page" component={FivePage} />
						<Route path="/six_page" component={SixPage} />
						<Route path="/seven_page" component={SevenPage} />
						<Route path="/eight_page" component={EightPage} />
					</Switch>
				</div>
			</BrowserRouter>
    );
  }
};
