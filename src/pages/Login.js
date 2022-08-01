import { useState, useContext } from "react";
import { LoginContext } from "../LoginContext";
import { Navigate } from "react-router-dom";

function Login() {
  const { user, setUser } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (username === "mayur" && password === "mayur") {
      setUser({
        username,
        isAuthenticated: true,
      });
    } else {
      setError("Invalid username or password");
    }
    setLoading(false);
  };

  return (
    <>
      {user ? (
        <Navigate to="/home" replace />
      ) : (
        <>
          <div className="center">
            <div className="login">
              <h1>Login</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />{" "}
                <br />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />{" "}
                <br />
                <button type="submit">Login</button>
                {loading && <p>Loading...</p>}
                {error && <p className="error">{error}</p>}
              </form>
            </div>
          </div>
          <div className="right"> </div>
        </>
      )}
    </>
  );
}

export default Login;
