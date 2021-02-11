import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navi.css";

export default function NavBarComp() {
  return (
    <Navbar sticky="top" className="navibar">
      <Nav>
        <Link to="/" className="navlink">
          Home
        </Link>
      </Nav>
      <Nav>
        <Link to="/Test" className="navlink">
          Test
        </Link>
      </Nav>
    </Navbar>
  );
}
