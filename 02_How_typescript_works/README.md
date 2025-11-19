## How TypeScript Works 🚀

TypeScript **does not run directly in browsers**. Instead, it **compiles to JavaScript**, making it compatible with any JavaScript environment (browsers, Node.js, etc.).

### 🔹 TypeScript Workflow
1️⃣ **Write TypeScript Code (`.ts` file)**  
2️⃣ **Compile to JavaScript (`.js` file) using the TypeScript Compiler (`tsc`)**  
3️⃣ **Run the compiled JavaScript in a browser or Node.js**  

---

## 🔹 Step-by-Step Explanation

### **1️⃣ Writing TypeScript Code**
Let's create a simple TypeScript file called `app.ts`:

```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Raiyan"));
```

- Here, we explicitly define the type of `name` as `string`.
- If we pass a number instead of a string, TypeScript will **catch the error before execution**.

---

### **2️⃣ Compiling TypeScript to JavaScript**
To convert `app.ts` into JavaScript, run:

```sh
tsc app.ts
```

This generates a JavaScript file `app.js`:

```js
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Raiyan"));
```

✅ **Notice:** The TypeScript-specific type annotations (`: string`) are removed, leaving us with clean JavaScript.

---

### **3️⃣ Running the JavaScript Code**
Now, run `app.js` in a browser or Node.js:

```sh
node app.js
```
📌 **Result:**  
```sh
Hello, Raiyan!
```

---

## 🔹 How TypeScript Compilation Works
### **Compilation Process:**
1. **Parsing:** TypeScript reads the `.ts` file and checks for syntax errors.
2. **Type Checking:** It verifies that variables and functions follow the defined types.
3. **Transpiling:** Converts TypeScript to JavaScript by removing type annotations.
4. **Generating `.js` Output:** The final JavaScript file is ready to run.

### **Example: TypeScript Type Checking**
If you write:
```typescript
greet(123); // ❌ TypeScript Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```
TypeScript **throws an error at compile-time**, preventing runtime issues.

---

## 🔹 TypeScript Compiler (`tsc`)
### **Common Commands**
| Command | Description |
|---------|-------------|
| `tsc file.ts` | Compiles a single TypeScript file |
| `tsc --watch` | Automatically re-compiles on file changes |
| `tsc --init` | Creates a `tsconfig.json` file for project-wide settings |

---

## 🔹 TypeScript Configuration (`tsconfig.json`)
Instead of compiling files manually, you can use `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "outDir": "dist",
    "strict": true
  },
  "include": ["src"]
}
```
### **Key Settings:**
- `"target": "ES6"` → Transpiles TypeScript to ES6 JavaScript.
- `"outDir": "dist"` → Compiles files into the `dist/` folder.
- `"strict": true` → Enables strict type checking.

Now, just run:
```sh
tsc
```
This compiles all `.ts` files in the project.

---

## 🔹 Conclusion
- **TypeScript is compiled, not executed directly.**
- **It converts `.ts` files into `.js` files** before running them.
- **Errors are caught during compilation**, reducing runtime issues.
- **The TypeScript Compiler (`tsc`) handles this process** efficiently.