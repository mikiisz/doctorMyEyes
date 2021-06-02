import React, {Fragment} from 'react';
import Row from "./Row";


export default class SnellenChart extends React.Component {//(recordVoice) { // extends React.Component {

    constructor(props) {
        super(props);
        this.rowList = this.generateRows()
        this.rowStyle = {
            flexDirection: 'row',
            justifyContent: 'center'
        }
    }

    inputRefs = []
    setRef = (ref) => {
        this.inputRefs.push(ref)
    }

    generateRows() {
        const letterInfoList = [
            {letterSize: 120, numberOfLetters: 1}, {letterSize: 80, numberOfLetters: 2},
            {letterSize: 50, numberOfLetters: 4}, {letterSize: 20, numberOfLetters: 5},
            {letterSize: 10, numberOfLetters: 8}
        ]
        let rows = []
        for (let i = 0; i < letterInfoList.length; i++) {
            rows.push(
                <Row ref={this.setRef} key={i} style={this.rowStyle} letterSize={letterInfoList[i].letterSize}
                     numberOfLetters={letterInfoList[i].numberOfLetters}
                     recordVoice={this.props.recordVoice}/>
            )
        }
        return rows
    }

    componentDidMount() {
        this.testEyesight()
    }

    testEyesight() {
        for (let row of this.rowList) {
            row.highlightLetters
        }
// row2Ref.highlightLetters
// row3Ref.highlightLetters
// row4Ref.highlightLetters
// row5Ref.highlightLetters
    }

    render() {
        console.log("rows list")
        console.log(this.rowList)
        return (
            <Fragment>
                {this.rowList}
            </Fragment>
        )
    }
}
