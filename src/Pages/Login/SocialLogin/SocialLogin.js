import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/social/google-icon.png';
import Loading from '../../Shared/Loading/Loading';
import './SocilaLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    let errorShow;
    if (error) {
        errorShow = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <>
            <div className='social-icon'>
                <img onClick={() => signInWithGoogle()} className='' src={google} alt="" />
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='div-line'></div>
                <p className='mt-2 px-2'>or</p>
                <div className='div-line'></div>
            </div>
            {errorShow}
        </>
    );
};

export default SocialLogin;