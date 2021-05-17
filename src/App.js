import React from 'react';
import Row from './components/Row';
import { StyleSheet, View } from "react-native";
import { registerRootComponent } from 'expo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c7587',
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: "row"
    }
});

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <Row style={styles.row} letterSize={120} numberOfLetters={1} />
                <Row style={styles.row} letterSize={80} numberOfLetters={2} />
                <Row style={styles.row} letterSize={50} numberOfLetters={4} />
                <Row style={styles.row} letterSize={20} numberOfLetters={5} />
                <Row style={styles.row} letterSize={10} numberOfLetters={8} />
            </View>
        );

    }
}

registerRootComponent(App);