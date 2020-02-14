import React from 'react';
import PlayerRow from './rows/PlayerRow';
import { Button, Table } from 'react-bootstrap';

class PlayerTable extends React.Component {
    render() {
        return (
            <>
                <Table responsive hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th className="text-center">Position</th>
                            <th className="text-center">Height</th>
                            <th className="text-center">Weight</th>
                            <th className="text-center">Age</th>
                            <th className="text-center">Birth date</th>
                            <th>College</th>
                            <th className="text-center">
                                <Button variant="success" size="sm" onClick={this.addHandler} block><i className="fas fa-plus"></i> Add</Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <PlayerRow />
                        <PlayerRow />
                        <PlayerRow />
                        <PlayerRow />
                        <PlayerRow />
                        <PlayerRow />
                        <PlayerRow />
                    </tbody>
                </Table>
            </>
        );
    }

    addHandler = event => {
        console.log('addHandler');
    }
}

export default PlayerTable;