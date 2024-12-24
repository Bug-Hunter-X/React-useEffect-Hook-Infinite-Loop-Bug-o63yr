# React useEffect Hook Infinite Loop Bug
This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug arises from an incorrect dependency array, leading to an infinite rendering loop.

## Bug Description
The `useEffect` hook is used to perform side effects after rendering.  If the dependency array is missing or incorrect, React may re-render the component endlessly, resulting in a performance issue.

## How to reproduce
1. Clone this repository
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the development server
4. Observe the error in the console and the browser.