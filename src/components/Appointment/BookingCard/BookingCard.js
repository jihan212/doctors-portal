import React, { useState } from 'react';
import AppointmentForm from '../AppoitmentForm/AppointmentForm';

const BookingCard = ({available , date}) => {
    
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
  

    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3 m-5">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{available.subject}</h5>
                    <h6>{available.visitingHours}</h6>
                    <p>{available.totalSpaces} SPACES AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-brand text-uppercase">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={available.subject}  date={date} ></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;