import React from 'react';

import Navbar from '../components/Navbar';
import Vaccination from '../components/Vaccination/centerCards';

export default function vaccination(){
    return (
        <div className=''>
            <Navbar />
            <Vaccination />
        </div>
    );
}