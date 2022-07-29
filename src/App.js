import "./App.css";
import SharedLayout from "./components/SharedLayout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import User from "./pages/User";
import Post from "./pages/Post";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/home" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/home/user/:id" element={<User />} />
            <Route path="/home/user/:id/post/:pid" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
