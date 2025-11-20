# **🔹 Encapsulation & Access Modifiers in TypeScript**  

**Encapsulation** is one of the core principles of Object-Oriented Programming (OOP). It refers to the practice of **hiding internal details** of a class and allowing controlled access through methods.  

TypeScript provides **Encapsulation** using **Access Modifiers**:
1. **public** (default) → Accessible from anywhere.  
2. **private** → Accessible only within the same class.  
3. **protected** → Accessible within the class and its subclasses.  

---

## **1️⃣ Encapsulation with `private` Modifier**  
A `private` property **cannot** be accessed directly from outside the class.

### **Example: Private Properties**
```typescript
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Invalid deposit amount!");
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

let account = new BankAccount(500);
account.deposit(200);  // ✅ Works: Deposited: $200. New balance: $700
console.log(account.getBalance()); // ✅ Works: 700

// console.log(account.balance); ❌ Error: Property 'balance' is private
```
🔹 **Why use `private`?**  
- Prevents direct access/modification of `balance` outside the class.  
- Forces the use of `getBalance()` for controlled access.  

---

## **2️⃣ Encapsulation with `protected` Modifier**  
A `protected` property is accessible **within the same class and its subclasses**.

### **Example: Protected Properties**
```typescript
class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  display(): void {
    console.log(`Name: ${this.name}`);
  }
}

class Employee extends Person {
  private salary: number;

  constructor(name: string, salary: number) {
    super(name);
    this.salary = salary;
  }

  showDetails(): void {
    console.log(`Employee: ${this.name}, Salary: $${this.salary}`); // ✅ Can access protected 'name'
  }
}

let emp = new Employee("Raiyan", 5000);
emp.showDetails(); // ✅ Employee: Raiyan, Salary: $5000

// console.log(emp.name); ❌ Error: Property 'name' is protected
```
🔹 **Why use `protected`?**  
- Prevents access from outside the class but allows it within derived classes.  

---

## **3️⃣ Encapsulation with `public` Modifier**  
A `public` property is **accessible from anywhere**.

### **Example: Public Properties**
```typescript
class Car {
  public brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  showBrand(): void {
    console.log(`Car Brand: ${this.brand}`);
  }
}

let myCar = new Car("Tesla");
console.log(myCar.brand); // ✅ Works: Tesla
myCar.showBrand(); // ✅ Works: Car Brand: Tesla
```
🔹 **Why use `public`?**  
- No restrictions on access.  
- Suitable for properties that should be freely accessible.

---

## **4️⃣ Using Getters and Setters for Encapsulation**  
We can use **getters and setters** to **control access and validation**.

### **Example: Using Getters & Setters**
```typescript
class Student {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      console.log("Age cannot be negative!");
    } else {
      this._age = value;
    }
  }
}

let student = new Student(20);
console.log(student.age); // ✅ Works: 20

student.age = 25;  // ✅ Works: Updates age
console.log(student.age); // ✅ Works: 25

student.age = -5;  // ❌ Invalid: Age cannot be negative!
```
🔹 **Why use Getters & Setters?**  
- Prevents **direct modification** of `_age`.  
- Allows **validation logic** before setting a value.  

---

## **5️⃣ Readonly Modifier**  
The `readonly` modifier makes a property **immutable** after initialization.

### **Example: Readonly Property**
```typescript
class Company {
  readonly companyName: string;

  constructor(name: string) {
    this.companyName = name;
  }

  showCompany(): void {
    console.log(`Company: ${this.companyName}`);
  }
}

let company = new Company("Google");
console.log(company.companyName); // ✅ Works: Google

// company.companyName = "Microsoft"; ❌ Error: Cannot assign to 'companyName' because it is a read-only property.
```
🔹 **Why use `readonly`?**  
- Ensures the value **cannot change** after initialization.  

---

## **6️⃣ Summary Table: Access Modifiers**
| Modifier   | Accessible within Class | Accessible in Subclass | Accessible Outside |
|------------|-----------------|-----------------|----------------|
| **public** | ✅ Yes | ✅ Yes | ✅ Yes |
| **private** | ✅ Yes | ❌ No | ❌ No |
| **protected** | ✅ Yes | ✅ Yes | ❌ No |
| **readonly** | ✅ Yes (only read) | ✅ Yes (only read) | ✅ Yes (only read) |

---

## **✨ Key Takeaways**
✅ **Encapsulation** helps in **data hiding** and **access control**.  
✅ **Access Modifiers** (`public`, `private`, `protected`, `readonly`) control property visibility.  
✅ **Use Getters & Setters** to apply **validation** before modifying values.  