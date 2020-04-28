import React from 'react';
import iconRubleSmall from '../../../images/icon_ruble_small.png';
import train_fourth_class from '../../../images/train_fourth_class.png';


const TrainJSX = (props) => {
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
					<p>места 11</p>
					<p>Верхние 3</p>
					<p>Нижние 8</p>
				</div>
				<div className="col ml-5 mt-3">
					<p>Стоимость</p>
					<p>2 920<img className="align-self-center ml-1" src={iconRubleSmall} alt="..." /></p>
					<p>3 530<img className="align-self-center ml-1" src={iconRubleSmall} alt="..." /></p>
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
			<img className="image-vagon-places" src={train_fourth_class} alt="..." />
			<div className="train-fourth-container row">
				<div className="index">1</div>
				<div className="index">2</div>
				<div className="index">3</div>
				<div className="index">4</div>
				<div className="index">5</div>
				<div className="index">6</div>
				<div className="index">7</div>
				<div className="index">8</div>
				<div className="index">9</div>
				<div className="index">10</div>
				<div className="index">11</div>
				<div className="index">12</div>
				<div className="index">13</div>
				<div className="index">14</div>
				<div className="index">15</div>
				<div className="index">16</div>
				<div className="index">17</div>
				<div className="index">18</div>
				<div className="index">19</div>
				<div className="index">20</div>
				<div className="index">21</div>
				<div className="index">22</div>
				<div className="index">23</div>
				<div className="index">24</div>
				<div className="index">25</div>
				<div className="index">26</div>
				<div className="index">27</div>
				<div className="index">28</div>
				<div className="index">29</div>
				<div className="index">30</div>
				<div className="index">31</div>
				<div className="index">32</div>
			</div>
		</div>
	);
}

export default TrainJSX;