import React from 'react'

export default class LetterSupplier {

    generateLetter() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        return characters.charAt(Math.floor(Math.random() * characters.length))
    }
}