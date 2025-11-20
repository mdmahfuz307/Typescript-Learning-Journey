## **📌 TypeScript Learning Journey 🚀**  

Welcome to my **TypeScript Learning Journey** repository! This repository documents my progress in learning **TypeScript**, covering key concepts, hands-on examples, and best practices.  

---

## **📖 Table of Contents**  

1️⃣ [Introduction to TypeScript](#-introduction-to-typescript)  
2️⃣ [How TypeScript Works](#-how-typescript-works)  
3️⃣ [First TypeScript Program](#-first-typescript-program)  
4️⃣ [TypeScript Data Types](#-typescript-data-types)  
5️⃣ [Advanced TypeScript Concepts](#-advanced-typescript-concepts)  
6️⃣ [Object-Oriented Programming in TypeScript](#-object-oriented-programming-in-typescript)  
7️⃣ [Modules, Configurations, and File Structure](#-modules-configurations-and-file-structure)  
8️⃣ [DOM Manipulation with TypeScript](#-dom-manipulation-with-typescript)  
9️⃣ [Function Signatures & Interfaces](#-function-signatures--interfaces)  
🔟 [Generics in TypeScript](#-generics-in-typescript)  

---

## **📌 Introduction to TypeScript**  

**TypeScript** is a strongly typed superset of **JavaScript** that compiles down to JavaScript. It adds **static typing, interfaces, generics, and object-oriented programming (OOP)** features.  

🔹 **Key Benefits:**  
✅ Type Safety  
✅ Better Code Readability  
✅ Enhanced Development Experience  

---

## **📌 How TypeScript Works**  

1️⃣ TypeScript **compiles** (`tsc file.ts`) to JavaScript.  
2️⃣ The TypeScript compiler **checks for type errors** before running the code.  
3️⃣ You can write modern ES6+ syntax, and TypeScript converts it to ES5-compatible JavaScript.  

---

## **📌 First TypeScript Program**  

Create a file **`index.ts`** and write:  

```ts
let message: string = "Hello, TypeScript!";
console.log(message);
```

Compile and run:  
```sh
tsc index.ts  # Converts to index.js
node index.js # Runs the JavaScript output
```

---

## **📌 TypeScript Data Types**  

### 🔹 **Built-in Data Types**  
- `string`, `number`, `boolean`, `null`, `undefined`, `void`, `symbol`, `bigint`.  

### 🔹 **Union Data Type**  
```ts
let userId: string | number;
userId = "123";  // ✅ Valid
userId = 123;    // ✅ Valid
```

### 🔹 **Array Data Type**  
```ts
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
```

### 🔹 **Tuple Data Type**  
```ts
let person: [string, number] = ["Alice", 30];
```

### 🔹 **Enum Data Type**  
```ts
enum Role { Admin, User, Guest }
let myRole: Role = Role.Admin;
```

### 🔹 **Any Type** (Avoid using too often)  
```ts
let anything: any = "Hello";
anything = 10;  // ✅ No error
```

### 🔹 **Object Data Type**  
```ts
let user: { name: string; age: number } = { name: "John", age: 25 };
```

### 🔹 **Custom Data Types**  
```ts
type Employee = { name: string; salary: number };
let emp: Employee = { name: "Alice", salary: 5000 };
```

---

## **📌 Advanced TypeScript Concepts**  

### 🔹 **Classes and Objects**  
```ts
class Car {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
  showBrand(): void {
    console.log(`Car brand is ${this.brand}`);
  }
}
const myCar = new Car("Toyota");
myCar.showBrand();
```

### 🔹 **Inheritance**  
```ts
class ElectricCar extends Car {
  batteryLife: number;
  constructor(brand: string, batteryLife: number) {
    super(brand);
    this.batteryLife = batteryLife;
  }
}
```

### 🔹 **Abstraction**  
```ts
abstract class Animal {
  abstract makeSound(): void;
}
class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}
```

### 🔹 **Encapsulation & Access Modifiers**  
```ts
class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}
```

---

## **📌 Modules, Configurations, and File Structure**  

### 🔹 **Export & Import Modules**  
#### File: `utils.ts`
```ts
export function greet(name: string) {
  return `Hello, ${name}`;
}
```
#### File: `main.ts`
```ts
import { greet } from "./utils";
console.log(greet("Alice"));
```

### 🔹 **`tsconfig.json` Configuration**  
Run:  
```sh
tsc --init
```
Example **`tsconfig.json`**:  
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist"
  }
}
```

---

## **📌 DOM Manipulation with TypeScript**  
```ts
const button = document.getElementById("myButton") as HTMLButtonElement;
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

---

## **📌 Function Signatures & Interfaces**  

### 🔹 **Function Signature**  
```ts
type GreetFunction = (name: string) => string;
const greet: GreetFunction = (name) => `Hello, ${name}`;
```

### 🔹 **Interface as Types**  
```ts
interface User {
  name: string;
  age: number;
}
const user: User = { name: "Alice", age: 25 };
```

### 🔹 **Class Implementing an Interface**  
```ts
interface Animal {
  makeSound(): void;
}
class Cat implements Animal {
  makeSound() {
    console.log("Meow!");
  }
}
```

---

## **📌 Generics in TypeScript**  

### 🔹 **Basic Generic Function**  
```ts
function identity<T>(value: T): T {
  return value;
}
console.log(identity<number>(10));
console.log(identity<string>("Hello"));
```

### 🔹 **Generic Class**  
```ts
class Storage<T> {
  private items: T[] = [];
  addItem(item: T) {
    this.items.push(item);
  }
  getItems(): T[] {
    return this.items;
  }
}
const numberStorage = new Storage<number>();
numberStorage.addItem(10);
console.log(numberStorage.getItems());
```

### 🔹 **Generic Constraints**  
```ts
function logLength<T extends { length: number }>(item: T) {
  console.log(`Length: ${item.length}`);
}
logLength("Hello");
```

---

## **🎯 Future Learning Goals**  
✅ TypeScript with React  
✅ TypeScript with Node.js  
✅ Advanced TypeScript Patterns  

Stay tuned for more updates! 🚀  

---

## **📌 Contributing**  
If you find any improvements or want to contribute, feel free to submit a **Pull Request**!  