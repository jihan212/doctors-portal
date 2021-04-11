import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
    return (
        <div className="Header-container">
            <Navigation></Navigation>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;