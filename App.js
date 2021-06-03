import React from 'react'
import MainStackNavigator from "./src/navigation/MainStackNavigator"
import {registerRootComponent} from "expo";

export default function App() {
    return <MainStackNavigator/>
}

registerRootComponent(App)