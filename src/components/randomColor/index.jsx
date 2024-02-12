
import { useState, useEffect } from 'react';
import "./styles.css";

export default function RandomColor() {

    const [color, setColor] = useState('');

    const handleGeneration = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);
    }

    useEffect(() => {
        document.body.style.backgroundColor = `#${color}`;
    }, [color])
    

    return (
        <div className="container">
            <button onClick={handleGeneration}>
                Generate Random Color
            </button>
            <h2>HEX Color</h2>
            <h1>{`#${color}`}</h1>
        </div>
    )
}