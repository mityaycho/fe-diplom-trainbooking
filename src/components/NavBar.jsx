import React from 'react';
import {Link, NavLink, Switch} from 'react-router-dom';
import {Route} from "react-router";
import TwoPage from "./TwoPage";
import AboutUs from "./AboutUs";
import HowItWorks from "./HowItWorks";
import Reviews from "./Reviews";
import Footer from "./Footer";

const NavBar = () => {
	return (
		<header>
			<div className="header-logo pt-2 w-100">
				<div className="container">
					<Link className="logo__text font-weight-bold" to="/" href="a#">Лого</Link>
				</div>
			</div>
			<div className="nav-bar bg-dark w-100">
				<div className="container">
					<nav className="nav pt-3 pb-3 d-flex animated fadeInRight">
						<NavLink className="nav__item" to="#about">О нас</NavLink>
						<NavLink className="nav__item" to="#howitworks">Как это работает</NavLink>
						<NavLink className="nav__item" to="#reviews">Отзывы</NavLink>
						<NavLink className="nav__item" to="#contacts">Контакты</NavLink>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default NavBar;