import React from 'react';
import moment from 'moment';

class PlayerRow extends React.Component {
    render() {
        return (
            <tr key={this.key} onClick={this.editHandler}>
                <td>{this.props.player.lastName}, {this.props.player.firstName}</td>
                <td className="text-center">{this.props.player.position}</td>
                <td className="text-center">{this.props.player.height}</td>
                <td className="text-center">{this.props.player.weight}</td>
                <td className="text-center">{moment().diff(moment(this.props.player.birthDate), 'years')}</td>
                <td className="text-center">{moment(this.props.player.birthDate).format("MM/DD/YYYY")}</td>
                <td className="text-center">{this.props.player.class}{this.props.player.redshirt ? '*' : ''}</td>
                <td>{this.props.player.college}</td>
                <td className="text-center">
                    <span className="text-danger" onClick={this.deleteHandler}><i className="fas fa-times-circle"></i></span>
                </td>
            </tr>
        );
    }

    deleteHandler = event => {
        event.stopPropagation();
        console.log('deleteHandler');
    }

    editHandler = event => {
        this.props.showModal(this.props.player);
    }
}

export default PlayerRow;