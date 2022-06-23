import app from './app';

const PORT = 5000;
app.listen(PORT, err => {
    if(err) console.error(err);
    console.log(`Listening on port ${PORT}`);
})