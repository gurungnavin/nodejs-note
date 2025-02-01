# HOW TO CONNECT FRONTEND AND BACKEND IN JAVASCRIPT | FULLSTACK PROXY and CORS

### 1. create two folder 

    |--- 📂 frontend
    |--- 📂 backend

### 2. Inside The backend.
 - 1. write command in terminal
 ```javascript
    npm init -y
 ```
 #### It initializes a new Node.js project by creating a `package.json` file with default values.

 ### OUTPUT

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
 - 2. Create `server.js` file. 
 - 3. If our file is server.js for server in 📂 `backend` then, change `"main"`
    ```bash
    |--- 📄 {}packeage.json
    |--- 📄 server.js  👈 
    ```

    ```json
        {
            "name": "backend",
            "version": "1.0.0",
            "description": "",
            "main": "server.js",  👈 change here
        }    
    ```
 - 3. Install `express`

    ```bash
    npm i express
    ```
 - 4. File Structure will be
   
   ![Screenshot 2025-02-01 at 21 43 17](https://github.com/user-attachments/assets/dd4d0681-77ea-4f9d-8d72-cc9337c936c2)

   
