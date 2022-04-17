
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }
    return (
        <div className='w-50 mx-auto vh-100 mt-5'>
            <Container>
                <h2 className='text-center primary-color mb-4'>Please Register</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="name" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required/>
                    </Form.Group>
                    <Button id='login-btn' variant="w-25 mx-auto d-block mb-2" type="submit">
                        Register
                    </Button>
                    <p>Already have an account? <Link to='/login' className='text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
                </Form>
            </Container>
        </div>
    );
};

export default Register;