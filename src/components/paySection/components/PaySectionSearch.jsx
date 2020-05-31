import React from 'react';
import progressStateSelect from '../../../images/progress_state_select.png';
import progressStateSelected from '../../../images/progress_state_selected.png';
import ProgressLineCost from "../../shared/ProgressLineCost";
import SideBarPassangersSection from '../../shared/SideBarPassangersSection';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserDataAC } from '../../../redux/action';

class PaySectionSearch extends React.Component {

	state = {
		first_name: this.props.first_name,
		last_name: this.props.last_name,
		patronymic: this.props.patronymic,
		phone: "",
		email: "",
		payment_method: ""
	}

	setFirstName = (e) => this.setState({ first_name: e.currentTarget.value });

	setLastName = (e) => this.setState({ last_name: e.currentTarget.value });

	setPatronymic = (e) => this.setState({ patronymic: e.currentTarget.value });

	setPhone = (e) => this.setState({ phone: e.currentTarget.value });

	setEmail = (e) => this.setState({ email: e.currentTarget.value });

	setPaymentOnline = (e) => this.setState({ payment_method: e.currentTarget.checked ? "online" : "" });

	setPaymentOffline = (e) => this.setState({ payment_method: e.currentTarget.checked ? "cash" : "" });

	setDataPayment = () => {
		this.props.setUserData(this.state);
		this.props.history.push("/check_confirm_order");
	}

	render() {
		return (
			<div>
				<ProgressLineCost tickets={progressStateSelected}
					passengers={progressStateSelected}
					passengersClass="completed"
					payment={progressStateSelect}
					paymentClass="completed"
					checkClass="" />

				<div className="container d-flex">
					<SideBarPassangersSection />

					<div className="col-lg-9 mb-5">
						<div className="passengers-form-filling-box mt-5 mb-5 ml-5">
							<form className="passengers-form-filling col">
								<div className="passengers-form-number border-bottom row pt-4 pb-4">
									<h5 className="ml-5">Персональные данные</h5>
								</div>

								<div className="d-flex">
									<div className="pt-3 pl-4 pr-4 w-100">
										<p>Фамилия</p>
											<input 
											className="col-sm form-control" 
											type="text" 
											value={this.state.last_name}
											onChange={this.setLastName} />
									</div>
									<div className="pt-3 pl-4 pr-4 w-100">
										<p>Имя</p>
											<input 
											className="col-sm form-control" 
											type="text" 
											value={this.state.first_name}
											onChange={this.setFirstName} />
									</div>
									<div className="pt-3 pl-4 pr-4 w-100">
										<p>Отчество</p>
											<input 
											className="col-sm form-control" 
											type="text" 
											value={this.state.patronymic}
											onChange={this.setPatronymic} />
									</div>
								</div>
								<div className="pt-3 pl-4 pr-4 w-50">
									<p>Контактный телефон</p>
										<input 
										className="col-sm form-control" 
										type="text" 
										placeholder="+7 ___ ___ __ __"
										onChange={this.setPhone} />
								</div>
								<div className="pt-3 pb-4 pl-4 pr-4 w-50">
									<p>E-mail</p>
										<input 
										className="col-sm form-control" 
										type="text" 
										placeholder="inbox@gmail.ru"
										onChange={this.setEmail} />
								</div>

								<div className="passengers-form-number border-top border-bottom row pt-4 pb-4">
									<h5 className="ml-5">Способ оплаты</h5>
								</div>

								<div className="row pl-5 mt-4">
									<div className="form-group">
										<input type="checkbox" onChange={this.setPaymentOnline} />
									</div>
									<p className="ml-2 text-black-50">Онлайн</p>
								</div>
								<ul className="list-group list-group-horizontal justify-content-between w-75 ml-3">
									<li className="list-group-item w-50 border-0 font-weight-bold">Банковской картой</li>
									<li className="list-group-item w-50 border-0 font-weight-bold">PayPal</li>
									<li className="list-group-item w-50 border-0 font-weight-bold">Visa QIWI Wallet</li>
								</ul>
								<div className="row p-5 border-top">
									<div className="form-group">
										<input type="checkbox" onChange={this.setPaymentOffline} />
									</div>
									<p className="ml-2 text-black-50">Наличными</p>
								</div>
							</form>
							<div className="d-flex justify-content-end mt-5">
								<button 
								className="btn btn-warning text-white font-weight-bold pl-5 pr-5 mt-5 mb-3"  
								type="button"
								onClick={this.setDataPayment}
								>купить билеты</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		first_name: state.orderTicketsSeats.departure.seats[0].person_info.first_name,
		last_name: state.orderTicketsSeats.departure.seats[0].person_info.last_name,
		patronymic: state.orderTicketsSeats.departure.seats[0].person_info.patronymic
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setUserData: (data) => dispatch(setUserDataAC(data))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PaySectionSearch));