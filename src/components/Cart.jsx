import { useContext, useState } from "react";
import "firebase/firestore";
import { CartContext } from "../context/CartContext";
import BtnBack from "./BtnBack";
import Table from "react-bootstrap/Table";
import ModalCart from "./ModalCart";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { BsTrash } from "react-icons/bs";
import Image from "react-bootstrap/Image";

const Cart = () => {
  const { cart, deleteItem, total, getTotal, getQuantity, emptyCart } =
    useContext(CartContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  getTotal(cart);
  getQuantity(cart);

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        <>
          <Table responsive>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quant.</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((e) => (
                <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>{e.cantidad}</td>
                  <td>USD {e.price * e.cantidad}</td>
                  <td>
                    <BsTrash
                      className="trash-icon"
                      onClick={() => deleteItem(e.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="total-cart">TOTAL USD {total}</div>

          <ButtonGroup className="btn-group">
            <Button size="sm" onClick={emptyCart}>
              Vaciar carrito
            </Button>
            <Button size="sm" variant="primary" onClick={handleShow}>
              Confirmar compra
            </Button>
          </ButtonGroup>
        </>
      ) : (
        <div className="empty-cart-container">
          <Image src="https://imgur.com/nWxWs4z.png" fluid />
          <br />
          El carrito se encuentra vacío.
          <br />
          <BtnBack />
        </div>
      )}
      <ModalCart
        handleShow={handleShow}
        show={show}
        handleClose={handleClose}
        cart={cart}
        total={total}
      />
    </div>
  );
};

export default Cart;
