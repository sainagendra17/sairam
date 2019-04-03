import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper orange darken-1">
            <div className="container">
                <Link to="/" className="brand-logo">SAIRAM</Link>
                <ul className="right">
                    <li> <NavLink to="/gallery">Gallery</NavLink></li>
                    <li> <NavLink to="/arti">Arti</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;