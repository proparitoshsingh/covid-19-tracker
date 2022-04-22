import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Allcards from './Allcards';

function FormCard() {

    const [tpin , settpin]=useState('');
    const [tdate , settdate]=useState('');
    const [isPreviewShown, setPreviewShown] = useState(false);
    const handlePreview=(e)=>{
        e.preventDefault();
        setPreviewShown(true);
    }

  return (
    <div className='container mt-5'>
        <div className="card" >
            <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                    <a className="nav-link active" href="/">Find Your Nearest Vaccination Center By Pin</a>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputNumber1" className="form-label">Enter your Pincode</label>
                        <input type="number" onInput={e => {settpin(e.target.value)}} className="form-control" id="exampleInputNumber1"  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputDate1" className="form-label">Enter the date</label>
                        <input type="date" onInput={e => {settdate(e.target.value)}} className="form-control" id="exampleInputDate1" />
                    </div>
                    <button type="submit" onClick={handlePreview} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        <div>
            {isPreviewShown && <Allcards pin={tpin} date={tdate} />}
        </div>
    </div>
  )
}

export default FormCard;