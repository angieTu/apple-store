import { Card, Container } from "react-bootstrap";
import ItemCount from "./ItemCount";

const IteamDetail = ({ prod }) => {
  return (
    <Card className="text-center">
      <Card.Header>{prod.title}</Card.Header>
      <Card.Body>
        <Card.Title>${prod.price}</Card.Title>
        <Card.Text>{prod.description}</Card.Text>
        <ItemCount stock={prod.stock} />
      </Card.Body>
      <Card.Footer className="text-muted"> {prod.stock} stock</Card.Footer>
    </Card>
  );
};

export default IteamDetail;
