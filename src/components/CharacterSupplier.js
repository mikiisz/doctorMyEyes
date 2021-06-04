export default class CharacterSupplier {
    next() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        return characters.charAt(Math.floor(Math.random() * characters.length))
    }
}