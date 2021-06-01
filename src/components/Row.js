import React from 'react'
import {View} from 'react-native'
import Letter from './Letter'

class LetterSupplier {
    numberOfLetters;

    constructor(numberOfLetters) {
        this.numberOfLetters = numberOfLetters
    }

    generateLetters() {
        const result = []
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        for (let i = 0; i < this.numberOfLetters; i++) {
            result.push(characters.charAt(Math.floor(Math.random() * characters.length)))
        }
        return result
    }
}

class Row extends React.Component {
    constructor(props) {
        super(props)
        this.letterSize = props.letterSize
        this.numberOfLetters = props.numberOfLetters
        this.style = props.style
        this.generatedLettersList = new LetterSupplier(this.numberOfLetters).generateLetters()
    }

    sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }

    highlightLetters() {
        function highlight(letter_i) {
            letter_i.changeColourToRed()
            // this.props.recordVoice()
            // this.sleep(3000)
            setTimeout(function () {
                letter_i.changeColourToBlack()
            }, 3000)
        }

        for (let i = 0; i < this.generatedLettersList.length; i++) {
            const letter_i = this.refs['letter' + i]
            setTimeout(() => highlight(letter_i), 3000 * (i + 1))
            // this.refs['letter' + i].changeColourToBlack()
        }
        // alert('Letters in the row are coloured')
    }

    render() {
        return (
            <View style={this.style}>
                {this.generatedLettersList.map((letter, key) => {
                    return (
                        <Letter ref={'letter' + key} letterSize={this.letterSize} character={letter} key={key}/>
                    )
                })}
            </View>
        )
    }
}

export default Row
