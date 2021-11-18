import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    const prod = cart.find((e) => e.id === parseInt(id));
    return prod === undefined ? false : true;
  };

  return (
    <CartContext.Provider value={{ cart, setCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
