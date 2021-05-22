import React from 'react';
import Row from "./Row";

class SnellenChart extends React.Component {
    constructor(props) {
        super(props)
        this.rowStyle = {
            flexDirection: 'row',
            justifyContent: 'center'
        }
    }

    render() {
        return (
            <React.Fragment>
                <Row style={this.rowStyle} letterSize={120} numberOfLetters={1}/>
                <Row style={this.rowStyle} letterSize={80} numberOfLetters={2}/>
                <Row style={this.rowStyle} letterSize={50} numberOfLetters={4}/>
                <Row style={this.rowStyle} letterSize={20} numberOfLetters={5}/>
                <Row style={this.rowStyle} letterSize={10} numberOfLetters={8}/>
            </React.Fragment>
        );
    }
}

export default SnellenChart;
