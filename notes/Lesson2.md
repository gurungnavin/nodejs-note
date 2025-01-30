![backend](https://github.com/user-attachments/assets/8408d47c-a3c4-4c4b-84c0-bc0b510c5dab)

# NODE JS

## Table of Contents
1. [Initializing an npm Package](#1-initializing-an-npm-package)
2. [Installing npm packages through
npm or yarn](#2installing-npm-packages-through-npm-or-yarn)
3. [Understanding the package.json file](#3-understanding-the-packagejson-file)
4. [Create a basic http server in Node.js](#4-create-a-basic-http-server-in-nodejs)
5. [Importing and exports modules](#5-importing-and-exports-modules)
6. [Working with FileSystem in Node.js](#6-working-with-filesystem-in-nodejs)
7. [HTTP Protocols](#7-http-protocols)
8. [Events & Event Emitters](#8-events--event-emitters)
9. [Global object](#9-global-object)

## 1. Initializing an npm Package

### What is npm?
- **npm** = Node Package Manager.
- Used to manage dependencies and scripts for Node.js projects.

### Steps to Initialize
1. Open terminal in your project folder.
2. Run:
   ```bash
   npm init
   ```
- Answer prompts to create ```package.json```.

3. For default setup, use:
  ```bash
  npm init -y
  ```
### Uninstalling an npm Package
1. Run on terminal
  ```bash 
   npm uninstall <package-name>
  ```
2. OR Uninstall a Dev Dependency
  ```bash
  npm uninstall <package-name> --save-dev
  ```

### What is package.json?
- Configuration file for your project.
- Tracks dependencies, scripts, and project metadata.

## That’s it! Now you know how to initialize and uninstall npm packages like a pro! 🚀

--- 

## 2.Installing npm packages through ```npm or yarn```

| Feature                  | npm                          | Yarn                        |
|--------------------------|------------------------------|-----------------------------|
| **Install Command**       | `npm install`                | `yarn add`                  |
| **Dev Dependency Flag**   | `--save-dev`                 | `--dev`                     |
| **Global Install**        | `npm install -g`             | `yarn global add`           |
| **Lock File**             | `package-lock.json`          | `yarn.lock`                 |
| **Speed**                 | Slower (older versions)      | Faster (parallel downloads) |
| **Offline Mode**          | Limited support              | Full offline support        |

---

## 3. Understanding the package.json file

### What is ```package.json```?
- It is the configuration file for your Node.js project.
- It stores metadata about the project (name, version, description, etc.) and manages dependencies, scripts, and other configurations.

### Key Fields in ```package.json```
1. ```name```: The name of your project.
2. ```version```: The current version of your project.
3. ```description```: A short description of your project.
4. ```main```: The entry point of your application (usually index.js).
5. ```scripts```: Custom commands to run tasks (e.g., start, test).

  ```json
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  }
  ```

### 6. ```dependencies```: Lists packages required for production.
  ```json
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.0.3",
    "lodash": "^4.17.21",
    "axios": "^1.5.0",
    "dotenv": "^16.3.1"
  }
  ```

### 7. ```devDependencies```: Lists packages required for development (e.g., testing tools).

  ```json
  "devDependencies": {
    "jest": "^29.5.0",
    "eslint": "^8.56.0",
    "nodemon": "^3.0.2",
    "typescript": "^5.3.3",
    "webpack": "^5.89.0"
  }
  ```
### How is ```package.json``` Created?
- Run ```npm init``` or ```npm init -y``` to generate it.
- Answer prompts or use the ```-y``` flag for default values.

### Why is package.json Important?
- Tracks all dependencies and their versions.
- Allows sharing and reproducing projects easily.
- Defines scripts to automate tasks (e.g., starting the server, running tests).

### Example ```package.json```
  ```json
  {
    "name": "my-app",
    "version": "1.0.0",
    "description": "A simple Node.js app",
    "main": "index.js",
    "scripts": {
      "start": "node index.js",
      "test": "jest"
    },
    "dependencies": {
      "express": "^4.18.2"
    },
    "devDependencies": {
      "jest": "^29.5.0"
    }
  }
  ```
  ### In short, package.json is the heart of your Node.js project! It keeps everything organized and makes your project easy to share and run. 🚀

---


## 4. Create a basic http server in Node.js

### a. Install Node.js
- Download and install Node.js from [nodejs.org](https://nodejs.org).
- verify installation by running in terminal with: 
 
```bash
node --version
npm --version
```  
OR
```bash
node -v
```
### b. Initialize npm (Node Package Manager)
Create a Folder and open in VSCODE & Open terminal, Run the following command to create a ```package.json``` file (the -y flag skips prompts):

 ```bash
 npm init -y
 ```

 ### OUTPUT as ```package.json```
 ```json
  {
    "name": "lesson2",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "description": ""
  }

 ```
### c. Add a Start Script to package.json

- Open the ```package.json``` file and add a start script under the ```"scripts"``` section:

    ```json
      "scripts": {
        "start": "node index.js"
     }
    ```
   ※ overwrite on ```"test": "echo \"Error: no test specified\" && exit 1"```
- This lets you run the server with npm start instead of typing ```node index.js``` every time.

### d.  Create index.js File
- Create a file named ```index.js``` in your project folder. We can create not only index.js but any(server.js, main.js).


### e. Write the Server Logic inside ```index.js```

  ```javascript
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

  ```


### f. Run the server
- in the terminal, execute
```bash
npm start
```
or
```bash
node index.js
```
### Final Folder Structure
  ```bash
  your-project/
  ├── index.js
  ├── package.json
  └── package-lock.json (optional, if you ever install dependencies)
  ```


---

## 5. Importing and exports modules

### a. Introduction
- Modules are reusable pieces of code in Node.js.
- They help in organizing, sharing, and encapsulating code.

### b. Usage
- Code Organization: Break large codebases into smaller files.
- Reusability: Share code across files or projects.
- Encapsulation: Keep variables/functions private unless exported.

### c. Types of Exports
  1.  CommonJS (Default in Node.js):
   - ```module.exports``` for single or multiple exports.
   - ```require()``` to import.

   - Example:

   ```javascript
      // Export
    // math.js
    const add = (a, b) => a + b;
    module.exports = add;

    // app.js
    const add = require('./math');
    console.log(add(2, 3)); // 5

   ``` 
  2. ES Modules (Modern):
   - ```export``` for single or multiple exports
   - ```import``` to import

   - Example:

   ```javascript
  // Export
    export { add, subtract };

    // Import
    import { add, subtract } from './math.mjs';
   ```  

  ### d. Examples

  ```javascript

    // CommonJS
    // math.js
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    module.exports = { add, subtract };

    // app.js
    const { add, subtract } = require('./math');
    console.log(add(2, 3)); // 5

    // ES Modules
    // math.mjs
    export const add = (a, b) => a + b;
    export const subtract = (a, b) => a - b;

    // app.mjs
    import { add, subtract } from './math.mjs';
    console.log(subtract(5, 2)); // 3

  ```


  ### e. Key Points 
  - Use CommonJS (require/module.exports) for Node.js default.
  - Use ES Modules (import/export) for modern JavaScript.
  - ES Modules require .mjs extension or "type": "module" in package.json.
  - Modules are cached after the first import. 

---


## 6. Working with FileSystem in Node.js

### i. Introduction
  - The fs module in Node.js allows you to interact with the file system.
  - It provides methods for reading, writing, updating, and deleting files and directories.
  - Supports both synchronous (blocking) and asynchronous (non-blocking) operations.

### ii. Usage
  - File Operations: Read, write, append, delete files.

  - Directory Operations: Create, read, delete directories.

  - File Metadata: Get information about files (e.g., size, permissions).  

### iii. Key Methods
  1. Asynchronous Methods(Non-blocking):

   - ```fs.readFile()```: Read a file.
   - ```fs.writeFile()```: Write to a file (overwrites existing content).
   - ```fs.appendFile()```: Append to a file.
   - ```fs.unlink()```: Delete a file.
   - ```fs.mkdir()```: Create a directory.
   - ```fs.rmdir()```: Remove a directory.

  2. Synchronous Methods (Blocking) 

   -  ```fs.readFileSync()```: Synchronously read a file.
   -  ```fs.writeFileSync()```: Synchronously write to a file.
   -  ```fs.appendFileSync()```: Synchronously append to a file.
   -  ```fs.unlinkSync()```: Synchronously delete a file.
   -  ```fs.mkdirSync()```: Synchronously create a directory.
   -  ```fs.rmdirSync()```: Synchronously remove a directory.

  3. File Metadata: 
   - ```fs.stat()```: Get file/directory stats (e.g., size, permissions).

### iv. Examples   
  1. Reading a File

  ```javascript
    const fs = require('fs');

    // Asynchronous
    fs.readFile('file.txt', 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });

    // Synchronous
    const data = fs.readFileSync('file.txt', 'utf8');
    console.log(data);
  ``` 
  2. Writing to a File: 

  ```javascript
    // Asynchronous
    fs.writeFile('file.txt', 'Hello, World!', (err) => {
      if (err) throw err;
      console.log('File written successfully.');
    });

    // Synchronous
    fs.writeFileSync('file.txt', 'Hello, World!');
  ```

  3. Appending to a File:

  ```javascript
    // Asynchronous
    fs.appendFile('file.txt', '\nNew content', (err) => {
      if (err) throw err;
      console.log('Content appended.');
    });

    // Synchronous
    fs.appendFileSync('file.txt', '\nNew content');
  ```

  4. Deleting a File
  ```javascript
    // Create a directory
    fs.mkdir('newDir', (err) => {
      if (err) throw err;
      console.log('Directory created.');
    });

    // Remove a directory
    fs.rmdir('newDir', (err) => {
      if (err) throw err;
      console.log('Directory removed.');
    });
  ```

  5. File Metadata:

  ```javascript
    fs.stat('file.txt', (err, stats) => {
      if (err) throw err;
      console.log(stats.isFile()); // true
      console.log(stats.size); // File size in bytes
    });

  ``` 

### v. Key Points  

- Use asynchronous methods for non-blocking operations.
- Use synchronous methods for simplicity (but avoid in production for heavy tasks).
- Always handle errors in asynchronous operations.
- Use fs.stat() to get file/directory metadata.


---

## 7. HTTP Protocols

  ### a. Introduction

  HTTP (Hypertext Transfer Protocol) is a set of rules for communication 
  between clients (e.g., browsers, apps) and servers. It defines how requests
  and responses are structured, enabling data exchange over the web.

  ### b. Role of HTTP Protocols

   - Sets Rules: Defines how clients and servers interact (e.g., GET, POST, status codes).
   - Enables Communication: Allows APIs to fetch, send, update, or delete data.
   - Standardizes Interaction: Ensures consistency in how data is requested and delivered. 

  ### c. Example 

  ```javascript
    const http = require('http');

    // Create an HTTP server
    const server = http.createServer((req, res) => {
      if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');
      }
    });

      server.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });

  ```

  ### d. Real-Life Example: Restaurant
  - HTTP Protocol: The boss who sets rules for communication.
  - API: The waiter who takes orders (requests) and delivers food (responses).
  - Server: The kitchen that prepares the food (processes requests).
  - Client: The customer who orders food (makes requests).

  ### e. Scenario:
  - Customer (Client): Asks for a menu (GET request).
  - Waiter (API): Follows HTTP rules to fetch the menu from the kitchen (server).
  - Kitchen (Server): Sends the menu (response) back to the customer

  ### f. Summary

  - HTTP Protocols are the rules for web communication.
  - APIs use these rules to interact with data, like a waiter following the boss’s rules in a restaurant.


## 8. Events & Event Emitters

  ### What Are Events?
  - Events are actions or things that happen in your program (e.g., a file finishes loading, a user clicks a button).

  - Node.js uses an event-driven system to handle these actions without blocking other tasks.

  ### Meet EventEmitter 🎉
  Node.js has a built-in class called EventEmitter (from the events module) to manage events. Think of it like a walkie-talkie:

  - Emitters "shout" (emit) events.
  - Listeners "hear" (respond to) those events.

  ### How to Use it: 
  1. Create an EvenEmitter:

  ```javascript
    const EventEmitter = require('events');
    const myEmitter = new EventEmitter();
  ```

  2. Listen for an Event:
  Use .on() to react when an event happens:

  ```javascript
      myEmitter.on('greet', () => {
        console.log('Hello! Someone greeted you!');
      });  
  ```
  3. Trigger the Event:
  Use .emit() to make the event happen:

  ```javascript
    myEmitter.emit('greet'); // Output: "Hello! Someone greeted you!"
  ```

  ### Key Methods Cheat Sheet 🛠️

  | Method                       | What It Does                                    | Example                                    |
  |------------------------------|-------------------------------------------------|--------------------------------------------|
  | `.on(event, callback)`        | Listens for an event forever                    | `myEmitter.on('open', openFile)`           |
  | `.once(event, callback)`      | Listens for an event once                       | `myEmitter.once('firstClick', handleClick)`|
  | `.emit(event)`                | Triggers an event                               | `myEmitter.emit('error')`                  |
  | `.removeListener(event, callback)` | Stops listening to an event               | `myEmitter.removeListener('open', openFile)`|


  ### Example: A Friendly Greeting 🤝

  ```javascript
      const EventEmitter = require('events');
      const emitter = new EventEmitter();

      // Listen for the "sayHello" event
      emitter.on('sayHello', (name) => {
        console.log(`Hello, ${name}! 👋`);
      });

      // Emit the event with a name
      emitter.emit('sayHello', 'Alice'); // Output: "Hello, Alice! 👋"
      emitter.emit('sayHello', 'Bob');   // Output: "Hello, Bob! 👋"
  ```

  ### When to Use Events? 🚀
  - Async tasks: Like reading a file or fetching data from the internet.
  - Repeating actions: User clicks, game updates, or chat messages.
  - Custom workflows: Build your own event-driven systems (e.g., a pizza order tracker 🍕).

  ### Tips for Success ✅

  1. Always handle errors:

  ```javascript
    myEmitter.on('error', (err) => {
      console.log('Oops! Something broke:', err);
    });
  ```
  2. Avoid memory leaks: Remove listeners you no longer need.
  3. Use .once() for one-time actions (like a welcome message)

  ### Why Events Are Awesome ✨
    - Non-blocking: Your app keeps running smoothly while waiting for events.
    - Flexible: You can create custom events for anything!
    - Scalable: Perfect for apps with lots of users or tasks (e.g., chat apps, games).

---

## 9. Global object

  ### What is the Global Object?
  - In Node.js, the global object is like a "container" that holds variables, functions, and modules that are available everywhere in your code (no need to import them!).
  - It’s similar to the window object in browsers but for Node.js.

  ### Common Global Properties/Methods
  Here are key things available on the global object (you can use them directly!):

  1. **__dirname
  - Returns the absolute path of the folder where your current file is located.
  - Example:

  ```javascript
    console.log(__dirname); // Output: /Users/yourname/projects/myapp
  ```

  2. __filename

  - Returns the absolute path of the current file.
  - Example:

  ```javascript
    console.log(__filename); // Output: /Users/yourname/projects/myapp/index.js
  ```

  3. require()
  - Used to import modules/files in Node.js
  - Example:

  ```javascript
    const fs = require('fs'); // Import the 'fs' module
  ```

  4. ```module``` , ```exports```
  - Used to export code from a file (to make it usable in other files).
  - Example:
  ```javascript
    // In math.js
    exports.add = (a, b) => a + b;

    // In app.js
    const math = require('./math.js');
    math.add(2, 3); // 5
  ```

  5. ```process```
  - Gives info about the current Node.js process (like environment variables, command-line arguments, etc.).
  - Example:
  ```javascript
    console.log(process.env.PORT); // Access environment variable
    console.log(process.argv); // Command-line arguments
  ```

  6. ```console```
  - Used for printing messages to the terminal (like console.log, console.error).

  ### Important Notes

  ### ➤ Global Variables
  - If you declare a variable without ```let```, ```const```, or ```var```, it becomes a global variable (attached to the ```global``` object).

  ```javascript
      myVar = 10; // Bad practice! Now global.myVar = 10
  ```
  ※ Avoid this—it can cause bugs!

  ### ➤ Not Everything is Global
  - Some modules (like ```fs```, http) need to be imported with ```require()``` first. They’re not global by default.

  ### ➤ ES Modules (Modern Node.js)
  - If you’re using ```import/export``` syntax (ES modules), some globals like ```require```, ```module```, and ```__dirname``` won’t work directly. You’ll need alternatives like ```import.meta.url```.

  ### How to Access the Global Object
  - we can directly use its properties (like console.log).
  - To see all properties:
  ```javascript
      console.log(global); // Lists everything on the global object
  ```

  ### When to Use the Global Object?
  - Rarely! Overusing globals can lead to messy code. Instead:
    - Use modules (```require/exports```) to share code.
    - Use environment variables (via ```process.env```) for configuration.

  
  ### Example: Adding Something to Global
  ```javascript
    // Add a function to the global object
    global.sayHello = () => {
      console.log("Hello World!");
    };

    // Now use it anywhere in your app
    sayHello(); // Output: "Hello World!"
  ```

  ### Quick Summary Table

  | Global Property   | What It Does                         |
|-------------------|--------------------------------------|
| `__dirname`       | Path of the current folder           |
| `__filename`      | Path of the current file            |
| `require()`       | Imports modules                      |
| `module, exports` | Exports code from a file            |
| `process`         | Info about the Node.js process      |
| `console`         | Prints messages to the terminal     |


  ### Final Tip

  Avoid adding too many things to the ```global``` object. Stick to modules and proper scoping (```let```, ```const```, ```var```) for clean code! 😊
___    