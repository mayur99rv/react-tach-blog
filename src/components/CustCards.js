import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";

function CustomCards({ post, idx }) {
  // console.log(idx, post);

  if (post === undefined) {
    return null;
  }
  const { name, body, Date, title, likes, id } = post;
  console.log(post.image);

  return (
    <>
      <Card className="w-90 mt-10 cust-card " bg="dark" text="light">
        <Card.Header
          style={{
            backgroundColor: "inherit",
          }}
        >
          <NavLink
            style={{ color: "inherit", textDecoration: "none" }}
            to={`/home/user/${id}`}
          >
            @ {name}
          </NavLink>
          <span> 📆 {Date} </span>
        </Card.Header>
        <NavLink
          to={`/home/user/${post.id}/post/${post.pid}`}
          style={{ textDecoration: "none", color: "inherit" }}
          key={idx}
        >
          <Card.Body>
            <div className="card-body-1">
              <div className="card-body-left">
                <Card.Title> {title} </Card.Title>
                <p> {body.slice(0, 150)} </p>

                <div className="card-last">
                  <p style={{ color: "rgb(211, 72, 72)", fontWeight: "600" }}>
                    Click on card to know more
                  </p>
                  <p> 💗 {likes} hearts </p>
                </div>
              </div>
              <div className="image-right">
                {
                  /* <Image className="w-80" src="./hacker.png" rounded fluid /> */
                  <img src={`/images/${post.image}`} alt="skdnks" />
                }
              </div>
            </div>
          </Card.Body>
        </NavLink>
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
