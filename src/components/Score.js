import React from "react";
import {Text} from "react-native";

class Score extends React.Component {
    constructor(props) {
        super(props)
        this.score = props.score
        this.style = props.style
    }

    render() {
        return (
            <Text style={this.style}>{this.score}</Text>
        );
    }
}

export default Score;