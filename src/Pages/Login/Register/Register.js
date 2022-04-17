
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [agree, setAgree] = useState(false);
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
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    <label className={`ps-2 ${agree ? 'primary-color fw-bold' : 'text-danger'}`} htmlFor="terms">Accept Privacy-policy & terms and conditions</label>
                    <Button disabled={!agree} id='login-btn' variant="w-50 mx-auto d-block mb-2 mt-2" type="submit">
                        Register
                    </Button>
                    <p>Already have an account? <Link to='/login' className='text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
                </Form>
            </Container>
        </div>
    );
};

export default Register;