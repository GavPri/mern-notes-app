import React from "react";
// ---- React bootstrap imports
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// ---- Icons import
import { CiSun } from "react-icons/ci";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-background border-b-2 border-border flex justify-between items-center"
    >
      <Container fluid>
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
              <NavDropdown.Item href="#action3">
                <CiSun size={40} />
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
