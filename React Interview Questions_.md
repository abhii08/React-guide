# React Interview Questions:

## 🟢 Basic React Questions

**Q1. What is React? Why is it used?**  
👉 The HTML we got from the server initially is slowly getting updated somehow, Through DOM manipulation only people were able to create **Dynamic Websites**, After **React** came into the picture DOM manipulation is very easy. React is a **JavaScript library** for building user interfaces. It is used because it makes UI development easier, faster, and more efficient using reusable components and virtual DOM for better performance.

The **React Compiler** converts your code to **HTML,CSS,and Javascript.**

Three things to worry about for creating a React app: **State, Component, and Re-rendering**.

**State**: State is a **built-in object** that stores data that can change over time. When the state changes, React re-renders the component. It represents the dynamic things in our app( things that change) Eg. \- value of a counter.

**Components:** Components are building blocks of a React app.They are reusable, independent pieces of UI. Two types: **Functional components** (preferred) and **Class components.**

Minimize **re-rendering**.

**Q2. Is React a library or a framework?**  
👉 React is a **library**, not a framework. A library is focused on specific tasks (like UI rendering), while a framework provides a complete structure.  
🔹 **Library vs Framework**  
**1\. Library:**A library is a set of tools you can pick and use whenever you want.  
You are in control of the flow of your app, and you decide **when and where** to use the library.  
**2\. Framework:** A framework provides a complete structure and rules for building an application.  
The framework is in control, and your code has to **follow its way** (inversion of control).

**Q3. What are props in React?**  
👉  Props (short for properties) are **read-only data** passed from parent to child component. They **make components reusable**.

**Q4. Controlled vs Uncontrolled components?**  
👉 **Controlled**

* React manages the form input using state.  
* Input is controlled by **React state (`name`)**.  
* If React’s state changes → input value changes.  
* Example:  **setName(e.target.value); // input value stored in state**

👉 **Uncontrolled**:

*  In an **uncontrolled component**, the **DOM itself stores the input value**, not React state.  
* DOM manages the input (we use `ref` to access it).  
* We use **`ref`** to directly access the value from the DOM when needed.  
*  Example: 	**const nameRef \= useRef();**

		            **nameRef.current.value); // directly read from DOM**

**Q5. What are keys in React? Why is it important?**  
**👉** Keys are unique identifiers for list items in React. They help React update and render lists efficiently.

**Q6. What is JSX?**  
👉 JSX is a syntax that looks like HTML inside JavaScript. React uses it to describe UI. Browsers don’t understand JSX directly; it gets compiled to JavaScript.

**Q7. Can browsers understand JSX directly?**  
👉 No. Browsers understand JavaScript, not JSX. Tools like **Babel** convert JSX into JavaScript.

## 🟢 React Hooks:

**Q1. What are hooks?**  
👉 Hooks are **functions** that let you use React features (like state, lifecycle, context) inside functional components.  
A component’s **lifecycle** \= the different **stages a component goes through** from creation → update → removal.

**Q2. What are Side Effects in React?**  
**👉**A side effect is any code that affects something outside React’s rendering process. 

* Fetching data from an API  
* Setting up a timer (`setInterval`)  
* Subscribing to events (like WebSocket, window resize)  
* We use the **useEffect** hook to handle side effects safely.

**Q3. Difference between `useState` and `useEffect`?**  
👉 `useState` → used to manage state.  
👉 `useEffect` → used for side effects like fetching data, timers, or DOM updates.

**Q4. Explain dependency array in `useEffect`.**  
 👉 `useEffect` lets you **run side effects** in your component. 

Dependency array controls when `useEffect` runs:

* `[]` → runs once (on mount).  
* `[value]` → runs when `value` changes.  
* no array → runs on every render.

**Uses:**

* Fetching data from an API  
* Using `setInterval` / `setTimeout`  
* Directly updating the DOM

**Q5. What is `useState`?**  
👉 add re-rendering state to functional components.

* `useState` is a React **hook** that lets you add state (data that changes) to a **functional component**.  
* State is like a variable that **remembers its value between re-renders**.  
* When you update state, React **re-renders the component** to show the latest UI.

**Q6. What is `useRef`?**  
👉 `useRef` creates a reference to a value or DOM element that **doesn’t re-render** when it changes. Example: focusing input fields.  
**Uses:**

* Access DOM elements directly    
  **inputRef.current.focus(); // access DOM input element**  
  Example: focusing an input field without re-rendering.  
* **Store mutable values** that don’t need to cause a re-render.  
  Example: interval IDs, previous values, or counters.  
* **Avoid unnecessary re-renders** when you just want to “remember” something in between renders.

**Q7. What is `useContext`?**  
👉`useContext` lets you share data without props drilling. It reads values from **Context API** directly.  
It’s mainly used to avoid **prop drilling** (passing props manually through many nested components).  
With it, you can share data (like theme, user info, auth status, language) across the app **without manually passing props**.  
If no provider is found, it uses the **default value** given in `createContext()`.  
Changing context value will **re-render all consumers**.

Context has **two parts**:

1. **Provider** → Gives (provides) the value.  
2. **Consumer** → Reads (consumes) the value.

**Q8. What is `useReducer`?**  
👉 `useReducer` is a React **hook for state management**.  
It’s an alternative to `useState`, especially useful when:

* You have **complex state logic** (multiple related values).

* You want **clearer code** for updating state with many actions.

* You want to **group state updates together**.

**Syntax:**  
**const \[state, dispatch\] \= useReducer(reducer, initialState);**

**`state` → the current state.**

**`dispatch` → a function to send actions.**

**`reducer` → a function that tells how state should change.**

**`initialState` → starting state value.**

**Q9. What is Memo?**  
**👉**`React.memo` is a Higher Order Component (HOC).  
It’s used to **prevent unnecessary re-renders of a component**.  
It works by **comparing props** — if the props haven’t changed, React skips re-rendering the component.

**Q9. Difference between `useMemo` and `useCallback`?**  
**👉 `useMemo` →** memoizes a calculated value.  
**👉 `useCallback` →** memoizes a function.  
**1.useMemo:**

* `useMemo` is used to memoize (remember) the result of a calculation.  
* It only re-computes the value when its dependencies change.  
* This helps avoid expensive recalculations on every render.

**2\. useCallback:** 

* `useCallback` is used to **memoize a function**.  
* It returns the **same function instance** unless dependencies change.  
* Useful when passing functions to **child components** (prevents unnecessary re-renders).

## 🟢 React Internals

**Q1. What is reconciliation in React?**  
👉 Reconciliation is React’s process of updating the UI efficiently using the **virtual DOM**.

**Q2. What is Virtual DOM?**  
 👉 Virtual DOM is a **lightweight copy** of the real DOM. React compares changes in the virtual DOM and updates only the required parts of the real DOM.

**Q3. Difference between real DOM and virtual DOM?**

👉 Real DOM → slow, updates the entire UI.

👉 Virtual DOM → fast, updates only changed elements.

**Q4. Lifecycle methods vs Hooks?**  
👉 In class components: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.  
👉 In functional components: same tasks handled by `useEffect`.

## 🟢 Routing & State Management

**Q1. What is a React Router?**  
👉 A library for **navigation** in React apps. It helps create single-page apps with multiple views.

**Q2. How to navigate in React Router v6?**  
👉 Use `<Link to="/path">` or `useNavigate()` hook.

**Q3. What is Context API?**  
👉 A way to **share data globally** across components without passing props manually.

**Q4. Alternatives to Context API?**  
👉 Redux, Recoil, Zustand, Jotai, MobX.

## 

## 🟢 Performance & Best Practices

**Q1. What is React.memo?**  
👉 A higher-order component that **prevents re-rendering** if props don’t change.

**Q2. Performance optimization techniques?**  
 👉 Use React.memo, useCallback, useMemo, code splitting, lazy loading, avoiding unnecessary re-renders.

**Q3. CSR vs SSR?**  
👉 **CSR (Client-Side Rendering)**: UI built in the browser after JS loads.  
👉 **SSR (Server-Side Rendering)**: UI built on the server and sent to the browser (faster first load).

**Q4. What is code-splitting?**  
👉 Breaking app into smaller bundles, loaded only when needed. Example: `React.lazy` \+ `Suspense`.

