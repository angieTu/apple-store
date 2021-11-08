import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((i) => (
        <Item item={i} key={i.id}></Item>
      ))}
    </div>
  );
};

export default ItemList;
