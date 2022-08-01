import CustCards from "../components/CustCards";
import { userData, users } from "../data";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  const nid = parseInt(id);
  const user = users.find((user) => user.id === nid);
  const userPosts = userData
    .find((user) => user.id === nid)
    .posts.map((post) => {
      return { ...post, id: user.id, name: user.name };
    });

  return (
    <>
      <div className="center">
        <div className="profile">
          <div className="profile-image">
            <img src={`/images/${user?.profile}`} alt={user.name} />
          </div>
          <div className="profile-name">
            <h1>{user.name}</h1>
          </div>
          <div className="profile-posts">
            <h2>User posts :</h2>
            {userPosts.map((post, idx) => {
              //   console.log(idx, post);
              return <CustCards post={post} idx={idx} key={idx} />;
            })}
          </div>
        </div>
      </div>

      <div className="right"></div>
    </>
  );
}

export default User;
