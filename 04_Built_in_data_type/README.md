## **Built-in Data Types in TypeScript**  

TypeScript provides a set of built-in **data types** that help enforce **type safety** and reduce runtime errors.  

---

## **🔹 1️⃣ Basic Data Types**
### **1. `string` (Text)**
```typescript
let message: string = "Hello, TypeScript!";
console.log(message);  // Output: Hello, TypeScript!
```

### **2. `number` (Numeric values)**
```typescript
let age: number = 25;
let price: number = 99.99;
console.log(age, price); // Output: 25 99.99
```

### **3. `boolean` (True/False)**
```typescript
let isCompleted: boolean = true;
console.log(isCompleted);  // Output: true
```

---

## **🔹 2️⃣ Special Types**
### **4. `any` (Dynamic type - can hold any value)**
Useful when you don’t know the data type in advance.
```typescript
let randomValue: any = "Hello";
randomValue = 100;  // No error
console.log(randomValue);  // Output: 100
```
🔴 **Warning:** Avoid `any` as it removes type safety.

### **5. `unknown` (Safer alternative to `any`)**
You cannot use `unknown` directly without type checking.
```typescript
let value: unknown = "Hello";
value = 42;  // Allowed

if (typeof value === "string") {
    console.log(value.toUpperCase()); // Works only if `value` is string
}
```

### **6. `void` (No return value)**
Used in functions that don’t return a value.
```typescript
function logMessage(): void {
    console.log("This function returns nothing!");
}
```

### **7. `never` (Indicates a function that never returns)**
Used in functions that **throw errors** or **infinite loops**.
```typescript
function throwError(message: string): never {
    throw new Error(message);
}
```

---

## **🔹 3️⃣ Complex Data Types**
### **8. `array` (Lists of values)**
```typescript
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Raiyan", "John", "Alice"];
console.log(numbers, names);
```

You can also define arrays using `Array<T>`:
```typescript
let ids: Array<number> = [101, 102, 103];
```

### **9. `tuple` (Fixed-length array with specific types)**
```typescript
let person: [string, number] = ["Raiyan", 22];
console.log(person[0]); // Output: Raiyan
console.log(person[1]); // Output: 22
```

---

## **🔹 4️⃣ Object-Oriented Data Types**
### **10. `object` (Key-Value pairs)**
```typescript
let user: { name: string; age: number } = {
    name: "Raiyan",
    age: 22
};
console.log(user.name); // Output: Raiyan
```

---

## **🔹 5️⃣ Advanced Data Types**
### **11. `enum` (Enumerations - Named Constants)**
```typescript
enum Status { Success = 1, Failure = 0, Pending = 2 }
let currentStatus: Status = Status.Success;
console.log(currentStatus); // Output: 1
```

### **12. `union` (Multiple types in one variable)**
```typescript
let result: string | number;
result = "Pass";
result = 100;  // Both are valid
```

### **13. `type alias` (Custom data types)**
```typescript
type User = { name: string; age: number };
let student: User = { name: "Raiyan", age: 22 };
```

### **14. `interface` (More structured object definition)**
```typescript
interface Car {
    brand: string;
    model: string;
    year: number;
}

let myCar: Car = { brand: "Toyota", model: "Corolla", year: 2022 };
```

---

## **🎯 Summary Table**
| Type | Example | Description |
|------|---------|-------------|
| `string` | `"Hello"` | Text values |
| `number` | `25, 3.14` | Numeric values |
| `boolean` | `true, false` | True/False values |
| `any` | `any type` | Can hold any value (unsafe) |
| `unknown` | `unknown type` | Like `any`, but requires type checking |
| `void` | `function log(): void` | No return value |
| `never` | `throw new Error()` | Function never returns |
| `array` | `[1, 2, 3]` | List of values |
| `tuple` | `["Raiyan", 22]` | Fixed-length array |
| `object` | `{ name: "Raiyan" }` | Key-value pairs |
| `enum` | `enum Status {Success, Failure}` | Named constants |
| `union` | `string | number` | Allows multiple types |
| `type alias` | `type User = { name: string }` | Custom type |
| `interface` | `interface Car { brand: string }` | Structured object definition |
