import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="about">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand
            to="/home"
            style={{ fontSize: "30px", color: "green" }}
          >
            Ecoyaan
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="content justify-content-end"
          >
            <Nav>
              <Nav.Link>
                <Link
                  to="/"
                  style={{
                    fontSize: "20px",
                    color: "black",
                    paddingLeft: "15px",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/info"
                  style={{
                    fontSize: "20px",
                    color: "black",
                    paddingLeft: "15px",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  About US
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/home"
                  style={{
                    fontSize: "20px",
                    color: "black",
                    paddingLeft: "15px",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Sell on Ecoyaan
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/home"
                  style={{
                    fontSize: "20px",
                    color: "black",
                    paddingLeft: "15px",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Careers
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
