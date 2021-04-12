import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointHeader from '../AppointHeader/AppointHeader';

const Appointment = () => {

    const [ selectedDate , setSelectedDate ] = useState(new Date());
    const handleDateChange = date => {
        console.log(date);
        setSelectedDate(date);
    }

    return (
        <div>
            <Navigation></Navigation>
            <AppointHeader handleDateChange={handleDateChange}></AppointHeader>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;