import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginContext } from "./LoginContext";
import { LoginProvider } from "./LoginContext";
import SharedLayout from "./components/SharedLayout";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import User from "./pages/User";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { useContext } from "react";
function App() {
  const { user } = useContext(LoginContext);
  return (
    <>
      <LoginProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/home" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="/home/user/:id" element={<User />} />
              <Route path="/home/user/:id/post/:pid" element={<Post />} />
              <Route
                path="/home/login"
                element={
                  user ? <Navigate to="/home" replace={true} /> : <Login />
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </>
  );
}

export default App;
