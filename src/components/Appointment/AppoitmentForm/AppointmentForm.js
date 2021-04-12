import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './AppointmentForm.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

const AppointmentForm = ({modalIsOpen , closeModal , appointmentOn, date}) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 className="text-center text-brand">{appointmentOn}</h2>
          <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>

          <form className="p-5 appoint-form" onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <input type="text" name="name" placeholder="Your Name" className="form-control" />
                    {errors && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <input type="text" name="phone" placeholder="Phone Number" className="form-control" />
                    {errors && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <input type="text" name="email" placeholder="Email" className="form-control" />
                    {errors && <span>This field is required</span>}
                </div>

                <div className="form-group row">
                        <div className="col-4">
                            <select className="form-control" name="gender"  >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors && <span>This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input  className="form-control" name="age" placeholder="Your Age" type="number" /> 
                            {errors && <span>This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input className="form-control" name="weight" placeholder="Weight" type="number" />  
                            {errors && <span>This field is required</span>}        
                        </div>
                    </div>

                <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                </div>
        </form>

        
        </Modal>
      </div>
    );
};

export default AppointmentForm;