class Question {
    constructor(prompt, passage, answers, questionId, testId, correct){
        this.prompt = prompt;
        this.passage = passage;
        this.answers = answers;
        this.questionId = questionId;
        this.testId = testId;
        this.correct = correct;
    }

    getPrompt() {
        return this.prompt;
    }

    getAnswers() {
        return this.answers;
    }

    getQuestionId() {
        return this.questionId
    }

    getCorrect(){
        return this.correct;
    }

    getTestId(){
        return this.testId;
    }

    serializeQuestion(){
        return JSON.stringify({
            prompt: this.prompt,
            passage: this.passage,
            answers: this.answers,
            questionId: this.questionId,
            testId: this.testId,
            correct: this.correct
        })
    }

    deserializeQuestion(jsonObject){
        return new Question(
            jsonObject['prompt'],
            jsonObject['passage'],
            jsonObject['answers'],
            jsonObject['questionId'],
            jsonObject['testId'],
            jsonObject['correct']
        );
    }
}

export default Question;