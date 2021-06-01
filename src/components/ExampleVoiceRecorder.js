// VoiceRecorder usage 101:
// (1) .startRecording() - returns Audio.Recording, starts audio recording on iOS (.wav) and Android (.mp4)
// (2) .saveTranscriptions() - returns transcriptId, stops recording and saves the audio in AWS
// (3) .getTranscriptions(transcriptId) - returns transcripted text based on transcriptId
import VoiceRecorder from "./VoiceRecorder";
import React from "react";
import {View} from "react-native";

function record() {
    // const [recording, setRecording] = React.useState(undefined)
    const recorder = new VoiceRecorder()
    const sleep = new Promise(resolve => setTimeout(resolve, 10))


    recorder
        .mockStartRecording()
        // .then(record => setRecording(record))
        .then(handleSaveTranscription());

    function handleSaveTranscription() {
        // alert('Saving transcription!')
        // recorder.saveTranscription(recording)
        //     .then(transcriptId => {
        //         return recorder.getTranscription(transcriptId)
        //     })
        //     .then(text => console.log('Recorded and saved: ' + text))
    }

    return <View/>
}

export default record