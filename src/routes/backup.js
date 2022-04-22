
var url='https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+'110001'+'&date='+'23-04-2022';
    const [arr,setarr]=useState();
    const [card , setcard]=useState();
    const fcname=async () => {
        const response=await Axios.get(url);
        setarr(response.data.sessions);     
    };
    fcname()
    var element=arr?.map((ind)=> {
        return <CenterCard cname={ind.name} capacity={ind.available_capacity} address={ind.address} vaccine={ind.vaccine} payment={ind.fee_type} tfrom={ind.from} to={ind.to} />
    });