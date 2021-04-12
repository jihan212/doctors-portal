import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointHeader from '../AppointHeader/AppointHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {

    const [ selectedDate , setSelectedDate ] = useState(new Date());
    const handleDateChange = date => {
        
        setSelectedDate(date);
    }

    return (
        <div>
            <Navigation></Navigation>
            <AppointHeader handleDateChange={handleDateChange}></AppointHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;