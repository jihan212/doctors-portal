import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Starts Here </h1>

                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio optio repudiandae hic, molestias officiis minus tempora necessitatibus voluptatem neque nobis?</p>
 
                <Link to="/appointment">
                <button style={{backgroundColor:'#3A4256' , color:'white'}} className="btn">GET APPOINTMENT</button>
                </Link>
            </div>
            <div className="col-md-6">
                <img src={chair} class="img-fluid" alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;