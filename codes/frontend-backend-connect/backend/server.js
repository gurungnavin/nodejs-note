import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the backend server');
});
const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
