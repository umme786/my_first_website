import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";

const Contact = () => {

    return (
        <div className="contact">
            <div className="container">
                <div className="contactSection">

                    <div className="row justifyCenter">
                        <div className="col-6">
                            <div className="contactSection-logo">
                                <img src="/images/logo.png" alt="img" />
                            </div>
                            <p> Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy </p>
                            <ul className="contactCircles">
                                <li> <FaFacebookF /> </li>
                                <li> <FaTwitter /> </li>
                                <li> <FaPinterest /> </li>
                                <li> <FaInstagram /> </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact
