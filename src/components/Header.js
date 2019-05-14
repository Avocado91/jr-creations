import React from "react"

import Logo from "../images/logo.png"

const Header = () => (
    <div className="header">
        <div className="wrapper flex flex--header">
            <img className="header__logo" src={Logo} alt="JR Creations logo" />
            <div className="nav">
                <a className="nav__link" href="#">
                    Home
                </a>
                <a className="nav__link" href="#">
                    Products
                </a>
                <a className="nav__link" href="#">
                    About Us
                </a>
                <a className="nav__link" href="#">
                    Upcoming Shows
                </a>
                <a className="nav__link" href="#">
                    Contact
                </a>
            </div>
        </div>
    </div>
)

export default Header
