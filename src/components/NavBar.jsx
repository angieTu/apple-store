import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
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
    </div>
  );
};

export default NavBar;
