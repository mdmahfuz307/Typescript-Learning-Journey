# **🚀 Generics in TypeScript – Basics**

Generics in TypeScript allow us to create **reusable, flexible, and type-safe** components, functions, and classes. Instead of working with a fixed data type, generics allow a placeholder type that adapts dynamically.

---

## **🔹 Why Use Generics?**
✅ **Reusability** – Write a function or component once and use it with different types.  
✅ **Type Safety** – Catches type errors at compile time.  
✅ **Better Code Readability** – Avoids redundant type definitions.  

---

## **1️⃣ Basic Generic Function**
A generic function uses a **type parameter** `<T>` to define a flexible data type.

### ✅ **Example: Generic Function**
```ts
function identity<T>(value: T): T {
  return value;
}

// Usage
console.log(identity<number>(10));      // 10
console.log(identity<string>("Hello")); // "Hello"
console.log(identity<boolean>(true));   // true
```
### **🔹 Explanation:**
- `<T>` is a **type variable** (placeholder).
- `identity<T>(value: T): T` means **T can be any type**.
- When calling the function, **TypeScript infers the type** automatically.

---

## **2️⃣ Generic Function with Multiple Types**
You can use **multiple generic types**.

### ✅ **Example: Pair Function**
```ts
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

console.log(pair<number, string>(1, "One")); // [1, "One"]
console.log(pair<string, boolean>("isAdmin", true)); // ["isAdmin", true]
```
### **🔹 Explanation:**
- `K` and `V` are generic type placeholders.
- The function returns a **tuple** `[K, V]`, maintaining type safety.

---

## **3️⃣ Generic Interface**
You can define **generic interfaces** for flexibility.

### ✅ **Example: Generic Interface for Objects**
```ts
interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 100 };
const stringBox: Box<string> = { content: "Hello" };

console.log(numberBox.content); // 100
console.log(stringBox.content); // "Hello"
```
### **🔹 Explanation:**
- The `Box<T>` interface allows **any type** for `content`.
- Ensures **strict type safety**.

---

## **4️⃣ Generic Class**
You can create **generic classes** for reusable object-oriented design.

### ✅ **Example: Generic Class**
```ts
class Storage<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }
}

// Usage
const numberStorage = new Storage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
console.log(numberStorage.getItems()); // [10, 20]

const stringStorage = new Storage<string>();
stringStorage.addItem("Apple");
stringStorage.addItem("Banana");
console.log(stringStorage.getItems()); // ["Apple", "Banana"]
```
### **🔹 Explanation:**
- `Storage<T>` is a **generic class** that works with **any data type**.
- Ensures type safety (`numberStorage` only stores numbers, `stringStorage` only stores strings).

---

## **5️⃣ Generic Constraints**
You can **restrict** generics to certain types.

### ✅ **Example: Restricting to Objects with a `length` Property**
```ts
function logLength<T extends { length: number }>(item: T): void {
  console.log(`Length: ${item.length}`);
}

logLength("Hello"); // Length: 5
logLength([1, 2, 3]); // Length: 3
// logLength(10); ❌ Error: number does not have a length property
```
### **🔹 Explanation:**
- `T extends { length: number }` ensures `T` has a `.length` property.
- Works with **strings, arrays, or objects** that have `.length`.

---

## **6️⃣ Using Generics with Functions & Interfaces**
You can define **generic functions inside interfaces**.

### ✅ **Example: Generic Function in Interface**
```ts
interface DataFetcher<T> {
  fetchData(): T;
}

class StringFetcher implements DataFetcher<string> {
  fetchData(): string {
    return "Fetched Data!";
  }
}

const fetcher = new StringFetcher();
console.log(fetcher.fetchData()); // "Fetched Data!"
```
### **🔹 Explanation:**
- `DataFetcher<T>` defines a function `fetchData()` that returns `T`.
- `StringFetcher` implements it with `T = string`.

---

## **✨ Summary**
✅ **Generics make functions, classes, and interfaces flexible & reusable.**  
✅ **Use `<T>` as a type placeholder** that adapts to different types.  
✅ **Constraints (`extends`) help enforce type rules** while maintaining flexibility.  
✅ **Multiple generic types (`<K, V>`) allow complex structures.**  