import React from 'react';
import { Audio } from 'expo-av';
import config from '../../config';
import { View, Button } from 'react-native';
import { Buffer } from "buffer";
import * as FileSystem from 'expo-file-system';

function VoiceRecord(props) {
    const [recording, setRecording] = React.useState(undefined);

    async function startRecording() {
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            playsInSilentModeIOS: true,
        });

        const recording = new Audio.Recording();

        try {
            const { ios, android } = Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            await recording.prepareToRecordAsync({
                android: {
                    ...android,
                    extension: '.mp4',
                },
                ios: {
                    ...ios,
                    extension: '.wav',
                }

            })
            await recording.startAsync();
        } catch (error) {
            console.error(error);
        }
        setRecording(recording);
    }

    async function getTranscription() {
        try {
            await recording.stopAndUnloadAsync();
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
                body: buffer,
            })

            const data = await response.json();
            console.log(`response: ${JSON.stringify(data)}`);
            setRecording(undefined);
        } catch (error) {
            console.error(error);
            setRecording(undefined);
        }
    }

    return (
        <View>
            <Button
                title={recording ? 'Stop Recording' : 'Test Recording'}
                onPress={recording ? getTranscription : startRecording}
            />
        </View>
    );
}

export default VoiceRecord;
