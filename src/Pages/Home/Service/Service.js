import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, image, title, price, description } = service;
    const navigate = useNavigate();

    const navigateToServiceDetails = () => {
        navigate(`/service/${id}`)
    }
    return (
        <div className="col-md-6 col-lg-4">
            <div className='d-flex justify-content-center'>
                <Card className='service-card' style={{ width: '18rem', borderRadius: '10px' }}>
                    <Card.Img style={{ borderRadius: '15px' }} className='p-2' variant="top" src={image} />
                    <Card.Body className='text-center' >
                        <Card.Title className='primary-color'>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            <span className='fs-5 fw-bold primary-color'>${price}</span> <small>/mo</small>
                        </Card.Text>
                        <button className='order-btn' onClick={() => navigateToServiceDetails(id)}>Order Now <HiArrowNarrowRight /></button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Service;