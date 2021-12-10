import { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { OrdenContext } from "../context/OrdenContext";
import { CartContext } from "../context/CartContext";
import BtnBack from "./BtnBack";

const ModalCart = ({ show, handleClose, cart, total }) => {
  const [showMsg, setShowMsg] = useState(true);

  const handleShowMsg = () => setShowMsg(false);

  const {
    getOrder,
    handleMailChange,
    handleNameChange,
    handlePhoneChange,
    idUsuario,
    name,
    mail,
  } = useContext(OrdenContext);

  const { emptyCart } = useContext(CartContext);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modal-cart"
      >
        {showMsg ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Ya casi es tuyo</Modal.Title>
            </Modal.Header>
            <Modal.Body className="form-modal-body">
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
            <Modal.Header>
              <Modal.Title>Gracias por tu compra 🎉</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Gracias por tu compra, {name}! <br /> Tu numero de orden es{" "}
              {idUsuario} hemos enviado la confirmación de compra a {mail}
            </Modal.Body>
            <Modal.Footer>
              <BtnBack />
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};

export default ModalCart;
