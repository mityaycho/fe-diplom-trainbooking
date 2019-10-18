import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBarTemporary = () => {
  return (
    <header>
      <div className="nav-bar-temporary">
        <div className="container">
          <nav className="nav d-flex">
            <NavLink className="itemTemporary" to="/">main</NavLink>
            <NavLink className="itemTemporary" to="/two_page">two_page</NavLink>
            <NavLink className="itemTemporary" to="/search_tickets">search_tickets</NavLink>
            <NavLink className="itemTemporary" to="/seat_selection">seat_selection</NavLink>
            <NavLink className="itemTemporary" to="/passengers">passengers</NavLink>
            <NavLink className="itemTemporary" to="/pay_selection">pay_selection</NavLink>
            <NavLink className="itemTemporary" to="/check_confirm_order">check_confirm_order</NavLink>
            <NavLink className="itemTemporary" to="/order_confirmed">order_confirmed</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBarTemporary;