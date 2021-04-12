import React from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center mb-5 text-brand">Our Doctors</h5>
                <div className="row">
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                </div>
            </div>
        </section>
    );
};

export default Doctors;