import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CenterCards(props) {
  return (
    <div className='container mx-auto row'>
      <div className="card text-white bg-primary mx-auto mt-3 mb-3 col-8 rounded-start ">
        <div className="card-header" style={{textDecoration: 'underline'}} >Hospital Name : {props.cname}</div>
        <div className="card-body">
          <h5 className="card-title "><strong>Available doses : </strong>{props.capacity}</h5>
          <p className="card-text"><strong>Address : </strong>{props.address}</p>
          <p className='card-text'><strong>Vaccine : </strong>{props.vaccine}</p>
          <p className='card-text'><strong>Fees : </strong>{props.payment}</p>
          <p className='card-text'><strong>From : </strong>{props.tfrom}</p>
          <p className='card-text'><strong>To : </strong>{props.to}</p>
        </div>
      </div>
    </div>
  )
}

export default CenterCards;