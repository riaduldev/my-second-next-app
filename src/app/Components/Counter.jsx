'use client'
import React, { useState } from 'react';

const Counter = () => {
    console.log('counter component render');
    const [count, setCount] = useState(0)
    const handleIncrease = () => {
        console.log('Increase button clicked');
        setCount(count + 1)
    }
    return (
        <div>
            <h1 className="text-4xl font-bold">Counter: {count}</h1>
            
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" onClick={handleIncrease}>Increase!</button>
        </div>
    );
};

export default Counter;