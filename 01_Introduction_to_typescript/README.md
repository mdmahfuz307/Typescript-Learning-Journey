## Introduction to TypeScript  

TypeScript is a **strongly typed, object-oriented, compiled superset of JavaScript** developed by Microsoft. It adds **static typing, interfaces, and advanced features** to JavaScript, making it a powerful tool for large-scale application development. TypeScript code is **compiled into JavaScript**, ensuring compatibility with any browser or JavaScript runtime.

### 🔹 Why Use TypeScript?
1. **Static Typing** – Helps catch errors at compile time instead of runtime.  
2. **Improved Readability & Maintainability** – Code is easier to understand and scale.  
3. **Modern JavaScript Features** – Supports ES6+ features like classes, modules, and async/await.  
4. **Better Tooling** – Offers IntelliSense (auto-completion, type checking) in IDEs like VS Code.  
5. **Interfaces & Generics** – Enhances code reusability and structure.  

---

## 🔹 TypeScript vs JavaScript
| Feature        | JavaScript | TypeScript |
|---------------|-----------|------------|
| **Type System** | Dynamic (runtime errors) | Static (compile-time checking) |
| **Interfaces** | ❌ Not supported | ✅ Supported |
| **Generics** | ❌ No built-in support | ✅ Available |
| **Modules & Classes** | ✅ ES6+ | ✅ More powerful |
| **Error Checking** | Only at runtime | Compile-time detection |

---

## 🔹 Installing TypeScript
To install TypeScript globally, use:  
```sh
npm install -g typescript
```
Check the installed version:  
```sh
tsc --version
```

---

## 🔹 Your First TypeScript Program
Create a file `app.ts`:
```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Raiyan"));
```
Compile the TypeScript file:
```sh
tsc app.ts
```
This generates `app.js`, which can run in any JavaScript environment:
```js
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Raiyan"));
```

---

## 🔹 Core Features of TypeScript
### 1️⃣ **Basic Types**
```typescript
let isDone: boolean = false;
let age: number = 25;
let userName: string = "Raiyan";
let hobbies: string[] = ["Coding", "Reading"];
let anyValue: any = "Can be anything";
```

### 2️⃣ **Functions with Types**
```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

### 3️⃣ **Interfaces**
```typescript
interface Person {
    name: string;
    age: number;
}

const user: Person = { name: "Raiyan", age: 22 };
```

### 4️⃣ **Classes & Inheritance**
```typescript
class Animal {
    constructor(public name: string) {}

    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    bark(): void {
        console.log(`${this.name} barks.`);
    }
}

const myDog = new Dog("Buddy");
myDog.bark();
```

### 5️⃣ **Generics**
```typescript
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<string>("Hello, TypeScript!"));
```

---

## 🔹 Conclusion
TypeScript is a **powerful extension** of JavaScript that brings **type safety, better tooling, and advanced features**. It is widely used in **frontend (React, Angular) and backend (Node.js) development**.