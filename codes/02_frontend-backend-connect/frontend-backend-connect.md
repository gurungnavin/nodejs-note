## HOW TO CONNECT FRONTEND AND BACKEND IN JAVASCRIPT | FULLSTACK PROXY and CORS

### 1. create two folder 

    |--- 📂 frontend
    |--- 📂 backend

### 2. Inside The backend 📂.

## BACKEND
---
 - 1. write command in terminal
 ```javascript
    npm init -y
 ```
 #### It initializes a new Node.js project by creating a `package.json` file with default values.

   #### OUTPUT

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
        "start": "node server.js"
    },
    .......
   }
   ```
   We have to understand this [Importing and exports modules](https://github.com/gurungnavin/backend-note/blob/main/notes/Lesson2.md#5-importing-and-exports-modules)

 - 7. Run the Server again with command
    ```bash
        node server.js
    ```
    OR
    ```bash
        npm start
    ```

 ### OUTPUT ✅ 

 ![Screenshot 2025-02-01 at 22 39 29](https://github.com/user-attachments/assets/abf75727-ab34-4447-b674-25e96456f352)
  
 - 8. Create jokes api in `server.js`

 ```javascript
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
    // sending as response when user request through /api/jokes endpoints   
    res.send(jokes);
    });

 ```
---

### 3. Inside The Frontend 📂.


## FRONTEND
---

### 1. Install vite with Tailwind cross

[Vite with Tailwind visit this website](https://tailwindcss.com/docs/installation/using-vite)

#### 1. First install `Vite` with `React`

```bash
  npm create vite@latest . -- --template react
```
If we've already created a folder`(📂 frontend)` and want to install Vite and inside it without creating another subfolder 📂, use `.` as the project name in the command.



#### OUTPUT

![Screenshot 2025-02-02 at 12 54 44](https://github.com/user-attachments/assets/9aa4905e-1fee-4fc1-8b70-f86596449823)


#### 2. Install `Tailwind` inside the `React/Vite`

```bash
npm install tailwindcss @tailwindcss/vite
```

# OR

### Single Command to Install Vite + Tailwind CSS (v4.0) in an Existing Folder
```bash
npm create vite@latest . -- --template react && npm install tailwindcss @tailwindcss/vite
```


#### 3. Add the @tailwindcss/vite plugin to your Vite configuration. 

```javascript
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import tailwindcss from '@tailwindcss/vite' //👈 paste here

    // https://vite.dev/config/
    export default defineConfig({
      plugins: [
        tailwindcss(),  // 👈 paste here
        react()
      ],
    })

```


#### 4. Import Tailwind CSS
Add an @import to our CSS file(src/index.css) that imports Tailwind CSS.

```javascript
  @import "tailwindcss";
```

#### 5. Start your build process

Run this command inside the Terminal
```bash
  npm run dev
```  

#### 6. Open this URL on browser
```bash
http://localhost:5173/
```

#### 7. Start using Tailwind in your HTML
inside `App.jsx` file, in H1 tag write `classNmae= "text-3xl font-bold underline"`

```HTML
<h1 className = "text-3xl text-red-500 font-bold">Vite + React</h1>
```

#### 8. Open browser, Check the Changes
if h1 is changed, it means, we successfully installed Tailwind in our projects.

### OUTPUT
<img width="550" alt="Screenshot 2025-02-02 at 13 19 13" src="https://github.com/user-attachments/assets/3fc2b338-148f-4afe-b2a8-d32352ad3fc9" />


### 2. Install `axios` for Fetch API
Axios is a promise-based HTTP client for Node.js and browsers that makes it easy to send and receive data from APIs.
```bash
  npm i axios
```


### 3. Write codes for get API Data with useEffect and Axios

```javascript
  import axios from 'axios'

  // set useState for jokes
  const [jokes, setJokes] = useState([]);

  // function for fetch data from axios
  const fetchData = async () => {
    try {
      const resonse = await axios.get("/api/jokes");
      if (resonse.data) {
        setJokes(resonse.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect for run function of fetchData.
  useEffect(() => {
    fetchData();
  });

```

### 4. We will face CORS Errors.
CORS (Cross-Origin Resource Sharing) is a browser security feature that controls cross-origin requests by allowing or blocking them based on server-defined rules. 🚀

<img width="854" alt="cors" src="https://github.com/user-attachments/assets/214e8a20-8b19-4478-b736-e98bb62719c0" />

### 5. How to Solve CORS?
- Add proxy on vite.config.jsx

Vite's `proxy` is used during development to avoid CORS issues by forwarding requests to the backend without needing CORS setup. In production, we still need to configure CORS on the backend to allow cross-origin requests from different domains. for example `'/api': 'http://localhost:4000'`, -> `'/api': 'https://www.ourdomain.com',`

```javascript
server : {
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
```

### 5. Write html layout and Run command,
```bash
npm run dev
```

### App.js with map method(mine)

```javascript
    import axios from "axios";
    import { useEffect, useState } from "react";

    const App = () => {
      const [jokes, setJokes] = useState([]);

      const fetchData = async () => {
        try {
          const resonse = await axios.get("/api/jokes");
          if (resonse.data) {
            setJokes(resonse.data);
          }
        } catch (error) {
          console.log(error.message);
        }
      };

      useEffect(() => {
        fetchData();
      });
      return (
        <div className="flex flex-col justify-center items-center w-full h-screen">
          <h2 className="text-3xl font-bold text-white bg-green-700 px-6 py-1">
            Jokes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 border p-6 rounded-xl">
            {jokes.map((joke) => (
              <div
                key={joke.id}
                className="flex flex-col justify-center items-center p-3 max-w-72 bg-gray-100 mt-3 rounded-xl"
              >
                <h3 className="text-xl font-bold text-white bg-yellow-700 px-6 py-1">
                  {joke.title}
                </h3>
                <p className="mt-2">{joke.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };
    export default App;

```

---
## FINISH
---