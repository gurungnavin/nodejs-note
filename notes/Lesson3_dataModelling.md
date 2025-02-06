## DATA MODELLING FOR BACKEND WITH MONGOOSE

# ODM with Mongoose

## Introduction
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It simplifies database interactions by providing schema validation, relationships, and query-building features. This note focuses on key points related to ODM in Mongoose, how it works, and examples.

---

## Key Concepts

### 1. What is ODM in Mongoose?
- ODM (Object Data Modeling) maps JavaScript objects to MongoDB documents.
- It allows defining **schemas** to enforce structure in a NoSQL database.
- Provides an easy-to-use API for database interactions.

### 2. How Mongoose Works
- Mongoose provides a **schema-based solution** to model data.
- Defines relationships between data.
- Provides built-in data validation.
- Converts JavaScript objects into MongoDB documents and vice versa.

### 3. Defining a Schema
- A schema defines the structure of documents within a collection.
  ```javascript
  const mongoose = require('mongoose');
  
  const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    age: Number
  });
  ```

### 4. Creating a Model
- A model is a wrapper around the schema and represents a collection.
  ```javascript
  const User = mongoose.model('User', userSchema);
  ```

### 5. Saving Data to MongoDB
- Creating a new document and saving it to the database.
  ```javascript
  const newUser = new User({ name: 'Alice', email: 'alice@example.com', age: 25 });
  newUser.save();
  ```

### 6. Fetching Data
- Querying the database to retrieve documents.
  ```javascript
  User.find({ age: { $gte: 18 } }).then(users => console.log(users));
  ```

### 7. Updating Data
- Modifying existing documents in the database.
  ```javascript
  User.updateOne({ name: 'Alice' }, { $set: { age: 26 } });
  ```

### 8. Deleting Data
- Removing documents from the collection.
  ```javascript
  User.deleteOne({ name: 'Alice' });
  ```

### 9. Relationships in Mongoose
- **Referencing (Normalization)**: Storing object references instead of embedding data.
  ```javascript
  const postSchema = new mongoose.Schema({
    title: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  });
  ```
  - Use `.populate()` to fetch related documents:
    ```javascript
    Post.find().populate('author');
    ```
- **Embedding (Denormalization)**: Storing related data within a document.
  ```javascript
  const userSchema = new mongoose.Schema({
    name: String,
    posts: [{ title: String, content: String }]
  });
  ```

---

## Summary
- **Mongoose ODM** allows schema-based modeling for MongoDB.
- It provides an easy way to define schemas, create models, and perform database operations.
- Relationships can be implemented via **references** or **embedded documents**.

For detailed documentation, visit [Mongoose Official Docs](https://mongoosejs.com/).
