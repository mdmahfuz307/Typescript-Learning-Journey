# **🔹 Function Signature in TypeScript**  

A **function signature** in TypeScript defines the structure of a function, specifying **parameter types** and **return type** without its implementation. It helps in ensuring **type safety** and **better code organization**.

---

## **1️⃣ Basic Function Signature**
A function signature consists of:
- **Parameter types** (what types the arguments should be)
- **Return type** (what type the function returns)

### ✅ **Example: Function Signature**
```ts
let add: (x: number, y: number) => number;

add = (a, b) => a + b; // ✅ Correct Implementation
```
### **Explanation:**
- `let add: (x: number, y: number) => number;`
  - Defines a function signature where:
    - The function takes **two numbers** (`x` and `y`)
    - Returns a **number**
- `add = (a, b) => a + b;`
  - Implements the function with the correct structure.

---

## **2️⃣ Function Signature with Optional & Default Parameters**
### ✅ **Example: Optional Parameter (`?`)**
```ts
let greet: (name: string, age?: number) => string;

greet = (name, age) => {
  return age ? `Hello ${name}, you are ${age} years old.` : `Hello ${name}!`;
};

console.log(greet("Raiyan"));  // "Hello Raiyan!"
console.log(greet("Raiyan", 22)); // "Hello Raiyan, you are 22 years old."
```
### **Explanation:**
- `age?`: The **`?`** makes `age` optional.
- If `age` is not provided, it still works.

### ✅ **Example: Default Parameter**
```ts
let multiply: (x: number, y?: number) => number;

multiply = (x, y = 2) => x * y;

console.log(multiply(5)); // 10 (5 * 2)
console.log(multiply(5, 3)); // 15
```
- `y = 2`: If `y` is not provided, it defaults to `2`.

---

## **3️⃣ Function Signature with Rest Parameters**
Used when the number of arguments is unknown.

### ✅ **Example: Rest Parameters**
```ts
let sumAll: (...numbers: number[]) => number;

sumAll = (...nums) => nums.reduce((total, num) => total + num, 0);

console.log(sumAll(1, 2, 3, 4)); // 10
console.log(sumAll(10, 20)); // 30
```
### **Explanation:**
- `...numbers: number[]`: Accepts multiple numbers.
- `reduce()`: Sums all numbers.

---

## **4️⃣ Function Signature with Objects**
### ✅ **Example: Function Signature with an Object Parameter**
```ts
let userInfo: (user: { name: string; age: number }) => string;

userInfo = (user) => `Name: ${user.name}, Age: ${user.age}`;

console.log(userInfo({ name: "Jiyon", age: 22 }));
```
### **Explanation:**
- The function expects an **object** with `name` (string) and `age` (number).

---

## **5️⃣ Function Signature with Interface**
For cleaner and reusable function signatures, use **interfaces**.

### ✅ **Example: Function Signature with Interface**
```ts
interface MathOperation {
  (a: number, b: number): number;
}

let subtract: MathOperation;

subtract = (x, y) => x - y;

console.log(subtract(10, 5)); // 5
```
### **Explanation:**
- `MathOperation` interface defines a **function type**.
- `subtract` follows this structure.

---

## **6️⃣ Function Signature with Type Alias**
We can also use `type` instead of `interface`.

### ✅ **Example: Using Type Alias**
```ts
type StringModifier = (input: string) => string;

let capitalize: StringModifier;

capitalize = (str) => str.toUpperCase();

console.log(capitalize("hello")); // "HELLO"
```
### **Why Use `type` or `interface`?**
- **Type Alias** (`type`) is used for **simpler** types.
- **Interface** is best for **objects** and **classes**.

---

## **7️⃣ Function Signature in a Class**
When working with classes, function signatures ensure method consistency.

### ✅ **Example: Class with Function Signature**
```ts
class Calculator {
  operate: (a: number, b: number) => number;

  constructor(operation: (a: number, b: number) => number) {
    this.operate = operation;
  }
}

const addOperation = new Calculator((a, b) => a + b);
console.log(addOperation.operate(5, 3)); // 8
```
### **Explanation:**
- `operate` follows the function signature `(a: number, b: number) => number`.

---

## **✨ Summary**
✅ Function signatures define **parameters & return types**.  
✅ **Optional (`?`) & default parameters** provide flexibility.  
✅ **Rest parameters (`...args`)** handle multiple arguments.  
✅ **Interfaces & Type Aliases** make function signatures reusable.  
✅ Used in **objects, classes, and function expressions**.  