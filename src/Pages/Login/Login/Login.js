import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='w-50 mx-auto vh-100 mt-5'>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button id='login-btn' variant="w-50 mx-auto d-block mb-2" type="submit">
                        Login
                    </Button>
                    <p>New in Digi Mark? <Link to='/' className='text-decoration-none'>Create an account</Link></p>
                    <p>Forget Password? <Link to='/' className='text-decoration-none'>Reset Password</Link></p>
                </Form>
            </Container>
        </div>
    );
};

export default Login;