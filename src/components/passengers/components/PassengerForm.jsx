import React from 'react';
import iconMinusSircle from '../../../images/icon_minus_sircle.png';
import iconCloseX from '../../../images/icon_close_x.png';
import iconPlusSircle from '../../../images/icon_plus_sircle.png';

import { useForm } from 'react-hook-form';


const Form = (props) => {

	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		let newData = { ...data };

		if (data.document_type === "Паспорт") {
			newData = {
				...data,
				document_data: data.serial + ' ' + data.number
			}
			delete newData.serial
			delete newData.number
		}

		props.setData(newData, props.passengerNumber);
		props.setActiveButton();
	}

	const documents = (value) => {
		if (value === "Паспорт") {
			props.setDocumentTrue();
		} else {
			props.setDocumentFalse();
		}
	}

	return (
		<>
			{props.active ?
				<form className="passengers-form-filling col mt-5 mb-5" onSubmit={handleSubmit(onSubmit)}>
					<div className="passengers-form-number border-bottom row pt-4 pb-4">
						<img className="passengers-form-img pl-4 mt-auto" src={iconMinusSircle} alt="..."
							onClick={props.setActiveFalse} />
						<h5 className="ml-3">Пассажир {props.passengerNumber}</h5>
						<img className="ml-auto mr-5 mt-auto" src={iconCloseX} alt="..." />
					</div>

					<div className="col-lg-4 pl-4 pt-4 pr-4">
						<select className="form-control" name="is_adult" ref={register}>
							<option value={true}>Взрослый</option>
							<option value={false}>Десткий</option>
						</select>
					</div>
					<div className="d-flex flex-wrap">
						<div className="col-lg-4 pt-3 pl-4 pr-4 w-100">
							<p>Фамилия</p>
							<input
								className="col-sm form-control"
								type="text"
								placeholder="Мартынюк"
								name="last_name"
								ref={register({ required: true, maxLength: 30 })} />
							{errors.last_name && errors.last_name.type === "required" && <span>*укажите фамилию</span>}
							{errors.last_name && errors.last_name.type === "maxLength" && <span>*длина превышена</span>}
						</div>
						<div className="col-lg-4 pt-3 pl-4 pr-4 w-100">
							<p>Имя</p>
							<input
								className="col-sm form-control"
								type="text"
								placeholder="Ирина"
								name="first_name"
								ref={register({ required: true, maxLength: 30 })} />
							{errors.first_name && errors.first_name.type === "required" && <span>*укажите имя</span>}
							{errors.first_name && errors.first_name.type === "maxLength" && <span>*длина превышена</span>}
						</div>
						<div className="col-lg-4 pt-3 pl-4 pr-4 w-100">
							<p>Отчество</p>
							<input
								className="col-sm form-control"
								type="text"
								placeholder="Эдуардовна"
								name="patronymic"
								ref={register({ required: true, maxLength: 30 })} />
							{errors.patronymic && errors.patronymic.type === "required" && <span>*укажите отчество</span>}
							{errors.patronymic && errors.patronymic.type === "maxLength" && <span>*длина превышена</span>}
						</div>
					</div>
					<div className="d-flex flex-wrap">
						<div className="col-lg-2 pt-3 pl-4 pr-4 mr-5">
							<p>Пол</p>
							<label className="switch">
								<input type="checkbox" name="gender" ref={register} />
								<span className="slider-checkbox">&nbsp; &nbsp; М &nbsp; &nbsp; &nbsp; &nbsp; Ж</span>
							</label>
						</div>
						<div className="col-lg-4 pt-3 pl-4 pr-4">
							<p>Дата рождения</p>
							<input
								className="col-sm form-control"
								type="text"
								placeholder="дд/мм/гг"
								name="birthday"
								ref={register({ required: true, maxLength: 30 })} />
							{errors.birthday && errors.birthday.type === "required" && <span>*укажите дату</span>}
							{errors.birthday && errors.birthday.type === "maxLength" && <span>*длина превышена</span>}
						</div>
					</div>
					<div className="row mt-3 border-bottom">
						<input className="ml-5 mt-1" type="checkbox" />
						<p className="ml-2">ограниченная подвижность</p>
					</div>
					<div className="d-flex flex-wrap">
						<div className="col-lg-4 ml-2 pt-3 pr-4">
							<p>Тип докумета</p>
							<select
								className="form-control"
								name="document_type"
								ref={register}
								onChange={e => documents(e.currentTarget.value)}>
								<option value="Паспорт">Паспорт РФ</option>
								<option value="Свидетельство">Свидетельство о рождении</option>
							</select>
						</div>
						{props.documents ?
							<>
								<div className="col-lg-3 pt-3 pl-4 pr-4">
									<p>Серия</p>
									<input
										className="col-sm form-control"
										type="text"
										placeholder="_ _ _ _"
										name="serial"
										ref={register({ required: true, maxLength: 30 })} />
									{errors.serial && errors.serial.type === "required" && <span>*укажите серию</span>}
									{errors.serial && errors.serial.type === "maxLength" && <span>*длина превышена</span>}
								</div>
								<div className="col-lg-3 pt-3 pl-4 pb-4">
									<p>Номер</p>
									<input className="col-sm form-control"
										type="text"
										placeholder="_ _ _ _ _ _"
										name="number"
										ref={register({ required: true, maxLength: 30 })} />
									{errors.number && errors.number.type === "required" && <span>*укажите номер</span>}
									{errors.number && errors.number.type === "maxLength" && <span>*длина превышена</span>}
								</div>
							</>
							:
							<div className="col-lg-4 pt-3 pl-4 pb-4">
								<p>Номер</p>
								<input
									className="col-sm form-control"
									type="text"
									placeholder="_ _ _  _ _  _ _ _ _ _"
									name="document_data"
									ref={register({ required: true, maxLength: 30 })} />
								{errors.document_data && errors.document_data.type === "required" && <span>*укажите номер</span>}
								{errors.document_data && errors.document_data.type === "maxLength" && <span>*длина превышена</span>}
							</div>}
					</div>
					<div className="row border-bottom"></div>

					<div className="row justify-content-end">
						<button
							type="submit"
							className="btn btn-outline-dark m-3 pl-3 pr-3 font-weight-bold"
						>Следующий пасссажир</button>
					</div>
				</form>
				:
				<div className="passengers-form-filling mt-5 mb-5">
					<button
						className="passengers-form-button d-flex pt-4 pb-4"
						onClick={props.setActiveTrue}
						disabled={props.disableForm}>
						<img className="passengers-form-img pl-4 mt-auto" src={iconPlusSircle} alt="..." />
						<h5 className="ml-3 pt-1">Пассажир {props.passengerNumber}</h5>
					</button>
				</div>
			}
		</>
	);
};

class PassengerForm extends React.Component {

	state = {
		active: this.props.activeForm,
		documents: true
	};

	setActiveTrue = () => {
		this.setState({ active: true });
		this.props.setDisableForm();
	};

	setActiveFalse = () => this.setState({ active: false });

	setDocumentTrue = () => this.setState({ documents: true });

	setDocumentFalse = () => this.setState({ documents: false });

	setData = (data, number) => this.props.setPersonInfo(data, number);

	render() {
		return (
			<Form
				disableForm={this.props.disableForm}
				passengerNumber={this.props.passengerNumber}
				setActiveButton={this.props.setActiveButton}
				setData={this.setData}
				active={this.state.active}
				documents={this.state.documents}
				setActiveTrue={this.setActiveTrue}
				setActiveFalse={this.setActiveFalse}
				setDocumentTrue={this.setDocumentTrue}
				setDocumentFalse={this.setDocumentFalse} />
		)
	}
}

export default PassengerForm;