## Professional Backend Project SetUp

## 1. How to Setup a professional backend project
---
### a. initailized npm package
```bash
npm init -y
```

### OUTPUT
```json
    {
      "name": "backend-professional-project",
      "version": "1.0.0",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "description": ""
    }
```
---
### b. Create file name `.gitignore` & `.env`
- `.gitignore`: Tells Git which files not to track (e.g., sensitive data like .env, node_modules, logs). We can generate `.gitignore` content with [gitignore.io](https://www.toptal.com/developers/gitignore).
- `.env` : Stores sensitive environment variables (like API keys, passwords) locally so we don’t expose them in our code.

---

### c. Create `public/temp/` Directory & `.gitkeep`
- `public/temp/`: A directory for storing temporary files that are publicly accessible (e.g., uploaded files, cache, session data). Files in this directory might be deleted or regenerated as needed.

- `.gitkeep`: A placeholder file used to make sure Git tracks the empty public/temp/ folder. Git does not track empty directories, so `.gitkeep` forces Git to recognize and track the folder's existence in the repository.

```css
📁 public/
├── 📁 temp/
      ├──📄 .gitkeep
```

---

### d. Create `src/` Directory & `app.js`, `constants.js` & `index.js` insde `src` folder

```css
📁 src/
├── 📄 app.js
├── 📄 constants.js
└── 📄 index.js

```
---

### Final Folder STRUCTURE
```pqsql
📁 public/
├── 📁 temp/
│   └── 📄 .gitkeep
📁 src/
├── 📄 app.js
├── 📄 constants.js
└── 📄 index.js
📄 .env
📄 .gitignore
📄 package.json
```

---

### e. Set `"type": "module"` and `nodemon`

- In your `package.json`, add `"type": "module"` to enable ECMAScript modules (ESM) in Node.js. This allows us to use `import` and `export` syntax instead of `require` and `module.exports` for importing and exporting modules. Simply place it at the top level of your `package.json` like this:

```json
{
  "type": "module"
}
```

- To use `nodemon`, install it as a development dependency by running `npm install --save-dev nodemon`. Then, in our `package.json`, add a script to run our app with nodemon(`npm run dev`) for automatic restarts during development. For example:

```json
{
  "scripts": {
    "dev": "nodemon index.js"
  }
}

```
---
### f. Create 6 Directories(folders) inside the`src/` folder.
- `controllers/` – Handles requests and responses (main logic).
- `db/` – Manages database connections.
- `middlewares/` – Adds extra processing (e.g., authentication).
- `models/` – Defines database structure (data format).
- `routes/` – Maps URLs to controller functions.
- `utils/` – Stores reusable helper functions.

```css

📁 src/
├── 📁 controllers/
├── 📁 db/
├── 📁 middlewares/
├── 📁 models/
├── 📁 routes/
├── 📁 utils/
├── 📄 app.js
├── 📄 constants.js
└── 📄 index.js

```
---
### g. Install `prettier/` dev dedev dependency.
```bash
npm i prettier -D
```
- Prettier helps teams by ensuring consistent code formatting, reducing conflicts in pull requests, and making collaboration smoother. It saves time on code reviews and keeps the codebase clean and readable. 🚀

> [!IMPORTANT]
> We have to create and set up some files manually for Prettier:
- `.prettierrc`
> Configures Prettier's formatting rules (e.g., quotes, semicolons) for consistent code style across the project.

```json
    {
      "singleQuote": false,
      "bracketSpacing": true,
      "tabWidth": 2,
      "semi": true,
      "trailingComma": "es5"
    }
```
- `.prettierignore`
> Specifies files or folders for Prettier to ignore (e.g., node_modules, build files, .env), preventing unnecessary formatting on non-source files.

```bash
    .vscode/
    node_modules/
    dist/
    *.env
    .env
    .env.*
```