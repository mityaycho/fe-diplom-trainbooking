import React from 'react';

const Reviews = () => {
	return (
		<section className="container reviews" id="reviews">
			<div className="review-head ml-5">отзывы</div>
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
	);
};

export default Reviews;