import { Routes, Route} from "react-router-dom";

import "./App.css";

import Landing from "./pages/Main/Landing";
import Events from "./pages/Events/Events";
import Clubs from "./pages/Clubs/Clubs";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contactus/Contact";
import Coreteam from "./pages/Coreteam/Coreteam";
import Gallary from "./pages/Imagegallary/Gallary";
import Blogs from "./pages/Blogs/Blogs";
import Webteam from "./pages/Webteam/Webteam";
import Layout from "./pages/layout";

function App() {
  return (
    <Routes>
      <Route index path="" element={<Landing />} />
      <Route path="/" element={<Layout />}>
        <Route index path="home" element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="clubs" element={<Clubs />} />
        <Route path="contactus" element={<Contact />} />
        <Route path="core" element={<Coreteam />} />
        <Route path="gallary" element={<Gallary />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="webteam" element={<Webteam />} />
      </Route>
    </Routes>
  );
}

export default App;
