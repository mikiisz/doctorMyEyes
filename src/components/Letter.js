import React from 'react';
import { Text } from 'react-native';

class Letter extends React.Component {
    constructor(props) {
        super(props);
        this.textStyle = {
            fontSize: props.letterSize,
            letterSpacing: 3
        }
        this.character = props.character
    }

    render() {
        return (
            <Text style={this.textStyle}>{this.character}</Text>
        )
    }
}

export default Letter;
