# React.memo

`React.memo` is a higher order component. It's similar to `React.PureComponent` but for function components instead of classes. If your function component renders the same result given the same props, you can wrap it in a call to `React.memo` for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

`React.memo` only checks for prop changes. If your function component wrapped in `React.memo` has a useState or useContext Hook in its implementation, it will still rerender when state or context change.

## ReactMemo.jsx

The `ReactMemo.jsx` file in the `00-react-concepts` folder demonstrates the usage of `React.memo`.

In this file, we have a function component `ExpensiveComponent` that simulates a heavy computation. This component is wrapped with `React.memo`, which means it will only re-render if its props change.

We also have a parent component `ParentComponent` that renders `ExpensiveComponent` and a button. Clicking the button updates the state of `ParentComponent`, but not the props of `ExpensiveComponent`. Therefore, despite the state change in `ParentComponent`, `ExpensiveComponent` does not re-render, demonstrating the memoization effect of `React.memo`.
