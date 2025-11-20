# **🔹 TypeScript DOM Manipulation**  

**DOM (Document Object Model) Manipulation** in TypeScript works similarly to JavaScript but with **stronger type safety**. TypeScript ensures that when accessing DOM elements, you are working with the correct type, preventing runtime errors.

---

## **1️⃣ Selecting Elements in TypeScript**
To interact with HTML elements, we use methods like `getElementById`, `querySelector`, etc.

### ✅ **Example: Selecting Elements by ID**
```ts
const heading = document.getElementById("title") as HTMLHeadingElement;
heading.innerText = "Welcome to TypeScript!";
```
### **Explanation:**
- `as HTMLHeadingElement`: Type assertion ensures `heading` is a valid `HTMLHeadingElement`, avoiding potential `null` errors.

---

## **2️⃣ Handling `null` with TypeScript**
TypeScript enforces strict checks, so we must **handle cases where an element might not exist**.

### ✅ **Safe Approach:**
```ts
const button = document.getElementById("btn") as HTMLButtonElement;

if (button) {
  button.addEventListener("click", () => {
    alert("Button Clicked!");
  });
}
```
### **Best Practice:** Always **check for `null`** before accessing properties.

---

## **3️⃣ Querying Elements Using `querySelector`**
The `querySelector` method is more flexible than `getElementById` as it allows selecting elements using **CSS selectors**.

### ✅ **Example: Selecting a Button**
```ts
const btn = document.querySelector<HTMLButtonElement>("#submit-btn");

if (btn) {
  btn.addEventListener("click", () => console.log("Submitted!"));
}
```
### **Explanation:**
- `<HTMLButtonElement>`: This **ensures correct typing** for TypeScript.
- **No need for `as` assertion**, TypeScript automatically infers the type.

---

## **4️⃣ Changing Content Dynamically**
We can **modify text, styles, and attributes** dynamically using TypeScript.

### ✅ **Example: Changing Text Content**
```ts
const message = document.getElementById("message") as HTMLParagraphElement;

if (message) {
  message.textContent = "TypeScript makes DOM manipulation safer!";
}
```

### ✅ **Example: Changing Styles**
```ts
const box = document.getElementById("box") as HTMLDivElement;

if (box) {
  box.style.backgroundColor = "lightblue";
  box.style.padding = "10px";
}
```

---

## **5️⃣ Handling Events in TypeScript**
We can **listen for user interactions** like clicks, key presses, etc.

### ✅ **Example: Click Event Listener**
```ts
const button = document.getElementById("click-btn") as HTMLButtonElement;

if (button) {
  button.addEventListener("click", () => {
    alert("Button was clicked!");
  });
}
```

### ✅ **Example: Input Event (Handling User Input)**
```ts
const input = document.getElementById("name-input") as HTMLInputElement;
const output = document.getElementById("output") as HTMLParagraphElement;

if (input && output) {
  input.addEventListener("input", () => {
    output.textContent = `Hello, ${input.value}!`;
  });
}
```

---

## **6️⃣ Creating and Appending Elements**
TypeScript allows **dynamically adding elements** to the DOM.

### ✅ **Example: Adding a New List Item**
```ts
const list = document.getElementById("item-list") as HTMLUListElement;

if (list) {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  list.appendChild(newItem);
}
```

---

## **7️⃣ Removing Elements from DOM**
We can **remove elements dynamically**.

### ✅ **Example: Removing an Element**
```ts
const removeButton = document.getElementById("remove-btn") as HTMLButtonElement;
const itemToRemove = document.getElementById("remove-item");

if (removeButton && itemToRemove) {
  removeButton.addEventListener("click", () => {
    itemToRemove.remove();
  });
}
```

---

## **8️⃣ Form Validation Using TypeScript**
TypeScript is **great for form validation** since it provides **strict type checking**.

### ✅ **Example: Validating an Email Input**
```ts
const emailInput = document.getElementById("email") as HTMLInputElement;
const submitBtn = document.getElementById("submit") as HTMLButtonElement;
const errorMsg = document.getElementById("error") as HTMLParagraphElement;

if (emailInput && submitBtn && errorMsg) {
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    if (!emailInput.value.includes("@")) {
      errorMsg.textContent = "Invalid email format!";
    } else {
      errorMsg.textContent = "Valid email!";
    }
  });
}
```

---

## **9️⃣ Example: Complete TypeScript DOM Manipulation Code**
Here's a full working example:

### ✅ **HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>TypeScript DOM Manipulation</title>
</head>
<body>
    <h1 id="title">Hello, World!</h1>
    <button id="btn">Click Me</button>
    <input type="text" id="name-input" placeholder="Enter your name">
    <p id="output"></p>

    <script src="dist/index.js"></script> <!-- TypeScript file compiled to JavaScript -->
</body>
</html>
```

### ✅ **TypeScript (`index.ts`)**
```ts
const heading = document.getElementById("title") as HTMLHeadingElement;
const button = document.getElementById("btn") as HTMLButtonElement;
const input = document.getElementById("name-input") as HTMLInputElement;
const output = document.getElementById("output") as HTMLParagraphElement;

if (button && input && output) {
  button.addEventListener("click", () => {
    output.textContent = `Hello, ${input.value || "Guest"}!`;
  });
}
```

### ✅ **Compiling TypeScript**
Run the following command:
```sh
tsc
```
Then **open `index.html` in the browser**, and you’ll see everything working!

---

## **✨ Summary**
✅ TypeScript provides **type safety** when working with the DOM.  
✅ Always **check for `null`** before accessing elements.  
✅ Use **type assertions (`as HTMLInputElement`)** for precise type inference.  
✅ TypeScript helps in **event handling**, **modifying elements**, **creating new elements**, and **validating forms**.  