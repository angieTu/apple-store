import ItemDetail from "./IteamDetail";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import productos from "../data/data";

const getItem = new Promise((res, rej) => {
  setTimeout(() => {
    res(productos);
  }, 2000);
});

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

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
        <ItemDetail prod={detail.find((d) => d.id === parseInt(itemId))} />
      )}
    </Container>
  );
};

export default ItemDetailContainer;
