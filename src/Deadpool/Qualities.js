import { useState } from 'react';
import Adjuster from './Adjuster';

function Qualities () {

    const [allQualities, setQualities] = useState([]);
    const [newQualities, setNew] = useState([]);

    function increment (index) {
        const updated = [...allQualities];
        updated[index].value++;
        setQualities(updated);
    }

    function decrement (index) {
        const updated = [...allQualities];
        updated[index].value--;
        setQualities(updated);
    }

    function createQuality () {
        const updated = [...newQualities, {id: newQualities.length+1, name: '', value: 0}];
        setNew(updated);
    }

    function update(event, index) {
        const updated = [...newQualities];
        const qual = updated[index];
        qual.name = event.target.value;
        setNew(updated);
    }

    function accept(index) {
        const accepted = [...allQualities, newQualities[index]];
        const created = [...newQualities];
        created.splice(index,1);
        setNew(created);
        setQualities(accepted);
    }

    function remove(index) {
        const created = [...newQualities];
        created.splice(index,1);
        setNew(created);
    }

    return (
        <div className="qualities-bar">
            <label className="label">Qualities</label>
            {allQualities.map((qual, index) => (
                <ul>
                    <li className="quality-slot">
                        {qual.name}: {qual.value}
                        <Adjuster incrementer={() => increment(index)} decrementer={() => decrement(index)} />
                    </li>
                </ul>
            ))}
            {newQualities.map((qual, index) => (
                <ul>
                    <li className="quality-slot">
                        <input type="text" value={qual.name} onChange={event => update(event, index)} />
                        <button className="accept-button" onClick={() => accept(index)}>✔</button>
                        <button className="reject-button" onClick={() => remove(index)}>x</button>
                    </li>
                </ul>
            ))}
            <button className="add-to-list" onClick={createQuality}>+</button>
        </div>
    )
};

export default Qualities;