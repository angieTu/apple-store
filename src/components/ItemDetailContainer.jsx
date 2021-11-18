import ItemDetail from "./IteamDetail";
import { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import productos from "../data/data";
import { CartContext } from "../context/CartContext";

const getItem = new Promise((res) => {
  setTimeout(() => {
    res(productos);
  }, 2000);
});

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCount, setShowCount] = useState(true);

  const { cart, setCart, isInCart, obtenerCantidad } = useContext(CartContext);

  const { itemId } = useParams();

  const onAdd = (cant) => {
    setShowCount(false);

    const agregar = detail.find((e) => e.id === parseInt(itemId));

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
  console.log(cart);
  obtenerCantidad(cart);

  useEffect(() => {
    getItem.then((res) => setDetail(res)).finally(() => setLoading(false));
  }, [itemId]);

  return (
    <Container>
      {loading ? (
        <>
          <Spinner animation="grow" /> LOADING...{" "}
        </>
      ) : (
        <ItemDetail
          prod={detail.find((d) => d.id === parseInt(itemId))}
          onAdd={onAdd}
          showCount={showCount}
        />
      )}
    </Container>
  );
};

export default ItemDetailContainer;
