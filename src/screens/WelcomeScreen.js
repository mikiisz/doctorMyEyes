import {Text, TouchableOpacity, View} from "react-native"
import React from "react"
import {styles} from "../styles"

export default function WelcomeScreen(props) {
    const {navigation} = props
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Welcome to doctorMyEyes!</Text>
            <Text style={styles.contentText}> Our app will help you perform a basic eyesight test.
                Remember, our product is <Text style={{color: 'red'}}> not intended </Text> to substitute your doctor
                appointment! The app will display randomly generated letters of different sizes, one by one. It indicates that the recording has started. Now you
                can spell the letter. After all letters have been spelled, you'll receive your result. Enjoy!</Text>
            <Text style={styles.authors}>~Monika Dziedzic, Michał Szkarłat</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EyesightTest')}>
                <Text style={styles.buttonText}>Start test!</Text>
            </TouchableOpacity>
        </View>
    )
}