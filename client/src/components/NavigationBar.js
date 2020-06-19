import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const categories = [
  "Legal Services",
  "Food & Beverage",
  "Marketing",
  "Consulting",
  "Information Technology",
];

export default function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      backgroundcolor="None"
    >
      <Navbar.Brand href="#home">GreenBook</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <NavDropdown title="Categories" id="collasible-nav-dropdown">
            {categories.map((category) => {
              return (
                <NavDropdown.Item key={`${category}`} href={`${category}`}>
                  {category}
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
