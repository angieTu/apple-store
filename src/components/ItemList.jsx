import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((i) => (
        <Item item={i} key={i.id}></Item>
      ))}
    </>
  );
};

export default ItemList;
