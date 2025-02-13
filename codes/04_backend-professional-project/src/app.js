import express from "express"

const app = express()

// Example route
app.get('/', (req, res) => {
  res.send("Hello, World!"); // This is where you send a response to a request
});

export { app };