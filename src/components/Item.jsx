import ItemCount from "./ItemCount";

import { Card } from "react-bootstrap";

const Item = ({ item }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title> {item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
      {item.price}
      <ItemCount stock={item.stock} />
    </Card>
  );
};

export default Item;
