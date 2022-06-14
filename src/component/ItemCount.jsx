import { useState } from 'react';

const ItemCount = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
            setCount(count + 1);
    }
    const decrement = () => {
            setCount(count - 1);
    }
    return(
        <div id='itemCountWrapper'>
            <button onClick={increment} className="btn btn-danger btn-lg">+</button>
                <span>{count}</span>
            <button onClick={decrement} className="btn btn-danger btn-lg">-</button>
        </div>
    )
}
export default ItemCount;