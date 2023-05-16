import { useState } from 'react';

function Attribute (name) {
    const [value, setValue] = useState(3);

    function increment () {
        setValue(value+1);
    }

    function decrement () {
        setValue(value-1);
    }

    return (
        <div className="record-box">
            <label className="label">{name.name}</label>
            <label className="static-value">{value}</label>
            <div className="adjuster">
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </div>
    )
}

export default Attribute;