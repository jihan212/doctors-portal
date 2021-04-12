import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointHeader from '../AppointHeader/AppointHeader';

const Appointment = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AppointHeader></AppointHeader>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;