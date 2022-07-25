// navbar using react-bootstrap
import React, { useState } from "react";
import "../App.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  Container,
  Toast,
  ToastContainer,
} from "react-bootstrap";

function CustNavbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        aria-live="polite"
        aria-atomic="true"
        className="bg-dark position-relative"
        style={{ minHeight: "0px" }}
      >
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

      <Navbar bg="dark" className="py-3" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand className="" href="#">
            <span className="">Tech Blogs</span>
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
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">
              <Button onClick={() => setShow(true)}>Sign In</Button>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustNavbar;
