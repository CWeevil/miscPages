import AttributeBar from './AttributeBar';
import Inventory from './Inventory';
import Qualities from './Qualities';

function DeadpoolSheet () {
    return (
        <div className="full-sheet">
            <div className="single-line">
                <AttributeBar />
                <Inventory />
            </div>
            <Qualities />
        </div>
    );
}

export default DeadpoolSheet;