```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct way to log state changes - conditional logging
    if(count === 0) {
        console.log("Count initialized to:", count);
    }
  }, [count]); // Correct dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```