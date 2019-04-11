import React, { Component } from 'react';
import '../css/App.css';
import '../css/animate.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header-section">
					<header>
						<div className="container logo animated fadeInDown">
							<a className="logo__text font-weight-bold" href="a#">Лого</a>
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

					<div className="container section-header text-white">
						<div className="row">
							<div className="section-header-text col-lg-6 pl-5">
								<h1 className="display-4">Вся жизнь -</h1>
								<h1 className="display-4 font-weight-bold">путешествие!</h1>
							</div>
							<div className="section-header-form col-lg-6">
								<div className="row">
									<form className="form-left-from-where w-50" action="input">
										<div className="form-group list-group m-3">
											<label>Направление</label>
											<i className="glyphicon glyphicon-user"></i>
											<input className="form-control-sm" type="text" placeholder="откуда" />
										</div>
										<table className="table table-borderless table-sm m-2">
											<thead className="border-bottom ">april</thead>
											<tbody>
												<tr>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
												</tr>
												<tr>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
												</tr>
												<tr>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
												</tr>
												<tr>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
												</tr>
												<tr>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
													<td>@</td>
												</tr>
											</tbody>
										</table>
									</form>
									<form className="form-right-where h-100 justify-content-between list-group w-50" action="input">
										<div className="form-group m-3">
											<input className="form-control-sm w-100" type="text" placeholder="куда" />
										</div>
										<div className="form-right-where-two-form form-group m-3">
											<input className="form-control-sm w-100" type="text" placeholder="дд/мм/гг"/>
										</div>
										<button className="form-right-where-button btn btn-warning m-3" type="button">найти билеты</button>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="header-bottom-line"></div>
				</div>

				<section className="container about-us">
					<div className="row">
						<p className="col-lg-2">о нас</p>
						<div className="container d-flex pt-4">
							<div className="about-us-vertical-line"></div>
							<div className="col-lg-10">
								<p className="pl-4">Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем все больше людей заказывают жд билеты через интернет.</p>
								<p className="p-4">Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? Мы расскажем о преимуществах заказа через интернет.</p>
								<p className="pl-4 font-weight-bold">Покупать жд билеты дешево можно за 90 суток до отправления поезда. Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</p>
							</div>
						</div>
					</div>
				</section>

				<section className="how-it-works">
				<div className="container d-flex">
					<div className="d-flex col-lg-12">
						<p className="col-lg-9">как это работает</p>
						<button className="btn btn-lg btn-primary-outline col-lg-3">Узнать больше</button>
					</div>
				</div>
				<div className="container h-100">
					<div className="row justify-content-center col-lg-12 animated fadeInRight">
						<div className="row justify-content-between align-items-center col-lg-8 mt-4">
							<div>
								<div className="icon1 mt-3"></div>
								<p className="text-center mt-4">Удобный заказ</p>
								<p className="text-center">на сайте</p>
							</div>
							<div>
								<div className="icon2 mt-3"></div>
								<p className="text-center mt-4">Нет необходимости</p>
								<p className="text-center">ехать в офис</p>
							</div>
							<div>
								<div className="icon3 mt-3"></div>
								<p className="text-center mt-4">Огромный выбор</p>
								<p className="text-center">направлений</p>
							</div>
						</div>
					</div>
				</div>
				</section>

				<section className="container reviews">
					<div className="review-head">отзывы</div>
					<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
							<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
							<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
						</ol>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<div className="container d-flex col-lg-12 mt-5">
									<div className="container d-flex">
										<div className="review-icon1"></div>
										<div className="col-lg-7">
											<p className="font-weight-bold">Екатерина Вальнова</p>
											<q className="review-text">Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.</q>
										</div>
									</div>
									<div className="container d-flex">
										<div className="review-icon2"></div>
										<div className="col-lg-7">
											<p className="font-weight-bold">Евгений Стрыкало</p>
											<q className="review-text">СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.</q>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item">
							<div className="container d-flex col-lg-12 mt-5">
									<div className="container d-flex">
										<div className="review-icon2"></div>
										<div className="col-lg-7">
											<p className="font-weight-bold">Евгений Стрыкало</p>
											<q className="review-text">СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.</q>
										</div>
									</div>
									<div className="container d-flex">
										<div className="review-icon1"></div>
										<div className="col-lg-7">
											<p className="font-weight-bold">Екатерина Вальнова</p>
											<q className="review-text">Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.</q>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="sr-only">Previous</span>
						</a>
						<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="sr-only">Next</span>
						</a> */}
					</div>
				</section>

				<footer>
					<div className="container footer-information h-100">
						<div className="row">
							<div className="col-lg-6">
								<p className="text pl-4 pt-5">Свяжитесь с нами</p>
								<div className="row pt-2">
									<div className="icon col-lg-1 pl-4">
										<div className="icon__phone"></div>
										<div className="icon__message mt-3"></div>
										<div className="icon__skype mt-3"></div>
										<div className="icon__location mt-4"></div>
									</div>
									<div className="text col-lg-4 ml-3">
										<p className="text__phone">8 (800) 000 00 00</p>
										<p className="text__message pt-1">inbox@mail.ru</p>
										<p className="text__skype pt-2">tu.train.tickets</p>
										<p className="text__location pt-2">г. Москва ул. Московская 27-35 555 555</p>
									</div>
								</div>
							</div>
							<div className="col-lg-6 mt-3">
								<p className="text mt-5">Подписка</p>
								<p className="pt-3">Будьте в курсе событий</p>
								<form className="d-flex w-50" action="input">
									<div className="form-gorup list-group">
										<input className="form-control-lg" type="text" placeholder="e-mail" />
									</div>
									<button className="footer-button btn btn-lg btn-primary-outline border-white ml-4">отправить</button>
								</form>
								<p className="mt-5">Подписывайтесь на нас</p>
								<div className="icons-subscription row justify-content-between col-lg-6">
									<div className="icons-subscription__youtube"></div>
									<div className="icons-subscription__in"></div>
									<div className="icons-subscription__google-plus"></div>
									<div className="icons-subscription__facebook"></div>
									<div className="icons-subscription__twitter"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom border-top border-white align-items-end">
						<div className="container h-100">
							<div className="row h-100 justify-content-between align-items-center">
								<h1 className="logo">Лого</h1>
								<div className="icon-bottom"></div>
								<p className="license">2018 WEB</p>
							</div>
						</div>
					</div>
				</footer>

				
      </div>
    );
  }
}

export default App;
