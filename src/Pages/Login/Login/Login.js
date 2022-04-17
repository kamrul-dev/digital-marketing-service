import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();


    let errorShow;
    if (error) {
        errorShow = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home');
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log({ email, password });
        signInWithEmailAndPassword(email, password)
    }

    const navigateRegister = () => {
        navigate('/register')
    }

    const resetPassword = () => {

    }
    return (
        <div className='w-50 mx-auto vh-100 mt-5'>
            <Container>
                <h2 className='text-center primary-color mb-4'>Please Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button id='login-btn' variant="w-50 mx-auto d-block mb-2" type="submit">
                        Login
                    </Button>
                    <p>New in Digi Mark? <Link to='/register' className='text-decoration-none' onClick={navigateRegister}>Create an account</Link></p>
                    <p>Forget Password? <button to='/' className='text-decoration-none btn btn-link'>Reset Password</button></p>
                </Form>
                {errorShow}
            </Container>
        </div>
    );
};

export default Login;