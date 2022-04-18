import React from 'react';
import './NotFound.css';
import NotFoundImage from '../../../images/not-found.png';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='row container mx-auto notfound-section vh-100'>
            <div className='col-md-6'>
                <div className='text-center'>
                    <h2>Opps!!</h2>
                    <Link to='/'>
                        <button className='btn btn-warning'>Back to Home</button>
                    </Link>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='notfound-img  text-center'>
                    <img src={NotFoundImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;