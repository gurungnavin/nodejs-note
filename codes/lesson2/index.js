const http = require('http');

const port = 4000

// Create the server
const server = http.createServer((req, res) => {
  // Handle all requests (no routing here)
  res.end('Hello I am from Node.js');
});

// Start the server on port 3000
server.listen(port, () => {
  console.log('Server running at http://localhost:3000');
});