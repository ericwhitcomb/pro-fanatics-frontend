import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class SignInModal extends React.Component {
    state = {
        email: '',
        password: '',
        message: '',
        focus: 1,
        error: 0
    };

    InputHandler = event => {
        event.preventDefault();
        const target = event.target;
        this.setState({
            [target.name]: target.value,
            error: 0,
            message: ''
        });
    };

    SubmitHandler = event => {
        event.preventDefault();

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

    render() {
        return (
            //   <main className={classes.main}>
            //     <Navbar />
            //     <CssBaseline />
            //     <Paper className={classes.paper}>
            //       <Avatar className={classes.avatar}>
            //         <LockOutlinedIcon />
            //       </Avatar>
            //       <Typography component="h1" variant="h5">
            //         Sign in
            //       </Typography>
            //       <p className={classes.message}>{this.state.message}</p>
            //       <form className={classes.form} onSubmit={this.SubmitHandler}>
            //         <FormControl 
            //             margin="normal" 
            //             // required
            //             fullWidth
            //             error={this.state.error === 1 ? true : false}>
            //           <InputLabel htmlFor="email">Email Address</InputLabel>
            //           <Input
            //             id="email"
            //             name="email"
            //             onChange={this.InputHandler}
            //             autoComplete="email"
            //             autoFocus
            //           />
            //         </FormControl>
            //         <FormControl
            //             margin="normal" 
            //             // required
            //             fullWidth
            //             error={this.state.error === 2 ? true : false}>
            //           <InputLabel htmlFor="password">Password</InputLabel>
            //           <Input
            //             id="password"
            //             name="password"
            //             onChange={this.InputHandler}
            //             type="password"
            //           />
            //         </FormControl>
            //         <FormControlLabel
            //           control={<Checkbox value="remember" color="primary" />}
            //           label="Remember me"
            //         />
            //         <Button
            //           type="submit"
            //           fullWidth
            //           variant="contained"
            //           color="primary"
            //           className={classes.submit}
            //         >
            //           Sign in
            //         </Button>
            //       </form>
            //       <a
            //         href={process.env.REACT_APP_API_URL + '/auth/google'}
            //         variant="contained"
            //         color="primary"
            //         className={classes.submit}
            //       >
            //         Login with Google
            //       </a>
            //     </Paper>
            //   </main>
            <div id="myModal" class="modal" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Save changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// SignInModal.contextType = AppContext;

export default SignInModal;