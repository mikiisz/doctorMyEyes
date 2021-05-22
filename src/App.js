import React from 'react';
import VoiceRecord from './components/VoiceRecord';
import {StyleSheet, View} from "react-native";
import {registerRootComponent} from 'expo';
import Score from "./components/Score";
import SnellenChart from "./components/SnellenChart";

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
});

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <React.Fragment>
                <View style={styles.container}>
                    <Score style={styles.score} score={0}/>
                    <SnellenChart/>
                </View>
                <VoiceRecord/>
            </React.Fragment>
        );
    }
}

registerRootComponent(App);