import React from 'react';
import iconRubleSmall from '../../../images/icon_ruble_small.png';


const TrainJSX = (props) => {

	const seatsMath = Math.ceil(props.train.coach.available_seats / 2);

	const seatJSX = props.train.seats.map(el => el.index <= 32 ? <div className="index" key={el.index}>{el.index}</div> : el.index >= 49 ? <div className="index" key={el.index}>{el.index}</div> : <div className="index mt-3" key={el.index}>{el.index}</div>);

	return (
		<div className="mb-3 pb-5">
			<div className="number-of-vagon d-flex justify-content-between">
				<div className="d-flex">
					<p>Вагоны</p>
					<p className="font-weight-bold text-white ml-1">07</p>
					<p className="font-weight-bold ml-1">09</p>
				</div>
				<p>Нумерация вагонов начинается с головы поезда</p>
			</div>
			<div className="number-of-vagon-checked d-flex">
				<div className="number-of-vagon-checked-yellow">
					<p className="number-of-vagon-checked-yellow-number">07</p>
					<p className="number-of-vagon-checked-yellow-text">вагон</p>
				</div>
				<div className="col ml-5 mt-3">
					<p>места {props.train.coach.available_seats}</p>
					<p>Верхние {seatsMath}</p>
					<p>Нижние {seatsMath}</p>
				</div>
				<div className="col ml-5 mt-3">
					<p>Стоимость</p>
					<p>{props.train.coach.top_price}<img className="align-self-center ml-1" src={iconRubleSmall} alt="..." /></p>
					<p>{props.train.coach.bottom_price}<img className="align-self-center ml-1" src={iconRubleSmall} alt="..." /></p>
				</div>
				<div className="col-lg-4 mt-3">
					<p>Обслуживание ФПК</p>
					<div>
						<label><input type="checkbox" className="icon-vagon-conditioner align-self-center" /><span></span></label>
						<label><input type="checkbox" className="icon-vagon-wifi align-self-center" /><span></span></label>
						<label><input type="checkbox" className="icon-vagon-linens align-self-center" /><span></span></label>
						<label><input type="checkbox" className="icon-vagon-cup align-self-center" /><span></span></label>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-end">
				<p className="number-of-people-online mr-4">11 человек выбирают места в этом поезде</p>
			</div>
			<img className="image-vagon-places" src={props.image} alt="..." />
			<div className={`train-${props.train.coach.class_type}-container row`}>
				{seatJSX}
			</div>
		</div>
	);
}

export default TrainJSX;