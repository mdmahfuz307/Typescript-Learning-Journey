# **🔹 Tuple Data Type in TypeScript**  

A **tuple** in TypeScript is a **fixed-length** array where **each element has a specific type**. It is useful when you want to store a collection of different data types in a predictable order.

---

## **1️⃣ Declaring a Tuple**
Unlike regular arrays, tuples define **a specific type for each index**.

```typescript
let person: [string, number, boolean];

person = ["Raiyan", 22, true];  // ✅ Correct
// person = [22, "Raiyan", true]; ❌ Error: Type mismatch
```
✅ The first element **must be** a `string`, the second **must be** a `number`, and the third **must be** a `boolean`.

---

## **2️⃣ Accessing Tuple Elements**
You can access tuple elements using **indexing**.

```typescript
console.log(person[0]); // Output: Raiyan
console.log(person[1]); // Output: 22
console.log(person[2]); // Output: true
```

---

## **3️⃣ Tuple with Optional Elements**
You can define optional elements in a tuple using `?`.

```typescript
let user: [string, number, boolean?];

user = ["Alice", 30];        // ✅ Allowed (boolean is optional)
user = ["Bob", 25, false];   // ✅ Allowed
```

---

## **4️⃣ Using Tuple with `readonly`**
If you don’t want to modify a tuple after initialization, use **`readonly`**.

```typescript
const rgb: readonly [number, number, number] = [255, 0, 0];
// rgb[0] = 128; ❌ Error: Cannot assign to a readonly tuple
```

---

## **5️⃣ Tuple with Named Elements**
You can name tuple elements for better readability.

```typescript
let userInfo: [name: string, age: number, isAdmin: boolean];

userInfo = ["John", 28, false];
console.log(userInfo[0]); // Output: John
```

---

## **6️⃣ Tuple with `push()` (Unexpected Behavior)**
TypeScript **allows** `push()` and `pop()`, but it doesn't enforce type safety after initialization.

```typescript
let car: [string, number] = ["Toyota", 2024];

car.push("New Model");  // ✅ Allowed, but unexpected
console.log(car); // Output: ["Toyota", 2024, "New Model"]
```
🚨 **Be careful!** This **breaks** the fixed-length nature of tuples.

---

## **7️⃣ Tuple as Function Return Type**
Tuples are useful for returning **multiple values** from a function.

```typescript
function getUser(): [string, number] {
    return ["Alice", 30];
}

const user = getUser();
console.log(user[0]); // Output: Alice
console.log(user[1]); // Output: 30
```

---

## **✨ Summary Table**
| Feature | Example | Description |
|---------|---------|-------------|
| **Basic Tuple** | `[string, number]` | Fixed-length array with specific types |
| **Access Elements** | `tuple[0]` | Index-based access |
| **Optional Elements** | `[string, number, boolean?]` | Last element can be omitted |
| **Readonly Tuple** | `readonly [number, number, number]` | Prevents modification |
| **Named Tuple** | `[name: string, age: number]` | Improves readability |
| **Function Return Type** | `(): [string, number]` | Returns multiple values |
