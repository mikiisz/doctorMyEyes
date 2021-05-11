import React from 'react';
import {StatusBar} from "expo-status-bar";
import {Text, View} from "react-native";

class FirstRow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.timerID = setInterval(
        //     () => this.tick(),
        //     1000
        // );
    }

    componentWillUnmount() {
        // clearInterval(this.timerID);
    }

    render() {
        return <View>
            <Text>Hello first</Text>
            <StatusBar style="auto"/>
        </View>;
    }
}

class SecondRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <View>
            <Text>Hello second</Text>
            <StatusBar style="auto"/>
        </View>;
    }
}

class ThirdRow extends React.Component {
    render() {
        return <View>
            <Text>Hello third</Text>
            <StatusBar style="auto"/>
        </View>;
    }
}

export default function App() {
    return (
        <View>
            <FirstRow/>
            <SecondRow/>
            <ThirdRow/>
        </View>
    );
}