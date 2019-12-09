import React from 'react';
import ContainerFormMainPage from "./ContainerFormMainPage";

const SectionSearchMain = () => {
	return (
		<div className="header-section">
			<div className="container section-header text-white animated zoomInDow">
				<div className="row">
					<div className="section-header-text col-lg-6 pl-5">
						<h1 className="display-4">Вся жизнь -</h1>
						<h1 className="display-4 font-weight-bold">путешествие!</h1>
					</div>
						<ContainerFormMainPage />
				</div>
			</div>
			<div className="header-bottom-line"></div>
		</div>
	);
};

export default SectionSearchMain;