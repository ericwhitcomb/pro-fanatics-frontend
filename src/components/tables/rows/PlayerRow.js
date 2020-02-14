import React from 'react';

class PlayerRow extends React.Component {
    render() {
        return (
            <tr onClick={this.editHandler}>
                <td>Xxxxxxxxx, Xxxxxx</td>
                <td className="text-center">XX</td>
                <td className="text-center">0-00</td>
                <td className="text-center">000</td>
                <td className="text-center">00</td>
                <td className="text-center">00/00/0000</td>
                <td>Xxxxxxxxxxxx</td>
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
        console.log('editHandler');
    }
}

export default PlayerRow;