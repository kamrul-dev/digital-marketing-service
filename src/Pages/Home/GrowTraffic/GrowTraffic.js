import React from 'react';
import { Container } from 'react-bootstrap';
import './GrowTraffic.css';
import growImage from '../../../images/grow-work.jpg';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { AiFillCheckCircle } from 'react-icons/ai';
const GrowTraffic = () => {
    return (
        <div>
            <Container>
                <div className="row">
                    <h3 className='primary-color mt-5 text-center fw-bold'>Grow Traffic and Increase Revenue</h3>
                    <div className="col-md-6">
                        <div className='d-flex justify-content-center align-items-center'>
                            <img className='img-fluid p-4' src={growImage} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className='p-4 grow-paragraph'>
                            <h5 className='primary-color'>To Grab Your Targeted Customer</h5>
                            <p><span><AiFillCheckCircle color='#683bc0' /></span>  Be where your customers are: choose your social media presence strategically</p>
                            <p><span><AiFillCheckCircle color='#683bc0' /></span> Stand out on social media, and keep it brief </p>
                            <p><span><AiFillCheckCircle color='#683bc0' /></span> Optimize your content for your audience</p>
                            <p><span><AiFillCheckCircle color='#683bc0' /></span> Be there to offer a solution when your customer is searching for one</p>
                            <p><span><AiFillCheckCircle color='#683bc0' /></span> Be available for your customers</p>
                            <p><span><AiFillCheckCircle color='#683bc0' /></span> Over-communicate to your customers</p>
                            <p><span><AiFillCheckCircle color='#683bc0' /></span> Get your metrics right and leverage on data to optimize</p>
                            <button className='learn-ex-btn'>Learn and Explore More <HiArrowNarrowRight /></button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default GrowTraffic;