
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost"

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/profile">Profile</Link>
    </nav>
    <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile/*" element={<Profile />} />
    </Routes>
    </BrowserRouter>
  </div>
);

export default App;
