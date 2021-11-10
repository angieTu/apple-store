import Item from "./Item";
import { CardGroup } from "react-bootstrap";

const ItemList = ({ items }) => {
  return (
    <CardGroup>
      {items.map((i) => (
        <Item item={i} key={i.id}></Item>
      ))}
    </CardGroup>
  );
};

export default ItemList;
