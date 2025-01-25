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
*(Add content here)*

---

## CORS
*(Add content here)*

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