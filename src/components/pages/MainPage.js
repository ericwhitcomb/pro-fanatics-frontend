import React from 'react';
import Authenticate from '../authentication/Authenticate';

class MainPage extends React.Component {
    render() {
        return (
            <>
                <h1>Protected Page</h1>
            </>
        );
    }
}

export default Authenticate(MainPage);