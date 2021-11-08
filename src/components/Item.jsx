import ItemCount from "./ItemCount";

import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

const Item = ({ item }) => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title> {item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
        {item.price}
        <ItemCount stock={item.stock} />
      </Card>
    </Container>
  );
};

export default Item;
