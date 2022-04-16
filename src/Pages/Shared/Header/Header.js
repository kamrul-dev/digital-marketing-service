import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo-digi.png';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar className='' style={{ backgroundColor: "" }} collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand>
                        <NavLink to='/'><img className='w-75' src={logo} alt="" /></NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='nav-items'>
                            <NavLink to='/blogs'>Blogs</NavLink>
                            <NavLink to='/about'>About Me</NavLink>
                            <NavLink to='/login'>
                                Login
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;