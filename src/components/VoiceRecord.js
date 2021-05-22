import React from 'react';
import { Audio } from 'expo-av';
import config from '../../config';
import { View, Button } from 'react-native';
import * as FileSystem from 'expo-file-system';

function VoiceRecord(props) {
    const [recording, setRecording] = React.useState(undefined);
    const [transcript, setTranscript] = React.useState(undefined);

    async function startRecording() {
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            playsInSilentModeIOS: true,
        });

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
            await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
            await recording.startAsync();
        } catch (error) {
            console.error(error);
            stopRecording();
        }
        setRecording(recording);
    }

    async function getTranscription() {
        try {
            await recording.stopAndUnloadAsync();
            const info = await FileSystem.getInfoAsync(recording.getURI());
            console.log(`file info: ${JSON.stringify(info)}`);
            const uri = info.uri;
            const formData = new FormData();
            formData.append('file', {
                uri,
                type: 'application/pdf',
                name: 'speech2text'
            });
            const response = await fetch(config.TRANSCRIPT_GATEWAY, {
                method: 'POST',
                body: formData
            });
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
