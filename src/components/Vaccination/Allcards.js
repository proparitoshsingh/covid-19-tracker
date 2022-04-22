import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CenterCard from './CenterCards';
import Axios from 'axios';

function Allcards(props){
    const [arr,setarr]=useState();

    var url='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+(props.pin)+'&date='+props.date.slice(8,10)+props.date.slice(4,5)+props.date.slice(5,7)+props.date.slice(4,5)+props.date.slice(0,4);
    const fcname=async () => {
        const response=await Axios.get(url);
        setarr(response.data.sessions);     
    };
    fcname()
    var element=arr?.map((ind)=> {
        return <CenterCard cname={ind.name} capacity={ind.available_capacity} address={ind.address} vaccine={ind.vaccine} payment={ind.fee_type} tfrom={ind.from} to={ind.to} />;
    });

  return (
    <div>
        {element}
    </div>
  )
}

export default Allcards;