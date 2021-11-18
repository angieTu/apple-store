import { Card, Container } from "react-bootstrap";
import ItemCount from "./ItemCount";

const IteamDetail = ({ prod, id, item }) => {
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
            <ItemCount stock={prod.stock} id={id} item={item} />
          </Card.Body>
          <Card.Footer className="text-muted">{prod.stock} stock</Card.Footer>
        </Card>
      )}
    </>
  );
};

export default IteamDetail;
