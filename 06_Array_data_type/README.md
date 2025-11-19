## **🔹 Array Data Type in TypeScript**  

In TypeScript, arrays are used to store multiple values of the **same type**. TypeScript provides strong **type safety** for arrays, ensuring that only the specified data type is stored.

---

## **1️⃣ Declaring an Array**
### **🔸 Using `Type[]` (Preferred)**
```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Raiyan", "John", "Alice"];
console.log(numbers, names);
```

### **🔸 Using `Array<Type>`**
```typescript
let scores: Array<number> = [90, 85, 78];
```
Both approaches are correct, but `Type[]` is more commonly used.

---

## **2️⃣ Array Methods**
TypeScript arrays support all JavaScript array methods.

```typescript
let fruits: string[] = ["Apple", "Banana", "Mango"];

// Adding elements
fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

// Removing elements
fruits.pop();
console.log(fruits); // ["Apple", "Banana", "Mango"]

// Iterating over an array
fruits.forEach(fruit => console.log(fruit));

// Checking array length
console.log(fruits.length); // 3
```

---

## **3️⃣ Multi-type Arrays (Union Type)**
You can store multiple **data types** in an array using **union types**.

```typescript
let mixed: (string | number)[] = [1, "hello", 2, "world"];
console.log(mixed);  // Output: [1, "hello", 2, "world"]
```

---

## **4️⃣ Multi-Dimensional Arrays**
Arrays can have **multiple dimensions**, like matrices.

```typescript
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // Output: 6
```

---

## **5️⃣ Readonly Arrays (`readonly` keyword)**
If you don’t want to **modify** an array after initialization, use `readonly`.

```typescript
const colors: readonly string[] = ["Red", "Green", "Blue"];
// colors.push("Yellow"); ❌ Error: Cannot add to a readonly array
```

---

## **6️⃣ Tuple vs Array**
A **tuple** is a **fixed-length** array where **each position has a specific type**.

```typescript
let person: [string, number] = ["Raiyan", 22];
console.log(person[0]); // "Raiyan"
console.log(person[1]); // 22
// person[1] = "hello"; ❌ Error: Type 'string' is not assignable to 'number'
```

---

## **✨ Summary Table**
| Feature | Example | Description |
|---------|---------|-------------|
| **Basic Array** | `let nums: number[] = [1,2,3];` | Array with specific type |
| **Generic Array** | `let names: Array<string> = ["A", "B"];` | Alternative syntax |
| **Multi-type Array** | `(string | number)[]` | Allows multiple types |
| **Multi-Dimensional** | `let matrix: number[][] = [[1,2], [3,4]];` | Nested arrays |
| **Readonly Array** | `readonly string[]` | Prevents modification |
| **Tuple** | `[string, number]` | Fixed-length array |