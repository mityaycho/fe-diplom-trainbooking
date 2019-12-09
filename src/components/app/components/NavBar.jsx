import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
	return (
		<header>
			<div className="header-logo pt-2 w-100">
				<div className="container">
					<NavLink className="logo__text font-weight-bold" to="/" id="header_logo">Лого</NavLink>
				</div>
			</div>
			<div className="nav-bar bg-dark w-100">
				<div className="container">
					<nav className="nav pt-3 pb-3 d-flex animated fadeInRight">
						<a className="nav__item" href="#about">О нас</a>
						<a className="nav__item" href="#howitworks">Как это работает</a>
						<a className="nav__item" href="#reviews">Отзывы</a>
						<a className="nav__item" href="#contacts">Контакты</a>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default NavBar;