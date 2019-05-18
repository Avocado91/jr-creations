import React from "react"

const Contact = () => (
    <div className="contact">
        <div className="wrapper">
            <h1 className="contact__title">Get in Touch</h1>
            <form
                method="post"
                action="#"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="bot-field" />{" "}
                {/*Netlify anti-spam bot*/}
                <div className="contact__field-container">
                    <label className="contact__label" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="contact__input"
                        type="text"
                        name="name"
                        id="name"
                    />
                </div>
                <div className="contact__field-container">
                    <label className="contact__label" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="contact__input"
                        type="text"
                        name="email"
                        id="email"
                    />
                </div>
                <div className="contact__field-container">
                    <label className="contact__label" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="contact__input"
                        name="message"
                        id="message"
                        rows="6"
                    />
                </div>
                <input
                    className="contact__button"
                    type="submit"
                    value="Send Message"
                />
            </form>
        </div>
    </div>
)

export default Contact
