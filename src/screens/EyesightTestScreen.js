import React from "react"
import LetterSupplier from "../components/LetterSuppler";
import {Button, Text, View} from "react-native";
import calculateScore from "../components/ScoreCalculator";

// todo: intercept pressing back button and display modal that test result will be lost
export default class EyesightTestScreen extends React.Component {
    constructor(props) {
        super(props)

        this.letterSizes = [120, 80, 50, 20, 15, 10, 8]
        this.maxScore = this.letterSizes.length
        this.letterSupplier = new LetterSupplier()

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
        console.log('test eyesight')

        this.updateLetter()
        this.recordVoice()
    }

    updateLetter() {
        if (this.shouldUpdateLetter()) {
            let numberOfLetter = this.state.numberOfLetter
            let correctAnswers = this.state.correctAnswers
            let newCharacter = this.letterSupplier.generateLetter()
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
        let numberOfLetter = this.state.numberOfLetter
        return numberOfLetter < this.letterSizes.length
    }

    recordVoice() {
        // record() todo
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
        console.log('letter info')
        console.log(letterInfo)

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20}}>
                <Text style={letterStyle(letterInfo.letterSize, letterInfo.color)}>
                    {letterInfo.character}
                </Text>
                {this.shouldUpdateLetter() ? <Button title='Next!!!' onPress={this.updateLetter}/> :
                    <Button title='Show results' onPress={this.navigateToTestResults}/>}
            </View>
        )
        //todo: the next button should not jump on click - it should be fixed to bottom
    }
}