import React from 'react';
import Header from '../components/Header';
import SectionHeaderTwoPage from '../components/SectionHeaderTwoPage';

const HeaderSectionTwoPage = () => {
	return (
		<div className="header-section-two-page">
			{Header()}
			{SectionHeaderTwoPage()}
			<div className="header-bottom-line"></div>
		</div>
	);
};

export default HeaderSectionTwoPage;