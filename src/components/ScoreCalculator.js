import VoiceRecorder from "./VoiceRecorder"

export default async function calculateScore(providedAnswers, voiceRecords) {
    const recorder = new VoiceRecorder

    return recorder.getTranscriptions(voiceRecords.join(","))
        .then(userResponses => {
            console.log(userResponses)

            let score = 0
            for (let i = 0; i < providedAnswers.length; i++) {
                const words = userResponses[i].split(' ')

                if (words.length >= 2 && providedAnswers[i].toLowerCase() === words[1][0].toLowerCase()) {
                    score++
                }
            }

            return score
        })
}