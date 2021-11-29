import { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { OrdenContext } from "../context/OrdenContext";
import { CartContext } from "../context/CartContext";

const ModalCart = ({ handleShow, show, handleClose, cart, total }) => {
  const [showMsg, setShowMsg] = useState(true);

  const handleShowMsg = () => setShowMsg(false);

  const {
    getOrder,
    handleMailChange,
    handleNameChange,
    handlePhoneChange,
    idUsuario,
  } = useContext(OrdenContext);

  const { emptyCart } = useContext(CartContext);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        {showMsg ? (
          <>
            <Modal.Body>
              <label for="name">Nombre</label>
              <input
                type="text"
                id="name"
                required
                onChange={handleNameChange}
              />
              <label for="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                required
                onChange={handlePhoneChange}
              />
              <label type="mail">E-mail</label>
              <input
                type="email"
                id="mail"
                required
                onChange={handleMailChange}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Volver
              </Button>
              <Button
                variant="primary"
                onClick={(e) => {
                  handleShowMsg();
                  getOrder(e, cart, total);
                  emptyCart();
                }}
              >
                Continuar
              </Button>
            </Modal.Footer>
          </>
        ) : (
          <>
            <Modal.Body>
              Gracias por su compra. Su numero de orden es {idUsuario}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Volver
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};

export default ModalCart;
