import React from 'react';
import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';

const HeaderSection = () => {
	return (
		<div className="header-section">
			{Header()}
			{SectionHeader()}
			<div className="header-bottom-line"></div>
		</div>
	);
};

export default HeaderSection;