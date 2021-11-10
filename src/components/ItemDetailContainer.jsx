import ItemDetail from "./IteamDetail";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import productos from "../data/data";

const getItem = new Promise((res, rej) => {
  setTimeout(() => {
    res(productos);
  }, 2000);
});

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    getItem.then((res) => setDetail(res));
  }, []);

  return (
    <Container>
      <ItemDetail prod={detail[1]} />
    </Container>
  );
};

export default ItemDetailContainer;
