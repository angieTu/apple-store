import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import BtnBack from "./BtnBack";
import ItemCount from "./ItemCount";

const IteamDetail = ({ prod }) => {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(true);

  const onAdd = (cant) => {
    setCount(cant);
    setShowCount(false);
  };

  return (
    <>
      {prod && (
        <Card className="text-center card-detail">
          <Card.Header>{prod.name}</Card.Header>
          <Container>
            <Card.Img src={prod.img} />
          </Container>
          <Card.Body>
            <Card.Title>${prod.price}</Card.Title>
            <Card.Text>{prod.description}</Card.Text>
            {prod.inch}" - {prod.capacity}GB Storage
            {showCount ? (
              <ItemCount stock={prod.stock} onAdd={onAdd} />
            ) : (
              <>
                <BtnBack /> <Link to="/cart">Finalizar compra</Link>
              </>
            )}
          </Card.Body>
          <Card.Footer className="text-muted">{prod.stock} stock</Card.Footer>
        </Card>
      )}
    </>
  );
};

export default IteamDetail;
