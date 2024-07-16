import React from "react";
// ---- React bootstrap imports
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-cta">
      <Container fluid className="flex justify-between items-center">
        <Navbar.Brand href="#" className="text-copyPrimary">
          Notes App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#action1"
              className="text-copyPrimary hover:text-copySecondary"
            >
              Home
            </Nav.Link>
            <NavDropdown
              title="Theme"
              id="navbarScrollingDropdown"
              className="text-copyPrimary"
            >
              <NavDropdown.Item
                href="#action3"
                className="text-copyPrimary hover:text-copySecondary"
              >
                Action
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action4"
                className="text-copyPrimary hover:text-copySecondary"
              >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action5"
                className="text-copyPrimary hover:text-copySecondary"
              >
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
