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
*(Add content here)*

---

## Package Manager
*(Add content here)*

---

## MVC Architecture
*(Add content here)*

---

## GraphQL
*(Add content here)*

---