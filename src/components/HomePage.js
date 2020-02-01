import React from 'react';
import axios from 'axios';

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
                    <a class="navbar-brand" href="#">Pro Fanatics</a>
                </nav>
                <h1>Testing for connection to backend</h1>
                <h2>Check console in dev tools</h2>
            </div>
        );
    }
}

export default HomePage;