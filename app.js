import express from 'express';
import helmet from 'helmet';
import questions from './questions.js';
import cors from 'cors';
const app = express();

// app.use(helmet());
app.use(cors())

app.use(express.static('public'))

app.get('/questions', (req, res) => {
    const payload = questions.reduce((questionsArr, question) => {
        if(question.filterQuestion(req.query)){
            questionsArr.push(question.serializeQuestion());
        }
        return questionsArr;
    }, [])
    res.json(payload);
})

export default app;