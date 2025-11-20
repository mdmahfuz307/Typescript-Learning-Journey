# **🔹 Inheritance in TypeScript**  

Inheritance is a fundamental concept in **Object-Oriented Programming (OOP)** that allows a class to **inherit** properties and methods from another class. It helps in **code reusability** and **hierarchical classification**.

---

## **1️⃣ Basic Inheritance (`extends`)**
A class can inherit from another class using the `extends` keyword.

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Some generic animal sound");
  }
}

// Inheriting Animal class
class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name); // Calls the parent constructor
    this.breed = breed;
  }

  makeSound(): void {
    console.log("Woof Woof!");
  }
}

let dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.name); // ✅ Inherited property
dog.makeSound(); // Output: Woof Woof!
```

### **🔹 Breakdown:**
- `class Dog extends Animal` → `Dog` inherits from `Animal`.
- `super(name)` → Calls the **parent class constructor**.
- `makeSound()` → Overriding method from `Animal`.

---

## **2️⃣ Method Overriding**
A subclass can **override** a method from the parent class.

```typescript
class Parent {
  showMessage(): void {
    console.log("This is the parent class.");
  }
}

class Child extends Parent {
  showMessage(): void {
    console.log("This is the child class.");
  }
}

let obj = new Child();
obj.showMessage(); // Output: This is the child class.
```

🔹 The `showMessage()` method in `Child` **overrides** the one in `Parent`.

---

## **3️⃣ Protected Members**
The `protected` modifier allows access in the **subclass**, but not outside.

```typescript
class Vehicle {
  protected speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  displaySpeed(): void {
    console.log(`Speed: ${this.speed} km/h`);
  }
}

class Car extends Vehicle {
  increaseSpeed(): void {
    this.speed += 10; // ✅ Allowed (protected)
    console.log(`Increased speed: ${this.speed} km/h`);
  }
}

let myCar = new Car(50);
myCar.increaseSpeed(); // Output: Increased speed: 60 km/h
// console.log(myCar.speed); // ❌ Error: Property 'speed' is protected
```

🔹 **Key Point:**  
- `protected` members can be accessed **inside the subclass**, but **not outside**.

---

## **4️⃣ Super Keyword (`super()`)**
The `super()` function calls the **parent class constructor**.

```typescript
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  showInfo(): void {
    console.log(`Name: ${this.name}`);
  }
}

class Student extends Person {
  rollNumber: number;

  constructor(name: string, rollNumber: number) {
    super(name); // Calls Person's constructor
    this.rollNumber = rollNumber;
  }

  showInfo(): void {
    super.showInfo(); // Calls parent method
    console.log(`Roll Number: ${this.rollNumber}`);
  }
}

let student1 = new Student("Raiyan", 101);
student1.showInfo();
// Output:
// Name: Raiyan
// Roll Number: 101
```

🔹 **`super()`** calls the **parent class constructor**.  
🔹 **`super.methodName()`** calls a **parent class method**.

---

## **5️⃣ Multilevel Inheritance**
A class can inherit from another class, which inherits from another class.

```typescript
class Grandparent {
  familyName: string = "Rahman";
}

class Parent extends Grandparent {
  house: string = "Dhaka";
}

class Child extends Parent {
  school: string = "Green University";
}

let person = new Child();
console.log(person.familyName); // ✅ Inherited from Grandparent
console.log(person.house); // ✅ Inherited from Parent
console.log(person.school); // ✅ Defined in Child
```

🔹 **Chain of inheritance**: `Child → Parent → Grandparent`.  

---

## **6️⃣ Abstract Classes (Partially Implemented Classes)**
An **abstract class** cannot be instantiated and is meant to be inherited.

```typescript
abstract class Employee {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract calculateSalary(): number; // Must be implemented in subclasses
}

class Manager extends Employee {
  salary: number;

  constructor(name: string, salary: number) {
    super(name);
    this.salary = salary;
  }

  calculateSalary(): number {
    return this.salary * 1.1; // 10% bonus
  }
}

let manager = new Manager("Raiyan", 50000);
console.log(manager.calculateSalary()); // Output: 55000
```

🔹 **Key Features:**
- `abstract` methods **must** be implemented in subclasses.
- Cannot create objects of an **abstract class**.

---

## **7️⃣ Interface vs. Inheritance**
Instead of inheritance, we can use **interfaces** for defining structure.

```typescript
interface Animal {
  name: string;
  makeSound(): void;
}

class Lion implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Roar!");
  }
}

let lion = new Lion("Simba");
lion.makeSound(); // Output: Roar!
```

🔹 **When to use?**
| Feature | Inheritance (`extends`) | Interface (`implements`) |
|---------|-----------------|-------------------|
| Can have implementation | ✅ Yes | ❌ No |
| Multiple inheritance | ❌ No | ✅ Yes |
| Code Reusability | ✅ Yes | ❌ No |

---

## **✨ Summary Table**
| Feature | Syntax | Description |
|---------|--------|-------------|
| **Basic Inheritance** | `class B extends A {}` | B inherits from A |
| **Method Overriding** | `methodName() {}` | Redefines method in subclass |
| **super()** | `super(args)` | Calls parent constructor |
| **Protected Members** | `protected variable` | Accessible in subclass but not outside |
| **Multilevel Inheritance** | `A → B → C` | Inherits multiple levels |
| **Abstract Class** | `abstract class A {}` | Cannot instantiate, must be extended |