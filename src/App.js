import "./App.css";
import {
  Alert,
  ButtonGroup,
  Button,
  CloseButton,
  Pagination,
  Overlay,
  Placeholder,
  Spinner,
} from "react-bootstrap";
import { useState, useRef } from "react";
import CustNavbar from "./components/CustNavbar";
import CustAccordion from "./components/CustAccordion";
import CustomCards from "./components/CustCards";
import CustCarousel from "./components/CustCarousel";

function App() {
  const [show, setShow] = useState(false);

  const target = useRef(null);
  return (
    <>
      <CustNavbar />
      <div className="space-for-nav"></div>
      <div className="alerts">
        <Alert variant="danger" className="w-50">
          <CloseButton />
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
        </Alert>
        <Alert variant="primary" className="w-50">
          <CloseButton />
          <Alert.Heading>Hey, welcome to our blog </Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
        </Alert>
      </div>
      <div className="partition">
        <div className="left">
          <CustAccordion />
        </div>
        <div className="center">
          <div className="select-category">
            <ButtonGroup
              aria-label="Basic example"
              style={{ alignText: "center" }}
            >
              <Button
                style={{ borderRadius: "10px" }}
                className="mx-2"
                variant="outline-dark"
              >
                Popular
              </Button>
              <Button
                ref={target}
                onClick={() => setShow(!show)}
                style={{ borderRadius: "10px" }}
                variant="dark"
              >
                Recent
              </Button>
              <Button
                style={{ borderRadius: "10px" }}
                className="mx-2"
                variant="outline-dark"
              >
                Most voted
              </Button>
            </ButtonGroup>
          </div>
          <div className="carousel">
            <CustCarousel />
          </div>
          <div className="cards">
            <CustomCards />
          </div>
          <div className="pagination">
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
        </div>
        <div className="right">
          <h3
            style={{
              textAlign: "center",
              color: "black",
              marginBottom: "10px",
            }}
          >
            Top posts
          </h3>
          <div className="placeholder">
            <Placeholder as="p" animation="glow">
              <Placeholder />
              <Placeholder className="w-50" />
              <Placeholder className="w-75" />
              <Placeholder className="w-75" />
              <Placeholder className="w-90" />
            </Placeholder>
            <Spinner
              animation="border"
              role="status"
              variant="primary"
            ></Spinner>
            <h3>Content loading</h3>
            <Placeholder as="p" animation="wave">
              <Placeholder className="w-90" bg="primary" />
              <Placeholder className="w-75" bg="dark" />
              <Placeholder className="w-75" />
              <Placeholder className="w-90" />
            </Placeholder>
          </div>
        </div>
      </div>

      <Overlay target={target.current} show={show} placement="top">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              position: "absolute",
              backgroundColor: "rgba(100, 100, 100, 0.85)",
              padding: "2px 10px",
              color: "white",
              borderRadius: 3,
              ...props.style,
            }}
          >
            Selected option for posts
          </div>
        )}
      </Overlay>
    </>
  );
}

export default App;
