// navbar using react-bootstrap
import React, { useState } from "react";
import "../App.css";
import {
  Navbar,
  Nav,
  Form,
  Button,
  Container,
  Toast,
  ToastContainer,
} from "react-bootstrap";

import { NavLink } from "react-router-dom";

function CustNavbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="bg-dark position-relative" style={{ minHeight: "0px" }}>
        <ToastContainer className="p-3" position="top-end">
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header closeButton={false}>
              <strong className="me-auto">Bootstrap</strong>
              <small>1 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello! Feature is still under development.</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>

      <Navbar bg="dark" className="" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand className="">
            <NavLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/"
            >
              <span className="">Tech Blogs</span>
            </NavLink>
          </Navbar.Brand>
          <Form className="d-flex w-50">
            <Form.Control
              type="search"
              placeholder="Search for tags, authors, etc."
              className="me-3 px-3 w-75"
              aria-label="Search"
            />
            <Button
              className="w-25"
              onClick={() => setShow(true)}
              variant="outline-primary"
            >
              Search
            </Button>
          </Form>
          <Nav className="cust-nav">
            <NavLink to="/home" style={{ textDecoration: "none" }}>
              Home
            </NavLink>
            <Nav.Link href="#">
              <span className="signin" onClick={() => setShow(true)}>
                Sign In
              </span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustNavbar;
