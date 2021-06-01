import React from 'react'
import {Text} from 'react-native'

// TODO: mogę dodać booleana isHighlighted, a w Row wyświetlać literę inaczej w zależności od wartosci booleana
class Letter extends React.Component {
    constructor(props) {
        super(props)
        this.textStyle = {
            fontSize: props.letterSize,
            letterSpacing: 3,
            color: 'black'
        }
        this.highlightedTextStyle = {
            fontSize: props.letterSize,
            letterSpacing: 3,
            color: 'red'
        }
        this.character = props.character

        this.state = {
            isHighlighted: false
        }
    }

    changeColourToRed() {
        this.setState({
            isHighlighted: true
        })
        console.log("Changed colour to red")
    }

    changeColourToBlack() {
        this.setState({
            isHighlighted: false
        })
        console.log("Changed colour to black")
    }

    render() {
        let style = this.state.isHighlighted ? this.highlightedTextStyle : this.textStyle
        return (
            <Text style={style}>{this.character}</Text>
        )
    }
}

export default Letter
