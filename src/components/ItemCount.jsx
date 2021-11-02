import { useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(0);
  const [buttonMsg, setButtonMsg] = useState("Agregar al carrito");

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}> + </button>
      <div>
        <button onClick={() => setButtonMsg("Agregado!")}>{buttonMsg}</button>
      </div>
    </div>
  );
};

export default ItemCount;
