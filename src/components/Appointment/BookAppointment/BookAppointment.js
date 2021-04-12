import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const availableData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHours:'8:00 AM - 12:00 PM',
        totalSpaces: 10
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHours:'8:00 AM - 12:00 PM',
        totalSpaces: 10
    },
    {
        id: 3,
        subject: 'Cavity Protection',
        visitingHours:'8:00 AM - 12:00 PM',
        totalSpaces: 10
    },
    {
        id: 4,
        subject: 'Teeth Orthodontics',
        visitingHours:'8:00 AM - 12:00 PM',
        totalSpaces: 10
    },
    {
        id: 5,
        subject: 'Cosmetic Dentistry',
        visitingHours:'8:00 AM - 12:00 PM',
        totalSpaces: 10
    },
    {
        id: 6,
        subject: 'Cavity Protection',
        visitingHours:'8:00 AM - 12:00 PM',
        totalSpaces: 10
    }
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h1 className="text-center text-brand">Book Appointment on {date.toDateString()}</h1>
            <div className="row">
                {
                    availableData.map((available => <BookingCard available={available} date={date} key={available.id} ></BookingCard> ))
                }
            </div>
        </section>
    );
};

export default BookAppointment;