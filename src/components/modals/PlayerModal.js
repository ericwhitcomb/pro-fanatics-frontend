import React from 'react';
import { withRouter } from "react-router-dom";
import { Button, Form, Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";

let heights = [
    '5-05', '5-06', '5-07', '5-08', '5-09', '5-10', '5-11',
    '6-00', '6-01', '6-02', '6-03', '6-04', '6-05', '6-06', '6-07', '6-08', '6-09', '6-10'
]

class PlayerModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            position: 'QB',
            height: '5-05',
            weight: '',
            birthDate: new Date(),
            class: 'SR',
            redshirt: false,
            college: '',
            message: ''
        };

        this.inputFirstName = React.createRef();
        this.inputLastName = React.createRef();
        this.inputPosition = React.createRef();
        this.inputHeight = React.createRef();
        this.inputWeight = React.createRef();
        this.inputBirthDate = React.createRef();
        this.inputClass = React.createRef();
        this.inputRedshirt = React.createRef();
        this.inputCollege = React.createRef();
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide} onEntered={this.onShow} onExit={this.onExit}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.player ? 'Edit' : 'Add'} Player</Modal.Title>
                </Modal.Header>
                <Form onSubmit={this.submitHandler}>
                    <Modal.Body>
                        <Form.Row>
                            <Form.Group controlId="firstName" className="col-sm-6">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control required type="text" name="firstName" value={this.state.firstName} onChange={this.inputHandler} ref={this.inputFirstName} />
                            </Form.Group>
                            <Form.Group controlId="lastName" className="col-sm-6">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control required type="text" name="lastName" value={this.state.lastName} onChange={this.inputHandler} ref={this.inputLastName} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="position" className="col-sm-3">
                                <Form.Label>Position</Form.Label>
                                <Form.Control as="select" name="position" value={this.state.position} onChange={this.inputHandler} ref={this.inputPosition}>
                                    <option>QB</option>
                                    <option>RB</option>
                                    <option>WR</option>
                                    <option>TE</option>
                                    <option>KR</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="height" className="col-sm-3">
                                <Form.Label>Height</Form.Label>
                                <Form.Control as="select" name="height" value={this.state.height} onChange={this.inputHandler} ref={this.inputHeight}>
                                    {heights.map((height, index) => <option key={index}>{height}</option>)}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="weight" className="col-sm-3">
                                <Form.Label>Weight</Form.Label>
                                <Form.Control type="number" name="weight" value={this.state.weight} onChange={this.inputHandler} ref={this.inputWeight} />
                            </Form.Group>
                            <Form.Group controlId="birthDate" className="col-sm-3">
                                <Form.Label>Birth Date</Form.Label>
                                <DatePicker className="form-control" name="birthDate" selected={this.state.birthDate} onChange={this.datePickerHandler} ref={this.inputbirthDate} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="class" className="col-sm-3">
                                <Form.Label>Class</Form.Label>
                                <Form.Control as="select" name="class" value={this.state.class} onChange={this.inputHandler} ref={this.inputClass}>
                                    <option>SR</option>
                                    <option>JR</option>
                                    <option>SO</option>
                                    <option>FR</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="redshirt" className="col-sm-3">
                                <Form.Label>Redshirt</Form.Label>
                                <Form.Check type="checkbox" name="redshirt" checked={this.state.redshirt} onChange={this.checkBoxHandler} ref={this.inputRedshirt} />
                            </Form.Group>
                            <Form.Group controlId="college" className="col-sm-6">
                                <Form.Label>College</Form.Label>
                                <Form.Control type="text" name="college" value={this.state.college} onChange={this.inputHandler} ref={this.inputCollege} />
                            </Form.Group>
                        </Form.Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" variant="primary" size="lg" className="modal-button">
                            {this.props.player ? 'Update' : 'Add'}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }

    datePickerHandler = birthDate => {
        this.setState({ birthDate });
    }

    checkBoxHandler = event => {
        const target = event.target;
        this.setState({
            [target.name]: target.checked,
            message: ''
        });
    }

    inputHandler = event => {
        const target = event.target;
        this.setState({
            [target.name]: target.value,
            message: ''
        });
    };

    submitHandler = event => {
        event.preventDefault();
        console.log('submitHandler');
    };

    onExit = event => {
        this.setState({
            firstName: '',
            lastName: '',
            position: 'QB',
            height: '5-05',
            weight: '',
            birthDate: new Date(),
            class: 'SR',
            redshirt: false,
            college: '',
            message: ''
        });
    }

    onShow = event => {
        if (this.props.player) {
            this.setState({
                firstName: this.props.player.firstName,
                lastName: this.props.player.lastName,
                position: this.props.player.position,
                height: this.props.player.height,
                weight: this.props.player.weight,
                birthDate: this.props.player.birthDate,
                class: this.props.player.class,
                redshirt: this.props.player.redshirt,
                college: this.props.player.college,
                message: ''
            });
        }
        this.inputFirstName.current.focus();
    };
};

export default withRouter(PlayerModal);