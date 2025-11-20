# **🔹 Class and Object in TypeScript**  

TypeScript supports **object-oriented programming (OOP)** with **classes, objects, inheritance, and encapsulation**. It allows you to create reusable and structured code.

---

## **1️⃣ Defining a Class in TypeScript**
A **class** is a blueprint for creating objects. It defines properties (variables) and methods (functions).

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an Object (Instance)
let person1 = new Person("Raiyan", 22);
person1.greet(); // Output: Hello, my name is Raiyan and I am 22 years old.
```

🔹 **Breakdown:**
- `class Person` → Defines a class.
- `constructor(name: string, age: number)` → Initializes properties.
- `this.name = name;` → Assigns values to properties.
- `greet()` → Defines a method inside the class.
- `new Person("Raiyan", 22);` → Creates an **object (instance)**.

---

## **2️⃣ Access Modifiers (public, private, protected)**
### **🔹 `public` (Default)**
- Accessible **everywhere**.

```typescript
class Car {
  public brand: string; // Public property

  constructor(brand: string) {
    this.brand = brand;
  }

  public showBrand(): void {
    console.log(`Car brand: ${this.brand}`);
  }
}

let car1 = new Car("Toyota");
car1.showBrand(); // ✅ Accessible
console.log(car1.brand); // ✅ Accessible
```

---

### **🔹 `private`**
- Accessible **only inside the class**.

```typescript
class BankAccount {
  private balance: number; // Private property

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public getBalance(): number {
    return this.balance; // ✅ Allowed inside the class
  }
}

let account = new BankAccount(1000);
console.log(account.getBalance()); // ✅ Allowed
// console.log(account.balance); // ❌ Error: Property 'balance' is private
```

---

### **🔹 `protected`**
- Accessible **inside the class and subclasses** (not outside).

```typescript
class Employee {
  protected salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }
}

class Manager extends Employee {
  showSalary(): void {
    console.log(`Salary: ${this.salary}`); // ✅ Allowed in subclass
  }
}

let manager = new Manager(5000);
manager.showSalary(); // ✅ Allowed
// console.log(manager.salary); // ❌ Error: 'salary' is protected
```

---

## **3️⃣ Getters and Setters**
Use **getter** and **setter** methods to control access to properties.

```typescript
class User {
  private _password: string;

  constructor(password: string) {
    this._password = password;
  }

  get password(): string {
    return "******"; // Masked password
  }

  set password(newPassword: string) {
    if (newPassword.length >= 6) {
      this._password = newPassword;
    } else {
      console.log("Password must be at least 6 characters long.");
    }
  }
}

let user = new User("secret123");
console.log(user.password); // Output: ******
user.password = "123"; // Output: Password must be at least 6 characters long.
user.password = "newpassword"; // ✅ Updated successfully
```

🔹 **Benefits:**
- Provides controlled access to private properties.
- Can add **validation** when setting values.

---

## **4️⃣ Inheritance (`extends`)**
A class can **inherit** properties and methods from another class.

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
dog.makeSound(); // Output: Woof Woof!
console.log(dog.name); // ✅ Allowed (inherited from Animal)
```

🔹 **`extends`** is used for inheritance.  
🔹 **`super()`** calls the parent constructor.  
🔹 **Method Overriding**: `makeSound()` in `Dog` overrides the `makeSound()` in `Animal`.

---

## **5️⃣ Abstract Classes**
An **abstract class** cannot be instantiated directly. It provides a blueprint for subclasses.

```typescript
abstract class Shape {
  abstract area(): number; // Abstract method (must be implemented)

  display(): void {
    console.log("This is a shape.");
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

let circle = new Circle(5);
console.log(circle.area()); // Output: 78.53981633974483
circle.display(); // Output: This is a shape.
```

🔹 **Key Features:**
- Cannot create an instance of an **abstract class**.
- Must implement **abstract methods** in subclasses.

---

## **6️⃣ Interfaces vs Classes**
TypeScript **interfaces** define a structure but do not provide implementation.

```typescript
interface Animal {
  name: string;
  makeSound(): void;
}

class Cat implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Meow Meow!");
  }
}

let cat = new Cat("Kitty");
cat.makeSound(); // Output: Meow Meow!
```

🔹 **When to use?**
| Feature | `class` | `interface` |
|---------|--------|-------------|
| Can have implementation | ✅ Yes | ❌ No |
| Supports inheritance | ✅ Yes (`extends`) | ✅ Yes (`extends`) |
| Used for defining structure | ❌ No | ✅ Yes (`implements`) |

---

## **✨ Summary Table**
| Feature | Syntax | Description |
|---------|--------|-------------|
| **Basic Class** | `class Name {}` | Defines a class |
| **Constructor** | `constructor(args) {}` | Initializes object properties |
| **Access Modifiers** | `public`, `private`, `protected` | Controls property visibility |
| **Getters/Setters** | `get name() {}` / `set name(value) {}` | Control property access |
| **Inheritance** | `class B extends A {}` | Allows a class to inherit from another |
| **Abstract Class** | `abstract class Name {}` | Cannot be instantiated directly |
| **Interface** | `interface Name {}` | Defines structure without implementation |