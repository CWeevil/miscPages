import { useState } from 'react';
import Adjuster from './Adjuster.js';

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
            <Adjuster incrementer={increment} decrementer={decrement} />
        </div>
    )
}

export default Attribute;