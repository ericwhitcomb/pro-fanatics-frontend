import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

class SignInModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            message: '',
            focus: 1,
            error: 0
        };
    }

    // inputHandler = event => {
    //     event.preventDefault();
    //     console.log('inputHandler')
    //     const target = event.target;
    //     this.setState({
    //         [target.name]: target.value,
    //         error: 0,
    //         message: ''
    //     });
    // };

    // submitHandler = event => {
    //     event.preventDefault();
    //     console.log('submitHandler')

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
    // };

    componentDidMount() {
        console.log('componentDidMount()');
        window.addEventListener('shown.bs.modal', (e) => {
            console.log('shown.bs.modal');
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate()');
    }

    render() {
        console.log('render()');
        return (
            // <div id="myModal" class="modal" role="dialog" ref={this.myRef}>
            //     <div class="modal-dialog" role="document">
            //     <div class="modal-content">
            //         <form onSubmit={this.submitHandler}>
            //             <div class="modal-header">
            //                 <h5 class="modal-title">Pro Fanatics Sign In</h5>
            //                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            //                     <span aria-hidden="true">&times;</span>
            //                 </button>
            //             </div>
            //             <div class="modal-body">
            //                 <div class="form-group row">
            //                     <label for="email" class="col-sm-2 col-form-label">Email</label>
            //                     <div class="col-sm-10">
            //                         <input type="email" class="form-control" id="email" onChange={this.inputHandler} />
            //                     </div>
            //                 </div>
            //                 <div class="form-group row">
            //                     <label for="password" class="col-sm-2 col-form-label">Password</label>
            //                     <div class="col-sm-10">
            //                         <input type="password" class="form-control" id="password" onChange={this.inputHandler} />
            //                     </div>
            //                 </div>
            //             </div>
            //             <div class="modal-footer">
            //                 <button type="submit" class="btn btn-primary btn-lg btn-block">Sign In</button>
            //             </div>
            //         </form>
            //     </div>
            // </div>
            // </div>

              <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                  <Modal.Title>Pro Fanatics</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="primary">Sign In</Button>
                </Modal.Footer>
              </Modal>
        );
    }
}

// SignInModal.contextType = AppContext;

export default SignInModal;