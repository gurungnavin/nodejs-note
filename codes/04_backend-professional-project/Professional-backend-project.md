## Professional Backend Project SetUp

1. How to Setup a professional backend project

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
- `.gitignore`: Tells Git which files not to track (e.g., sensitive data like .env, node_modules, logs).
- `.env` : Stores sensitive environment variables (like API keys, passwords) locally so we don’t expose them in our code.

---

### c. Create file name `.gitignore` & `.env`