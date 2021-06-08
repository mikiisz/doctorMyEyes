import React from "react"
import CharacterSupplier from "../components/CharacterSupplier"
import { Text, TouchableOpacity, View } from "react-native"
import calculateScore from "../components/ScoreCalculator"
import { styles } from "../styles"
import VoiceRecorder from "../components/VoiceRecorder"

export default class EyesightTestScreen extends React.Component {
    constructor(props) {
        super(props)

        this.letterSizes = [120, 80, 50, 20, 15, 10, 8]
        this.maxScore = this.letterSizes.length
        this.characterSupplier = new CharacterSupplier()
        this.recorder = new VoiceRecorder()

        this.state = {
            letter: {},
            numberOfLetter: 0,
            correctAnswers: [],
            recordings: [],
            recordingEnabled: false,
            collectingEnabled: false
        }

        this.updateLetter = this.updateLetter.bind(this)
        this.recordVoice = this.recordVoice.bind(this)
        this.shouldUpdateLetter = this.shouldUpdateLetter.bind(this)
        this.eyesightTestStep = this.eyesightTestStep.bind(this)
        this.navigateToTestResults = this.navigateToTestResults.bind(this)
    }

    componentDidMount() {
        this.eyesightTestStep()
    }

    eyesightTestStep() {
        this.updateLetter()
        this.recordVoice()
    }

    updateLetter() {
        if (this.shouldUpdateLetter() && !this.state.recordingEnabled) {
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
            }))
        }
    }

    shouldUpdateLetter() {
        return this.state.numberOfLetter < this.letterSizes.length
    }

    recordVoice() {
        const recorder = this.recorder
        const currentState = this
        this.setState({ recordingEnabled: true })

        recorder
            .startRecording(3000)
            .then(record => {
                currentState.setState({ recordingEnabled: false })

                return recorder.saveRecording(record)
            })
            .then(recording => {
                const update = [...currentState.state.recordings, recording]

                currentState.setState({ recordings: update })
            })
    }

    navigateToTestResults() {
        const { navigation } = this.props
        this.setState({ collectingEnabled: true })

        // TODO: check if results are avalible insted of hardcoded timeout
        new Promise(resolve => setTimeout(resolve, 20000))
            .then(() => calculateScore(this.state.correctAnswers, this.state.recordings))
            .then(score => navigation.navigate('EyesightTestResult', { score: score, maxScore: this.maxScore }))
    }

    render() {
        let letterStyle = (letterSize, color) => ({
            fontSize: letterSize,
            color: color
        })
        let letterInfo = this.state.letter

        // TODO: add modularity to rendered outputs
        return (
            <View style={styles.container}>
                <View style={styles.letterContainer}>
                    <Text style={letterStyle(letterInfo.letterSize, letterInfo.color)}>
                        {letterInfo.character}
                    </Text>
                </View>
                {this.state.recordingEnabled ?
                    <View style={styles.recording}>
                        <Text style={styles.buttonText}> Recording in progress... </Text>
                    </View> :

                    <View>
                        {this.shouldUpdateLetter() ?

                            <TouchableOpacity style={styles.button} onPress={this.eyesightTestStep}>
                                <Text style={styles.buttonText}>Show next!</Text>
                            </TouchableOpacity> :

                            <React.Fragment>
                                {this.state.collectingEnabled ?
                                    <View style={styles.recording}>
                                        <Text style={styles.buttonText}> Collecting data in progress... </Text>
                                    </View> :

                                    <TouchableOpacity style={styles.button} onPress={this.navigateToTestResults}>
                                        <Text style={styles.buttonText}>Show results</Text>
                                    </TouchableOpacity>
                                }
                            </React.Fragment>
                        }
                    </View>
                }
            </View>
        )
    }
}