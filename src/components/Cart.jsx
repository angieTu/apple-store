import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import BtnBack from "./BtnBack";
import Table from "react-bootstrap/Table";

const Cart = () => {
  const { cart, deleteItem, total, getTotal, getQuantity, emptyCart } =
    useContext(CartContext);

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
        </div>
      ) : (
        <div>
          El carrito se encuentra vacio. <BtnBack />
        </div>
      )}
    </div>
  );
};

export default Cart;
