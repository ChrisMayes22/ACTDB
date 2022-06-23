import express from 'express';
import helmet from 'helmet';
const app = express();

app.use(helmet());

app.get('/users', (req, res) => {
    res.json({"payload": "success"})
})

export default app;