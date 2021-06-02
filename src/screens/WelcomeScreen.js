import {Button, StyleSheet, Text, View} from "react-native"
import React from "react";
//todo: do not copy these styles
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
    },
    titleText: {
        fontFamily: "Cochin",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 50
    }
})
export default function WelcomeScreen(props) {
    const {navigation} = props
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20}}>
            <Text style={styles.titleText}>Welcome to doctorMyEyes app. It will help perform a basic eyesight test.
                Remember, this app is <Text style={{color: 'red'}}> not intended </Text> to substitute your doctor
                appointment!
                The app will display randomly generated Snellen Chart. The letters will
                be
                highlighted one by one. After a letter is highlighted, you should hear a 'beep' sound indicating
                that the
                recording started. If you do, spell the highlighted letter. After all letters have been spelled,
                you'll
                receive your result.</Text>
            <Button
                title="Start test!"
                    onPress={() => navigation.navigate('EyesightTest')}
            />
        </View>
    )
}