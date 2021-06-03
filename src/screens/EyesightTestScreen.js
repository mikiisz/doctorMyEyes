import React from "react"
import LetterSupplier from "../components/Row";
import {Button, Text, View} from "react-native";
import calculateScore from "../components/ScoreCalculator";

// todo: intercept pressing back button and display modal that test result will be lost
export default class EyesightTestScreen extends React.Component {
    constructor(props) {
        super(props)

        this.letterSizes = [120, 80, 50, 20, 5, 10, 8]
        this.letterSupplier = new LetterSupplier()

        this.state = {
            letter: {},
            numberOfLetter: 0
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
            this.setState(() => ({
                        letter: {
                            letterSize: this.letterSizes[numberOfLetter],
                            character: this.letterSupplier.generateLetter()
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
        //todo: route to score screen
        const {navigation} = this.props
        let score = calculateScore()
        console.log('your score')
        console.log(score)
        navigation.navigate('EyesightTestResult', {score: score})
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
            < /View>
        )
    }
}