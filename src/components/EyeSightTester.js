import React from "react";
import SnellenChart from "./SnellenChart";
import record from "./ExampleVoiceRecorder";

class EyeSightTester extends React.Component {
    constructor(props) {
        super(props)
        this.testEyeSight = this.testEyeSight.bind(this)
    }

    componentDidMount() {
        this.displayStartModal()
    }

    displayStartModal() {
        //todo: display on different screen
        alert('Welcome to eyesight tester!')
    }

    testEyeSight() {
        this.refs.snellenChart.testEyeSight()
    }

    recordVoice() {
        // record()
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.testEyeSight()}>
                    Start testing eye sight
                </button>
                <SnellenChart ref='snellenChart' recordVoice={this.recordVoice}/>
            </React.Fragment>
        );
    }
}

export default EyeSightTester