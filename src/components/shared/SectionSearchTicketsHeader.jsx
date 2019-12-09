import React from 'react';
import {NavLink} from "react-router-dom";

const SectionSearchTicketsHeader = () => {
	return (
		<div className="header-section-three-page">
			<div className="text-white animated zoomInDow">
				<div className="container section-header-order">
					<div className="row">
						<div className="section-header-form-order col-lg-12">
							<div className="d-flex">
								<form className="form mt-3 w-100" action="input">
									<p className="ml-3">Направление</p>
									<div className="d-flex form-group">
										<input className="col-sm form-control ml-3" type="text" placeholder="откуда"/>
										<i className="glyphicon glyphicon-user"></i>
										<input className="col-sm form-control ml-3" type="text" placeholder="куда"/>
									</div>
								</form>
								<form className="form mt-3 w-100" action="input">
									<p className="ml-3">Дата</p>
									<div className="d-flex form-group m-3">
										<input className="col-sm form-control" type="date"/>
										<i className="glyphicon glyphicon-user"></i>
										<input className="col-sm form-control ml-3" type="date"/>
									</div>
								</form>
							</div>
							<div className="text-right">
								<NavLink className="btn btn-warning btn-sm m-3 col-lg-3" to="/" type="button">найти
									билеты</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionSearchTicketsHeader;