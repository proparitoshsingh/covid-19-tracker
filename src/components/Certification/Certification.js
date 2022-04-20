import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Certification() {
  return (
    <div className='container mt-5 mx-auto my-auto'>
        <div className="card text-center">
            <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                    <a className="nav-link active" href="/">Active</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Link</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Disabled</a>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  )
}

export default Certification;