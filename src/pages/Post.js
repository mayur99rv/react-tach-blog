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
  const post = user.posts.find((p) => p.pid === npid);
  //   console.log(pid, useParams());
  return (
    <>
      <div className="center">
        <div className="post-container">
          <h1>username: {users.find((user) => user.id === nid).name}</h1>
          <h2> Title 📜: {post.title}</h2>
          <p>Date of publish ✍ : {post.Date}</p>
          <p>Likes❤: {post.likes}</p>
          <img src={`/images/${post.image}`} alt="pos" />
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
                  <NavLink to={`/user/${nid}/post/${post.pid}`}>
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
          ;
        </div>
      </div>
    </>
  );
}

export default Post;
