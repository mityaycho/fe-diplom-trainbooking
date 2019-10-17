import React from 'react';
import ContainerFormOneTwoPage from "./ContainerFormOneTwoPage";
import {NavLink} from "react-router-dom";

const HeaderSectionFirstPage = () => {
	return (
		<div className="header-section">
			<div className="container section-header text-white animated zoomInDow">
				<div className="row">
					<div className="section-header-text col-lg-6 pl-5">
						<h1 className="display-4">Вся жизнь -</h1>
						<h1 className="display-4 font-weight-bold">путешествие!</h1>
					</div>
					<div className="section-header-form col-lg-6">
						<ContainerFormOneTwoPage />
						<div className="text-right ml-4">
							<NavLink className="btn btn-warning mt-5 col-lg-6" to="/two_page" type="button">найти билеты</NavLink>
						</div>
					</div>
				</div>
			</div>
			<div className="header-bottom-line"></div>
		</div>
	);
};

export default HeaderSectionFirstPage;