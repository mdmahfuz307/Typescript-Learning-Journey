# **🔹 Creating Custom Data Types in TypeScript**  

In TypeScript, you can create **custom data types** using **Type Aliases** and **Interfaces**. These help define structured types, making your code **more readable, reusable, and type-safe**.  

---

## **1️⃣ Using `type` (Type Aliases)**
A **Type Alias** allows you to create a custom name for a specific type.

```typescript
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

let user: Person = {
  name: "Raiyan",
  age: 22,
  isStudent: true,
};
```
🔹 **Benefits:**  
- Reusable structure for multiple variables.  
- Can be used with primitive types, objects, or even unions.  

---

## **2️⃣ Using `interface`**
An **Interface** is similar to a type alias but is mainly used for defining object structures.

```typescript
interface Car {
  brand: string;
  model: string;
  year: number;
}

let myCar: Car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
};
```
🔹 **Difference between `type` and `interface`**  
| Feature | `type` | `interface` |
|---------|--------|-------------|
| Used for | Objects, unions, primitives | Objects, classes |
| Can be extended? | ❌ No (Use intersection `&`) | ✅ Yes (Using `extends`) |
| Can define functions? | ✅ Yes | ✅ Yes |

---

## **3️⃣ Custom Union Types**
You can create **union types** to allow multiple types for a variable.

```typescript
type Status = "success" | "error" | "loading";

let apiResponse: Status;

apiResponse = "success";  // ✅ Allowed
// apiResponse = "failed"; // ❌ Error: Not in the defined types
```

🔹 **Use case:** Defining a fixed set of allowed values.

---

## **4️⃣ Custom Function Types**
You can define function signatures using `type` or `interface`.

```typescript
type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (x, y) => x + y;

console.log(add(5, 10)); // Output: 15
```

🔹 **Ensures that functions follow the defined structure**.

---

## **5️⃣ Custom Type with Optional and Readonly Properties**
You can define optional (`?`) and readonly (`readonly`) properties.

```typescript
type User = {
  readonly id: number;
  name: string;
  email?: string; // Optional property
};

let user1: User = { id: 1, name: "Jiyon" };
// user1.id = 2; // ❌ Error: Cannot assign to 'id' because it is read-only
```

---

## **6️⃣ Extending Custom Types**
You can extend types using **`&` (Intersection) for `type`** or **`extends` for `interface`**.

### **Extending `type`**
```typescript
type Animal = { species: string };
type Dog = Animal & { breed: string };

let pet: Dog = { species: "Mammal", breed: "Labrador" };
```

### **Extending `interface`**
```typescript
interface Animal {
  species: string;
}

interface Dog extends Animal {
  breed: string;
}

let pet: Dog = { species: "Mammal", breed: "Golden Retriever" };
```

🔹 **Use case:** When you need to reuse properties across multiple types.

---

## **✨ Summary Table**
| Feature | `type` | `interface` |
|---------|--------|-------------|
| Object Type | ✅ Yes | ✅ Yes |
| Can Define Functions | ✅ Yes | ✅ Yes |
| Can Be Extended | ❌ No (Use `&`) | ✅ Yes (`extends`) |
| Can Define Unions | ✅ Yes | ❌ No |
| Can Be Used in Classes | ❌ No | ✅ Yes |