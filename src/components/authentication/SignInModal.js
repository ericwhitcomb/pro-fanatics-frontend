import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

class SignInModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            message: '',
            error: 0
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
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>Email</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="email" ref={this.emailInput} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>Password</Form.Label>
                            <Col sm={10}>
                                <Form.Control type="password" ref={this.passwordInput} />
                            </Col>
                        </Form.Group>
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
            error: 0,
            message: ''
        });
    };

    submitHandler = event => {
        event.preventDefault();
        console.log('submitHandler()');
        
        // const { email, password } = this.state;

        // if (!email) {
        //   this.setState({
        //     message: 'Email cannot be empty',
        //     focus: 1,
        //     error: 1
        //   });
        // } else if (!password) {
        //   this.setState({
        //     message: 'Password cannot be empty',
        //     focus: 2,
        //     error: 2
        //   });
        // } else {
        //   const endpoint = '/auth/login';
        //   const credentials = { email, password };
        //   axios
        //     .post(endpoint, credentials)
        //     .then(res => {
        //       localStorage.setItem('jwt', res.data.token);
        //       this.context.signin();
        //       this.setState({ email: '', password: '', signedIn: true });
        //     })
        //     .catch(err => {
        //       this.setState({
        //         message: 'Email or Password is incorrect'
        //       });
        //     });
        // }
    };

    onShow = event => {
        console.log("SignInModal: onShow()");
        this.emailInput.current.focus();
    };
}

export default SignInModal;