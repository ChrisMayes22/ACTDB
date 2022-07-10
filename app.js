import express from 'express';
import helmet from 'helmet';
import questions from './questions.js';
import cors from 'cors';
const app = express();

// app.use(helmet());
app.use(cors())

app.use(express.static('public'))

app.get('/questions', (req, res) => {
    res.send(questions.reduce((prev, curr) => {
        prev.push(curr.serializeQuestion());
        return prev;
    }, []));
})

export default app;