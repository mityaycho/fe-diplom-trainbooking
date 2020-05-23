import React from 'react';
import iconMinusSircle from '../../../images/icon_minus_sircle.png';
import iconCloseX from '../../../images/icon_close_x.png';
import iconPlusSircle from '../../../images/icon_plus_sircle.png';


class PassengerForm extends React.Component {

	state = {
		active: false
	}

	setActiveTrue = () => this.setState({ active: true });

	setActiveFalse = () => this.setState({ active: false });
	
	render() {
	return (
		<>
			{this.state.active ? 
			<div className="passengers-form-filling-box mt-5 mb-5 ml-5">
				<div className="passengers-form-filling col">
					<div className="passengers-form-number border-bottom row pt-4 pb-4">
						<img className="passengers-form-button pl-4" src={iconMinusSircle} alt="..." onClick={this.setActiveFalse} />
						<h5 className="ml-3">Пассажир {this.props.passengerNumber}</h5>
						<img className="ml-auto mr-5 mt-auto" src={iconCloseX} alt="..." />
					</div>

					<select className="form-control w-25 ml-4 mt-4">
						<option>Взрослый</option>
						<option>Десткий</option>
					</select>
					<div className="d-flex">
						<form className="form pt-3 pl-4 pr-4 w-100" action="input">
							<p>Фамилия</p>
							<div className="form-group">
								<input className="col-sm form-control" type="text" placeholder="Мартынюк" />
							</div>
						</form>
						<form className="form pt-3 pl-4 pr-4 w-100" action="input">
							<p>Имя</p>
							<div className="form-group">
								<input className="col-sm form-control" type="text" placeholder="Ирина" />
							</div>
						</form>
						<form className="form pt-3 pl-4 pr-4 w-100" action="input">
							<p>Отчество</p>
							<div className="form-group">
								<input className="col-sm form-control" type="text" placeholder="Эдуардовна" />
							</div>
						</form>
					</div>
					<div className="d-flex">
						<form className="form pt-3 pl-4 pr-4 w-25" action="input">
							<p>Пол</p>
							<label className="switch">
								<input type="checkbox" />
								<span className="slider"></span>
							</label>
						</form>
						<form className="form pt-3 pl-4 pr-4 w-25" action="input">
							<p>Дата рождения</p>
							<div className="form-group">
								<input className="col-sm form-control" type="text" placeholder="дд/мм/гг" />
							</div>
						</form>
					</div>
					<div className="row border-bottom">
						<div className="form-group ml-5">
							<input type="checkbox" />
						</div>
						<p className="ml-2">ограниченная подвижность</p>
					</div>
					<div className="row border-bottom">
						<form className="form ml-4 pt-3 pl-4 pr-4 w-25" action="input">
							<p>Тип докумета</p>
							<select className="form-control">
								<option>Паспорт РФ</option>
								<option>Свидетельство о рождении</option>
							</select>
						</form>
						<form className="form pt-3 pl-4 pr-4 w-25" action="input">
							<p>Серия</p>
							<div className="form-group">
								<input className="col-sm form-control" type="text" placeholder="_ _ _ _" />
							</div>
						</form>
						<form className="form pt-3 pl-4 pr-4 w-25" action="input">
							<p>Номер</p>
							<div className="form-group">
								<input className="col-sm form-control" type="text" placeholder="_ _ _ _ _ _" />
							</div>
						</form>
					</div>

					<div className="d-flex justify-content-end mt-4">
						<button type="button" className="btn btn-outline-dark m-3 pl-3 pr-3 font-weight-bold">Следующий пасссажир</button>
					</div>
				</div>
			</div>
				:
				<div className="passengers-form-filling-box mt-5 mb-5 ml-5">
					<div className="passengers-form-filling col">
						<div className="passengers-form-number row pt-4 pb-4">
							<img className="passengers-form-button pl-4" src={iconPlusSircle} alt="..." onClick={this.setActiveTrue} />
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