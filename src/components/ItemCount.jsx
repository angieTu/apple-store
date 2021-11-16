import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0);

  const addItem = () => {
    if ((stock >= 1) & (count < stock)) {
      return count + 1;
    } else {
      return count;
    }
  };

  const removeItem = () => {
    return count <= 0 ? 0 : count - 1;
  };

  return (
    <div>
      <button onClick={() => setCount(removeItem)}>-</button>
      {count}
      <button onClick={() => setCount(addItem)}> + </button>
      <div>
        <button onClick={() => onAdd(count)}>Agregar</button>
      </div>
      stock {stock}
    </div>
  );
};

export default ItemCount;
