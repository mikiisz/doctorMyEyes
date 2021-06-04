// VoiceRecorder usage 101:
// (1) .startRecording() - returns Audio.Recording, starts audio recording on iOS (.wav) and Android (.mp4)
// (2) .saveTranscriptions() - returns transcriptId, stops recording and saves the audio in AWS
// (3) .getTranscriptions(transcriptId) - returns transcripted text based on transcriptId
import VoiceRecorder from "./VoiceRecorder"
import React from "react"


function record() {
    const [recording, setRecording] = React.useState(undefined)
    const recorder = new VoiceRecorder()

    recorder
        .startRecording()
        .then(record => setRecording(record))

    recorder.saveTranscription(recording)
        .then(transcriptId => recorder.getTranscription(transcriptId))
        .then(text => console.log('Spelled letter: ' + text))
}

export default record