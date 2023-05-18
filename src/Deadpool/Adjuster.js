function Adjuster ({ incrementer, decrementer }) {
    return (
        <div className="adjuster">
            <button onClick={incrementer}>+</button>
            <button onClick={decrementer}>-</button>
        </div>
    )
};

export default Adjuster;