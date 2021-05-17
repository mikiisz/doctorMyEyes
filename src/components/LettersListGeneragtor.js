class LetterListGenerator {
    numberOfLetters;

    constructor(numberOfLetters) {
        this.numberOfLetters = numberOfLetters
    }

    generateLetters() {
        const result = [];
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = 0; i < this.numberOfLetters; i++) {
            result.push(characters.charAt(Math.floor(Math.random() *
                this.numberOfLetters)));
        }
        return result;
    }
}

export default LetterListGenerator;