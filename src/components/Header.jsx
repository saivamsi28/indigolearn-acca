import { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { navLinks } from "../data/content";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" expanded={expanded} onToggle={setExpanded} variant="dark" className="il-navbar" sticky="top">
      <Container>
        <Navbar.Brand href="#top" className="fw-bold d-flex align-items-center gap-2">
          <span className="brand-mark">I</span> IndigoLearn
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="mx-auto text-uppercase small fw-semibold">
            {navLinks.map((link) => (
              <Nav.Link key={link} href="#top" onClick={() => setExpanded(false)}>
                {link}
              </Nav.Link>
            ))}
          </Nav>
          <Button variant="light" size="sm" className="login-btn">
            Log in/Sign Up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
