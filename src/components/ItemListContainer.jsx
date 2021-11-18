import { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import productos from "../data/data";
import ItemList from "./ItemList";

const getFetch = new Promise((res) => {
  setTimeout(() => {
    res(productos);
  }, 2000);
});

const ItemListContainer = memo(() => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    getFetch.then((res) => setItems(res)).finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <>
      {loading ? (
        <>
          <Spinner animation="grow" /> LOADING...
        </>
      ) : (
        <>
          <Row xs={1} md={3} className="g-4 item-list-container">
            {categoryId ? (
              <ItemList
                items={items.filter((item) => item.category === categoryId)}
              />
            ) : (
              <ItemList items={items} />
            )}
          </Row>
        </>
      )}
    </>
  );
});

export default ItemListContainer;
