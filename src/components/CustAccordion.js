import { Accordion, Badge } from "react-bootstrap";

function CustAccordian() {
  return (
    <div>
      <Accordion defaultActiveKey="" flush>
        <Accordion.Item
          eventKey="0"
          style={{ backgroundColor: "teal", color: "white" }}
        >
          <Accordion.Header>
            <h4>
              <Badge bg="dark" text="light">
                Guide to Login
              </Badge>
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            username: mayur <br /> password: mayur
            <br />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          style={{ backgroundColor: "teal", color: "white" }}
          eventKey="1"
        >
          <Accordion.Header>
            <h4>
              <Badge bg="black" text="light">
                msg #2
              </Badge>
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            More Features are in development.
            <br /> Thank you for visiting our site.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default CustAccordian;
