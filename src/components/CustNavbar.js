// navbar using react-bootstrap
import React, { useEffect, useState } from "react";
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
import { useContext } from "react";
import { LoginContext } from "../LoginContext";
import { users } from "../data";

function CustNavbar() {
  const { user, setUser } = useContext(LoginContext);
  console.log(user);
  const [id, setId] = useState(null);

  useEffect(() => {
    if (user) {
      const userId = users.find((u) => u.name === user.username).id;
      setId(userId);
    }
  }, [user]);

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
            {user ? (
              <>
                <NavLink
                  className=""
                  to={`/home/user/${id}`}
                  style={{
                    borderRadius: "50%",
                    width: "60px",
                    backgroundColor: "inherit",
                  }}
                >
                  <img
                    style={{
                      width: "20px",
                      height: "20px",
                      transform: "translateY(-3px) translateX(5px) scale(2.2)",
                    }}
                    src="./hacker.png"
                    alt=""
                    srcset=""
                  />
                </NavLink>
                <Nav.Link className="signout" href="#">
                  <span onClick={() => setUser(null)}>Sign Out</span>
                </Nav.Link>
              </>
            ) : (
              <NavLink to="/home/login" style={{ textDecoration: "none" }}>
                <span className="signin">Sign In</span>
              </NavLink>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustNavbar;
