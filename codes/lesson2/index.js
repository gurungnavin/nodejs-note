
// after install dotenv, write the below config.
require('dotenv/lib/main').config()
const http = require('http');

// import PORT from .env and for git .gitignore
const port = process.env.PORT

// Create the server
const server = http.createServer((req, res) => {
  // Handle all requests (no routing here)
  res.end('Hello I am from Node.js');
});

// Start the server on port 3000
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});