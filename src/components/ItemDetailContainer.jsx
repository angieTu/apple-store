import { useState, useEffect, useContext, memo } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { CartContext } from "../context/CartContext";
import ItemDetail from "./IteamDetail";
import { getFirestore } from "../service/getFirestore";

const ItemDetailContainer = memo(() => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const { cart, getQuantity } = useContext(CartContext);

  const { itemId } = useParams();

  useEffect(() => {
    const dbQuery = getFirestore();

    const itemCollection = dbQuery.collection("products");

    const itemDetail = itemCollection.where("id", "==", parseInt(itemId));

    itemDetail
      .get()
      .then((querySnapshot) => {
        setDetail(querySnapshot.docs.map((doc) => doc.data()));
      })
      .finally(() => setLoading(false));
  }, [itemId]);
  console.log(detail);
  getQuantity(cart);

  return (
    <Container>
      {loading ? (
        <>
          <Spinner animation="grow" /> LOADING...
        </>
      ) : (
        <ItemDetail prod={detail[0]} id={itemId} item={detail} />
      )}
    </Container>
  );
});

export default ItemDetailContainer;
