![backend](https://github.com/user-attachments/assets/8408d47c-a3c4-4c4b-84c0-bc0b510c5dab)

# NODE JS

## Table of Contents
1. [Initializing an npm Package](#1-initializing-an-npm-package)
2. [Installing npm packages through
npm or yarn](#2)
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