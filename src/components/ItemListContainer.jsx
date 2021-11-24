import { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import ItemList from "./ItemList";
import { getFirestore } from "../service/getFirestore";

const ItemListContainer = memo(() => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const dbQuery = getFirestore();

    const itemCollection = dbQuery.collection("products");

    {
      categoryId !== undefined
        ? itemCollection
            .where("category", "==", categoryId)
            .get()
            .then((querySnapshot) => {
              setItems(
                querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
              );
            })
            .finally(() => setLoading(false))
        : itemCollection
            .get()
            .then((querySnapshot) => {
              setItems(
                querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
              );
            })
            .finally(() => setLoading(false));
    }
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
            <ItemList items={items} />
          </Row>
        </>
      )}
    </>
  );
});

export default ItemListContainer;
