import Attribute from './Attribute';

function AttributeBar () {
    const attributes = ['Merc', 'Mouth', 'Focus'];

    return (
        <div className="stat-bar">
            {attributes.map(att => (
                <Attribute name={att} />
            ))}
        </div>
    )
}

export default AttributeBar;