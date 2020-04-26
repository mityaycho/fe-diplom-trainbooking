import React from 'react';
import iconRubleSmall from '../../../images/icon_ruble_small.png';
import imageVagonPlaces from '../../../images/image_vagon_places.png';


const TrainJSX = (props) => {
	return (
		<div>
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
									<p>2 920<img className="align-self-center ml-1" src={iconRubleSmall} alt="..."/></p>
									<p>3 530<img className="align-self-center ml-1" src={iconRubleSmall} alt="..."/></p>
								</div>
								<div className="col-lg-4 mt-3">
									<p>Обслуживание ФПК</p>
									<div>
									<label><input type="checkbox" className="icon-vagon-conditioner align-self-center"/><span></span></label>
									<label><input type="checkbox" className="icon-vagon-wifi align-self-center"/><span></span></label>
									<label><input type="checkbox" className="icon-vagon-linens align-self-center"/><span></span></label>
									<label><input type="checkbox" className="icon-vagon-cup align-self-center"/><span></span></label>
									</div>
								</div>
							</div>
							<div className="d-flex justify-content-end">
								<p className="number-of-people-online mr-4">11 человек выбирают места в этом поезде</p>
							</div>
							<img className="image-vagon-places" src={imageVagonPlaces} alt="..."/>
		</div>
	);
}

export default TrainJSX;