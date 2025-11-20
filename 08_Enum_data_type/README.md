# **🔹 Enum Data Type in TypeScript**  

An **enum** (short for *enumeration*) in TypeScript is a special data type that allows you to define a collection of **constant values** with meaningful names. Enums make code more readable and maintainable.

---

## **1️⃣ Declaring an Enum**
Enums are used to represent a **set of related constants**.

```typescript
enum Direction {
    Up, 
    Down, 
    Left, 
    Right
}

console.log(Direction.Up);    // Output: 0
console.log(Direction.Right); // Output: 3
```
🔹 By default, **enum values start at `0`** and increment by `1`.

---

## **2️⃣ Custom Enum Values**
You can **assign specific values** to enum members.

```typescript
enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}

console.log(Status.Success);  // Output: 200
console.log(Status.NotFound); // Output: 404
```

---

## **3️⃣ String Enums**
Enums can store **string values** instead of numbers.

```typescript
enum Colors {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

console.log(Colors.Red); // Output: "RED"
```
📌 **String enums do not auto-increment**, so each value must be explicitly assigned.

---

## **4️⃣ Heterogeneous Enums (Mixed Types)**
You can mix **both numeric and string values** in an enum.

```typescript
enum Response {
    Yes = "YES",
    No = 0
}

console.log(Response.Yes); // Output: "YES"
console.log(Response.No);  // Output: 0
```
🔹 **Use cases:** Handling API responses, configurations, etc.

---

## **5️⃣ Reverse Mapping in Numeric Enums**
TypeScript allows **reverse mapping** for numeric enums.

```typescript
enum Days {
    Sunday = 1,
    Monday,
    Tuesday
}

console.log(Days.Monday);  // Output: 2
console.log(Days[2]);      // Output: "Monday"
```
✔ **Reverse mapping works only for numeric enums**, not for string enums.

---

## **6️⃣ Using `const enum` (Performance Optimization)**
`const enum` improves performance by **removing the enum at compile time** and replacing it with actual values.

```typescript
const enum Size {
    Small = 1,
    Medium = 2,
    Large = 3
}

console.log(Size.Small); // Output: 1
```
🔹 **Benefit:** The compiled JavaScript code will directly use `1`, instead of referring to `Size.Small`.

---

## **7️⃣ Enum in Functions**
Enums can be used as function parameters.

```typescript
enum Role {
    Admin, 
    User, 
    Guest
}

function checkPermission(role: Role) {
    if (role === Role.Admin) {
        console.log("Access granted.");
    } else {
        console.log("Access denied.");
    }
}

checkPermission(Role.Admin); // Output: "Access granted."
checkPermission(Role.User);  // Output: "Access denied."
```

---

## **✨ Summary Table**
| Feature | Example | Description |
|---------|---------|-------------|
| **Numeric Enum** | `enum Direction { Up, Down }` | Auto-increments from 0 |
| **Custom Values** | `enum Status { Success = 200 }` | Manually assigned values |
| **String Enum** | `enum Colors { Red = "RED" }` | Stores string constants |
| **Heterogeneous Enum** | `enum Response { Yes = "YES", No = 0 }` | Mixed types (string & number) |
| **Reverse Mapping** | `console.log(Days[2])` | Works with numeric enums |
| **Const Enum** | `const enum Size { Small = 1 }` | Replaced at compile time |