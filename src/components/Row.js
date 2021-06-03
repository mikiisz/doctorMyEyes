import React from 'react'

export default class LetterSupplier {

    generateLetter() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        return characters.charAt(Math.floor(Math.random() * characters.length))
    }
}
//
// export default class Row extends React.Component {
//
// // const Row = React.forwardRef((props, ref) => {
//
// // export default function Row(letterSize, numberOfLetters, style) { //extends React.Component {
//     constructor(props) {
//         super(props)
//         this.letterSize = props.letterSize
//         this.numberOfLetters = props.numberOfLetters
//         this.style = props.style
//         this.generatedLettersList = new LetterSupplier(props.numberOfLetters).generateLetters()
//         this.letterList = this.generatedLettersList.map((letter, key) => {
//             return (
//                 <Letter letterSize={props.letterSize} character={letter} key={key}/>
//             )
//         })
//
//
//         this.rowStyle = {
//             flexDirection: 'row',
//             justifyContent: 'center'
//         }
//     }
//
//     highlightLetters() {
//         // function sleep(milliseconds) {
//         //     const date = Date.now();
//         //     let currentDate = null;
//         //     do {
//         //         currentDate = Date.now();
//         //     } while (currentDate - date < milliseconds);
//         // }
//
//         // function highlight(letter_i) {
//         //     letter_i.changeColourToRed()
//         //     // this.props.recordVoice()
//         //     sleep(500)
//         //     setTimeout(function () {
//         //         letter_i.changeColourToBlack()
//         //     }, 1000)
//         // }
//
//         for (let i = 0; i < this.generatedLettersList.length; i++) {
//             console.log("Will highlight letter " + i)
//             // const letter_i = letterList[i]
//             // setTimeout(() => highlight(letter_i), 3000 * (i + 1))
//             // this.refs['letter' + i].changeColourToBlack()
//         }
//         // alert('Letters in the row are coloured')
//     }
//
//     render() {
//
//         return (
//
//             <View style={
//                 this.rowStyle
//             }
//             >
//                 {
//                     this.letterList
//                 }
//             </View>
//         )
//     }
// }
//
// // export default Row
