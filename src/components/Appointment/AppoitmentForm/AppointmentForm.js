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

    const { handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
        closeModal();
    }

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
                    {errors && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <input type="text" name="phone" placeholder="Phone Number" className="form-control" />
                    {errors && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <input type="text" name="email" placeholder="Email" className="form-control" />
                    {errors && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <input type="date" name="date" placeholder="Date" className="form-control" />
                    {errors && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <input type="time" name="time" placeholder="Time" className="form-control" />
                    {errors && <span>This field is required</span>}
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