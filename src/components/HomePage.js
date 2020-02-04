import React from 'react';
import axios from 'axios';
import image from '../images/herm_edwards.jpg';
import SignInModal from './authentication/SignInModal';

class HomePage extends React.Component {

    componentDidMount() {
        axios.get('/api')
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a class="navbar-brand" href="#"><i class="fas fa-trophy"></i> Pro Fanatics</a>
                </nav>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="jumbotron">
                                <div class="row">
                                    <div class="col-6 text-center">
                                        <h1 class="display-3">Pro Fanatics</h1>
                                        <hr class="my-4" />
                                        <p class="lead">A goal without a plan is a wish.</p>
                                        <p>Herm Edwards</p>
                                        <p class="lead">
                                            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Sign In</button>
                                        </p>
                                    </div>
                                    <div class="col-6">
                                        <img src={image} class="img-fluid" alt="Herm Edwards" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SignInModal />
            </div>
        );
    }
}

export default HomePage;