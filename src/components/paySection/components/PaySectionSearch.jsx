import React from 'react';
import {NavLink} from 'react-router-dom';
import progressStateSelect from '../../../images/progress_state_select.png';
import progressStateSelected from '../../../images/progress_state_selected.png';
import ProgressLineCost from "../../shared/ProgressLineCost";
import SideBarPassangersSection from '../../shared/SideBarPassangersSection';

const PaySectionSearch = () => {
	return (
		<div>
			<ProgressLineCost tickets={progressStateSelected}
												passengers={progressStateSelected}
												passengersClass="completed"
												payment={progressStateSelect}
												paymentClass="completed"
												checkClass=""/>

			<div className="container d-flex">
				<SideBarPassangersSection />

				<div className="col-lg-9 mb-5">
					<div className="passengers-form-filling-box mt-5 mb-5 ml-5">
						<div className="passengers-form-filling col">
							<div className="passengers-form-number border-bottom row pt-4 pb-4">
								<h5 className="ml-5">Персональные данные</h5>
							</div>

							<div className="d-flex">
								<form className="form pt-3 pl-4 pr-4 w-100" action="input">
									<p>Фамилия</p>
									<div className="d-flex form-group">
										<input className="col-sm form-control" type="text" placeholder="Мартынюк"/>
									</div>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-100" action="input">
									<p>Имя</p>
									<div className="d-flex form-group">
										<input className="col-sm form-control" type="text" placeholder="Ирина"/>
									</div>
								</form>
								<form className="form pt-3 pl-4 pr-4 w-100" action="input">
									<p>Отчество</p>
									<div className="d-flex form-group">
										<input className="col-sm form-control" type="text" placeholder="Эдуардовна"/>
									</div>
								</form>
							</div>
							<form className="form pt-3 pl-4 pr-4 w-50" action="input">
								<p>Контактный телефон</p>
								<div className="d-flex form-group">
									<input className="col-sm form-control" type="text" placeholder="+7 ___ ___ __ __"/>
								</div>
							</form>
							<form className="form pt-3 pl-4 pr-4 w-50" action="input">
								<p>E-mail</p>
								<div className="d-flex form-group">
									<input className="col-sm form-control" type="text" placeholder="+inbox@gmail.ru"/>
								</div>
							</form>

							<div className="passengers-form-number border-top border-bottom row pt-4 pb-4">
								<h5 className="ml-5">Способ оплаты</h5>
							</div>

							<div className="row pl-5 mt-4">
								<div className="form-group">
									<input type="checkbox"/>
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
									<input type="checkbox"/>
								</div>
								<p className="ml-2 text-black-50">Наличными</p>
							</div>
						</div>
						<div className="d-flex justify-content-end mt-5">
							<NavLink className="btn btn-warning text-white font-weight-bold pl-5 pr-5 mt-5 mb-3" to="/check_confirm_order" type="button">купить билеты</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaySectionSearch;