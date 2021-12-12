import { useState, useContext } from "react";

import { Link } from "react-router-dom";
import firebase from "firebase";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { UserContext } from "../context/UserContext";

const Login = ({ show, handleClose }) => {
  const [error, setError] = useState(false);

  const { setUser } = useContext(UserContext);

  const handleLogin = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(
        event.target.email.value,
        event.target.password.value
      )
      .then(setUser(event.target.email.value))
      .catch((error) => setError(error.message));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            {error && <p id="error-message">{error}</p>}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleLogin}>
            <label>Email</label> <input type="email" name="email" />
            <label>Password</label> <input type="password" name="password" />
            <br />
            {error ? (
              <Button type="submit">Sign In</Button>
            ) : (
              <Button type="submit" onClick={handleClose}>
                Sign In
              </Button>
            )}
          </form>
          <p>
            Si no estás registrado, hazlo{" "}
            <Link to="/signup" onClick={handleClose}>
              aquí
            </Link>
            .
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
