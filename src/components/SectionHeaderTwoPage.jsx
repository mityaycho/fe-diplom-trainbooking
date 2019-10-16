import React from 'react';
import {NavLink} from 'react-router-dom';
import iconCachedWhite from '../images/icon_cached_white.png';

const SectionHeaderTwoPage = () => {
	return (
		<div className="container section-header text-white animated zoomInDow">
			<div className="row">
				<div className="section-header-text col-lg-6 pl-5">
					<h1 className="display-4">Вся жизнь -</h1>
					<h1 className="display-4 font-weight-bold">путешествие!</h1>
				</div>
				<div className="section-header-form col-lg-6">
					<div className="row mt-5">
						<form className="form mt-5 w-100" action="input">
							<p className="ml-3">Направление</p>
							<div className="d-flex form-group m-3">
								<input className="col-sm form-control" type="text" placeholder="откуда" />
								<img className="mt-auto mb-2" src={iconCachedWhite} alt="..."/>
								<input className="col-sm form-control" type="text" placeholder="куда" />
							</div>
						</form>
						<form className="form mt-5 w-100" action="input">
							<p className="ml-3">Дата</p>
							<div className="d-flex form-group m-3">
								<input className="col-sm form-control mr-4" type="date" placeholder="дд/мм/гг" />
								<input className="col-sm form-control" type="date" placeholder="дд/мм/гг" />
							</div>
						</form>
					</div>
					<div className="text-right ml-4">
						<NavLink className="btn btn-warning mt-5 col-lg-6" to="/three_page" type="button">найти билеты</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionHeaderTwoPage;