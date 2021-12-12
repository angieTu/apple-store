import { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Button from "react-bootstrap/Button";

import firebase from "firebase";

const SignIn = () => {
  const [error, setError] = useState(false);

  const { setUser, user } = useContext(UserContext);

  const handleSignIn = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        event.target.email.value,
        event.target.password.value
      )
      .then(() => setUser(event.target.email.value))
      .catch((error) => setError(error.message));
  };

  return !user ? (
    <>
      <div className="signup-container">
        {error && <p>{error}</p>}

        <form onSubmit={handleSignIn}>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label> <input type="email" name="email" />
          <label>Password</label>
          <input type="password" name="password" />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default SignIn;
