import React from 'react'
import "./Footer.css"
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
const Footer = () => {
    return (
        <div className="footer">
            {/* Button Part */}

            {/* 3 Section */}
            <div className="footer__options">
                {/* First column */}
                <div className="footer__optionsFirst">
                    <h1>REAL SCHOOL</h1>
                    <p>A Product of uFaber Edutech</p>
                    <div className="footer__optionInfo">
                        <LocationOnOutlinedIcon />
                        <p>
                            FF A-006, Art Guild House, Phoenix Market City, Kurla, Mumbai - 400070
                        </p>
                    </div>
                    <div className="footer__optionInfo">
                        <PhoneIcon style={{
                            border: "1px solid rgba(255, 255, 255, .5)", width: '20px !important',
                            height: '18px !important'
                        }} />
                        <p>
                            +91 8080 555 766
                        </p>
                    </div>
                    <div className="footer__optionInfo">
                        <MailOutlineSharpIcon />
                        <p>
                            info@ufaber.com
                        </p>
                    </div>
                </div>
                {/* second column */}
                <div className="footer__mainLinks">
                    <h5>QUICK LINKS</h5>
                    <p>Teach with Us</p>
                    <p>Refer a Friend</p>
                    <p>Become an Affiliate</p>
                </div>

                {/* Third column */}
                <div className="footer__quickLinks">
                    <p>About Us</p>
                    <p>FAQs</p>
                    <p> Blog</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="footer__social">
                    <div className="footer__socialMedia">
                        <i className="fa fa-facebook" ></i>
                        <i className="fa fa-instagram" ></i>
                        <i className="fa fa-youtube-play" ></i>
                    </div>
                    <div className="footer__downloadLinks" >
                        <img className="google" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="" />
                        <img src="https://www.freepnglogos.com/uploads/app-store-logo-png/available-the-app-store-logo-png-images-14.png" alt="" className="apple" />
                    </div>
                </div>
            </div>
            {/* Copyrights */}
            <div className="footer__copyright">
                © 2019 uFaber, All rights reserved uFaber Edutech
            </div>
        </div>
    )
}

export default Footer
