## **🔹 Union Data Type in TypeScript**  

The **Union Type** allows a variable to hold **multiple types**. Instead of restricting a variable to a single type, we can define it with a **union** (`|`) to accept **two or more types**.

---

## **1️⃣ Basic Syntax**
```typescript
let value: string | number;
value = "Hello";  // ✅ Allowed
value = 42;       // ✅ Allowed
// value = true;  ❌ Error: Type 'boolean' is not assignable to 'string | number'
```
✅ `value` can be **either** a `string` **or** a `number`, but nothing else.

---

## **2️⃣ Union Type in Function Parameters**
```typescript
function display(id: string | number) {
    console.log(`ID: ${id}`);
}

display(101);      // Output: ID: 101
display("A101");   // Output: ID: A101
// display(true);  ❌ Error: Argument of type 'boolean' is not assignable
```
Here, the function `display` can accept **both strings and numbers**.

---

## **3️⃣ Using Union with Arrays**
We can create an array that holds **multiple types**:
```typescript
let mixedArray: (string | number)[] = [1, "two", 3, "four"];
console.log(mixedArray);  // Output: [1, "two", 3, "four"]
```
Each item in `mixedArray` can be **either a number or a string**.

---

## **4️⃣ Type Checking with `typeof`**
Since a union variable can hold multiple types, we often **check its type** before performing operations.

```typescript
function processValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());  // ✅ Works if it's a string
    } else {
        console.log(value.toFixed(2));  // ✅ Works if it's a number
    }
}

processValue("typescript");  // Output: TYPESCRIPT
processValue(123.456);        // Output: 123.46
```
🔹 **`typeof` ensures we safely use string and number methods.**

---

## **5️⃣ Union Type with Objects**
We can use unions to define different object shapes.

```typescript
type Car = { brand: string; model: string };
type Bike = { brand: string; type: string };

let vehicle: Car | Bike;

vehicle = { brand: "Toyota", model: "Corolla" };  // ✅ Allowed
vehicle = { brand: "Yamaha", type: "Sports" };    // ✅ Allowed
// vehicle = { brand: "Tesla" };  ❌ Error: Missing 'model' or 'type'
```
🔹 `vehicle` can be **either a `Car` or a `Bike`**, but it must match one of the defined structures.

---

## **6️⃣ Union with Function Return Type**
A function can **return different types**:
```typescript
function getValue(input: boolean): string | number {
    return input ? "Success" : 0;
}

console.log(getValue(true));  // Output: Success
console.log(getValue(false)); // Output: 0
```
🔹 The function **returns `string` if `true`, otherwise `number`**.

---

## **✨ Summary**
| Feature | Example | Explanation |
|---------|---------|-------------|
| **Basic** | `let x: string | number;` | Variable can be `string` or `number` |
| **Function Parameter** | `function print(value: string \| number) {}` | Accepts multiple types |
| **Array with Union** | `(string \| number)[]` | Array holds multiple types |
| **Type Checking** | `typeof value === "string"` | Ensures safe operations |
| **Union with Objects** | `type Car \| Bike` | Object can have different structures |
| **Function Return Type** | `return "text" \| 0;` | Function returns multiple types |