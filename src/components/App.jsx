import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import '../css/App.css';
import '../css/animate.css';

import Main from './Main';
import SearchTickets from './SearchTickets';
import SeatSelection from './SeatSelection';
import Passengers from './Passengers';
import PaySelection from './PaySelection';
import CheckConfirmOrder from './CheckConfirmOrder';
import OrderConfirmed from './OrderConfirmed';
import Footer from "./Footer";
import NavBar from "./NavBar";
import NavBarTemporary from "./NavBarTemporary";


export class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <NavBarTemporary />
          <Route exact path="/" render={() => <Main/>}/>
          <Route path="/search_tickets" render={() => <SearchTickets/>}/>
          <Route path="/seat_selection" render={() => <SeatSelection/>}/>
          <Route path="/passengers" render={() => <Passengers/>}/>
          <Route path="/pay_selection" render={() => <PaySelection/>}/>
          <Route path="/check_confirm_order" render={() => <CheckConfirmOrder/>}/>
          <Route path="/order_confirmed" render={() => <OrderConfirmed/>}/>
        <Footer />
      </div>
    );
  };
};
