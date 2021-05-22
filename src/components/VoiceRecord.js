import React from 'react';
import { Audio } from 'expo-av';
import config from '../../config';
import { View, Button } from 'react-native';
import { Buffer } from "buffer";
import * as FileSystem from 'expo-file-system';

function VoiceRecord(props) {
    const [recording, setRecording] = React.useState(undefined);
    const [transcript, setTranscript] = React.useState(undefined);


    async function startRecording() {
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: true,
        });

        const recording = new Audio.Recording();

        try {
            const { ios, android } = Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            await recording.prepareToRecordAsync({
                android: android,
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
            console.log(uri);
            const formData = new FormData();
            formData.append('file', {
                uri,
                type: 'audio/wav',
                name: 'speech2text.wav'
            });

            const base64 = await FileSystem.readAsStringAsync(uri, { encoding: 'base64' });
            const buffer = new Buffer.from(base64, 'base64')
            const response = await fetch(config.TRANSCRIPT_GATEWAY, {
                method: 'POST',
                headers: {
                    'Content-Type': 'audio/wav; charset=utf-8',
                    'x-amz-acl': 'public-read',
                },
                body: buffer,
            })

            const data = await response.json();
            setTranscript(data);
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
