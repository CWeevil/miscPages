import InventoryState from './InventoryState';

function Inventory () {
    const state = InventoryState();

    function update (event, index) {
        state.set(index, event.target.value);
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
                        <button className="reject-button" onClick={() => remove(index)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Inventory;