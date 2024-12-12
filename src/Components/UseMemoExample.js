import React, { useState, useMemo } from 'react';

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // Expensive calculation function
  const expensiveCalculation = (num) => {
    console.log('Running expensive calculation...');
    for (let i = 0; i < 1000000000; i++) {} // Simulating heavy computation
    return num * 2;
  };

  // Memoized value
   const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);
  //const memoizedValue =  expensiveCalculation(count)
  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Expensive Calculation Result: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <input 
        type="text" 
        placeholder="Type something" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <p>Input: {input}</p>
    </div>
  );
};

export default UseMemoExample;
