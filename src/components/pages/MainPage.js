import React from 'react';
import Authenticate from '../authentication/Authenticate';
import ProtectedNavbar from '../navbars/ProtectedNavbar';
import PlayerTable from '../tables/PlayerTable';
import { Container, Row } from 'react-bootstrap';

class MainPage extends React.Component {
    render() {
        return (
            <>
                <ProtectedNavbar />
                <Container>
                    <Row>
                        <PlayerTable />
                    </Row>
                </Container>
            </>
        );
    }
}

export default Authenticate(MainPage);