# **🔹 TypeScript Configuration (`tsconfig.json`) & File Structure**  

When working on a **TypeScript project**, you need to configure it properly. The most important part of this setup is the **`tsconfig.json`** file, which defines how TypeScript compiles your code.

---

## **1️⃣ File Structure of a TypeScript Project**  

Here's a **common file structure** for a TypeScript project:

```
📂 MyTypeScriptProject
 ├── 📂 src               # Source files (TypeScript)
 │    ├── app.ts          # Main TypeScript file
 │    ├── utils.ts        # Utility functions
 │    ├── models.ts       # Interfaces & Types
 │    ├── components.ts   # Components or Classes
 │    ├── index.ts        # Entry file
 ├── 📂 dist              # Compiled JavaScript files
 │    ├── app.js
 │    ├── utils.js
 │    ├── models.js
 │    ├── index.js
 ├── 📂 node_modules      # Installed dependencies (if using npm)
 ├── package.json        # Project configuration & dependencies
 ├── tsconfig.json       # TypeScript configuration file
 ├── .gitignore          # Ignored files for Git
 ├── README.md           # Project documentation
```

---

## **2️⃣ Understanding `tsconfig.json`**
The **`tsconfig.json`** file is essential in any TypeScript project. It contains settings for how TypeScript should compile the `.ts` files.

### **Example: A Basic `tsconfig.json`**
```json
{
  "compilerOptions": {
    "target": "ES6",                
    "module": "CommonJS",            
    "outDir": "./dist",              
    "rootDir": "./src",              
    "strict": true,                  
    "esModuleInterop": true,         
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true             
  },
  "include": ["src"],                
  "exclude": ["node_modules"]        
}
```

---

## **3️⃣ Important `tsconfig.json` Settings**
| **Option**              | **Description** |
|------------------------|----------------|
| `"target": "ES6"`      | Compiles to ES6 JavaScript. You can change this to `ES5`, `ESNext`, etc. |
| `"module": "CommonJS"` | Defines module system. Use `ESNext` for modern projects. |
| `"outDir": "./dist"`   | Specifies output folder for compiled JavaScript files. |
| `"rootDir": "./src"`   | Specifies source folder where TypeScript files are located. |
| `"strict": true`       | Enables strict type checking. Recommended for best practices. |
| `"esModuleInterop": true` | Allows interoperability between CommonJS and ES modules. |
| `"skipLibCheck": true` | Skips checking TypeScript library files for faster builds. |
| `"include": ["src"]`   | Specifies which folders/files TypeScript should compile. |
| `"exclude": ["node_modules"]` | Excludes unnecessary folders from compilation. |

---

## **4️⃣ Running a TypeScript Project**
### **Step 1: Install TypeScript (If Not Installed)**
Run this command in your terminal:
```sh
npm install -g typescript
```

### **Step 2: Initialize TypeScript Configuration**
```sh
tsc --init
```
This generates a default `tsconfig.json` file.

### **Step 3: Compile TypeScript Files**
```sh
tsc
```
This compiles all TypeScript (`.ts`) files inside the **`src/`** directory and places the output JavaScript files in the **`dist/`** directory.

### **Step 4: Run the Compiled JavaScript**
```sh
node dist/index.js
```

---

## **5️⃣ TypeScript with Node.js and `ts-node` (Optional)**
Instead of compiling manually, you can use `ts-node` to run TypeScript files directly.

### **Install `ts-node`**
```sh
npm install -g ts-node
```

### **Run TypeScript File Without Compiling**
```sh
ts-node src/index.ts
```
✅ This makes development faster without generating JavaScript files.

---

## **✨ Summary**
✅ **`tsconfig.json`** helps configure TypeScript compilation.  
✅ **Organizing files** into `src/` (source) and `dist/` (compiled) keeps the project clean.  
✅ **Using `tsc`** compiles TypeScript into JavaScript.  
✅ **Using `ts-node`** allows running TypeScript files without compiling.  