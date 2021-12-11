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
            <label>
              Email
              <input type="email" name="email" />
            </label>
            <label>
              Password
              <input type="password" name="password" />
            </label>
            <button type="submit" onClick={handleClose}>
              Sign In
            </button>
          </form>
          <p>
            If you´re not registered, do it{" "}
            <Link to="/signup" onClick={handleClose}>
              {" "}
              here
            </Link>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
