import { app } from "./app.js";
import connectDB from "./db/index.js";
import 'dotenv/config'

const port = process.env.PORT || 8000
connectDB()
.then(()=> {
  app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
  })
})
.catch((err) => {
  console.log("Database connection is Failed", err);
})