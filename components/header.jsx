

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <img src="../img/logo.png" alt="Logo" className="header-logo" />
                <h2 style={{ color: 'white' }}>Ayur <span>vaidya</span></h2>
            </div>
            <div className="header-middle">
                <ul className="header-nav">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Instruction">Instruction</NavLink></li>
                    <li><NavLink to="/Books">Book summary</NavLink></li>
                    <li><NavLink to="/Herb">Herb</NavLink></li>
                    <li><NavLink to="/Formulation">Formulation</NavLink></li>
                    <li><NavLink to="/Symptom">Symptom</NavLink></li>
                </ul>
            </div>
            <div className="header-right">
                <NavLink to="/login" className="header-login">Login</NavLink>
            </div>

        </header>
    );
}

export default Header;
