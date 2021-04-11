import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';

const infoData = [
    {
        title:'Opening Hours',
        description: 'We are open 24/7 days',
        icon: faClock,
        backgroundColor: 'primary'
    },
    {
        title:'Visit Our Location',
        description: 'Auckland , New Zealand',
        icon: faMapMarker,
        backgroundColor: 'dark'
    },
    {
        title:'Call Us Now',
        description: '+9548147822',
        icon: faPhone,
        backgroundColor: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                infoData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;