import React from 'react';
import { View } from 'react-native';
import Letter from './Letter';
import LetterListGenerator from './LettersListGeneragtor';

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
            generatedLettersList: new LetterListGenerator(this.numberOfLetters).generateLetters()
        })
    }

    render() {
        console.log("Generated letters:")
        console.log(this.state.generatedLettersList)
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