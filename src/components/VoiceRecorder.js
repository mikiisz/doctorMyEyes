import { Audio } from 'expo-av'
import config from '../../config'
import { Buffer } from 'buffer'
import * as FileSystem from 'expo-file-system'

class VoiceRecorder {
    recordOptions = {
        android: {
            ...Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY.android,
            extension: '.mp4',
        },
        ios: {
            ...Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY.ios,
            extension: '.wav',
        }
    }

    recordMods = {
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
    }

    async startRecording(delayMs) {
        await Audio.requestPermissionsAsync()
        await Audio.setAudioModeAsync(this.recordMods)
        const recording = new Audio.Recording()
        await recording.prepareToRecordAsync(this.recordOptions)
        await recording.startAsync()

        await new Promise(resolve => setTimeout(resolve, delayMs))
        await recording.stopAndUnloadAsync()

        return recording
    }

    async saveRecording(recording) {
        const uri = recording.getURI()
        const fileExtension = uri.substr(uri.lastIndexOf('.') + 1)
        const base64 = await FileSystem.readAsStringAsync(uri, { encoding: 'base64' })
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

    async getTranscriptions(transcripts) {
        const uri = `${config.TRANSCRIPT_GATEWAY}?records=${transcripts}`

        console.log(uri)
        const response = await fetch(uri, {
            method: 'GET',
        })
        const data = await response.json()

        return data
    }
}

export default VoiceRecorder
