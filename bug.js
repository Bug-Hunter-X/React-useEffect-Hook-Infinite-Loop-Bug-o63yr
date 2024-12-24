```javascript
//Incorrect usage of useEffect Hook
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Incorrect way to log the count
    console.log('Count:', count);
    return () => {
      // Cleanup function (optional)
    };
  }, count); //Missing dependency

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default MyComponent;
```