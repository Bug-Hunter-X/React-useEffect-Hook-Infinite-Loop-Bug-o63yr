```javascript
//Correct usage of useEffect Hook
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count:', count); //Correct way to log
    return () => {
      // Cleanup function (optional)
    };
  }, [count]); //Corrected dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default MyComponent;
```