# HOW TO CONNECT FRONTEND AND BACKEND IN JAVASCRIPT | FULLSTACK PROXY and CORS

### 1. create two folder 

    |--- 📂 frontend
    |--- 📂 backend

### 2. Inside The backend.
 - write command in terminal
 ```javascript
    npm init -y
 ```
 - It initializes a new Node.js project by creating a package.json file with default values.

 - OUTPUT

    ```javascript
        {
            "name": "backend",
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
            },
            "keywords": [],
            "author": "",
            "license": "ISC"
        }

    ```

 - If our file is server.js for server then, change `"main"`
    |--- 📂 backend
      |--- {}packeage.json
      |--- server.js  👈

    ```json
        {
            "name": "backend",
            "version": "1.0.0",
            "description": "",
            "main": "server.js", // 👈 if our filename is server.js instead of index.js
        }    
    ```