import React from 'react';
import './Services.css';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import teeth from '../../../images/teeth.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        title: 'Fluoride Treatment',
        img: fluoride
    },
    {
        title: 'Cavity Filling',
        img: cavity
    },
    {
        title: 'Teeth Whitening',
        img: teeth
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}> OUR SERVICES </h5>
                <h2> SERVICES WE PROVIDE </h2>
            </div>
            <div className="d-flex justify-content-center mt-5">
            <div className="w-75 row pt-5">
            {
                serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
            }
            </div>
        </div>
        </section>
    );
};

export default Services;