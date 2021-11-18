import { AiOutlineShoppingCart as Icon } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cantidad } = useContext(CartContext);

  return (
    <div>
      <Icon />
      {cantidad >= 1 && <span>{cantidad}</span>}
    </div>
  );
};

export default CartWidget;
