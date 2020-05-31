import React from 'react';
import iconPassangerSircle from '../../../images/icon_passanger_sircle.png';


const PassengerJSX = (props) => {

	return (
		<div className="row pl-4 pt-3 border-bottom border-right">
			<div className="col-lg-2">
				<img src={iconPassangerSircle} alt="..." />
				<h6 className="mt-3">Взрослый</h6>
			</div>
			<div className="col ml-3">
				<h6>Мартынюк Ирина Эдуардовна</h6>
				<p className="text-black-50 mt-3">Пол женский</p>
				<p className="text-black-50 mt-4">Дата рождения 17.02.1985</p>
				<p className="text-black-50 mt-4">Паспорт РФ 4204 380694</p>
			</div>
		</div>
	);
}

export default PassengerJSX;