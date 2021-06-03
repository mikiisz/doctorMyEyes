import React from "react"
import CharacterSupplier from "../components/CharacterSupplier"
import {Text, TouchableOpacity, View} from "react-native"
import calculateScore from "../components/ScoreCalculator"
import {styles} from "../styles"

// todo: intercept pressing back button and display modal that test result will be lost
export default class EyesightTestScreen extends React.Component {
    constructor(props) {
        super(props)

        this.letterSizes = [120, 80, 50, 20, 15, 10, 8]
        this.maxScore = this.letterSizes.length
        this.characterSupplier = new CharacterSupplier()

        this.state = {
            letter: {},
            numberOfLetter: 0,
            correctAnswers: []
        }
        this.updateLetter = this.updateLetter.bind(this)
        this.navigateToTestResults = this.navigateToTestResults.bind(this)
    }

    componentDidMount() {
        this.startEyesightTest()
    }

    startEyesightTest() {
        this.updateLetter()
        this.recordVoice()
    }

    updateLetter() {
        if (this.shouldUpdateLetter()) {
            let numberOfLetter = this.state.numberOfLetter
            let correctAnswers = this.state.correctAnswers
            let newCharacter = this.characterSupplier.next()
            this.setState(() => ({
                        letter: {
                            letterSize: this.letterSizes[numberOfLetter],
                            character: newCharacter,
                            correctAnswers: correctAnswers.push(newCharacter.toLowerCase())
                        },
                        numberOfLetter: numberOfLetter + 1
                    }
                )
            )
        }
    }

    shouldUpdateLetter() {
        return this.state.numberOfLetter < this.letterSizes.length
    }

    recordVoice() {
        // record() todo use ExampleVoiceRecorder
    }

    navigateToTestResults() {
        const {navigation} = this.props
        let score = calculateScore(this.state.correctAnswers)
        navigation.navigate('EyesightTestResult', {score: score, maxScore: this.maxScore})
    }

    render() {
        let letterStyle = (letterSize, color) => ({
            fontSize: letterSize,
            color: color
        })
        let letterInfo = this.state.letter

        return (
            <View style={styles.container}>
                <Text style={letterStyle(letterInfo.letterSize, letterInfo.color)}>
                    {letterInfo.character}
                </Text>
                {this.shouldUpdateLetter() ?
                    <TouchableOpacity style={styles.button} onPress={this.updateLetter}>
                        <Text style={styles.buttonText}>Show next!</Text>
                    </TouchableOpacity> :
                    <TouchableOpacity style={styles.button} onPress={this.navigateToTestResults}>
                        <Text style={styles.buttonText}>Show results</Text>
                    </TouchableOpacity>
                }
            </View>
        )
        //todo: the next button should not jump on click - it should be fixed to bottom
    }
}