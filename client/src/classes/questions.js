class Question {
    constructor(prompt, passage, answers, questionId, testId, correct, difficulty, rules){
        this.prompt = prompt;
        this.passage = passage;
        this.answers = answers;
        this.questionId = questionId;
        this.testId = testId;
        this.correct = correct;
        this.difficulty = difficulty;
        this.rules = rules;
    }

    getPrompt() {
        return this.prompt;
    }

    getAnswers() {
        return this.answers;
    }
    
    getPassage(){
        return this.passage;
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

    getDifficulty(){
        return this.difficulty;
    }

    getRule(){
        return this.rules;
    }

    serializeQuestion(){
        return JSON.stringify({
            prompt: this.prompt,
            passage: this.passage,
            answers: this.answers,
            questionId: this.questionId,
            testId: this.testId,
            correct: this.correct,
            difficulty: this.difficulty,
            rules: this.rules
        })
    }

    deserializeQuestion(jsonObject){
        const payload = JSON.parse(jsonObject);
        return new Question(
            payload['prompt'],
            payload['passage'],
            payload['answers'],
            payload['questionId'],
            payload['testId'],
            payload['correct'],
            payload['difficulty'],
            payload['rules']
        );
    }

    filterQuestion(filter){
        const elements = ['prompt', 'passage', 'answers', 'questionId', 'testId', 'correct', 'difficulty', 'rules'];
        for(let key of Object.keys(filter)){
            if(elements.indexOf(key) !== -1){
                console.log(key, this[key], filter[key])
                if(this[key].toLowerCase() !== filter[key] && filter[key] !== "any"){
                    return false;
                }
            }
        }
        return true;
    }
}

export default Question;