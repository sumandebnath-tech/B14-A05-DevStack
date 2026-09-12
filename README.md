# Project Name

A-5 Dev Stack Builder

## Project Description

A-5 Dev Stack Builder is an interactive React web application designed to help developers explore, select, and build their customized software development technology stack. Users can view various technologies loaded dynamically from a JSON mock API, add tools to their stack, prevent duplicate entries and track their selections dynamically.

## Technologies Used

- React.js (Vite)
- Tailwind CSS v4 & DaisyUI
- React-Toastify
- JavaScript (ES6+)
- JSON (Mock Data)

## Key Features

1. **Dynamic Technology Grid & Loading State:** Fetches technology items dynamically from a local JSON file and displays a loading spinner while data is being retrieved.

2. **Interactive Stack Builder:** Users can easily add technologies to their personal stack, remove items and see the stack count update dynamically in the navbar.

3. **Toast Notifications:** Integrated `react-toastify` to provide feedback alerts when adding a technology, attempting to add duplicates, or removing a tool.

---

## React Questions & Answers

### i. What is JSX, and why is it used in React?

**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript used in React to write HTML-like markup directly inside JavaScript files.
It is used because it allows developers to build UI components with clean, readble structure while utilizing full JavaScript logic seamlessly within the template.

### ii. What is the difference between props and state?

**Answer:**
**Props (Properties):** Read-only data passed from a parent component down to a child component. They are immutable within the receiving component.
**State:** Managed internal data within a component that can change over time based on user actions async events. When state changes, React re-renders the components.

### iii. What does the useState hook do, and where did you use it in this project?

**Answer** useState is a React Hook that allows functional components to maintain and manage local state. In this project, it was used in `App.jsx` to store technology list (`techs`), track loading states (`loading`) and manage the user's selected tools (`myStack`).

### iv.What does the useEffect hook do, and why did you need it to load the JSON data?

**Answer:** `useEffect` performs side effects in functional components, such as data fetching or DOM manipulation. In this project, it was used to execute a `fetch()` request on component mount to retrieve technology data asynchronously from `/technologies.json`.

### v. Why does every item in a .map() list need a unique key prop?

**Answer:** The unique `key` prop helps React identify which items have changed, been added or removed in a dynamic list. It optimizes rendering performance during Virtual DOM diffing.

### vi. What is conditional rendering? Show one place you used it (example: the empty stack message).

**Answer:** Conditional rendering allows components to render different UI elements based on certain dynamic conditions or states.
**Example in project:** Rendering the loading spinner versus the cards grid based on the `loading` state:

```jsx
{
  loading ? (
    <div className="flex justify-center">
      <span className="loading loading-spinner"></span>
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      ...{" "}
    </div>
  );
}
```

### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:**
** Parent to Child: Passed directly using Props.
** Child to Parent: passed by sending a Callback Function.
