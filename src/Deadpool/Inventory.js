import InventoryState from './InventoryState';

function Inventory () {
    const state = InventoryState();

    function update (value, index) {
        state.set(index, value.target.value);
    }

    function remove(index) {
        state.remove(index);
    }

    return (
        <div className="inventory">
            <label className="label">Inventory</label>
            <ul>
                {state.getAll().map((item, index) => (
                    <li className="inventory-slot">
                        <input type="text" value={state.get(index)} onChange={event => update(event, index)} />
                        <button onClick={() => remove(index)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Inventory;