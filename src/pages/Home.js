import CustomCards from "../components/CustCards";
import { ButtonGroup, Button, Pagination } from "react-bootstrap";
import { useEffect, useState } from "react";
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
  const [posts, setPosts] = useState(allPostsWithUsers);
  const [selection, setSelection] = useState("");
  const sortByLikes = () => {
    // console.log("sort by likes");
    setSelection("Popular Posts ");
    posts.sort((a, b) => b.likes - a.likes);
    setPosts(posts);
    // console.log(posts);
  };

  const sortByDate = () => {
    setSelection("Latest Posts");
    allPostsWithUsers = posts.sort((a, b) => {
      return b.Date.localeCompare(a.Date, undefined, {
        numeric: true,
        sensitivity: "base",
      });
    });
    setPosts(allPostsWithUsers);
    // console.log(posts);
  };

  useEffect(() => {
    // sortByLikes();
    // console.log("updated");
  }, [posts, selection]);

  useEffect(() => {
    sortByDate();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="center">
        <div className="select-category">
          <ButtonGroup style={{ alignText: "center", border: "0px solid red" }}>
            <Button
              style={{ borderRadius: "10px" }}
              className="mx-2 "
              variant="dark"
              onClick={function () {
                console.log("clicked");
                return sortByLikes();
              }}
            >
              Most voted
            </Button>
            <Button
              style={{ borderRadius: "10px" }}
              variant="dark"
              className="mx-2"
              onClick={() => sortByDate()}
            >
              Recent
            </Button>
          </ButtonGroup>
        </div>

        <div className="cards">
          {
            <div>
              <h2
                style={{
                  color: "white",
                  fontSize: "1.5em",
                  marginLeft: "3rem",
                }}
              >
                {" "}
                {selection} :{" "}
              </h2>
            </div>
          }
          {posts.map((post, idx) => {
            //   console.log(idx, post);
            return (
              <NavLink
                to={`/home/user/${post.id}/post/${post.pid}`}
                style={{ textDecoration: "none" }}
                key={idx}
              >
                <CustomCards post={post} idx={idx} key={idx} />
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
      </div>
    </>
  );
}

export default Home;
