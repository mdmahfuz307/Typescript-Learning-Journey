# **🔹 Module Export & Import in TypeScript**  

TypeScript **modules** help in organizing code into separate files and **reusing components** by exporting and importing them.  

---

## **1️⃣ Exporting in TypeScript**  
To make variables, functions, or classes available in other files, you need to `export` them.

### **Named Export**  
Exports multiple items from a file **with specific names**.

#### **Example: `mathUtils.ts` (Exporting Multiple Items)**
```typescript
export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export const PI = 3.1416;
```
  
#### **Example: `app.ts` (Importing Named Exports)**
```typescript
import { add, multiply, PI } from "./mathUtils";

console.log(add(5, 3)); // ✅ Output: 8
console.log(multiply(4, 2)); // ✅ Output: 8
console.log(PI); // ✅ Output: 3.1416
```
✅ **Note:** Use curly braces `{}` to import **specific** named exports.

---

## **2️⃣ Default Export**  
A file can have **only one default export**. No need for curly braces `{}` during import.

#### **Example: `message.ts` (Default Export)**
```typescript
export default function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

#### **Example: `app.ts` (Importing Default Export)**
```typescript
import greet from "./message";

console.log(greet("Raiyan")); // ✅ Output: Hello, Raiyan!
```
✅ **Note:** The import name can be **anything** since it's a default export.

---

## **3️⃣ Exporting & Importing a Class**  

### **Example: `Person.ts` (Exporting a Class)**
```typescript
export class Person {
  constructor(public name: string) {}

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}
```

### **Example: `app.ts` (Importing the Class)**
```typescript
import { Person } from "./Person";

const person1 = new Person("Raiyan");
person1.greet(); // ✅ Output: Hello, my name is Raiyan
```
✅ **Use curly braces `{}` for named exports** when importing the class.

---

## **4️⃣ Importing Everything (`* as alias`)**
If a module has multiple exports, you can import everything using `* as alias`.

#### **Example: `mathUtils.ts`**
```typescript
export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export const PI = 3.1416;
```

#### **Example: `app.ts` (Importing Everything)**
```typescript
import * as MathUtils from "./mathUtils";

console.log(MathUtils.add(5, 3)); // ✅ Output: 8
console.log(MathUtils.multiply(4, 2)); // ✅ Output: 8
console.log(MathUtils.PI); // ✅ Output: 3.1416
```
✅ **Use `* as alias`** to import all exports from a module.

---

## **5️⃣ Re-exporting (Barrel Export)**
You can **re-export** multiple modules from a single file.

### **Example: `index.ts` (Re-exporting)**
```typescript
export * from "./mathUtils";
export * from "./message";
```

### **Example: `app.ts` (Import from Barrel)**
```typescript
import { add, multiply, PI } from "./index";
import greet from "./index";

console.log(add(10, 5)); // ✅ Output: 15
console.log(greet("Raiyan")); // ✅ Output: Hello, Raiyan!
```
✅ **Barrel files** help in organizing large projects by **grouping exports**.

---

## **6️⃣ Dynamic Import (`import()`)**
Dynamic import **loads modules at runtime**.

### **Example: Dynamic Import**
```typescript
async function loadModule() {
  const mathUtils = await import("./mathUtils");
  console.log(mathUtils.add(2, 3)); // ✅ Output: 5
}

loadModule();
```
✅ **Use Cases:** Lazy loading modules, optimizing performance.

---

## **✨ Summary Table: Export & Import in TypeScript**
| Export Type  | Import Syntax |
|-------------|--------------|
| **Named Export** | `import { add } from "./file";` |
| **Default Export** | `import myFunction from "./file";` |
| **Import Everything** | `import * as Alias from "./file";` |
| **Re-export (Barrel)** | `export * from "./file";` |
| **Dynamic Import** | `await import("./file");` |

---

### 🚀 **Key Takeaways**
✅ **Use `export` to share code** across files.  
✅ **Use `import {}` for named exports** and **`import defaultExport` for default exports**.  
✅ **Use `* as alias` to import everything** from a module.  
✅ **Use barrel files (`index.ts`) to manage large projects**.  
✅ **Use `import()` for dynamic loading**.