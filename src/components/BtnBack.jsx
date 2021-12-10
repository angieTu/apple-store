import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const BtnBack = () => {
  return (
    <Button className="btn-back">
      <Link to="/">Volver</Link>
    </Button>
  );
};

export default BtnBack;
