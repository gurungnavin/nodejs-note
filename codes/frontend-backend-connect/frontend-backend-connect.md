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

 - 5. Write `"start": node server.js` inside `"scripts"` of `package.json` for start server 🎉
    ```json
          {
            "name": "backend",
            "version": "1.0.0",
            "description": "",
            "main": "main.js",
            "scripts": {
                "start": "node server.js" 👈 change here
            },
           ......
        }
    ```

 - 6. Inside 📄 server.js write codes.

    #### 1.import express from express
    ```javascript
    import express from 'express';
    ```

    #### 2.save it an app variable
    ```javascript
    const app = express();
    ```

    #### 3.get request
    ```javascript
    app.get('/', (req, res) => {
        res.send('Welcome to the backend server');
    });
    ```
    #### is part of an HTTP request-response cycle using the Express.js framework. It defines a `GET` request handler for the root (/) route of our server.

    #### 4.Create port.
    ```javascript
    const port = process.env.PORT || 4000
    ```

    #### 5.Makes the app listen for incoming requests on the specified port. This allows the server to accept HTTP requests on that port (e.g., ```http://localhost:4000```).
    ````javascript
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
    ```

#### WHOLE CODES WILL BE

```javascript
    import express from 'express';

    const app = express();

    app.get('/', (req, res) => {
        res.send('Welcome to the backend server');
    });
    const port = process.env.PORT || 4000

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    })

```

 - 7. Now run the Server with command
    ```bash
    node server.js
    ```
    OR
    ```bash
    npm start
    ```
 - 8. We may face errors related to type: module configuration.

   ![Screenshot 2025-02-01 at 22 02 21](https://github.com/user-attachments/assets/b081bfec-91df-446c-a149-587ff12a8f20)

   #### we have fixed it by set `"type": "module"` in the `package.json`
   ```json
   {
    .......
    "main": "server.js",
    "type": "module", 👈 add here
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    .......
   }
   ```
   We have to understand this [Importing and exports modules](https://github.com/gurungnavin/backend-note/blob/main/notes/Lesson2.md#5-importing-and-exports-modules)

 ### OUTPUT
   
 ![Screenshot 2025-02-01 at 22 39 29](https://github.com/user-attachments/assets/abf75727-ab34-4447-b674-25e96456f352)
  
