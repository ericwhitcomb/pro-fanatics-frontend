import React from 'react';
import PlayerRow from './rows/PlayerRow';
import { Button, Table } from 'react-bootstrap';
import PlayerModal from '../modals/PlayerModal';

class PlayerTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            selectedPlayer: null,
            players: []
        }
    }

    componentDidMount() {
        let players = [];
        for (let i = 1; i <= 7; i++) {
            players.push({
                id: i,
                firstName: 'Xxxxxx',
                lastName: 'Xxxxxxxxx',
                position: 'QB',
                height: '6-05',
                weight: '220',
                class: 'SR',
                redshirt: true,
                birthDate: new Date(2000, 1, 19),
                college: 'Xxxxxxxxxxxx'
            })
        }
        this.setState({ players });
    }

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
                            <th className="text-center">Birth Date</th>
                            <th className="text-center">Class</th>
                            <th>College</th>
                            <th className="text-center">
                                <Button variant="success" size="sm" onClick={this.addHandler} block><i className="fas fa-plus"></i> Add</Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.players.map(player => <PlayerRow key={player.id} player={player} showModal={this.showModal} />)}
                    </tbody>
                </Table>
                <PlayerModal show={this.state.showModal} player={this.state.selectedPlayer} onHide={this.hideModal} />
            </>
        );
    }

    showModal = player => {
        this.setState({ showModal: true, selectedPlayer: player });
    }

    hideModal = () => {
        this.setState({ showModal: false, player: null })
    }

    addHandler = event => {
        this.showModal(null);
    }
}

export default PlayerTable;