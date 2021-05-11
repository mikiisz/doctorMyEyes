import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import LetterListGenerator from './letter'

class Letter extends React.Component {
    constructor(props) {
        super(props);
        this.letterSize = props.letterSize
        this.character = props.character
    }

    // render() {
    //     return (
    //         <View>
    //             <Text style={{fontSize: this.letterSize}}>{this.character}</Text>
    //         </View>
    //     )
    // }
}

class Row extends React.Component {
    constructor(props) {
        super(props);
        this.letterSize = props.letterSize
        this.numberOfLetters = props.numberOfLetters
        this.state = {
            generatedLettersList: ''
        }
    }

    componentDidMount() {
        this.setState({
            generatedLettersList: new LetterListGenerator(this.numberOfLetters).generateLetters()
        })
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: this.letterSize}}>A</Text>
            </View>
        );
    }
}

export default function App() {
    return (
        <View style={styles.container}>
            <Row letterSize={30} numberOfLetters={1}/>
            <Row letterSize={20} numberOfLetters={1}/>
            <Row letterSize={10} numberOfLetters={1}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c7587',
        alignItems: 'center',
        justifyContent: 'center',
    }
});