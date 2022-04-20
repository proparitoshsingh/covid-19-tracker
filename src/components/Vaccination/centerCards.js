import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function centerCards() {
  return (
    <div className='container mx-auto row'>
      <div className="card text-white bg-primary mx-auto mt-3 mb-3 col-3 rounded-start " style={{maxWidth: '18rem'}}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Primary card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card text-white bg-info mx-auto mb-3 mt-3 col-3 rounded-start" style={{maxWidth: '18rem'}}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Primary card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  )
}

export default centerCards;