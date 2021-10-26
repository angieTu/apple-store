import { Container } from "react-bootstrap";

const ItemListContainer = ({ greeting }) => {
  return <Container className="greeting-container">{greeting}</Container>;
};

export default ItemListContainer;
