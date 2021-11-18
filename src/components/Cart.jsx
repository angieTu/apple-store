import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import BtnBack from "./BtnBack";

const Cart = () => {
  const { cart, deleteItem, total, obtenerTotal, obtenerCantidad } =
    useContext(CartContext);

  obtenerTotal(cart);
  obtenerCantidad(cart);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          {cart.map((e, key) => (
            <div key={e.id}>
              {e.name}
              {e.cantidad}
              USD{e.price * e.cantidad}
              <button onClick={() => deleteItem(e.id)}>X</button>
            </div>
          ))}
          TOTAL {total}
        </div>
      ) : (
        <div>
          El carrito se encuentra vacio. <BtnBack />
        </div>
      )}
    </div>
  );
};

export default Cart;
