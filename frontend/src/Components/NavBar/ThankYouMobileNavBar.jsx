import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './MobileNavBar.css';
import transparentLogo from '../../../assets/logo_transparent.png'; // Adjust the path according to your folder structure
import { NavLink } from 'react-router-dom';

const ThankYouMobileNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);  // Added state to handle the menu open/close

    const handleStateChange = (state) => {
        setIsOpen(state.isOpen);  // Update the state when the menu is opened/closed
    };

    const closeMenu = () => {
        setIsOpen(false);  // Close the menu
    };

    return (
        <div className="mobile-navbar">
            <Menu isOpen={isOpen} onStateChange={handleStateChange}>
                <NavLink id="thank-you" className="menu-item" to="/thank-you" onClick={closeMenu}>Home</NavLink>
            </Menu>
            <NavLink to="/" style={{ paddingLeft: 30 }} onClick={closeMenu}>
                <img
                    src={transparentLogo}
                    className="d-inline-block align-top"
                    width="40"
                    height="40"
                />
                <div
                    className="d-inline-block align-top"
                    style={{
                        fontFamily: 'Mokoto',
                        fontSize: 20,
                        padding: 5,
                    }}
                >
                    HACKRPI
                </div>
            </NavLink>
        </div>
    );
};

export default ThankYouMobileNavBar;
