import React from 'react';
import { Navbar } from 'react-bootstrap';

function PublicNavbar() {
    return (
        <>
            <Navbar variant="dark" expand="lg" bg="primary">
                <Navbar.Brand href="/"><i className="fas fa-trophy"></i> Pro Fanatics</Navbar.Brand>
            </Navbar>
        </>
    );
}

export default PublicNavbar;