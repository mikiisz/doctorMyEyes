import React, {Fragment} from 'react';
import Row from "./Row";

class SnellenChart extends React.Component {
    constructor(props) {
        super(props);
        this.rows = []
    }


    testEyeSight() {
        // for (let i = 0; i < this.rows.length; i++) //todo: przerobić
        this.refs['row3'].highlightLetters()
        // this.refs['row1'].highlightLetters()
        // this.refs.row2.highlightLetters()
        // this.refs.row3.highlightLetters()
        // this.refs.row4.highlightLetters()
        // this.refs.row5.highlightLetters()
    }

    render() {
        let rowStyle = {
            flexDirection: 'row',
            justifyContent: 'center'
        }
        let letterInfoList = [{letterSize: 120, numberOfLetters: 1},
            {letterSize: 80, numberOfLetters: 2},
            {letterSize: 50, numberOfLetters: 4},
            {letterSize: 20, numberOfLetters: 5},
            {letterSize: 10, numberOfLetters: 8}]

        for (let i = 0; i < letterInfoList.length; i++) {
            this.rows.push(<Row ref={'row' + i} snellenChart={this} style={rowStyle}
                                letterSize={letterInfoList[i].letterSize}
                                numberOfLetters={letterInfoList[i].numberOfLetters}
                                recordVoice={this.props.recordVoice}/>)
        }
        //todo: generować pętlą, zrobić tablicę letterInfo: {letterSize: ..., numberOfLetters: ...}
        return (
            <Fragment>
                {this.rows}
            </Fragment>
        )
        /*
                    <Row ref='row1' snellenChart={this} style={rowStyle} letterSize={120}
                numberOfLetters={1} recordVoice={this.props.recordVoice}/>
                <Row ref='row2' snellenChart={this} style={rowStyle} letterSize={80}
                     numberOfLetters={2} recordVoice={this.props.recordVoice}/>
                <Row ref='row3' snellenChart={this} style={rowStyle} letterSize={50}
                     numberOfLetters={4} recordVoice={this.props.recordVoice}/>
                <Row ref='row4' snellenChart={this} style={rowStyle} letterSize={20}
                     numberOfLetters={5} recordVoice={this.props.recordVoice}/>
                <Row ref='row5' snellenChart={this} style={rowStyle} letterSize={10}
                     numberOfLetters={8} recordVoice={this.props.recordVoice}/>
          */
    }
}

export default SnellenChart
