import { Card } from "react-bootstrap";
import "../App.css";

function CustomCards({ post, idx }) {
  // console.log(idx, post);

  if (post === undefined) {
    return null;
  }
  const { name, body, Date, title } = post;

  return (
    <>
      <Card className="w-90 mt-10" bg="light" text="dark">
        <Card.Header
          style={{
            backgroundColor: "white",
          }}
        >
          Written by {name} | {Date}
        </Card.Header>
        <Card.Body>
          <div className="card-body-1">
            <div className="card-body-left">
              <Card.Title>Title: {title} </Card.Title>
              <p style={{ fontSize: "18px" }}> {body} </p>
              <footer
                style={{ fontSize: "16px" }}
                className="blockquote-footer"
              >
                Someone famous as <cite title="Source Title">{name}</cite>
                <p style={{ color: "red" }}>Click on card to know more</p>
              </footer>
            </div>
            <div className="image-right">
              {/* <Image className="w-80" src="./hacker.png" rounded fluid /> */}
              <img src={post.image} alt="skdnks" />
            </div>
          </div>
        </Card.Body>
      </Card>
      <br />
      {/* <Card onClick={handleShow} className="w-90" bg="dark" text="light">
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
      <br /> */}
    </>
  );
}

export default CustomCards;
