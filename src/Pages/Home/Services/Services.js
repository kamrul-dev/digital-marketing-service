import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services, setServices] = useServices();

    return (
        <>
            <h3 className='text-center mt-5 mb-4 fw-bold primary-color'>My Services</h3>
            <div className='row container mx-auto'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </>
    );
};

export default Services;