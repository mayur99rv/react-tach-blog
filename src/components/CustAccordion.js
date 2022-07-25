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
              <Badge bg="secondary" text="light">
                msg #1
              </Badge>
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            Welcome to tech blog.
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
          <Accordion.Body>Thank you for visiting our site.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default CustAccordian;
