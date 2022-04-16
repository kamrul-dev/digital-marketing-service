import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo-digi.png';
const Header = () => {
    return (
        <div>
            <Navbar className='' style={{ backgroundColor: "" }} collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='w-75' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="">Blogs</Nav.Link>
                            <Nav.Link href="">About Me</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;