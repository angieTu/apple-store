import { useState, useEffect, useContext, memo } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import productos from "../data/data";
import { CartContext } from "../context/CartContext";
import ItemDetail from "./IteamDetail";

const getItem = new Promise((res) => {
  setTimeout(() => {
    res(productos);
  }, 2000);
});

const ItemDetailContainer = memo(() => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const { cart, getQuantity } = useContext(CartContext);

  const { itemId } = useParams();

  useEffect(() => {
    getItem.then((res) => setDetail(res)).finally(() => setLoading(false));
  }, [itemId]);

  getQuantity(cart);

  return (
    <Container>
      {loading ? (
        <>
          <Spinner animation="grow" /> LOADING...
        </>
      ) : (
        <ItemDetail
          prod={detail.find((d) => d.id === parseInt(itemId))}
          id={itemId}
          item={detail}
        />
      )}
    </Container>
  );
});

export default ItemDetailContainer;
