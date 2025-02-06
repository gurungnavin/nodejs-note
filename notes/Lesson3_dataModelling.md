## ODM(Object Data Modeling) with Mongoose

### Introduction
Mongoose is a library that helps you work with MongoDB and Node.js. It makes it easier to convert JavaScript objects into MongoDB documents and interact with the database.
---

### Key Concepts

#### 1. What is ODM in Mongoose?

- ODM (Object Data Modeling) helps turn JavaScript objects into MongoDB documents.
- It lets you define schemas to set rules for how data should look.
- Mongoose makes it easy to work with your database.

#### 2. How Mongoose Works

- Mongoose uses schemas to define how data should be structured.
- It helps create connections between different pieces of data.
- Mongoose checks your data to make sure it follows the rules (validation).
- It turns JavaScript objects into MongoDB documents and vice versa.

#### 3. Defining a Schema

- A schema is a way to define how the data should look in MongoDB.

  ```javascript
  import mongoose from "mongoose";

  const userSchema = new mongoose.Schema({
    name: String,
    // You can also add rules like: {type: String, required: true, lowercase: true}
    email: { type: String, required: true, unique: true },
    age: Number,
  });
  ```

#### 4. Creating a Model

- A model is created from the schema and represents a collection in the database.

  ```javascript
    const User = mongoose.model("User", userSchema);

  // OR
  // If the User model already exists, it reuses it. If not, it creates a new one using the userSchema.
  // const User = mongoose.Model.User || mongoose.model('User', userSchema);
  ```

### SIMPLE STRUCTURE OF CODE,

  ```javascript
  // 1. Import mongoose
  import mongoose from "mongoose";

  // 2. Create a schema (this defines the structure of the data)
  const userSchema = new mongoose.Schema({});

  // 3. Create a model using the schema, which represents a collection (in this case, "User")
  export const User = mongoose.model("User", userSchema);

  ```

#### 5. Saving Data to MongoDB

- Create a new record and save it to the database.
  ```javascript
    const newUser = new User({
    name: "Alice",
    email: "alice@example.com",
    age: 25,
   });
  newUser.save(); // Saves the new user to the database
  ```

#### 6. Fetching Data

- Get data from the database by asking for specific documents.
  ```javascript
  User.find({ age: { $gte: 18 } }).then((users) => console.log(users));
  // This fetches all users who are 18 or older
  ```

#### 7. Updating Data

- Modifying existing documents in the database.
  ```javascript
  User.updateOne({ name: "Alice" }, { $set: { age: 26 } });
  ```

#### 8. Deleting Data

- Removing documents from the collection.
  ```javascript
  User.deleteOne({ name: "Alice" });
  ```

#### 9. Relationships in Mongoose

- **Referencing (Normalization)**: Storing object references instead of embedding data.
  ```javascript
  const postSchema = new mongoose.Schema({
    title: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  });
  ```
  - Use `.populate()` to fetch related documents:
    ```javascript
    Post.find().populate("author");
    ```
- **Embedding (Denormalization)**: Storing related data within a document.
  ```javascript
  const userSchema = new mongoose.Schema({
    name: String,
    posts: [{ title: String, content: String }],
  });
  ```

---

### Summary

- **Mongoose ODM** allows schema-based modeling for MongoDB.
- It provides an easy way to define schemas, create models, and perform database operations.
- Relationships can be implemented via **references** or **embedded documents**.

For detailed documentation, visit [Mongoose Official Docs](https://mongoosejs.com/).

## SOME EXAMPLE OF MODEL
1. TODOS LIST

   ![TODOS_DATA_MODELLING](https://github.com/user-attachments/assets/58e77e8d-b4da-46f2-a69b-eb1e5e37fc24)


  ### User model

    ```javascript
      import mongoose from 'mongoose';

      const userSchema = new mongoose.Schema(
        {
          usernme: {
            type: String,
            required: true,
            unique: true,
          },
          email: {
            type: String,
            required: true,
            unique: true,
          },
          password: {
            type: String,
            required: [true, 'パスワードが必要'],
          },
        },
        { timestamps: true }
      );

      export const User = mongoose.model('User', userSchema);
    ```

  ### Sub_Todo model  

    ```javascript
      import mongoose from 'mongoose';

      const sub_todoSchema = new mongoose.Schema(
        {
          content: {
            type: String,
            required: true,
          },
          complete: {
            type: Boolean,
            default: false,
          },
          createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
          },
        },
        { timeStamps: true }
      );

      export const SubTodo = mongoose.model('SubTodo', sub_todoSchema);
    ```

  ### 1.Todo model

    ```javascript
      import mongoose from 'mongoose';

      const todoSchema = new mongoose.Schema(
        {
          content: {
            type: String,
            required: true,
          },
          complete: {
            type: String,
            default: false,
          },
          createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
          },
          subTodo: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'SubTodo',
            },
          ],
        },
        { timeStamps: true }
      );

      export const Todo = mongoose.model('Todo', todoSchema);
    ````
    
2. E-COMMERCE

   ![EC_DATA_MODELLING](https://github.com/user-attachments/assets/2d1abdb9-e0e4-4d21-a6b0-aed2ffd94565)

### Order Model(with orderItemsSchema)

  ```javascript
    import mongoose from 'mongoose';

    const orderItemsSchema = new mongoose.Schema({
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    });

    const orderSchema = new mongoose.Schema(
      {
        orderPrice: {
          type: String,
          required: true,
        },
        customer: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        orderItems: [orderItemsSchema],
        address: {
          type: String,
          required: true,
        },
        status: {
          type: String,
          enum: ['PENDING', 'DELIVERED', 'COMPLETE'],
          default: 'PENDING',
        },
      },

      { timestamps: true }
    );

    export const Order = mongoose.model('Order', orderSchema);

  ```

### Category Model

  ```javascript
    import mongoose from 'mongoose';

    const categorySchema = new mongoose.Schema(
      {
        name: {
          type: String,
          required: true,
        },
      },
      { timestamps: true }
    );

    export const Category = mongoose.model('Category', categorySchema);
  ```

### Product Model

  ```javascript
    import mongoose from 'mongoose';

    const productSchema = new mongoose.Schema(
      {
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        productImage: {
          type: Array,
          required: true,
        },
        price: {
          type: Number,
          default: '0円',
        },
        stock: {
          type: Number,
          default: 0,
        },
        category: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Category',
          required: true,
        },
        owner: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
      },
      { timestamps: true }
    );

    export const Product = mongoose.model('Product', productSchema);

  ```
### User Model

  ```javascript
    import mongoose from 'mongoose';

    const userSchema = new mongoose.Schema(
      {
        username: {
          type: String,
          required: true,
          unique: true,
          lowercase: true,
        },
        email: {
          type: String,
          required: true,
          lowercase: true,
        },
        password: {
          type: String,
          required: true,
        },
      },
      { timestamps: true }
    );

    export const User = mongoose.model('User', userSchema);
  ```