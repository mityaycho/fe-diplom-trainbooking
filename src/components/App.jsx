import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
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
      <div className="App">
          <Route exact path="/" render={() => <FirstPage/>}/>
          <Route path="/two_page" render={() => <TwoPage/>}/>
          <Route path="/three_page" render={() => <ThreePage/>}/>
          <Route path="/four_page" render={() => <FourPage/>}/>
          <Route path="/five_page" render={() => <FivePage/>}/>
          <Route path="/six_page" render={() => <SixPage/>}/>
          <Route path="/seven_page" render={() => <SevenPage/>}/>
          <Route path="/eight_page" render={() => <EightPage/>}/>
      </div>
    );
  }
};
