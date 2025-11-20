# **🔹 Class Implementing an Interface in TypeScript**  

In TypeScript, a class can **implement** an interface to ensure that it follows a specific structure. This is useful for enforcing type safety and consistency across multiple classes.

---

## **1️⃣ Basic Example: Implementing an Interface**
When a class implements an interface, it must provide implementations for **all** the properties and methods defined in the interface.

### ✅ **Example: Class Implementing an Interface**
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
console.log(myDog.name); // "Buddy"
myDog.makeSound(); // "Woof! Woof!"
```
### **🔹 Explanation:**
- The `Animal` interface defines:
  - A `name` property.
  - A `makeSound()` method.
- The `Dog` class **implements** `Animal`, so it **must** define both `name` and `makeSound()`.
- The constructor initializes the `name` property.

---

## **2️⃣ Interface with Multiple Methods**
A class can implement multiple methods from an interface.

### ✅ **Example: Interface with Multiple Methods**
```ts
interface Vehicle {
  brand: string;
  speed: number;
  accelerate(amount: number): void;
  brake(): void;
}

class Car implements Vehicle {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  accelerate(amount: number) {
    this.speed += amount;
    console.log(`${this.brand} accelerated to ${this.speed} km/h`);
  }

  brake() {
    this.speed = 0;
    console.log(`${this.brand} stopped.`);
  }
}

const myCar = new Car("Toyota", 50);
myCar.accelerate(30); // "Toyota accelerated to 80 km/h"
myCar.brake(); // "Toyota stopped."
```
### **🔹 Explanation:**
- `Vehicle` interface has:
  - A `brand` and `speed` property.
  - `accelerate()` and `brake()` methods.
- The `Car` class **implements** `Vehicle`, ensuring it follows the required structure.

---

## **3️⃣ Using Optional Properties (`?`) in Interfaces**
An interface can have **optional properties** that a class **may or may not** implement.

### ✅ **Example: Optional Properties**
```ts
interface User {
  name: string;
  email?: string; // Optional property
}

class Member implements User {
  name: string;
  email?: string;

  constructor(name: string, email?: string) {
    this.name = name;
    if (email) {
      this.email = email;
    }
  }
}

const user1 = new Member("Raiyan");
const user2 = new Member("Jiyon", "jiyon@example.com");

console.log(user1); // { name: "Raiyan" }
console.log(user2); // { name: "Jiyon", email: "jiyon@example.com" }
```
### **🔹 Explanation:**
- `email?` is optional, so `Member` can **choose** whether to include it.
- `user1` has **only a name**, while `user2` has **both name and email**.

---

## **4️⃣ Implementing Multiple Interfaces**
A class can implement **multiple interfaces** by separating them with a comma.

### ✅ **Example: Class Implementing Multiple Interfaces**
```ts
interface Animal {
  name: string;
  makeSound(): void;
}

interface Pet {
  play(): void;
}

class Cat implements Animal, Pet {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log("Meow! Meow!");
  }

  play() {
    console.log(`${this.name} is playing!`);
  }
}

const myCat = new Cat("Whiskers");
myCat.makeSound(); // "Meow! Meow!"
myCat.play(); // "Whiskers is playing!"
```
### **🔹 Explanation:**
- `Cat` implements **both** `Animal` and `Pet` interfaces.
- It must define **all methods and properties** from both interfaces.

---

## **5️⃣ Extending Interfaces Before Implementing**
An interface can **extend another interface** before being implemented by a class.

### ✅ **Example: Extending an Interface**
```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  position: string;
  salary: number;
}

class Developer implements Employee {
  name: string;
  age: number;
  position: string;
  salary: number;

  constructor(name: string, age: number, position: string, salary: number) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is coding.`);
  }
}

const dev = new Developer("Raiyan", 22, "Software Engineer", 50000);
console.log(dev);
dev.work(); // "Raiyan is coding."
```
### **🔹 Explanation:**
- `Employee` **extends** `Person`, so it inherits `name` and `age`.
- `Developer` **implements** `Employee`, so it must include `name`, `age`, `position`, and `salary`.

---

## **✨ Summary**
✅ **A class implements an interface to enforce structure.**  
✅ **A class must implement all properties & methods of an interface.**  
✅ **Interfaces can define optional (`?`) or readonly properties.**  
✅ **A class can implement multiple interfaces.**  
✅ **Interfaces can extend other interfaces before being implemented.**  