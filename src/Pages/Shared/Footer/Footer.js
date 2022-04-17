import React from 'react';
import './Footer.css';
import logo from '../../../images/logo-digi.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className='pt-5 pb-5 mt-5' style={{ backgroundColor: '#331C62', color: 'white' }}>
                <div className='row container mx-auto'>
                    <div className="col-lg-6 col-sm-12">
                        <div>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 col-lg-3">

                        <ul className='footer-list'>
                            <li><Link to='/'>Open a Ticket</Link></li>
                            <li><Link to='/'>Google Map</Link></li>
                            <li><Link to='/'>Support</Link></li>
                        </ul>
                        {/* <Link to='/'>About online food</Link>
                        <Link to='/'>Read our blog</Link>
                        <Link to='/'>Sign up to deliver</Link>
                        <Link to='/'>Add your restuarant</Link> */}
                    </div>
                    <div className="col-md-3 col-sm-12 col-lg-3">
                        <ul className='footer-list'>
                            <li><Link to='/'>Profiles</Link></li>
                            <li><Link to='/'>Ask any?</Link></li>
                            <li><Link to='/'>Get help</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row container mx-auto pt-5 last-footer-list">
                    <div className="col-lg-6 col-sm-12">
                        <p>Copyright &copy; 2022 DIGI MARK</p>
                    </div>
                    <div className="col-lg-2 col-sm-12">
                        <p>Privacy Policy</p>
                    </div>
                    <div className="col-lg-2 col-sm-12">
                        <p>Terms of Use</p>
                    </div>
                    <div className="col-lg-2 col-sm-12">
                        <p>Pricing</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;