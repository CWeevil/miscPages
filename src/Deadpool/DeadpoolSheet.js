import AttributeBar from './AttributeBar';
import Inventory from './Inventory';

function DeadpoolSheet () {
    return (
        <div className="full-sheet">
            <AttributeBar />
            <Inventory />
        </div>
    );
}

export default DeadpoolSheet;