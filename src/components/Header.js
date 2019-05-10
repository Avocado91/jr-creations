import React from "react"

import Logo from "../images/logo.png"

const Header = () => (
    <div className="header">
        <img src={Logo} alt="JR Creations logo" />
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About Us</a>
        <a href="#">Upcoming Shows</a>
        <a href="#">Contact</a>
    </div>
)

export default Header
