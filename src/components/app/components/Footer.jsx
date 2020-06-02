import React from 'react';
import iconScrollTop from '../../../images/icon_footer_bottom.png';

const Footer = () => {
	return (
		<footer>
			<div className="container footer-information h-100 align-items-center justify-content-around" id="contacts">
				<div className="d-flex">
					<div className="col">
						<p className="text pl-4 pt-5">Свяжитесь с нами</p>
						<div className="row pt-2">
							<div className="icon pl-4">
								<div className="row">
									<div className="icon__phone mr-2"></div>
									<p className="text__phone">8 (800) 000 00 00</p>
								</div>
								<div className="row">
									<div className="icon__message mt-3 mr-2"></div>
									<p className="text__message pt-3">inbox@mail.ru</p>
								</div>
								<div className="row">
									<div className="icon__skype mt-3 mr-2"></div>
									<p className="text__skype pt-3">tu.train.tickets</p>
								</div>
								<div className="row">
									<div className="icon__location mt-4 mr-2"></div>
									<p className="text__location pt-4">г. Москва ул. Московская &nbsp;</p>
									<p className="text__location pt-4">27-35 555 555</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col mt-3">
						<p className="text mt-5">Подписка</p>
						<p className="pt-3">Будьте в курсе событий</p>
						<form className="d-flex w-100" action="input">
							<div className="form-gorup list-group w-50">
								<input className="form-control" type="text" placeholder="e-mail" />
							</div>
							<button className="footer-button btn btn-sm btn-primary-outline border-white text-uppercase ml-4">отправить</button>
						</form>
						<p className="mt-5">Подписывайтесь на нас</p>
						<div className="icons-subscription d-flex justify-content-between w-50">
							<div className="icons-subscription-youtube"></div>
							<div className="icons-subscription-in"></div>
							<div className="icons-subscription-google-plus"></div>
							<div className="icons-subscription-facebook"></div>
							<div className="icons-subscription-twitter"></div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom border-top border-white align-items-end">
				<div className="container h-100">
					<div className="row h-100 justify-content-between align-items-center">
						<h1 className="logo">Лого</h1>
						<div className="icon-bottom" onClick={() => window.scrollTo(0, 0)}><img src={iconScrollTop} alt="" /></div>
						<p className="license">2018 WEB</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;