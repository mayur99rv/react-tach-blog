import { Card, Image, Modal, Button } from "react-bootstrap";
import { useState } from "react";
import "../App.css";

function CustomCards() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            earum. Modi debitis porro nihil iure fugit facere magnam, nostrum
            impedit dolores adipisci autem perferendis doloremque perspiciatis
            dolor unde placeat? Magnam!
          </p>
          <div className="modal-img">
            <img src="./4.jpg" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa est
            expedita laboriosam rem maiores in voluptatibus eaque iure atque
            voluptas, aliquid optio eligendi sit ipsam saepe blanditiis ut sint
            maxime. Aliquam repellendus eaque voluptate libero accusantium
            doloribus odio voluptates tenetur?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Card onClick={handleShow} className="w-90 mt-10" bg="light" text="dark">
        <Card.Header
          style={{
            backgroundColor: "white",
          }}
        >
          Written by Mayur | 21th July{" "}
        </Card.Header>
        <Card.Body>
          <div className="card-body-1">
            <div>
              <Card.Title>Special title treatment</Card.Title>
              <p style={{ fontSize: "18px" }}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.{" "}
              </p>
              <footer
                style={{ fontSize: "16px" }}
                className="blockquote-footer"
              >
                Someone famous in <cite title="Source Title">Source Title</cite>
                <p style={{ color: "red" }}>Click on card to know more</p>
              </footer>
            </div>
            <div className="image-right">
              <Image className="w-80" src="./hacker.png" rounded fluid />
            </div>
          </div>
        </Card.Body>
      </Card>
      <br />
      <Card onClick={handleShow} className="w-90" bg="dark" text="light">
        <Card.Header
          style={{
            backgroundColor: "black",
          }}
        >
          Written by Raj | 22nd June{" "}
        </Card.Header>
        <Card.Body>
          <div className="card-body-1">
            <div>
              <Card.Title>Special title treatment</Card.Title>
              <p style={{ fontSize: "18px" }}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.{" "}
              </p>
              <footer
                style={{ fontSize: "16px" }}
                className="blockquote-footer"
              >
                Someone famous in <cite title="Source Title">Source Title</cite>
                <p style={{ color: "lightblue" }}>Click on card to know more</p>
              </footer>
            </div>
            <div className="image-right">
              <Image className="w-80" src="./hacker.png" rounded fluid />
            </div>
          </div>
        </Card.Body>
      </Card>
      <br />
      <Card onClick={handleShow} className="w-90" bg="light" text="dark">
        <Card.Header
          style={{
            backgroundColor: "white",
          }}
        >
          Written by kashish | 19th May{" "}
        </Card.Header>
        <Card.Body>
          <div className="card-body-1">
            <div>
              <Card.Title>Special title treatment</Card.Title>
              <p style={{ fontSize: "18px" }}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.{" "}
              </p>
              <footer
                style={{ fontSize: "16px" }}
                className="blockquote-footer"
              >
                Someone famous in <cite title="Source Title">Source Title</cite>
                <p style={{ color: "red" }}>Click on card to know more</p>
              </footer>
            </div>
            <div className="image-right">
              <Image className="w-80" src="./hacker.png" rounded fluid />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CustomCards;
