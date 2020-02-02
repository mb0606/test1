import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function MyNav() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">ArtList</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Art Page</Nav.Link>

                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNav;
