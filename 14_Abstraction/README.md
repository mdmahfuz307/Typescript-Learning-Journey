# **🔹 Abstraction in TypeScript**  

**Abstraction** is an **Object-Oriented Programming (OOP)** concept that hides complex implementation details and exposes only the necessary parts of an object.  

TypeScript provides **abstraction** using:
1. **Abstract Classes**
2. **Interfaces**

---

## **1️⃣ Abstract Classes in TypeScript**
An **abstract class** is a class that **cannot be instantiated** and is meant to be **extended** by subclasses.  
- It can have **abstract methods** (without implementation).  
- It can have **regular methods** (with implementation).  

### **Example: Abstract Class with Abstract Method**
```typescript
abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): void; // Abstract method (must be implemented in subclass)

  move(): void {
    console.log(`${this.name} is moving.`);
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof Woof!");
  }
}

let dog = new Dog("Buddy");
dog.makeSound(); // Output: Woof Woof!
dog.move(); // Output: Buddy is moving.
```

🔹 **Key Points:**
- `abstract class Animal` → Cannot create an instance of `Animal`.
- `abstract makeSound()` → Must be implemented in `Dog`.
- `move()` → Regular method available for all subclasses.

---

## **2️⃣ Abstract Class with Constructor and Properties**
```typescript
abstract class Vehicle {
  protected speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  abstract accelerate(): void;

  brake(): void {
    this.speed -= 10;
    console.log(`Slowing down... New speed: ${this.speed} km/h`);
  }
}

class Car extends Vehicle {
  accelerate(): void {
    this.speed += 20;
    console.log(`Car accelerated. New speed: ${this.speed} km/h`);
  }
}

let myCar = new Car(50);
myCar.accelerate(); // Output: Car accelerated. New speed: 70 km/h
myCar.brake(); // Output: Slowing down... New speed: 60 km/h
```

🔹 **Breakdown:**
- `protected speed` → Accessible inside `Vehicle` and `Car`, but not outside.
- `accelerate()` → Abstract method implemented in `Car`.
- `brake()` → Regular method in `Vehicle`.

---

## **3️⃣ Interfaces vs. Abstract Classes**
An **interface** is another way to achieve abstraction.  
### **When to use?**
| Feature | Abstract Class | Interface |
|---------|--------------|-----------|
| Can have method implementation? | ✅ Yes | ❌ No |
| Can have properties? | ✅ Yes | ✅ Yes |
| Multiple Inheritance | ❌ No | ✅ Yes |
| Can be instantiated? | ❌ No | ❌ No |

### **Example: Abstract Class vs. Interface**
```typescript
abstract class Animal {
  abstract makeSound(): void;
}

interface Flyable {
  fly(): void;
}

class Bird extends Animal implements Flyable {
  makeSound(): void {
    console.log("Chirp Chirp!");
  }

  fly(): void {
    console.log("Flying high!");
  }
}

let bird = new Bird();
bird.makeSound(); // Output: Chirp Chirp!
bird.fly(); // Output: Flying high!
```

🔹 **`abstract class`** → Used for a **base class** with shared properties/methods.  
🔹 **`interface`** → Defines behavior that can be **implemented by multiple classes**.

---

## **4️⃣ Real-World Example: User Authentication System**
```typescript
abstract class User {
  constructor(public name: string) {}

  abstract getRole(): string;

  displayInfo(): void {
    console.log(`${this.name} is a ${this.getRole()}`);
  }
}

class Admin extends User {
  getRole(): string {
    return "Admin";
  }
}

class Member extends User {
  getRole(): string {
    return "Member";
  }
}

let user1 = new Admin("Raiyan");
let user2 = new Member("Jiyon");

user1.displayInfo(); // Output: Raiyan is an Admin
user2.displayInfo(); // Output: Jiyon is a Member
```

🔹 **Key Takeaways:**
- `User` is **abstract** and cannot be instantiated.
- `Admin` and `Member` **must** implement `getRole()`.
- `displayInfo()` works for all subclasses.

---

## **✨ Summary**
| Feature | Description |
|---------|-------------|
| **Abstract Class** | Cannot be instantiated, only extended |
| **Abstract Method** | Must be implemented in a subclass |
| **Regular Method** | Can have implementation in the abstract class |
| **Interfaces vs Abstract** | Interfaces define behavior, abstract classes define structure + behavior |