import ItemCount from "./ItemCount";

import { Card, Col, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Col className="item-card">
      <Card>
        <Container>
          <Card.Img variant="top" src={item.img} />
        </Container>
        <Card.Body>
          <Card.Title> {item.name}</Card.Title>

          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          USD {item.price}
          <ItemCount stock={item.stock} />
          <Link to={`/item/${item.id}`}>Ver más</Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Item;
