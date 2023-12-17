

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';

function Header() {
    return (
        <header className="header">
            <h2 className="logo">Vaidya</h2>
            <nav className="navigation">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/Instruction">Instructions</NavLink>
                <NavLink to="/Symptom">Vaidya</NavLink>
                <NavLink to="/Herb">Herbs</NavLink>
                <NavLink to="/Formulation">Formulations</NavLink>

            </nav>
        </header>
    );
}

export default Header;
