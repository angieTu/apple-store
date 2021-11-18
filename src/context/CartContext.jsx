import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  const isInCart = (id) => {
    const prod = cart.find((e) => e.id === parseInt(id));
    return prod === undefined ? false : true;
  };

  const deleteItem = (id) => {
    const nuevoCart = cart.filter((e) => e.id !== id);
    setCart([...nuevoCart]);
    obtenerTotal(cart);
    obtenerCantidad(cart);
  };

  const obtenerCantidad = (prods) => {
    if (prods.length > 0) {
      const cant = (c) => c.cantidad;
      const arrayCant = prods.map(cant);
      const sumaTotal = (sumaParcial, numero) => sumaParcial + numero;
      const resultado = arrayCant.reduce(sumaTotal);
      setCantidad(resultado);
    } else {
      setCantidad(0);
    }
  };

  const obtenerTotal = (prods) => {
    if (prods.length > 0) {
      const costos = (c) => c.cantidad * c.price;
      const arrayPrices = prods.map(costos);
      const sumaTotal = (sumaParcial, numero) => sumaParcial + numero;
      const resultado = arrayPrices.reduce(sumaTotal);
      setTotal(resultado);
    } else {
      setTotal(0);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        isInCart,
        deleteItem,
        obtenerTotal,
        total,
        obtenerCantidad,
        cantidad,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
