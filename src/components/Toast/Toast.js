import React from 'react';
import './Toast.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Toast = () => {
    const notify = () => {
        toast('Activity Completed')
    }
    return (
        <div>
            <p className='btn-wrapper'><button className='toast-btn' onClick={notify}>Activity Completed</button></p>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default Toast;