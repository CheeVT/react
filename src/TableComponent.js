import React, { Component } from 'react';



const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <th>{row.name}</th>
                <th>{row.job}</th>
                <th><button onClick={() => props.removeCharacter(index)}>Delete</button></th>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>
}

export class TableComponent extends Component {
    render() {

        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody
                    characterData={characterData}
                    removeCharacter={removeCharacter}
                />
            </table>
        );
    }
}