import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
        <Navbar.Brand className="ms-4" href="/">
          STOCKMARKET.
        </Navbar.Brand>
        <Navbar.Toggle className="me-4" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="ms-4" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="ms-4" href="/stock">
              Stocks
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
