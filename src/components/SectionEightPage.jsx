import React from 'react';
import { Link } from 'react-router-dom';
import iconRuble from '../images/icon_ruble.png';
import iconOrderTicketSend from '../images/icon_order_ticket_send.png';
import iconOrderTicketPrint from '../images/icon_order_ticket_print.png';
import iconOrderTicketPresent from '../images/icon_order_ticket_present.png';
import iconRateService from '../images/icon_rate_service.png';


const SectionEightPage = () => {
	return (
		<div>
			<div className="container">
				<h1 className="row header-text-final-order">Благодарим Вас за заказ!</h1>
				<div className="row final-order-window">
					<div className="row pt-4 pb-4 w-100">
						<h5 className="col ml-5">№Заказа 285АА</h5>
						<div className="row mr-5">
							<h4 className="mr-3">сумма</h4>
							<h4 className="mr-3">7 760<img className="ml-2" src={iconRuble} alt="..."/></h4>
						</div>
					</div>
					<div className="container tickets-icons-window h-100">
						<div className="row justify-content-center col-lg-12 animated fadeInRight">
							<div className="d-flex justify-content-between align-items-center col-lg-8 mt-4">
								<div className="col-lg-3">
									<img className="" src={iconOrderTicketSend} alt="..."/>
									<p className=" text-center">билеты будут отправлены на ваш e-mail</p>
								</div>
								<div className="col-lg-4 ml-4">
									<img className="col" src={iconOrderTicketPrint} alt="..."/>
									<p className=" text-center">распечатайте и сохраняйте билеты до даты поездки</p>
								</div>
								<div className="col-lg-4">
									<img className="col" src={iconOrderTicketPresent} alt="..."/>
									<p className=" text-center">предьявите распечатанные билеты при посадке</p>
								</div>
							</div>
						</div>
					</div>
					<div className="m-5">
						<h1 className="ml-5">Ирина Эдуардовна!</h1>
						<p className="ml-5 mt-4">Ваш заказ успешно оформлен.</p>
						<p className="ml-5 mt-n3">В ближайшее время с вами свяжется наш оператор для подтверждения.</p>
						<h5 className="m-5 font-weight-bold">Благодарим Вас за оказанное доверие и желаем приятного путешествия!</h5>
					</div>
					<div className="container d-flex rate-service-back-main-page justify-content-between p-5">
						<div className="row">
							<h4 className="align-self-center mt-1 mr-3">Оценить сервис</h4>
							<img className="" src={iconRateService} alt="..."/>
							<img className="" src={iconRateService} alt="..."/>
							<img className="" src={iconRateService} alt="..."/>
							<img className="" src={iconRateService} alt="..."/>
							<img className="" src={iconRateService} alt="..."/>
						</div>
						<div className="d-flex justify-content-end">
							<Link className="btn btn-outline-dark font-weight-bold text-uppercase pl-1 pr-1 mr-3" to="/" type="button">вернуться на главную</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionEightPage;