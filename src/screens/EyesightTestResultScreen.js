import React from "react"
import {Button, Text, View} from "react-native"

class Score extends React.Component {
    render() {
        return <Text>Your score: <Text style={{fontWeight: 'bold'}}>{this.props.value}</Text></Text>
    }
}

export default function EyesightTestResultScreen(props) {
    const {route, navigation} = props
    const {score} = route.params
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Score value={score}/>
            <Button
                title="Start test again!!"
                onPress={() => navigation.navigate('Welcome')}
            />
        </View>
    );
}