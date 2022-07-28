import CustomCards from "../components/CustCards";
import { ButtonGroup, Button, Pagination, Overlay } from "react-bootstrap";
import { Placeholder, Spinner } from "react-bootstrap";
import { useState, useRef } from "react";
import { users, userData } from "../data";
import { NavLink } from "react-router-dom";

function Home() {
  const allPosts = userData
    .map((user) =>
      user.posts.map((post) => {
        const id = user.id;
        return { ...post, id };
      })
    )
    .flat();
  //   console.log(allPosts);
  let allPostsWithUsers = allPosts.map((post) => {
    //eslint-disable-next-line
    const user = users.find((user) => user.id == post.id);
    return { ...post, name: user.name };
  });
  //   console.log(allPostsWithUsers);
  allPostsWithUsers = allPostsWithUsers.sort((a, b) => {
    return b.Date.localeCompare(a.Date, undefined, {
      numeric: true,
      sensitivity: "base",
    });
  });
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <>
      <div className="center">
        <div className="select-category">
          <ButtonGroup style={{ alignText: "center" }}>
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

        <div className="cards">
          {allPostsWithUsers.map((post, idx) => {
            //   console.log(idx, post);
            return (
              <NavLink
                to={`/user/${post.id}/post/${post.pid}`}
                style={{ textDecoration: "none" }}
              >
                <CustomCards post={post} idx={idx} key={idx} />{" "}
              </NavLink>
            );
          })}
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
          <Spinner animation="border" role="status" variant="primary"></Spinner>
          <h3>Content loading</h3>
          <Placeholder as="p" animation="wave">
            <Placeholder className="w-90" bg="primary" />
            <Placeholder className="w-75" bg="dark" />
            <Placeholder className="w-75" />
            <Placeholder className="w-90" />
          </Placeholder>
        </div>
      </div>
    </>
  );
}

export default Home;
