import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom";

import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Container className="nav-container">
      <NavLink className="nav-brand" to="/">
        Tienda Apple
      </NavLink>
      <Nav variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/">Home</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/category/phone">iPhone</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/category/computer">Mac</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/category/ipad">iPad</NavLink>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <NavLink to="/cart">
        <CartWidget />
      </NavLink>
    </Container>
  );
};

export default NavBar;
