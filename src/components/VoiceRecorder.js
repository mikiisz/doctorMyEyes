import {Audio} from 'expo-av'
import config from '../../config'
import {Buffer} from 'buffer'
import * as FileSystem from 'expo-file-system'

class VoiceRecorder {
    recordOptions = {
        android: {
            ...Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY.android,
            extension: '.mp4',
        },
        ios: {
            ...Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY.ios,
            extension: '.wav',
        }
    }

    recordMods = {
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
    }

    async startRecording() {
        await Audio.requestPermissionsAsync()
        await Audio.setAudioModeAsync(this.recordMods)
        const recording = new Audio.Recording()
        await recording.prepareToRecordAsync(this.recordOptions)
        await recording.startAsync()

        return recording
    }

    async saveTranscription(recording) {
        await recording.stopAndUnloadAsync()
        const uri = recording.getURI()
        const fileExtension = uri.substr(uri.lastIndexOf('.') + 1)
        const base64 = await FileSystem.readAsStringAsync(uri, {encoding: 'base64'})
        const buffer = new Buffer.from(base64, 'base64')
        const response = await fetch(config.TRANSCRIPT_GATEWAY, {
            method: 'POST',
            headers: {
                'Content-Type': `audio/${fileExtension}; charset=utf-8`,
                'format': `"${fileExtension}"`,
                'x-amz-acl': 'public-read'
            },
            body: buffer
        })
        const data = await response.json()

        return data['body']
    }

    async getTranscription(transcriptId) {
        // TODO: implement GET lambda
        return 'Hello World'
    }
}

export default VoiceRecorder
