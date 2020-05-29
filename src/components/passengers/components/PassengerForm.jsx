import React from 'react';
import iconMinusSircle from '../../../images/icon_minus_sircle.png';
import iconCloseX from '../../../images/icon_close_x.png';
import iconPlusSircle from '../../../images/icon_plus_sircle.png';
import { useForm } from 'react-hook-form';


const PassengerForm = (props) => {

	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<>
			{props.active ?
				<div className="passengers-form-filling-box mt-5 mb-5 ml-5">
					<form className="passengers-form-filling col" onSubmit={handleSubmit(onSubmit)}>
						<div className="passengers-form-number border-bottom row pt-4 pb-4">
							<img className="passengers-form-button pl-4" src={iconMinusSircle} alt="..."
								onClick={props.setActiveFalse} />
							<h5 className="ml-3">Пассажир {props.passengerNumber}</h5>
							<img className="ml-auto mr-5 mt-auto" src={iconCloseX} alt="..." />
						</div>

						<select className="form-control w-25 ml-4 mt-4" name="is_adult" ref={register}>
							<option value="true">Взрослый</option>
							<option value="false">Десткий</option>
						</select>
						<div className="d-flex">
							<div className="pt-3 pl-4 pr-4 w-100">
								<p>Фамилия</p>
								<input className="col-sm form-control" type="text" placeholder="Мартынюк" name="last_name" ref={register} />
							</div>
							<div className="pt-3 pl-4 pr-4 w-100">
								<p>Имя</p>
								<input className="col-sm form-control" type="text" placeholder="Ирина" name="first_name" ref={register} />
							</div>
							<div className="pt-3 pl-4 pr-4 w-100">
								<p>Отчество</p>
								<input className="col-sm form-control" type="text" placeholder="Эдуардовна" name="patronymic" ref={register} />
							</div>
						</div>
						<div className="d-flex">
							<div className="pt-3 pl-4 pr-4 w-25">
								<p>Пол</p>
								<label className="switch">
									<input type="checkbox" name="gender" ref={register} />
									<span className="slider-checkbox">&nbsp; &nbsp; М &nbsp; &nbsp; &nbsp; &nbsp; Ж</span>
								</label>
							</div>
							<div className="pt-3 pl-4 pr-4 w-25">
								<p>Дата рождения</p>
								<input
									className="col-sm form-control"
									type="text"
									placeholder="дд/мм/гг"
									name="birthday"
									ref={register} />
							</div>
						</div>
						<div className="row mt-3 border-bottom">
							<input className="ml-5 mt-1" type="checkbox" />
							<p className="ml-2">ограниченная подвижность</p>
						</div>
						<div className="row border-bottom">
							<div className="ml-4 pt-3 pl-4 pr-4 w-25">
								<p>Тип докумета</p>
								<select className="form-control" name="document_type" ref={register}>
									<option value="Паспорт">Паспорт РФ</option>
									<option value="Свидетельство">Свидетельство о рождении</option>
								</select>
							</div>
							<div>
								<div className="pt-3 pl-4 pr-4 w-25">
									<p>Серия</p>
									<input className="col-sm form-control" type="text" placeholder="_ _ _ _" />
								</div>
								<div className="pt-3 pl-4 pr-4 pb-3 w-25">
									<p>Номер</p>
									<input className="col-sm form-control" type="text" placeholder="_ _ _ _ _ _" />
								</div>
							</div>
						</div>

						<div className="d-flex justify-content-end">
							<button type="submit" className="btn btn-outline-dark m-3 pl-3 pr-3 font-weight-bold" onClick={() => window.scrollTo(0, 1000)}>Следующий пасссажир</button>
						</div>
					</form>
				</div>
				:
				<div className="passengers-form-filling-box mt-5 mb-5 ml-5">
					<div className="passengers-form-filling col">
						<div className="passengers-form-number row pt-4 pb-4">
							<img className="passengers-form-button pl-4" src={iconPlusSircle} alt="..."
								onClick={props.setActiveTrue} />
							<h5 className="ml-3 pt-1">Пассажир {props.passengerNumber}</h5>
						</div>
					</div>
				</div>
			}
		</>
	);
};

class PassengerFormComponent extends React.Component {

	state = {
		active: false,
		documents: true
	};

	setActiveTrue = () => this.setState({ active: true });

	setActiveFalse = () => this.setState({ active: false });

	render() {
		return (
			<PassengerForm
				active={this.state.active}
				documents={this.state.documents}
				setActiveTrue={this.setActiveTrue}
				setActiveFalse={this.setActiveFalse} />
		)
	}
}

export default PassengerFormComponent;