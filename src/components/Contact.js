import React from "react"

const Contact = () => (
    <div>
        <h1>Get in Touch</h1>
        <form>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <input type="textarea" name="message" placeholder="Message" />
            <button>Submit</button>
        </form>
    </div>
)

export default Contact
