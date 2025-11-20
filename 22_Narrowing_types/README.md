# **🔹 Narrowing Types in TypeScript**  

**Type narrowing** in TypeScript means refining a broad type into a more specific type. TypeScript uses control flow analysis to determine the most specific type possible in a given scope.  

---

## **1️⃣ Typeof Narrowing (for Primitives)**
Use `typeof` to check and narrow primitive types like `string`, `number`, and `boolean`.

### ✅ **Example: Using `typeof`**
```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(`String value: ${value.toUpperCase()}`);
  } else {
    console.log(`Number value: ${value.toFixed(2)}`);
  }
}

printValue("hello"); // "String value: HELLO"
printValue(10.5678); // "Number value: 10.57"
```
### **🔹 Explanation:**
- `typeof value === "string"` ensures TypeScript treats `value` as a string inside that block.
- `typeof value === "number"` ensures it is treated as a number.

---

## **2️⃣ Truthy/Falsy Narrowing**
TypeScript can infer types based on truthy and falsy values.

### ✅ **Example: Checking Falsy Values**
```ts
function processInput(input: string | null | undefined) {
  if (!input) {
    console.log("No input provided.");
  } else {
    console.log(`Input length: ${input.length}`);
  }
}

processInput(null); // "No input provided."
processInput("TypeScript"); // "Input length: 10"
```
### **🔹 Explanation:**
- `null` and `undefined` are **falsy**, so when `!input` is `true`, we handle the missing value case.

---

## **3️⃣ Equality Narrowing**
TypeScript refines types when checking for specific values.

### ✅ **Example: Using Equality Operators**
```ts
function checkStatus(status: "success" | "error" | "loading") {
  if (status === "success") {
    console.log("Operation was successful!");
  } else if (status === "error") {
    console.log("An error occurred.");
  } else {
    console.log("Loading...");
  }
}

checkStatus("success"); // "Operation was successful!"
```
### **🔹 Explanation:**
- The function takes a **union type** (`"success" | "error" | "loading"`).
- TypeScript refines the type based on string equality checks.

---

## **4️⃣ Instanceof Narrowing (for Classes & Objects)**
Use `instanceof` to check and narrow an object to a specific class type.

### ✅ **Example: Using `instanceof`**
```ts
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound(new Dog()); // "Woof!"
makeSound(new Cat()); // "Meow!"
```
### **🔹 Explanation:**
- `instanceof` ensures TypeScript treats `animal` as a `Dog` or `Cat` inside the respective blocks.

---

## **5️⃣ In Operator Narrowing (for Objects)**
Use the `in` operator to check for property existence in an object.

### ✅ **Example: Using `in`**
```ts
type Car = { brand: string; speed: number };
type Bicycle = { brand: string; gearCount: number };

function getVehicleInfo(vehicle: Car | Bicycle) {
  if ("speed" in vehicle) {
    console.log(`Car brand: ${vehicle.brand}, Speed: ${vehicle.speed} km/h`);
  } else {
    console.log(`Bicycle brand: ${vehicle.brand}, Gears: ${vehicle.gearCount}`);
  }
}

getVehicleInfo({ brand: "Toyota", speed: 120 }); // "Car brand: Toyota, Speed: 120 km/h"
getVehicleInfo({ brand: "Giant", gearCount: 21 }); // "Bicycle brand: Giant, Gears: 21"
```
### **🔹 Explanation:**
- `"speed" in vehicle` checks if the `vehicle` object has a `speed` property to determine if it's a `Car`.

---

## **6️⃣ Discriminated Unions (for Objects with Type Property)**
When working with objects of different types, a **discriminated union** uses a common property (`type`) to narrow types.

### ✅ **Example: Discriminated Union**
```ts
type Square = { type: "square"; side: number };
type Circle = { type: "circle"; radius: number };

function calculateArea(shape: Square | Circle) {
  if (shape.type === "square") {
    return shape.side * shape.side;
  } else {
    return Math.PI * shape.radius * shape.radius;
  }
}

console.log(calculateArea({ type: "square", side: 5 })); // 25
console.log(calculateArea({ type: "circle", radius: 3 })); // 28.27
```
### **🔹 Explanation:**
- The `type` property distinguishes between `Square` and `Circle`, making the function **type-safe**.

---

## **7️⃣ Type Predicates (`is`)**
Use **custom type predicates** to define type guards.

### ✅ **Example: Custom Type Guard**
```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

const fish: Fish = { swim: () => console.log("Swimming...") };
const bird: Bird = { fly: () => console.log("Flying...") };

move(fish); // "Swimming..."
move(bird); // "Flying..."
```
### **🔹 Explanation:**
- `isFish(pet): pet is Fish` explicitly tells TypeScript that **inside the `if` block, `pet` is a Fish**.
- This helps with **type safety** when working with custom types.

---

## **✨ Summary**
✅ **Type narrowing makes TypeScript more type-safe by refining types dynamically.**  
✅ **Use `typeof` for primitive types (`string`, `number`, etc.).**  
✅ **Use `instanceof` for class-based objects.**  
✅ **Use `in` to check for properties in objects.**  
✅ **Use discriminated unions with a `type` field for better safety.**  
✅ **Use custom type predicates (`is`) for advanced type checking.**  