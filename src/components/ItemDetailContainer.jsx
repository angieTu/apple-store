import ItemDetail from "./IteamDetail";
import { useState } from "react";
import { Container } from "react-bootstrap";
import productos from "../data/data";

const getItem = new Promise((res, rej) => {
  setTimeout(() => {
    res(productos[1]);
  }, 2000);
});

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  getItem.then((res) => setDetail(res));

  return (
    <Container>
      <ItemDetail prod={detail} />
    </Container>
  );
};

export default ItemDetailContainer;
