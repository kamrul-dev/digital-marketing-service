import React from 'react';
import './Footer.css';
import logo from '../../../images/logo-digi.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className='pt-5 pb-5 mt-5' style={{ backgroundColor: '#331C62', color: 'white' }}>
                <div className='row container mx-auto'>
                    <div className="col-lg-4 col-sm-12">
                        <div className='d-flex justify-content-center'>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4">
                        <div className='d-flex justify-content-center'>
                            <ul className='footer-list'>
                                <li><Link to='/'>Open a Ticket</Link></li>
                                <li><Link to='/'>Google Map</Link></li>
                                <li><Link to='/'>Support</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4">
                        <div className='d-flex justify-content-center'>
                            <ul className='footer-list'>
                                <li><Link to='/'>Profiles</Link></li>
                                <li><Link to='/'>Ask any?</Link></li>
                                <li><Link to='/'>Get help</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row container mx-auto pt-5 pr-5 last-footer-list">
                    <div className="col-lg-3 col-sm-12 d-flex justify-content-center">
                        <p>Copyright &copy; {new Date().getFullYear()} DIGI MARK</p>
                    </div>
                    <div className="col-lg-2 col-sm-12 d-flex justify-content-center">
                        <p>Privacy Policy</p>
                    </div>
                    <div className="col-lg-2 col-sm-12 d-flex justify-content-center">
                        <p>Terms of Use</p>
                    </div>
                    <div className="col-lg-2 col-sm-12 d-flex justify-content-center">
                        <p>Pricing</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;