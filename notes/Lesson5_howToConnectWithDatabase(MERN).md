## 🔥 How to Connect Database in MERN (with Debugging)

### DATABASE(MongoDB Atlas)
---
1. ✅ **Sign in to MongoDB Atlas**  
2. ✅ **Create a new project** (choose a name)  
3. ✅ **Select a free tier** → Choose **AWS & a region**, then create  
4. ✅ **Set up database access**:  
   - ✅ **Create a username & password**  
   - ✅ **Allow IP access** (`0.0.0.0/0` for open access)  
5. ✅ **Finish setup & close**  

### 🔹 Additional Settings  
- ✅ **Modify IP access later** → Go to **Security → Network Access**  
- ✅ **Add new database users** → Go to **Security → Database Access**  

### 🚀 Connect to Database  
6. ✅ **Go to Database → Clusters**  
   - ✅ Click **Connect** to **Cluster0**  
   - ✅ Choose **Drivers**  
   - ✅ Copy the **connection string** and use it in your application  

### Example Connection String (Node.js Driver):
```bash
mongodb+srv://<db_username>:<db_password>@cluster0.oug1p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

  - 📌 Replace <db_username> and <db_password> with your database credentials.
  - 📌 Ensure any option parameters are URL-encoded for a proper connection.

This setup ensures a successful MongoDB Atlas connection in a MERN app! 🚀


### BACKEND FOLDER 📁
---

7. ✅ **Go to Backend Folder** 
### In this folder, we will install the required dependencies
### - `express`, `mongoose`, `dotenv`
 - `express`: Framework to handle HTTP requests and build your server.
 - `mongoose`: Tool to interact with MongoDB easily.
 - `dotenv`: Loads environment variables (like DB credentials) from a .env file.  

```bash
npm i express mongoose dotenv
```
> [!note]
> You can confirm the installation of dependencies in package.json file:

```json
  "dependencies": {
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "mongoose": "^8.10.0"
  }
```

8. ✅ **inside the .env file** 
 - set `PORT` and `MONGODB_URI`:

 - `PORT`: Specifies the port number the server will listen on (e.g., 8000).
 - `MONGODB_URI`: Contains the connection string to your MongoDB database, including credentials and database info.

```javascript
   PORT = 8000
   MONGODB_URI = "mongodb+srv://navingurung67:your-password3@cluster0.oug1p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
```
9. ✅ **📁src/ constants.js**
 - Set the DB_NAME in constants.js:
```javascript
export const DB_NAME = "playtube"
```

10. ✅ **📁db** 

Inside the db folder of index.js
- Import mongoose and DB_NAME from constants.js.
- Write an async function connectDB to connect to the database with try-catch error handling.
- Export connectDB as default.

```javascript
   import mongoose from "mongoose"
   import {DB_NAME} from "../constants.js"


   const connectDB = async () => {
   try {
         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         console.log(`\n Mongodb connected!!! DB Host: ${connectionInstance.connection.host}`);
         
   } catch (error) {
      console.log(error.message)
   }
   }

   export default connectDB;

```

10. ✅ **📁Setup index.js (Entry Point)** 
- import connectDB from 📁db;
- Import dotenv/config to load environment variables.
- Call connectDB() to connect to the database.

```javascript
import connectDB from "./db/index.js";
import 'dotenv/config'

connectDB()
```

---
This setup ensures your MongoDB Atlas connection is correctly established in your MERN app. 🚀