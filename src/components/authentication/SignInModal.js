import React from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

class SignInModal extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: '',
            message: ''
        };

        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide} onEntered={this.onShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Pro Fanatics</Modal.Title>
                </Modal.Header>
                <Form onSubmit={this.submitHandler}>
                    <Modal.Body>
                        <Form.Group as={Row} controlId="emailInput">
                            <Form.Label column sm={2}>Email</Form.Label>
                            <Col sm={10}>
                                <Form.Control required type="email" name="email" defaultValue={this.state.email} onChange={this.inputHandler} ref={this.emailInput} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="passwordInput">
                            <Form.Label column sm={2}>Password</Form.Label>
                            <Col sm={10}>
                                <Form.Control required type="password" name="password" defaultValue={this.state.password} onChange={this.inputHandler} ref={this.passwordInput} />
                            </Col>
                        </Form.Group>
                        <p class="text-danger text-center">{this.state.message}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" variant="primary" size="lg" block>Sign In</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }

    inputHandler = event => {
        event.preventDefault();
        const target = event.target;
        this.setState({
            [target.name]: target.value,
            message: ''
        });
    };

    submitHandler = event => {
        event.preventDefault();
        console.log('submitHandler');

        const { email, password } = this.state;

        if (!email) {
            this.setState({
                message: 'Email cannot be empty'
            });
            this.emailInput.current.focus();
        } else if (!password) {
            this.setState({
                message: 'Password cannot be empty'
            });
            this.passwordInput.current.focus();
        } else {
            const endpoint = '/auth/login';
            const credentials = { email, password };
            axios
                .post(endpoint, credentials)
                .then(res => {
                    console.log('submitHandler then');
                    localStorage.setItem('jwt', res.data.token);
                    console.log('submitHandler then a');
                    this.props.setToken(res.data.token);
                    console.log('submitHandler then b');
                })
                .catch(err => {
                    console.log('submitHandler catch');
                    this.setState({
                        message: 'Email or Password is incorrect'
                    });
                    console.log('submitHandler catch a');
                    this.emailInput.current.focus();
                    console.log('submitHandler catch b');
                });
        }
    };

    onShow = event => {
        this.emailInput.current.focus();
    };
}

export default withRouter(SignInModal);