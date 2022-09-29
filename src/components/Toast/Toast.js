import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Toast = () => {
    const notify = () => {
        toast('Activity Completed')
    }
    return (
        <div>
            <button onClick={notify}>Activity Completed</button>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default Toast;