import React from 'react';
import Header from '../components/Header';
import SectionHeaderThreePage from '../components/SectionHeaderThreePage';

const HeaderSectionThreePage = () => {
	return (
		<div className="header-section-three-page">
			{Header()}
			{SectionHeaderThreePage()}
		</div>
	);
};

export default HeaderSectionThreePage;