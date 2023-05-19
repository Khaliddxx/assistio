import React, { useContext, useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import "./NavBar.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import { useTranslation } from "react-i18next";

import i18n from "i18next";

const NavBar = (props) => {
  props.setCurrentLanguage(localStorage.getItem("language") || "en");

  const { t } = useTranslation();

  const onChange = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
    props.setCurrentLanguage(e.target.value);
  };

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
            className="seperator me-auto my-2 my-lg-0"
            style={{ maxHeight: "1000px" }}
            navbarScroll
          >
            <div className="nav-items">
              <Nav.Link className="nav-item nav-item-White home" href="/home">
                {t("nav1")}
              </Nav.Link>
              <Nav.Link className="nav-item nav-item-White" href="/about">
                {t("nav2")}
              </Nav.Link>
              <Nav.Link className="nav-item nav-item-White" href="/services">
                {t("nav3")}
              </Nav.Link>

              <Nav.Link className="nav-item nav-item-White" href="/contact">
                {t("nav4")}
              </Nav.Link>
            </div>

            <div>
              <select
                onChange={onChange}
                className="language"
                value={props.currentLanguage}
              >
                <option value="en">🇺🇸 English</option>
                <option value="ar">🇸🇦 عربي</option>
              </select>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
