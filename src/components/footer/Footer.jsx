import React from 'react'
import "./footer.css"
import { FaInstagram, FaFacebookSquare, FaTiktok } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <p>CIT Edu Shop</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer-social-icon'>
                < FaInstagram />
                <FaFacebookSquare />
                <FaTiktok />
            </div>
            <div className='footer-coppy-right'>
                <hr />
                <p>Copyright @ 2023 - All right Resevers </p>
            </div>
        </div>
    )
}

export default Footer