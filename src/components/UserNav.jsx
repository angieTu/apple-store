import { useContext } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { UserContext } from "../context/UserContext";
import Login from "./Login";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import firebase from "firebase";

const UserNav = ({ handleShow, handleClose, show }) => {
  const { user, setUser } = useContext(UserContext);

  const signoutUser = () => {
    firebase.auth().signOut();
    setUser("");
  };

  return (
    <div>
      {user ? (
        <DropdownButton id="dropdown-basic-button" title={`Hola, ${user}`}>
          <Dropdown.Item onClick={signoutUser}>LogOut</Dropdown.Item>
        </DropdownButton>
      ) : (
        <BsFillPersonFill className="icon-user" onClick={handleShow} />
      )}
      <Login show={show} handleClose={handleClose} />
    </div>
  );
};

export default UserNav;
