import React, { useContext, useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import "./NavBar.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.svg";

const NavBar = (props) => {
  return (
    <Navbar
      className={"navbar navbar-light navbarWithBg"}
      bg="none"
      expand="xl"
      variant="light"
    >
      <Container fluid>
        <Navbar.Brand href="/home">
          <img className="iads-logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav-items me-auto my-2 my-lg-0"
            style={{ maxHeight: "1000px" }}
            navbarScroll
          >
            <Nav.Link className="nav-item nav-item-White home" href="/home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-item nav-item-White" href="/about">
              About us
            </Nav.Link>
            <Nav.Link className="nav-item nav-item-White" href="/services">
              Services
            </Nav.Link>

            <Nav.Link className="nav-item nav-item-White" href="/contact">
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
