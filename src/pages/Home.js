import CustomCards from "../components/CustCards";
import { ButtonGroup, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { users, userData } from "../data";

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
              style={{ borderRadius: "10px", padding: "10px" }}
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
              style={{ borderRadius: "10px", padding: "10px" }}
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
            return <CustomCards post={post} idx={idx} key={idx} />;
          })}
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
