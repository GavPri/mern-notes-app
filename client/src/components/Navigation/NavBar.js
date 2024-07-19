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
// Router imports
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <Link
        to="/"
        className="text-copyPrimary hover:text-copySecondary lg:mx-2 w-screen py-2 px-2 tracking-wider"
      >
        Home
      </Link>
      <Link
        to="signup"
        className="text-copyPrimary hover:text-copySecondary lg:mx-2 w-screen py-2 px-2 tracking-wider"
      >
        Sign Up
      </Link>
      <Link
        to="signin"
        className="text-copyPrimary hover:text-copySecondary lg:mx-2 w-screen py-2 px-2 tracking-wider"
      >
        Sign In
      </Link>
    </>
  );
};
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
            className="me-auto my-2 my-lg-0 flex justify-between items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLinks />
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
