import { Container } from "react-bootstrap";
import { useState } from "react";
import ItemList from "./ItemList";

const productos = [
  {
    id: 0,
    title: "lorem ipsum 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 200,
    stock: 3,
  },
  {
    id: 1,
    title: "lorem ipsum 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 200,
    stock: 10,
  },
  {
    id: 2,
    title: "lorem ipsum 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 250,
    stock: 6,
  },
  {
    id: 3,
    title: "lorem ipsum 4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 300,
    stock: 1,
  },
];

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
