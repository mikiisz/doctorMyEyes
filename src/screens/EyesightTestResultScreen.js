import React from "react"
import {Text, TouchableOpacity, View} from "react-native"
import {styles} from "../styles"

class Score extends React.Component {
    score = this.props.score
    maxScore = this.props.maxScore
    comment = this.generateComment(this.score, this.maxScore)

    generateComment(score, maxScore) {
        if (score < maxScore / 3) {
            return 'You should definitely see your doctor! Your eyesight is extremely bad! :('
        }
        if (score < maxScore * 2 / 3) {
            return 'Your eyesight isn\'t that bad, but you should take care of it!'
        }
        return 'You have eyes like a hawk!'
    }

    render() {
        return <Text style={styles.contentText}>Your score: {' '}
            <Text style={styles.score}>{this.score} / {this.maxScore}</Text>{'\n\n'}
            {this.comment}</Text>
    }
}

export default function EyesightTestResultScreen(props) {
    const {route, navigation} = props
    const {score, maxScore} = route.params
    return (
        <View style={styles.container}>
            <Score score={score} maxScore={maxScore}/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome')}>
                <Text style={styles.buttonText}>Start test again</Text>
            </TouchableOpacity>
        </View>
    )
}