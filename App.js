import React from 'react'
import {registerRootComponent} from "expo"
import MainStackNavigator from "./src/navigation/MainStackNavigator"

function App() {
    return <MainStackNavigator/>
}

registerRootComponent(App)