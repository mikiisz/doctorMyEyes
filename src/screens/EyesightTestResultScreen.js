import React from "react"
import {Button, Text, View} from "react-native"

//todo
export default function EyesightTestResultScreen(props) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button
                title="Start test!"
                onPress={() => navigation.navigate('EyesightTest')}
            />
        </View>
    );
}