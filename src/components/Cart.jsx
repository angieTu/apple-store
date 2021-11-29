import { useContext, useState } from "react";
import "firebase/firestore";
import { CartContext } from "../context/CartContext";
import BtnBack from "./BtnBack";
import Table from "react-bootstrap/Table";
import ModalCart from "./ModalCart";

const Cart = () => {
  const { cart, deleteItem, total, getTotal, getQuantity, emptyCart } =
    useContext(CartContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  getTotal(cart);
  getQuantity(cart);
  return (
    <div>
      {cart.length > 0 ? (
        <div>
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
                  <td>USD{e.price * e.cantidad}</td>
                  <td>
                    <button onClick={() => deleteItem(e.id)}>X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          TOTAL USD{total}
          <button onClick={emptyCart}>VACIAR CARRITO</button>
          <button onClick={handleShow}>Confirmar compra</button>
        </div>
      ) : (
        <div>
          El carrito se encuentra vacio. <BtnBack />
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
