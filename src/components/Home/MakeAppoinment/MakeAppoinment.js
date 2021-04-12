import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppoinment.css';

const MakeAppoinment = () => {
    return (
        <section className="makeAppointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="text-uppercase text-brand"> Appointment </h5>
                        <h1 className="my-4"> Make An Appointment <br/> Today </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nesciunt itaque cupiditate exercitationem nihil voluptas vero nisi eos non molestiae?</p>
                        <button className="btn btn-brand">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;