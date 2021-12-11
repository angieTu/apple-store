import { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";

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
          <label>
            Name
            <input type="text" name="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Password
            <input type="password" name="password" />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default SignIn;
