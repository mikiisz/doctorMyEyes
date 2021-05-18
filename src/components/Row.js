import React from 'react';
import { View } from 'react-native';
import Letter from './Letter';

class LetterSuplier {
    numberOfLetters;

    constructor(numberOfLetters) {
        this.numberOfLetters = numberOfLetters
    }

    generateLetters() {
        const result = [];
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = 0; i < this.numberOfLetters; i++) {
            result.push(characters.charAt(Math.floor(Math.random() * characters.length)));
        }
        return result;
    }
}

class Row extends React.Component {
    constructor(props) {
        super(props);
        this.letterSize = props.letterSize
        this.numberOfLetters = props.numberOfLetters
        this.style = props.style
        this.state = {
            generatedLettersList: []
        }
    }

    componentDidMount() {
        this.setState({
            generatedLettersList: new LetterSuplier(this.numberOfLetters).generateLetters()
        })
    }

    render() {
        return (
            <View style={this.style}>
                {this.state.generatedLettersList.map((letter, key) => {
                    return (
                        <Letter letterSize={this.letterSize} character={letter} key={key} />
                    );
                })}
            </View>
        );
    }
}

export default Row;
