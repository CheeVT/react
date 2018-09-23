import React, { Component } from 'react';
import { TableComponent } from './TableComponent';
import { FormComponent } from './FormComponent';

import { Api } from './Api';

export class AppComponent extends Component {
    state = {
        characters: [
            {
                'name': 'Jovan',
                'job': 'Programer'
            },
            {
                'name': 'Alex',
                'job': 'Medicinska sestra'
            },
            {
                'name': 'Voshi',
                'job': 'Ugostiteljski radnik'
            },
            {
                'name': 'Brka',
                'job': 'Obezbedjenje'
            }
        ]
    };
    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] });
    }


    render() {

        const { characters } = this.state;

        return (
            <div className="App">
                <h1>Hello React!</h1>
                <TableComponent
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <FormComponent handleSubmit={this.handleSubmit} />

                <Api />
            </div>
        );
    }
}

