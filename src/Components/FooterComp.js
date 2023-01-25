import React from "react";
import { Row } from "react-bootstrap";
import logo from './images/logo.png'
import facebook from './images/Facebook.png'
import instagram from './images/Instagram.png'
import twitter from './images/Twitter.png'

const Footer = () => {
    return (
        <>
        <Row className="m-5" lg={12}>
            <div className="col-3">
                <img src={logo}  alt='logo'/>
                <p>Fresh fruits & Vegetables Form Farm To Fork</p>
             </div>
             <div className="col-3">
                <ul className="list-unstyled text-muted lh-5">
                <h3 className="text-success">Learn</h3>
                    <li>Our Story</li>
                    <li>Food Safety</li>
                    <li>Farmers</li>
                    <li>Businesses</li>
                    <li>Privacy Policy</li>
                </ul>
             </div>
             <div className="col-3">
                <ul className="list-unstyled lh-5 text-muted">
                <h3 className="text-success">Resources</h3>
                    <li>Join Terralima</li>
                    <li>FAQs</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                    <li>Terms Of Service</li>
                </ul>
             </div>
             <div className="col-3">
                <ul className="list-unstyled">
                <h3 className="text-success">Follow Us</h3>
                    <li><a href="/" className="text-decoration-none text-muted"><img src={facebook} alt='facebook'/> Facebook</a></li>
                    <li><a href="/" className="text-decoration-none text-muted"><img src={instagram} alt='instagram'/> Instagram</a></li>
                    <li><a href="/" className="text-decoration-none text-muted"><img src={twitter} alt='twitter'/> Twitter</a></li>
                </ul>
             </div>
        </Row>
        <div>
            <p className="m-5 p-2">2023 Terralima. All right reserved.</p>
        </div>
        
        </>
        
    )
}
export default Footer;