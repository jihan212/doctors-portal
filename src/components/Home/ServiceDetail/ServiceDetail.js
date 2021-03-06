import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{ height:'50px'}} src={service.img} alt=""/>
            <h5 className="mt-5 mb-3">{service.title}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium minus minima aut sint ipsum nisi quae ipsam itaque dolorum.</p>
        </div>
    );
};

export default ServiceDetail;