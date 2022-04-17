import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo-digi.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { FiLogOut } from 'react-icons/fi';
import { BiLogInCircle } from 'react-icons/bi';
const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth);
        navigate('/');
    }
    return (
        <div className='sticky-top'>
            <Navbar className='nav-container' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand>
                        <NavLink to='/'><img className='w-50' src={logo} alt="" /></NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='nav-items'>
                            <NavLink to='/blogs' className={({ isActive }) => (isActive ? 'active-link' : 'link')}>Blogs</NavLink>
                            <NavLink to='/about' className={({ isActive }) => (isActive ? 'active-link' : 'link')}>About Me</NavLink>
                            {
                                user ? <button className='btn btn-warning text-decoration-none primary-color rounded-pill' onClick={handleSignOut}>Sign out <FiLogOut /></button> :
                                    <NavLink to='/login' className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
                                        <BiLogInCircle/> Login
                                    </NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;