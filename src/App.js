import React from 'react'
import VoiceRecorder from './components/VoiceRecorder'
import {Button, StyleSheet, View} from "react-native"
import {registerRootComponent} from 'expo'
import VoiceRecord from './components/VoiceRecord';
import Score from "./components/Score";
import SnellenChart from "./components/SnellenChart";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c7587',
        alignItems: 'center',
        justifyContent: 'center'
    },
    score: {
        fontWeight: "bold",
        color: "black",
        fontSize: 120
    }
})

// VoiceRecorder usage 101:
// (1) .startRecording() - returns Audio.Recording, starts audio recording on iOS (.wav) and Android (.mp4)
// (2) .saveTranscriptions() - returns transcriptId, stops recording and saves the audio in AWS
// (3) .getTranscriptions(transcriptId) - returns transcripted text based on transcriptId
function RecorderExample(props) {
    const [recordToggle, setRecordToggle] = React.useState('off')
    const [recording, setRecording] = React.useState(undefined)
    const recorder = new VoiceRecorder()

    function wrapStart() {
        if (recordToggle === 'off') {
            recorder
                .startRecording()
                .then(record => setRecording(record))
                .then(() => setRecordToggle('on'))
        }
    }

    function wrapStop() {
        if (recordToggle === 'on') {
            recorder.saveTranscription(recording)
                .then(transcriptId => {
                    setRecordToggle('off')
                    return recorder.getTranscription(transcriptId)
                })
                .then(text => console.log(text))
        }
    }

    return (
        <View style={styles.container}>
            <Button color="#FFFAFA" style={styles.row}
                    title={recordToggle === 'on' ? 'Stop Recording' : 'Start Recording'}
                    onPress={recordToggle === 'on' ? wrapStop : wrapStart}
            />
        </View>
    )
}


class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <React.Fragment>
                <View style={styles.container}>
                    <Score style={styles.score} score={0}/>
                    <SnellenChart/>
                </View>
                <VoiceRecord/>
            </React.Fragment>
        );
    }
}

//            <RecorderExample />

registerRootComponent(App)