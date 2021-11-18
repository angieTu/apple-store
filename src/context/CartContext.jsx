import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  const onAdd = (cant, id, item) => {
    const agregar = item.find((e) => e.id === parseInt(id));
    if (isInCart(agregar.id) === false && cant > 0) {
      agregar.cantidad = cant;
      setCart([...cart, agregar]);
    } else {
      const nuevaCant = (agregar.cantidad += cant);
      const nuevoElem = {
        ...agregar,
        cantidad: nuevaCant <= agregar.stock ? nuevaCant : agregar.stock,
      };
      const nuevoCart = cart.map((e) => (e.id === agregar.id ? nuevoElem : e));
      setCart([...nuevoCart]);
    }
  };

  const isInCart = (id) => {
    const prod = cart.find((e) => e.id === parseInt(id));
    return prod === undefined ? false : true;
  };

  const deleteItem = (id) => {
    const nuevoCart = cart.filter((e) => e.id !== id);
    setCart([...nuevoCart]);
    getTotal(cart);
    getQuantity(cart);
  };

  const getQuantity = (prods) => {
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

  const getTotal = (prods) => {
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

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        isInCart,
        deleteItem,
        getQuantity,
        total,
        getTotal,
        cantidad,
        emptyCart,
        onAdd,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
