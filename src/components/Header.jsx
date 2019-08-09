import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<div className="header-logo pt-2">
				<div className="container">
					<Link className="logo__text font-weight-bold" to="/" href="a#">Лого</Link>
				</div>
			</div>
			<div className="bg-dark">
				<div className="container">
					<nav className="nav pt-3 pb-3 d-flex animated fadeInRight">
						<a className="nav__item" href="a#">О нас</a>
						<a className="nav__item" href="a#">Как это работает</a>
						<a className="nav__item" href="a#">Отзывы</a>
						<a className="nav__item" href="a#">Контакты</a>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;