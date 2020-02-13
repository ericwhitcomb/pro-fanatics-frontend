import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function ProtectedNavbar() {
    return (
        <>
            <Navbar variant="dark" expand="lg" bg="primary">
                <Navbar.Brand href="/"><i className="fas fa-trophy"></i> Pro Fanatics</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="/signout">Sign Out</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default ProtectedNavbar;