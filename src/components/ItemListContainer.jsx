import { Container } from "react-bootstrap";
import { useState } from "react";
import ItemList from "./ItemList";

import productos from "../data/data";

const getFetch = new Promise((res, rej) => {
  setTimeout(() => {
    res(productos);
  }, 2000);
});

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  getFetch.then((res) => setItems(res));

  return (
    <Container className="greeting-container">
      <ItemList items={items} />
    </Container>
  );
};

export default ItemListContainer;
