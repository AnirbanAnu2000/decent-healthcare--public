import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ServiceDetails = () => {

  const {serviceId} = useParams();
  const [service, setService] = useState({});

  useEffect( () => {
    
    const url = `/services.json`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
      const item = data?.find(product=>product.id == serviceId);
      setService(item);
    })
  }, [service, serviceId]);
  

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="text-center border-top border-1 border-primary py-4">
            <h1 className="brand-color fw-bold mb-3">Service details for ID: {serviceId} </h1>
            <img src={service.img} alt="" />
            <h1 className="fw-bold mt-4 mb-3 text-primary">{service.name}</h1>
            <p>{service.shortDetail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
