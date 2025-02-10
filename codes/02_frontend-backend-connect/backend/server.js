import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the backend server');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
          "id": 1,
          "title": "Why don't skeletons fight each other?",
          "description": "Because they don't have the guts!"
        },
        {
          "id": 2,
          "title": "What do you get when you cross a snowman and a vampire?",
          "description": "Frostbite! It's cold and dangerous!"
        },
        {
          "id": 3,
          "title": "Why did the scarecrow win an award?",
          "description": "Because he was outstanding in his field, just like any great achiever!"
        },
        {
          "id": 4,
          "title": "Why don't eggs tell jokes?",
          "description": "Because they would crack each other up! No yolk!"
        },
        {
          "id": 5,
          "title": "What did one ocean say to the other ocean?",
          "description": "Nothing, they just waved! Waves are their way of communicating."
        }
      ] 
    res.send(jokes);
});
const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
