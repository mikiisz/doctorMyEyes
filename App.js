import React from 'react'
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import {StyleSheet} from "react-native";
import {registerRootComponent} from "expo";

// const Stack = createStackNavigator()

// <Stack.Screen name="EyesightTest" component={EyesightTestScreen}/>
// <Stack.Screen name="EyesightTestResult" component={EyesightTestResultScreen}/>
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
    },
    titleText: {
        fontFamily: "Cochin",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 50
    }
})

export default function App() {
    return <MainStackNavigator/>
}
// <NavigationContainer>
//     <Stack.Navigator initialRouteName="Welcome">
//         <Stack.Screen name="Welcome" component={WelcomeScreen}/>
//     </Stack.Navigator>
// </NavigationContainer>

registerRootComponent(App)