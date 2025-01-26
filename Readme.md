# Backend ![Backend](https://img.shields.io/badge/Backend-Important-blue)

Before you dive into backend development, you should first consider learning or at least understanding some of these concepts mentioned below:

## Table of Contents
1. [HTTP/HTTPS](#httphttps)
2. [RESTful APIs](#restful-apis)
3. [CRUD](#crud)
4. [CORS](#cors)
5. [JSON](#json)
6. [Package Manager](#package-manager)
7. [MVC Architecture](#mvc-architecture)
8. [GraphQL](#graphql)

---

## HTTP/HTTPS

### Introduction
- **HTTP**: The language apps and servers use to communicate.
- **HTTPS**: The secure version of HTTP that encrypts data.

### Usage
- **HTTP**:
  - Used for sending requests (e.g., fetch data) and receiving responses.
  - Example: Fetching a webpage (`GET`), submitting a form (`POST`).
- **HTTPS**:
  - Used for secure communication (e.g., login, payments).
  - Example: Logging into your bank account.

### Why It’s Important
- **For Developers**:
  - Handle requests (e.g., `GET`, `POST`) and send responses.
  - Use HTTPS to protect sensitive data.
- **For Users**:
  - HTTPS keeps their data safe from hackers.

### The Careful Part: Security
- Without HTTPS, data is like a **postcard**—anyone can read it.
- With HTTPS, data is like a **sealed letter**—only the recipient can open it.
- Always use HTTPS for sensitive data (e.g., passwords, payments).


### Examples
 - Example 1: Fetching Data (HTTP GET)
   Scenario: Checking the weather.

   - Request:
   ```javascript
   GET https://api.weather.com/weather?city=NewYork
   ```
   - Response:
   ```javascript 
   {
    "city": "New York",
    "temperature": "22°C"
   }
   ```
- Example 2: Secure Login (HTTPS POST)
  Scenario: Logging into a bank.

  - Request:

  ```javascript
  POST https://www.mybank.com/login
  Content-Type: application/json

  {
   "username": "john_doe",
   "password": "secure123"
  }
  ```

  - Response:

  ```javascript
  {
  "message": "Login successful"
  }
  ```
  ### Real-Life Example: Ordering Food Online
  When you order food using an app, the app asks the server for the menu (using a GET request). After you choose your food and place an order, the app sends your order details to the server (using a POST request). The server then confirms your order. All this communication happens securely using HTTPS, so your personal and payment details stay safe.

---

## RESTful APIs
 
 - Introduction
   - RESTful API: Follows REST principles, uses HTTP methods (GET, POST, PUT DELETE), and is stateless (each request is independent).

 - Why RESTful APIs Are Important
   1. Simple: Uses standard HTTP methods and URLs.
   2. Scalable: Stateless design handles many users efficiently.
   3. Flexible: Works for small to large systems.
   4. Widely Supported: Most languages and frameworks support it.

 - Best Practices for RESTful APIs
   - Statelessness: Each request must include all needed info.
   - Security: Always use HTTPS.
   - Error Handling: Use proper HTTP status codes (e.g., 200 OK, 404 Not Found).
   - Versioning: Use versions (e.g., /v1/users) to avoid breaking changes.

 ## Example
 - Fetch All Users:
 ```javascript
    GET /users
    Response: [{"id": 1, "name": "John"}, {"id": 2, "name": "Jane"}]
 ```

 - Create a User:
 ```javascript
    POST /users
    Body: {"name": "Alice"}
    Response: {"id": 3, "name": "Alice"}
 ```
 - Update a User
 ```javascript
    PUT /users/1
    Body: {"name": "John Doe"}
    Response: {"id": 1, "name": "John Doe"}
 ```

 - Delete a User:
 ```javascript
   DELETE /users/1
   Response: 204 No Content
 ```

 ### Key Points
   - Use HTTP methods (GET, POST, PUT, DELETE).
   - Be stateless: Each request is independent.
   - Use HTTPS for security.
   - Keep URLs clear and consistent (e.g., /users, /posts).

## API vs REST API: Key Differences

| **Feature**   | **API**                                | **REST API**                          |
|---------------|----------------------------------------|----------------------------------------|
| **Definition**| General interface for communication.   | Follows REST principles.               |
| **Protocol**  | Any protocol (HTTP, WebSockets, etc.). | Only **HTTP/HTTPS**.                   |
| **Design**    | No specific rules.                     | Follows REST rules (stateless, etc.).  |
| **HTTP Methods** | May not use standard methods.       | Uses `GET`, `POST`, `PUT`, `DELETE`.   |
| **Stateless** | May rely on previous requests.         | Each request is independent.           |
| **URLs**      | Inconsistent (e.g., `/getUsers`).      | Consistent (e.g., `/users`, `/users/1`).|
| **Example**   | Weather API using WebSockets.          | Blog API with `GET /posts`.            |

---

## CRUD
 ### CRUD: Create, Read, Update, Delete

### What is CRUD?
- **CRUD** stands for the four basic operations you can perform on data:
  1. **Create**: Add new data.
  2. **Read**: Retrieve or fetch data.
  3. **Update**: Modify existing data.
  4. **Delete**: Remove data.

---

### CRUD in RESTful APIs
| **CRUD Operation** | **HTTP Method** | **Example**                     |
|---------------------|-----------------|---------------------------------|
| **Create**          | `POST`          | Add a new user: `POST /users`   |
| **Read**            | `GET`           | Fetch all users: `GET /users`   |
| **Update**          | `PUT` or `PATCH`| Update a user: `PUT /users/1`   |
| **Delete**          | `DELETE`        | Delete a user: `DELETE /users/1`|

---

### CRUD in Databases
| **CRUD Operation** | **SQL Command** | **Example**                                  |
|---------------------|-----------------|---------------------------------------------|
| **Create**          | `INSERT`        | `INSERT INTO users (name) VALUES ('John');` |
| **Read**            | `SELECT`        | `SELECT * FROM users;`                      |
| **Update**          | `UPDATE`        | `UPDATE users SET name='Jane' WHERE id=1;`  |
| **Delete**          | `DELETE`        | `DELETE FROM users WHERE id=1;`             |

---

### Why is CRUD Important?
1. **Foundation of Applications**: Almost every app involves CRUD operations.
2. **Standardized Operations**: Provides a clear and consistent way to interact with data.
3. **Efficiency**: Optimized for performance in databases and APIs.

---

### Key Points to Remember
- CRUD stands for **Create, Read, Update, Delete**.
- In RESTful APIs:
  - `POST` → Create
  - `GET` → Read
  - `PUT`/`PATCH` → Update
  - `DELETE` → Delete
- In databases:
  - `INSERT` → Create
  - `SELECT` → Read
  - `UPDATE` → Update
  - `DELETE` → Delete
---

## CORS
  ### CORS: Cross-Origin Resource Sharing

  ### What is CORS?
  - **CORS** is a browser security feature that prevents websites from making requests to a different domain than the one that served the web page.
  - It ensures only **trusted domains** can access resources from your server.

  ---

  ### Why is CORS Needed?
  - Browsers enforce the **same-origin policy**, blocking requests to different domains unless the server allows it using CORS.
  - **Example**: If your frontend (`https://myapp.com`) tries to fetch data from a backend API (`https://api.example.com`), the browser will block the request unless the backend allows it.

  ---

  ### How Does CORS Work?
   1. **Preflight Request**:
     - For certain requests (e.g., `POST`, `PUT`), the browser sends an `OPTIONS` request to check if the server allows the actual request.
   2. **CORS Headers**:
     - The server responds with headers like:
      - `Access-Control-Allow-Origin`: Specifies allowed origins (e.g., `https://myapp.com` or `*` for all).
      - `Access-Control-Allow-Methods`: Specifies allowed HTTP methods (e.g., `GET`, `POST`).
      - `Access-Control-Allow-Headers`: Specifies allowed headers (e.g., `Content-Type`).

   ---

   ### Common CORS Errors
    1. **No `Access-Control-Allow-Origin` Header**:
     - **Fix**: Add `Access-Control-Allow-Origin` to the server’s response.
    2. **Preflight Request Fails**:
     - **Fix**: Ensure the server responds correctly to `OPTIONS` requests.
    3. **Credentials Not Allowed**:
     - **Fix**: Set `Access-Control-Allow-Credentials: true` if the request includes credentials (e.g., cookies).

---

 ### How to Enable CORS
  - NODE JS
```javascript
   const express = require('express');
   const cors = require('cors');
   const app = express();

   // Enable CORS for all routes
   app.use(cors());
   app.listen(3000, () => console.log('Server running on port 3000'));

```
  - PYTHON
```python
   from flask import Flask
   from flask_cors import CORS

   app = Flask(__name__)
   CORS(app)  # Enable CORS for all routes
```
 
  ### Key Points
   - CORS prevents cross-origin requests by default.
   - Use CORS headers to allow trusted domains.
   - Libraries like cors (Node.js) or flask-cors (Python) simplify CORS setup.


  ### Real-Life Example: The Tale of Two Countries

  Once, **Frontend Land** (`https://myapp.com`) wanted to visit **Backend Kingdom** (`https://api.example.com`) to get resources. But the **Border Guard** (the browser) stopped them, saying:  
  > "You can’t enter without permission!"

  The King of Backend Kingdom issued a **travel permit** (CORS headers) that said:  
  > "Frontend Land is allowed to visit."

  With the permit, Frontend Land entered Backend Kingdom, got the resources, and everyone was happy.

---

  ### The Lesson  
  - **CORS** is like a **travel permit** that allows one country (frontend) to visit another (backend).  
  - Without it, the Border Guard (browser) blocks the visit for safety.  
---

## JSON
  # JSON: JavaScript Object Notation

  ## What is JSON?
  - **JSON** is a lightweight data format used to store and exchange data between a server and a client (or between different parts of an application).
  - It’s easy for humans to read and write, and easy for machines to parse and generate.
- JSON is **language-independent**, meaning it can be used with almost any programming language.

---

  ## Why is JSON Important?
   1. **Simple and Lightweight**:
    - JSON uses a simple structure of key-value pairs, making it easy to understand and use.
   2. **Widely Supported**:
    - Almost all programming languages have built-in support for JSON.
   3. **Common Use Cases**:
    - APIs (e.g., RESTful APIs use JSON to send and receive data).
    - Configuration files (e.g., `package.json` in Node.js).
    - Data storage (e.g., NoSQL databases like MongoDB use JSON-like documents).

---

  ## JSON Syntax
   - JSON data is written as **key-value pairs**.
   - Keys and strings must be enclosed in **double quotes** (`"`).
   - Values can be:
    - Strings (`"name": "John"`)
    - Numbers (`"age": 30`)
    - Booleans (`"isStudent": true`)
    - Arrays (`"hobbies": ["reading", "coding"]`)
    - Objects (`"address": {"city": "New York", "zip": "10001"}`)
    - `null` (`"middleName": null`)

  ### Example:
  ```json
   {
   "name": "John Doe",
   "age": 30,
   "isStudent": false,
   "hobbies": ["reading", "coding"],
   "address": {
     "city": "New York",
     "zip": "10001"
   },
    "middleName": null
   }
  ```
  ## How is JSON Used?
  1. Apis:
   - JSON is the most common format for sending and receiving data in APIs.
   - Example: A weather API might return:

  ```json
  {
  "city": "New York",
  "temperature": 22,
  "unit": "Celsius"
  }
  ```
  2. Configuration Files:
   - Many tools and frameworks use JSON for Configuration.
   - Example: package.json in Node.js
   ```json
   {
   "name": "my-app",
   "version": "1.0.0",
   "scripts": {
     "start": "node app.js"
    }
   }
   ``` 
  3. Data Storage:
   - NoSQL databases like MongoDB store data in JSON-like documents.
   - Example:

   ```json
   {
    "_id": "12345",
    "name": "John Doe",
    "email": "john@example.com"
   }
   ```

  [-] JSON vs XML
 
  1. JSON
  - Lightweight and easy to read.
  - Uses less data (no closing tags).
    
  - Example:
  ```json
      {
        "name": "John",
        "age": 30
      }
  ```
  2. XML

  - More verbose and harder to read.
  - Uses more data (requires closing tags).

  - Example:

  ```xml
      <person>
        <name>John</name>
        <age>30</age>
      </person>
  ```
  ## Key Points to Remember
  - JSON is a **key-value pair** format.
  - Keys and strings must be in **double quotes**.
  - Values can be:
    - **Strings** (e.g., `"name": "John"`)
    - **Numbers** (e.g., `"age": 30`)
    - **Booleans** (e.g., `"isStudent": true`)
    - **Arrays** (e.g., `"hobbies": ["reading", "coding"]`)
    - **Objects** (e.g., `"address": {"city": "New York"}`)
    - **`null`** (e.g., `"middleName": null`)

  - JSON is **language-independent** and widely used in:
    - **APIs**
    - **Configuration files**
    - **Data storage** (e.g., NoSQL databases like MongoDB)    

---

## Package Manager

  ## What is a Package Manager?
  A package manager is a tool that helps you install, update, configure, and manage software packages (libraries, frameworks, tools, etc.) in your projects.
  It automates the process of handling dependencies, ensuring that your project has all the necessary components to run.

  ---

  ## Why Are Package Managers Important?

  ### Dependency Management:
  - Automatically installs and manages the libraries your project depends on.

  ### Version Control:
  - Ensures you’re using the correct versions of packages.

  ### Efficiency:
  - Saves time by automating repetitive tasks like installing and updating packages.

  ### Consistency:
  - Ensures all developers working on a project use the same versions of dependencies.

    ---

  ## Types of Package Managers

  ### Language-Specific Package Managers:
  - Manage libraries and tools for a specific programming language.

    #### Examples:
    - **npm, yarn** (Node.js)
    - **pip** (Python)
    - **Maven** (Java)
    - **Composer** (PHP)
    - **Cargo** (Rust)

  ### System-Level Package Managers:
  - Manage software installations for the entire operating system.

    #### Examples:
    - **apt** (Ubuntu/Debian)
    - **yum** (CentOS/RHEL)
    - **brew** (macOS)
    - **choco** (Windows)

    ---

  ## How Do Package Managers Work?

  ### Package Registry:
  - A central repository where packages are stored (e.g., npm registry, PyPI for Python).

  ### Configuration File:
  - A file (e.g., `package.json`, `requirements.txt`) that lists all the dependencies for your project.

  ### Commands:
  - Commands to install, update, or remove packages (e.g., `npm install`, `pip install`).

  ---

  ## Popular Package Managers

  ### npm (Node.js):
  - **Configuration File:** `package.json`
  - **Commands:**
    - Install a package: `npm install <package-name>`
    - Install all dependencies: `npm install`
    - Update a package: `npm update <package-name>`
    - Remove a package: `npm uninstall <package-name>`

  ### pip (Python):
  - **Configuration File:** `requirements.txt`
  - **Commands:**
    - Install a package: `pip install <package-name>`
    - Install all dependencies: `pip install -r requirements.txt`
    - Update a package: `pip install --upgrade <package-name>`
    - Remove a package: `pip uninstall <package-name>`

  ### apt (Ubuntu/Debian):
  - **Commands:**
    - Install a package: `sudo apt install <package-name>`
    - Update package list: `sudo apt update`
    - Upgrade installed packages: `sudo apt upgrade`
    - Remove a package: `sudo apt remove <package-name>`

  ---

  ### Key Points to Remember
  - Package managers automate dependency management.
  - They use a configuration file to track dependencies.
  - Each programming language or operating system has its own package manager.
  - Popular examples include **npm**, **pip**, and **apt**.

  ---

  ### Real-life Example
  A package manager is like a shopping center full of pre-built features (design, logic, etc.) for software. 
  If you need something, you just grab the right package instead of building it from scratch. It saves time 
  and lets you customize by yourself and add to your project easily.


---

## MVC Architecture
*(Add content here)*

---

## GraphQL
*(Add content here)*

---