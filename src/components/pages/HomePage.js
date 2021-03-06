import React from 'react';
import axios from 'axios';
import image from '../../images/herm_edwards.jpg';
import SignInModal from '../authentication/SignInModal';
import PublicNavbar from '../navbars/PublicNavbar';
import { Button, Col, Container, Image, Jumbotron, Row } from 'react-bootstrap';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }
    }

    componentDidMount() {
        axios.get('/')
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <>
                <PublicNavbar />
                <Container>
                    <Row>
                        <Col xs="12">
                            <Jumbotron>
                                <Row>
                                    <Col md="6" className="text-center">
                                        <h1 className="display-3">Pro Fanatics</h1>
                                        <hr className="my-4" />
                                        <p className="lead">A goal without a plan is a wish.</p>
                                        <p>Herm Edwards</p>
                                        <p className="lead">
                                            <Button variant="primary" onClick={this.showModal}>Sign In</Button>
                                        </p>
                                    </Col>
                                    <Col md="6">
                                        <Image src={image} rounded fluid />
                                    </Col>
                                </Row>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
                <SignInModal show={this.state.showModal} onHide={this.hideModal} setToken={this.props.setToken} />
            </>
        );
    }

    showModal = () => {
        this.setState({ showModal: true });
    }

    hideModal = () => {
        this.setState({ showModal: false })
    }
}

export default HomePage;