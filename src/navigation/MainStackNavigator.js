import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import WelcomeScreen from '../screens/WelcomeScreen'
import EyesightTestScreen from '../screens/EyesightTestScreen'
import EyesightTestResultScreen from '../screens/EyesightTestResultScreen'

const Stack = createStackNavigator()


export default function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Welcome'
                screenOptions={{
                    gestureEnabled: true,
                    headerStyle: {
                        backgroundColor: '#101010'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    headerTintColor: '#ffd700',
                    headerBackTitleVisible: false
                }}
                headerMode='float'>
                <Stack.Screen
                    name='Welcome'
                    component={WelcomeScreen}
                    options={{title: 'Welcome', headerLeft: () => null}}
                />
                <Stack.Screen
                    name='EyesightTest'
                    component={EyesightTestScreen}
                    options={{title: 'Eyesight Test', headerLeft: () => null}}
                />
                <Stack.Screen
                    name='EyesightTestResult'
                    component={EyesightTestResultScreen}
                    options={({route}) => ({
                        title: 'EyesightTest Results',
                        score: route.params.score,
                        maxScore: route.params.maxScore,
                        headerLeft: () => null
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
