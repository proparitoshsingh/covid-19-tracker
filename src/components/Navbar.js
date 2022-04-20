import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light light-blue lighten-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">COVID-19 Tracker App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navbar-dark" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav navbar-right">
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link"  to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link"  to="/vaccination">Vaccination</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link"  to="/certification">Certifications</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;