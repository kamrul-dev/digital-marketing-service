import './ServiceDetails.css';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();

    const handleCheckOut = (event) => {
        event.preventDefault();
        navigate('/checkout');
    }
    return (
        <div className='w-50 mx-auto vh-100 mt-5'>
            <Container>
                <h2 className='text-center primary-color mb-4'>Please Provide Order Details</h2>
                <Form onSubmit={handleCheckOut}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" name='name' placeholder="Your Full Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" name='address1' placeholder="Your Address Line 1" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" name='address2' placeholder="Your Address Line 2" />
                    </Form.Group><Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" name='phone' placeholder="Your phone" required/>
                    </Form.Group>
                    <Button id='checkout-btn' variant="w-50 mx-auto d-block mb-2 mt-2" type="submit">
                        Proceed to Checkout
                    </Button>
                </Form>
            </Container>

        </div>
    );
};

export default ServiceDetails;