import React from 'react';
import Authenticate from '../authentication/Authenticate';
import ProtectedNavbar from '../navbars/ProtectedNavbar';
import { Col, Container, Row } from 'react-bootstrap';

class MainPage extends React.Component {
    render() {
        return (
            <>
                <ProtectedNavbar />
                <Container>
                    <Row>
                        <Col xs="12">
                            <h2 className="text-center">We can begin</h2>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Authenticate(MainPage);