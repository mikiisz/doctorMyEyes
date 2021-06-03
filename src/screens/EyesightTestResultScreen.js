import React from "react"
import {Button, Text, View} from "react-native"

class Score extends React.Component {
    score = this.props.score
    maxScore = this.props.maxScore
    comment = this.generateComment(this.score, this.maxScore)

    generateComment(score, maxScore) {
        if (score < maxScore / 3) {
            return 'You should definitely see your doctor! Your eyesight is extremely bad!'
        }
        if (score < maxScore * 2 / 3) {
            return 'Your eyesight isn\'t that bad, but you should take care of it!'
        }
        return 'You have eyes like a hawk!'
    }

    render() {
        return <Text>Your score: <Text
            style={{fontWeight: 'bold'}}>{this.score} / {this.maxScore}</Text> <br/>
            {this.comment}</Text>
    }
}

export default function EyesightTestResultScreen(props) {
    const {route, navigation} = props
    const {score, maxScore} = route.params
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Score score={score} maxScore={maxScore}/>
            <Button
                title="Start test again!!"
                onPress={() => navigation.navigate('Welcome')}
            />
        </View>
    );
}