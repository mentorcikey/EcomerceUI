import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";

import "./navbar.css"
import cartIcon from "../../assets/cart_icon.png"
import Sidebar from './Sidebar';

function Navbar() {

    const [menu, setMenu] = useState("shop")
    const [sideBar, setSideBar] = useState(false)

    const handleSidebar = () => {
        setSideBar(!sideBar)
    }

    console.log(sideBar)

    return (
        <div className="navbar">
            <div className='nav-logo'>
                <p>CIT EDU Shop</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => setMenu("shop")}><Link style={{ textDecoration: 'none' }} to="/">Shop</Link> {menu === "shop" ? <hr /> : ""}</li>
                <li onClick={() => setMenu("mens")}><Link style={{ textDecoration: 'none' }} to="mens">Men</Link> {menu === "mens" ? <hr /> : ""}</li>
                <li onClick={() => setMenu("womens")}><Link style={{ textDecoration: 'none' }} to="womens">Women</Link> {menu === "womens" ? <hr /> : ""}</li>
                <li onClick={() => setMenu("kids")}><Link style={{ textDecoration: 'none' }} to="kids">Kids</Link> {menu === "kids" ? <hr /> : ""}</li>
            </ul>
            <div className='nav-login-cart'>
                <button>Login</button>
                <Link to="cart">
                    <img src={cartIcon} alt="cartIcon" />
                </Link>
                <div className='nav-cart-count'>0</div>
            </div>
            {
                sideBar ? <Sidebar /> : ""
            }
            <FaBars onClick={handleSidebar} />
        </div>
    )
}

export default Navbar