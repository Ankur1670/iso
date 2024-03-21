// Navbar.js

import React from 'react';
import './navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand " href="#home">SS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services"> Our Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#howitwork">How it work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonial">Testimonial</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#faq">FAQ's</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact us</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
