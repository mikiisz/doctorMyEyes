import React from "react"
import SnellenChart from "../components/SnellenChart";


// todo: intercept pressing back button and display modal that test result will be lost
export default function EyesightTestScreen() {
    // const snellenChart = useRef(null);

    // function testEyesight() { //todo: componentDidMount
    //     snellenChart.testEyesight()
    // }

    function recordVoice() {
        // record() todo
    }

    return (
        <React.Fragment>
            <SnellenChart recordVoice={recordVoice}/>
        </React.Fragment>
    );
}