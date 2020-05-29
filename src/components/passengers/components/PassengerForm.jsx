import React from 'react';
import iconMinusSircle from '../../../images/icon_minus_sircle.png';
import iconCloseX from '../../../images/icon_close_x.png';
import iconPlusSircle from '../../../images/icon_plus_sircle.png';


class PassengerForm extends React.Component {

	state = {
		active: false
	};

	setActiveTrue = () => this.setState({ active: true });

	setActiveFalse = () => this.setState({ active: false });

	render() {
		return (
			<>
				{this.state.active ?
					<div className="passengers-form-filling-box mt-5 mb-5 ml-5">
						<form className="passengers-form-filling col">
							<div className="passengers-form-number border-bottom row pt-4 pb-4">
								<img className="passengers-form-button pl-4" src={iconMinusSircle} alt="..."
									onClick={this.setActiveFalse} />
								<h5 className="ml-3">Пассажир {this.props.passengerNumber}</h5>
								<img className="ml-auto mr-5 mt-auto" src={iconCloseX} alt="..." />
							</div>

							<select className="form-control w-25 ml-4 mt-4">
								<option>Взрослый</option>
								<option>Десткий</option>
							</select>
							<div className="d-flex">
								<div className="pt-3 pl-4 pr-4 w-100">
									<p>Фамилия</p>
									<input className="col-sm form-control" type="text" placeholder="Мартынюк" />
								</div>
								<div className="pt-3 pl-4 pr-4 w-100">
									<p>Имя</p>
									<input className="col-sm form-control" type="text" placeholder="Ирина" />
								</div>
								<div className="pt-3 pl-4 pr-4 w-100">
									<p>Отчество</p>
									<input className="col-sm form-control" type="text" placeholder="Эдуардовна" />
								</div>
							</div>
							<div className="d-flex">
								<div className="pt-3 pl-4 pr-4 w-25">
									<p>Пол</p>
									<label className="switch">
										<input type="checkbox" />
										<span className="slider-checkbox">&nbsp; &nbsp; М &nbsp; &nbsp; &nbsp; &nbsp; Ж</span>
									</label>
								</div>
								<div className="pt-3 pl-4 pr-4 w-25">
									<p>Дата рождения</p>
									<input className="col-sm form-control" type="text" placeholder="дд/мм/гг" />
								</div>
							</div>
							<div className="row mt-3 border-bottom">
								<input className="ml-5 mt-1" type="checkbox" />
								<p className="ml-2">ограниченная подвижность</p>
							</div>
							<div className="row border-bottom">
								<div className="ml-4 pt-3 pl-4 pr-4 w-25">
									<p>Тип докумета</p>
									<select className="form-control">
										<option>Паспорт РФ</option>
										<option>Свидетельство о рождении</option>
									</select>
								</div>
								<div className="pt-3 pl-4 pr-4 w-25">
									<p>Серия</p>
									<input className="col-sm form-control" type="text" placeholder="_ _ _ _" />
								</div>
								<div className="pt-3 pl-4 pr-4 pb-3 w-25">
									<p>Номер</p>
									<input className="col-sm form-control" type="text" placeholder="_ _ _ _ _ _" />
								</div>
							</div>

							<div className="d-flex justify-content-end">
								<button type="button" className="btn btn-outline-dark m-3 pl-3 pr-3 font-weight-bold" onClick={() => window.scrollTo(0, 1000)}>Следующий пасссажир</button>
							</div>
						</form>
					</div>
					:
					<div className="passengers-form-filling-box mt-5 mb-5 ml-5">
						<div className="passengers-form-filling col">
							<div className="passengers-form-number row pt-4 pb-4">
								<img className="passengers-form-button pl-4" src={iconPlusSircle} alt="..."
									onClick={this.setActiveTrue} />
								<h5 className="ml-3">Пассажир {this.props.passengerNumber}</h5>
							</div>
						</div>
					</div>
				}
			</>

		);
	}
};

export default PassengerForm;