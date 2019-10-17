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
						<NavLink className="nav__item" to="/about_us">О нас</NavLink>
						<NavLink className="nav__item" to="/how_it_works">Как это работает</NavLink>
						<NavLink className="nav__item" to="/reviews">Отзывы</NavLink>
						<NavLink className="nav__item" to="/contacts">Контакты</NavLink>
					</nav>
					<Switch>
						<Route path="/about_us" render={() => <AboutUs />} />
						<Route path="/how_it_works" render={() => <HowItWorks />} />
						<Route path="/reviews" render={() => <Reviews />} />
						<Route path="/contacts" render={() => <Footer />} />
					</Switch>
				</div>
			</div>
		</header>
	);
};

export default NavBar;