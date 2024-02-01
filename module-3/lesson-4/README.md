Sure! Here's the updated guide with the inclusion of `ts-node` installation in step 8:

### Step 1: Initialize Node.js Project
Create a new project directory and initialize a Node.js application:
```bash
mkdir my-node-app
cd my-node-app
npm init -y
```

### Step 2: Add TypeScript Support
Install TypeScript and initialize a TypeScript configuration file:
```bash
npm install typescript --save-dev
npx tsc --init
```

### Step 3: Install ESLint and Prettier
Install ESLint, Prettier, and their necessary plugins:
```bash
npm install eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev
```
Create `.eslintrc.js` and `.prettierrc` with appropriate configurations.

### Step 4: Install Express
Install Express and its TypeScript types:
```bash
npm install express
npm install @types/express --save-dev
```

### Step 5: Create Your Express Server
Create a `src` directory and an `index.ts` file with a basic Express server setup.

### Step 6: Set Up Testing with Jest and Supertest
Install Jest, TypeScript support for Jest, and `supertest`:
```bash
npm install jest @types/jest ts-jest supertest --save-dev
```
Initialize Jest configuration:
```bash
npx ts-jest config:init
```
Create `index.test.ts` in your `src` directory for testing your Express route.

### Step 7: Update package.json Scripts and Install ts-node
1. Install `ts-node`:
   ```bash
   npm install ts-node --save-dev
   ```

2. Add scripts to your `package.json` for building, testing, and running in development mode:
   ```json
   "scripts": {
     "start": "node dist/index.js",
     "build": "tsc",
     "test": "jest",
     "dev": "nodemon --watch src/**/*.ts --exec ts-node src/index.ts"
   }
   ```

### Step 8: Run Your Application
- Run your application in development mode:
  ```bash
  npm run dev
  ```
- Compile TypeScript and start your server:
  ```bash
  npm run build
  npm start
  ```
- Run your tests:
  ```bash
  npm test
  ```

### Additional Notes
- Customize ESLint and Prettier configurations as per your coding standards.