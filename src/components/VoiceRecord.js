import React from 'react';
import { Audio } from 'expo-av';
import { View, Button, Text } from 'react-native';

function VoiceRecord(props) {
    const [recording, setRecording] = React.useState();
    const [uri, setUri] = React.useState();

    async function startRecording() {
        try {
            setUri(undefined)
            console.log('Requesting permissions..');
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });
            console.log('Starting recording..');
            const recording = new Audio.Recording();
            await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
            await recording.startAsync();
            setRecording(recording);
            console.log('Recording started');
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {
        console.log('Stopping recording..');
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        setUri(uri)
        console.log('Recording stopped and stored at', uri);
    }

    return (
        <View style={props.containerStyle}>
            <Button
                title={recording ? 'Stop Recording' : 'Test Recording'}
                onPress={recording ? stopRecording : startRecording}
            />
            <Text style={props.textStyle}> {uri ? 'Recording stored at' + uri : 'No record'} </Text>
        </View>
    );
}

export default VoiceRecord;