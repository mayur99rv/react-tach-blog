import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { users, userData } from "../data";

function Post() {
  const { id, pid } = useParams();
  //   console.log(userData);
  //   const user = users.find((user) => user.id === id);
  //   console.log(typeof id);
  //   console.log(typeof userData[0].id);
  const nid = parseInt(id);
  const npid = parseInt(pid);
  const user = userData.find((post) => post.id === nid);
  let post = user.posts.find((p) => p.pid === npid);
  //   console.log(pid, useParams());
  const resolutions = [
    "600x700",
    "960x540",
    "640x360",
    "500x500",
    "720*720",
    "600*600",
  ];
  const index = Math.floor(Math.random() * resolutions.length);
  post = {
    ...post,
    bgimg: `https://picsum.photos/${resolutions[index].substring(
      0,
      3
    )}/${resolutions[index].substring(4)}`,
  };
  useEffect(() => {
    console.log(post);
  }, [post]);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className={`${
          toggle === false ? "" : "sidebar-active"
        } comments-sidebar`}
      >
        <h4>Responses({post.comments.length})</h4>

        {post.comments.map((comment, idx) => {
          let user = users.find((user) => user.id === comment.uid);
          return (
            <div className="comment" key={idx}>
              <div className="comment-header">
                <div className="comment-author">
                  {/* <img src={comment.author?.avatar} alt="avatar" /> */}
                  <span>@{user.name}</span>
                </div>
                <div className="comment-meta">
                  <span>{comment.time}</span>
                </div>
              </div>
              <div className="comment-body">
                <p>{comment.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="comment-float">
        <button onClick={() => setToggle(!toggle)}>
          🌟: {post.comments.length}
        </button>
      </div>
      <div className="center" style={{ width: "55%" }}>
        <div className="post-container">
          <div className="bg-img">
            <span>{post.bgimg}</span>
            <img src={post.bgimg} alt="" srcset="" />
            {/* <img src="https://picsum.photos/640/640" alt="post" /> */}
          </div>
          <h2> 📜: {post.title}</h2>
          <div className="d-flex">
            <p>
              Written by{" "}
              <span> @ {users.find((user) => user.id === nid).name} </span>{" "}
            </p>
            <p> Published on ✍ : {post.Date}</p>
          </div>
          <div className="w-50">
            <img className="w-100" src={`/images/${post.image}`} alt="pos" />
          </div>
          <p>{post.body}</p>
        </div>
      </div>
      <div className="right">
        <div className="other-posts">
          <h2>Other posts by {users.find((user) => user.id === nid).name} :</h2>
          {userData
            .find((user) => user.id === nid)
            .posts.map((post) => {
              if (post.pid !== npid) {
                return (
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={`/home/user/${nid}/post/${post.pid}`}
                  >
                    {" "}
                    <div className="post-container2">
                      <h2>{post.title}</h2>
                      <p>Date publised✍: {post.Date}</p>
                      <p>likes❤: {post.likes}</p>
                      <img src={`/images/${post.image}`} alt="pos" />
                    </div>
                  </NavLink>
                );
              } else {
                return null;
              }
            })}
        </div>
      </div>
    </>
  );
}

export default Post;
