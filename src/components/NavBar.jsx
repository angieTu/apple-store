import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Container className="nav-container">
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Productos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Contacto</Nav.Link>
        </Nav.Item>
      </Nav>{" "}
      <CartWidget />
    </Container>
  );
};

export default NavBar;
