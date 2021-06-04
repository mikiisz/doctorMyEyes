export default function calculateScore(providedAnswers) {
    let userResponses = getUserResponses()
    let score = 0
    for (let i = 0; i < providedAnswers.length; i++) {
        if (providedAnswers[i] === userResponses[i]) {
            score++
        }
    }
    return score
}

function getUserResponses() {
    return ['a', 'c', 'd', 'q', 'h', 'j', 'f']
//    todo: get from aws
}