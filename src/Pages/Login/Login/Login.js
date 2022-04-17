import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/register')
    }

    const resetPassword = () => {

    }
    return (
        <div className='w-50 mx-auto vh-100 mt-5'>
            <Container>
                <h2 className='text-center primary-color mb-4'>Please Login</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required/>
                    </Form.Group>
                    <Button id='login-btn' variant="w-25 mx-auto d-block mb-2" type="submit">
                        Login
                    </Button>
                    <p>New in Digi Mark? <Link to='/register' className='text-decoration-none' onClick={navigateRegister}>Create an account</Link></p>
                    <p>Forget Password? <button to='/' className='text-decoration-none btn btn-link'>Reset Password</button></p>
                </Form>
            </Container>
        </div>
    );
};

export default Login;