import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

import "./newsLetter.css"

function NewsLetter() {

    const [email, setEmail] = useState("")

    const value = {
        from_name: "Người mua hàng",
        email: email,
        message: "Giữ an toàn thông tin của khách hàng"
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send('service_245azxe', 'template_4kap7e8', value, 'UAJz1vNL2J3mPYYMJ')
            .then(() => {
                toast.success('Email sent successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }, () => {
                toast.error('Sending email failed', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
    };

    return (
        <div className='newsLetter'>
            <h1>Get Exclusive Ofeers On Your Email</h1>
            <p>Subcribe to our newletter and stay undated</p>
            <form onSubmit={sendEmail}>
                <input type="email" placeholder='Your email' value={email} onChange={e => setEmail(e.target.value)} />
                <button>Subscribe</button>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
        </div>
    )
}

export default NewsLetter