import React from 'react'
import {View} from "react-native";
import Letter from "./Letter";

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

const Row = React.forwardRef((props, ref) => {

// export default function Row(letterSize, numberOfLetters, style) { //extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.letterSize = props.letterSize
    //     this.numberOfLetters = props.numberOfLetters
    //     this.style = props.style
    // }

    const generatedLettersList = new LetterSupplier(props.numberOfLetters).generateLetters()
    const letterList = generatedLettersList.map((letter, key) => {
        return (
            <Letter letterSize={props.letterSize} character={letter} key={key}/>
        )
    })

    let rowStyle = {
        flexDirection: 'row',
        justifyContent: 'center'
    }

    return (
        <View style={rowStyle}>
            {letterList}
        </View>
    )

    // function highlightLetters() {
    //     function sleep(milliseconds) {
    //         const date = Date.now();
    //         let currentDate = null;
    //         do {
    //             currentDate = Date.now();
    //         } while (currentDate - date < milliseconds);
    //     }
    //
    //     function highlight(letter_i) {
    //         letter_i.changeColourToRed()
    //         // this.props.recordVoice()
    //         sleep(500)
    //         setTimeout(function () {
    //             letter_i.changeColourToBlack()
    //         }, 1000)
    //     }
    //
    //     for (let i = 0; i < generatedLettersList.length; i++) {
    //         const letter_i = letterList[i]
    //         setTimeout(() => highlight(letter_i), 3000 * (i + 1))
    //         // this.refs['letter' + i].changeColourToBlack()
    //     }
    //     // alert('Letters in the row are coloured')
    // }
})

export default Row
