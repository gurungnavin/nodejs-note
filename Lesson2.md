![backend](https://github.com/user-attachments/assets/8408d47c-a3c4-4c4b-84c0-bc0b510c5dab)

# NODE JS

## Table of Contents
1. [Initializing an npm Package](#1-initializing-an-npm-package)
2. [Installing npm packages through
npm or yarn](#2installing-npm-packages-through-npm-or-yarn)
3. [CRUD](#crud)
4. [CORS](#cors)
5. [JSON](#json)
6. [Package Manager](#package-manager)
7. [MVC Architecture](#mvc-architecture)
8. [GraphQL](#graphql)

## 1. Initializing an npm Package

### What is npm?
- **npm** = Node Package Manager.
- Used to manage dependencies and scripts for Node.js projects.

### Steps to Initialize
1. Open terminal in your project folder.
2. Run:
   ```bash
   npm init
   ```
- Answer prompts to create ```package.json```.

3. For default setup, use:
  ```bash
  npm init -y
  ```
### Uninstalling an npm Package
1. Run on terminal
  ```bash 
   npm uninstall <package-name>
  ```
2. OR Uninstall a Dev Dependency
  ```bash
  npm uninstall <package-name> --save-dev
  ```

### What is package.json?
- Configuration file for your project.
- Tracks dependencies, scripts, and project metadata.

## That’s it! Now you know how to initialize and uninstall npm packages like a pro! 🚀

--- 

## 2.Installing npm packages through ```npm or yarn```

| Feature                  | npm                          | Yarn                        |
|--------------------------|------------------------------|-----------------------------|
| **Install Command**       | `npm install`                | `yarn add`                  |
| **Dev Dependency Flag**   | `--save-dev`                 | `--dev`                     |
| **Global Install**        | `npm install -g`             | `yarn global add`           |
| **Lock File**             | `package-lock.json`          | `yarn.lock`                 |
| **Speed**                 | Slower (older versions)      | Faster (parallel downloads) |
| **Offline Mode**          | Limited support              | Full offline support        |


## 3. Understanding the package.json file

### What is ```package.json```?
- It is the configuration file for your Node.js project.
- It stores metadata about the project (name, version, description, etc.) and manages dependencies, scripts, and other configurations.

### Key Fields in ```package.json```
1. name: The name of your project.
2. version: The current version of your project.
3. description: A short description of your project.
4. main: The entry point of your application (usually index.js).
5. scripts: Custom commands to run tasks (e.g., start, test).

  ```json
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  }
  ```

### ```dependencies```: Lists packages required for production.
  ```json
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.0.3",
    "lodash": "^4.17.21",
    "axios": "^1.5.0",
    "dotenv": "^16.3.1"
  }
  ```

### ```devDependencies```: Lists packages required for development (e.g., testing tools).

  ```json
  "devDependencies": {
    "jest": "^29.5.0",
    "eslint": "^8.56.0",
    "nodemon": "^3.0.2",
    "typescript": "^5.3.3",
    "webpack": "^5.89.0"
  }
  ```