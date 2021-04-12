import React from 'react';
import chair from '../../../images/chair.png';
import './AppointHeader.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const AppointHeader = ({handleDateChange}) => {

    return (
        <div className="header">
             <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-5 offset-md-1">
                <h1>Appointment</h1>
                <Calendar onChange={handleDateChange} value={new Date()} />
            </div>
            <div className="col-md-5">
                <img src={chair} class="img-fluid" alt=""/>
            </div>
        </main>
        </div>
    );
};

export default AppointHeader;