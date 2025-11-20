# **🔹 Interface as Types in TypeScript**  

In TypeScript, an **interface** is used to define the structure of an object, ensuring **type safety**. Interfaces can also be used for defining **function signatures**, **arrays**, **classes**, and more.

---

## **1️⃣ Basic Interface for Objects**
An interface defines the expected properties and types of an object.

### ✅ **Example: Defining an Object with an Interface**
```ts
interface Person {
  name: string;
  age: number;
}

const student: Person = {
  name: "Raiyan",
  age: 22,
};

console.log(student.name); // "Raiyan"
```
### **Explanation:**
- The `Person` interface ensures that any object must have `name` (string) and `age` (number).

---

## **2️⃣ Optional Properties (`?`)**
Use **`?`** to make a property optional.

### ✅ **Example: Interface with an Optional Property**
```ts
interface User {
  name: string;
  email?: string; // Optional property
}

const user1: User = { name: "Jiyon" };
const user2: User = { name: "Raiyan", email: "raiyan@example.com" };

console.log(user1, user2);
```
### **Explanation:**
- `email?`: The email property is **optional**.

---

## **3️⃣ Readonly Properties**
Use **`readonly`** to prevent modification of a property.

### ✅ **Example: Readonly Property**
```ts
interface Car {
  readonly brand: string;
  model: string;
}

const myCar: Car = { brand: "Toyota", model: "Corolla" };

// myCar.brand = "Honda"; ❌ Error: Cannot modify readonly property
myCar.model = "Camry"; // ✅ Allowed
```
### **Explanation:**
- `brand` is `readonly`, so it **cannot be changed** after initialization.

---

## **4️⃣ Interface with Functions**
Interfaces can define **function signatures**.

### ✅ **Example: Function Signature in Interface**
```ts
interface MathOperation {
  (a: number, b: number): number;
}

const add: MathOperation = (x, y) => x + y;
console.log(add(5, 3)); // 8
```
### **Explanation:**
- `MathOperation` defines a function that takes **two numbers** and returns a **number**.

---

## **5️⃣ Interface for Arrays**
Interfaces can describe the **structure of an array**.

### ✅ **Example: Interface for an Array**
```ts
interface StringArray {
  [index: number]: string; // Defines an array of strings
}

const names: StringArray = ["Raiyan", "Jiyon", "Ali"];
console.log(names[1]); // "Jiyon"
```
### **Explanation:**
- `StringArray` ensures **all elements** are strings.

---

## **6️⃣ Interface for Classes**
Interfaces define the **structure of a class**.

### ✅ **Example: Interface in a Class**
```ts
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log("Woof! Woof!");
  }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); // "Woof! Woof!"
```
### **Explanation:**
- The `Dog` class **implements** the `Animal` interface.
- It **must** define `name` and `makeSound()`.

---

## **7️⃣ Extending Interfaces**
Interfaces can **inherit** properties from other interfaces using `extends`.

### ✅ **Example: Extending an Interface**
```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  position: string;
}

const worker: Employee = {
  name: "Raiyan",
  age: 22,
  position: "Software Engineer",
};

console.log(worker);
```
### **Explanation:**
- `Employee` **inherits** `name` & `age` from `Person` and adds `position`.

---

## **8️⃣ Interface vs. Type Alias**
Both **`interface`** and **`type`** can define object shapes, but interfaces are more extendable.

### ✅ **Example: Type Alias vs. Interface**
```ts
// Using Interface
interface User {
  name: string;
  age: number;
}

// Using Type Alias
type UserType = {
  name: string;
  age: number;
};
```
### **Key Differences:**
| Feature        | Interface | Type Alias |
|---------------|-----------|-----------|
| **Object Shape** | ✅ Yes | ✅ Yes |
| **Extensible (extends)** | ✅ Yes | ❌ No |
| **Function Signature** | ✅ Yes | ✅ Yes |
| **Union & Intersection** | ❌ No | ✅ Yes |

✅ **Use `interface` for object structures**  
✅ **Use `type` for unions, intersections, and more flexible structures**

---

## **✨ Summary**
✅ **Interfaces define object shapes, function signatures, arrays, and classes**  
✅ Use `?` for **optional properties** and `readonly` for **immutable properties**  
✅ **Interfaces can be extended** with `extends`  
✅ **Interfaces vs. Type** → Use **interface for objects**, **type for flexibility**  