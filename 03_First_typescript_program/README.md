### ✅ First TypeScript Program 🚀  

Let's start with a simple **"Hello, TypeScript"** program and understand the process step by step.  

---

## **1️⃣ Install TypeScript**
First, make sure TypeScript is installed. If you haven't installed it yet, run:  
```sh
npm install -g typescript
```
Check the installation by running:
```sh
tsc --version
```

---

## **2️⃣ Create a TypeScript File**
Create a new file named **`app.ts`** and add the following code:

```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Raiyan"));
```

### 🔹 Explanation:
- We defined a function `greet` that takes a **string parameter**.
- It returns a **string message**.
- `console.log` prints the output.

---

## **3️⃣ Compile TypeScript to JavaScript**
Run the following command to compile `app.ts` to JavaScript:

```sh
tsc app.ts
```
This generates a JavaScript file named **`app.js`**:

```js
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Raiyan"));
```
✅ **TypeScript removes type annotations (`: string`) and converts it to JavaScript.**  

---

## **4️⃣ Run the Compiled JavaScript**
Now, run the JavaScript file using Node.js:

```sh
node app.js
```
📌 **Output:**
```sh
Hello, Raiyan!
```