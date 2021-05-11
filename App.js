import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import LetterListGenerator from './letter'

class Letter extends React.Component {
    constructor(props) {
        super(props);
        this.letterSize = props.letterSize
        this.character = props.character
    }

    render() {
        return (
            <Text style={{fontSize: this.letterSize}}>{this.character}</Text>
        )
    }
}

class Row extends React.Component {
    constructor(props) {
        super(props);
        this.letterSize = props.letterSize
        this.numberOfLetters = props.numberOfLetters
        this.state = {
            generatedLettersList: []
        }
    }

    componentDidMount() {
        this.setState({
            generatedLettersList: new LetterListGenerator(this.numberOfLetters).generateLetters()
        })
    }

    render() {
        console.log("Generated letters:")
        console.log(this.state.generatedLettersList)
        return (
            <View>
                {this.state.generatedLettersList.map((letter, key) => {
                    return (
                        <Letter letterSize={this.letterSize} character={letter} key={key}/>
                    );
                })}
            </View>
        );
    }
}

export default function App() {
    return (
        <View style={styles.container}>
            <Row letterSize={120} numberOfLetters={1}/>
            <Row letterSize={80} numberOfLetters={2}/>
            <Row letterSize={50} numberOfLetters={4}/>
            <Row letterSize={20} numberOfLetters={5}/>
            <Row letterSize={10} numberOfLetters={8}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c7587',
        alignItems: 'center',
        justifyContent: 'center'
    }
});