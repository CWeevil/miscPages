import { useState } from 'react';

function InventoryState () {
    const [inventory, setInventory] = useState(['', '', '', '', '']);

    return {
        get: function (index) {
            return inventory[index];
        },
        remove: function (index) {
            const updated = [...inventory];
            updated[index] = '';
            setInventory(updated);
        },
        getAll: function () {
            return inventory;
        },
        set: function (index, value) {
            const updated = [...inventory];
            updated[index] = value;
            setInventory(updated);
        }
    };
};

export default InventoryState;