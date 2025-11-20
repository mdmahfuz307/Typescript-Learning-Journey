# **🔹 Object Data Type in TypeScript**  

In TypeScript, the `object` data type is used to define values that are **non-primitive** (i.e., not `number`, `string`, `boolean`, `null`, `undefined`, or `symbol`). It allows you to define structured data with key-value pairs.

---

## **1️⃣ Declaring an Object Type**
You can explicitly specify an object type using an **object literal**.

```typescript
let person: { name: string; age: number };

person = { name: "Raiyan", age: 22 }; // ✅ Valid

// person = { name: "Raiyan" }; // ❌ Error: Property 'age' is missing
```
🔹 TypeScript enforces that the object must match the specified structure.

---

## **2️⃣ Using the `object` Type**
The `object` type is a generic type that allows **any non-primitive value**.

```typescript
let data: object;

data = { key: "value" };  // ✅ Valid
data = [1, 2, 3];         // ✅ Valid (Arrays are objects)
data = function () {};     // ✅ Valid (Functions are objects)
```
🚨 **Limitation:** You cannot access specific properties directly because TypeScript doesn’t know their structure.

```typescript
console.log(data.key); // ❌ Error: Property 'key' does not exist on type 'object'
```
✔ **Solution:** Use a specific type annotation instead.

---

## **3️⃣ Defining Objects with Type Aliases**
Type aliases allow you to reuse object structures.

```typescript
type Car = {
  brand: string;
  model: string;
  year: number;
};

let myCar: Car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022
};
```
🔹 **Benefits:** Code is more readable and reusable.

---

## **4️⃣ Optional Properties (`?`)**
You can make properties **optional** using `?`.

```typescript
type User = {
  username: string;
  email?: string; // Optional property
};

let user1: User = { username: "raiyan" }; // ✅ Valid
let user2: User = { username: "jiyon", email: "jiyon@example.com" }; // ✅ Valid
```

---

## **5️⃣ Readonly Properties**
You can mark properties as **readonly** to prevent modifications.

```typescript
type Config = {
  readonly apiKey: string;
  version: number;
};

let appConfig: Config = {
  apiKey: "12345-ABCDE",
  version: 1
};

// appConfig.apiKey = "67890"; // ❌ Error: Cannot assign to 'apiKey' because it is a read-only property
```
🔹 Useful for defining **constants** in an object.

---

## **6️⃣ Using Index Signatures**
If you don’t know all the property names beforehand, use **index signatures**.

```typescript
type Product = {
  name: string;
  price: number;
  [key: string]: any; // Allows additional properties of any type
};

let item: Product = {
  name: "Laptop",
  price: 1000,
  brand: "Dell",  // ✅ Allowed due to index signature
  stock: 50       // ✅ Allowed due to index signature
};
```

---

## **7️⃣ Object with Functions**
You can define methods inside an object.

```typescript
type Employee = {
  name: string;
  salary: number;
  getSalary: () => string;
};

let employee: Employee = {
  name: "Alice",
  salary: 5000,
  getSalary: function () {
    return `Salary: $${this.salary}`;
  }
};

console.log(employee.getSalary()); // Output: "Salary: $5000"
```

---

## **✨ Summary Table**
| Feature | Syntax | Description |
|---------|--------|-------------|
| **Basic Object Type** | `{ key: type }` | Defines a structured object |
| **Type Alias** | `type Name = { key: type }` | Reusable object structure |
| **Optional Properties** | `{ key?: type }` | Properties that may or may not exist |
| **Readonly Properties** | `{ readonly key: type }` | Prevents modification after assignment |
| **Index Signatures** | `{ [key: string]: type }` | Allows dynamic properties |
| **Object with Methods** | `{ methodName: () => type }` | Defines functions inside objects |