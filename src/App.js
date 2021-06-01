import React from 'react'
import {StyleSheet, View} from "react-native"
import {registerRootComponent} from 'expo'
import EyeSightTester from "./components/EyeSightTester";

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
    }
})

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <EyeSightTester/>
            </View>
        );
    }
}

registerRootComponent(App)