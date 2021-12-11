import { useState } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

import UserNav from "./UserNav";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="nav-container">
      <NavLink className="nav-brand" to="/">
        Tienda Apple
      </NavLink>
      <Nav variant="tabs">
        <Nav.Item>
          <NavLink activeClassName="is-active" to="/">
            Home
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink activeClassName="is-active" to="/category/phone">
            iPhone
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink activeClassName="is-active" to="/category/computer">
            Mac
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink activeClassName="is-active" to="/category/ipad">
            iPad
          </NavLink>
        </Nav.Item>
      </Nav>
      <NavLink to="/cart">
        <CartWidget />
      </NavLink>

      <UserNav show={show} handleClose={handleClose} handleShow={handleShow} />
    </div>
  );
};

export default NavBar;
