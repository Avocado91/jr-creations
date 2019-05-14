import React from "react"

import Logo from "../images/logo.png"

const HeroBanner = () => (
    <div className="heroBanner">
        <div className="heroBanner__overlay">
            <div className="heroBanner__container">
                <img
                    className="heroBanner__logo"
                    src={Logo}
                    alt="JRCreations logo"
                />
                <p className="heroBanner__text">
                    JR Creations is an Ottawa based home sewing business. We can
                    be found at many local craft shows in the fall and spring.
                    Our products are unique and one of a kind.
                </p>
                <p className="heroBanner__text heroBanner__text--cursive">
                    Take a look around and keep JR Creations in mind for all
                    your crafting ​needs.
                </p>
            </div>
        </div>
    </div>
)
export default HeroBanner
