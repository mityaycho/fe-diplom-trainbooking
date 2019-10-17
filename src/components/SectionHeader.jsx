import React from 'react';
import {NavLink} from 'react-router-dom';
import iconCachedWhite from '../images/icon_cached_white.png';

const SectionHeader = () => {
	return (
		<div className="container section-header text-white animated zoomInDow">
			<div className="row">
				<div className="section-header-text col-lg-6 pl-5">
					<h1 className="display-4">Вся жизнь -</h1>
					<h1 className="display-4 font-weight-bold">путешествие!</h1>
				</div>
				<div className="section-header-form d-flex flex-column p-3">
					<div className="row mt-5">
						<form className="form mt-5 w-100" action="input">
							<p className="ml-3">Направление</p>
							<div className="d-flex form-group m-3">
								<input className="col-sm form-control" type="text" placeholder="откуда" />
								<img className="mt-auto mb-2" src={iconCachedWhite} alt="..."/>
								<input className="col-sm form-control mr-2" type="text" placeholder="куда" />
							</div>
							<div className="d-flex w-100 h-100">
								<div className="d-flex w-100 form-group m-3">
									<input className="col-sm mr-4 form-control" type="date" />
									<input className="col-sm mr-2 form-control" type="date" />
								</div>
							</div>
						</form>
					</div>
					<NavLink className="btn btn-warning btn-sx btn-block mb-4 mt-auto w-50 align-self-end" to="/two_page" type="button">найти билеты</NavLink>
				</div>
			</div>
		</div>
	);
};

export default SectionHeader;