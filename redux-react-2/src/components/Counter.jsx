import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        if (count < 0) {
            return;
        } else {
            setCount(count + 1);
        }
    };
    const handleDecrement = () => {
        if (count === 0) {
            return;
        } else {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;
