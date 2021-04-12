import React from 'react';
import chair from '../../../images/chair.png';
import './AppointHeader.css'

const AppointHeader = () => {
    return (
        <div className="header">
             <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-5 offset-md-1">
                <h1>Calender</h1>
            </div>
            <div className="col-md-5">
                <img src={chair} alt="" class="img-fluid" alt="Responsive image"/>
            </div>
        </main>
        </div>
    );
};

export default AppointHeader;